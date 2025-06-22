<template>
  <div class="container mt-4">
    <!-- <h1>Magic Item Merchant</h1> -->
    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#rollModal">Find Magic Items</button>
    <button class="btn btn-secondary ms-2" @click="printPage">Print Items</button>


    <!-- Modal for Rolling and Searching Items -->
    <div class="modal fade" id="rollModal" tabindex="-1" aria-labelledby="rollModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="rollModalLabel">Find Magic Items</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <!-- Toggle Black Market Mode -->
          <button class="btn btn-dark mt-2" @click="toggleBlackMarketMode">
            {{ blackMarketMode ? "Exit Black Market" : "Access Black Market" }}
          </button>
          <div class="modal-body">
            <!-- Table Roll (d20) -->
            <div class="mb-3">
              <label>Table Roll (d20):</label>
              <div class="input-group">
                <input v-model.number="tableRoll" type="number" class="form-control" placeholder="Roll result" />
                <button class="btn btn-secondary" @click="rollTable">Roll</button>
              </div>
            </div>

            <!-- Modifier Input -->
            <div class="mb-3">
              <label>Modifier (Gold Spent, Downtime, Charisma):</label>
              <div class="input-group">
                <input v-model.number="modifier" type="number" class="form-control" placeholder="Enter modifier" />
                <span class="input-group-text">Total: {{ totalRoll }}</span>
              </div>
            </div>

            <!-- Item Count Roll (d4) -->
            <div class="mb-3">
              <label>Item Count Roll (d4):</label>
              <div class="input-group">
                <input v-model.number="itemCountRoll" type="number" class="form-control" placeholder="Roll result"
                  @input="updatePercentileInputs" />
                <button class="btn btn-secondary" @click="rollItemCount">Roll</button>
              </div>
            </div>

            <!-- Percentile Rolls (1-100) -->
            <div v-if="percentileRolls.length" class="mb-3">
              <label>Percentile Rolls (d100):</label>
              <div v-for="(roll, index) in percentileRolls" :key="index" class="input-group mb-2">
                <input v-model.number="percentileRolls[index]" type="number" class="form-control"
                  placeholder="Roll percentile (1-100)" min="1" max="100" />
                <button class="btn btn-secondary" @click="rollPercentile(index)">Roll</button>
              </div>
            </div>

            <!-- Cost Inputs (Generated based on rarity) -->
            <div v-if="foundItems.length" class="mb-3">
              <label>Item Prices:</label>
              <div v-for="(item, index) in foundItems" :key="index" class="mb-3">
                <strong>{{ item.name }}</strong> <!-- Show item name above input -->
                <div class="input-group">
                  <span class="input-group-text">Price: {{ item.price }} gp</span>
                  <input v-model.number="item.rolledValue" type="number" class="form-control" placeholder="Roll result"
                    @input="updatePrice(index)" />
                  <button class="btn btn-secondary" @click="rollPriceForItem(index)">Roll</button>
                </div>
                <p class="price-formula"><em>Price Formula: {{ getPriceFormula(item.rarity) }}</em></p>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <!-- NOTE search item may be redundant -->
            <!-- <button class="btn btn-success" @click="searchItems" data-bs-dismiss="modal">Search Items</button> -->
            <button class="btn btn-success" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Display Results in Cards -->
    <div v-if="foundItems.length" class="mt-4">
      <h3 class="print-hidden">Available Items</h3>
      <div class="row">
        <div v-for="item in foundItems" :key="item.name" class="col-md-6 mb-4">
          <div class="card p-3 shadow-sm item-card">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="card-title" :style="getHeaderSize(item)">{{ item.name }}</h5>
              <p v-if="item.price" class="card-price" :style="getSubTextSize(item)"><strong>{{ item.price }} gp</strong>
              </p>
            </div>
            <div class="item-details" :class="{ 'inline-details': item.description.length > 800 }">
              <p :style="getSubTextSize(item)" class="small-text"><strong>Rarity:</strong> {{ item.rarity }}</p>
              <p :style="getSubTextSize(item)" class="small-text"><strong>Type:</strong> {{ item.type }}</p>
              <p :style="getSubTextSize(item)" class="small-text"><strong>Weight:</strong> {{ item.weight }} lbs</p>
              <p v-if="item.attunement" :style="getSubTextSize(item)" class="small-text"><strong>Requires
                  Attunement</strong></p>
            </div>
            <hr class="compact-hr">
            <p class="formatted-text" :style="getTextSize(item.description)"
              v-html="item.description.replace(/\n/g, '<br>')"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import { AppState } from '../AppState';
import MagicItemService from '../services/MagicItemService';
import { printService } from '@/services/PrintService.js';


export default {
  setup() {
    console.log("Loaded tables in AppState:", AppState.magicItems);

    const tableRoll = ref(null);
    const modifier = ref(0);
    const itemCountRoll = ref(null);
    const percentileRolls = ref([]);
    const foundItems = ref([]);
    const blackMarketMode = ref(false);

    // Watch for foundItems updates and attach price properties
    watch(foundItems, (newItems) => {
      newItems.forEach((item) => {
        if (!item.price) {
          item.price = "(Roll)"; // Default text
        }
      });
    }, { deep: true });

    // Finds which magic item to select based on the input percentile value
    watch(percentileRolls, (newRolls) => {
      if (newRolls.length) {
        foundItems.value = MagicItemService.findMagicItems(totalRoll.value, newRolls);
        // Initialize prices as soon as items are found
        foundItems.value.forEach((item) => {
          item.price = ""; // Keep it empty until the player rolls
        });
      }
    }, { deep: true });

    // Updates modal input fields when values change
    watch([tableRoll, modifier], () => {
      itemCountRoll.value = null;  // Reset item count
      percentileRolls.value = [];  // Clear percentile rolls
      foundItems.value = [];       // Clear found items
      // Recalculate totalRoll inside the watcher to avoid referencing it too soon
      const newTotalRoll = MagicItemService.calculateTotalRoll(tableRoll.value, modifier.value);
    }, { flush: 'post' });  // Ensure it runs after Vue initializes

    // Combines the dice roll value, modifiers, &/or black market mode to calculate the total roll value which is used to determine which magic items table is available 
    const totalRoll = computed(() => {
      let roll = MagicItemService.calculateTotalRoll(tableRoll.value, modifier.value);
      return blackMarketMode.value ? roll + 1000 : roll;
    });

    // Rolls to determine which magic items table is available
    function rollTable() {
      tableRoll.value = MagicItemService.rollDie(20);
    }

    // Rolls to determine how many magic items are available
    function rollItemCount() {
      itemCountRoll.value = MagicItemService.rollDie(4);
      updatePercentileInputs();
    }

    // Rolls to determine which magic items from the table are chosen
    function rollPercentile(index) {
      percentileRolls.value[index] = MagicItemService.rollDie(100);
    }

    // Adjusts available percentile input fields based on the results of the items count (d4 roll)
    function updatePercentileInputs() {
      percentileRolls.value = MagicItemService.initializePercentileRolls(itemCountRoll.value);
    }

    // TODO No longer being used, can be removed
    function searchItems() {
      foundItems.value = MagicItemService.findMagicItems(totalRoll.value, percentileRolls.value);
    }

    // These 3 functions re-size text when it gets to long
    function getTextSize(description) {
      return description.length > 800 ? { fontSize: '1rem' } : { fontSize: '1.8rem' };
    }
    function getHeaderSize(item) {
      return { fontSize: item.description.length > 800 ? '1.8rem' : '2.3rem' };
    }
    function getSubTextSize(item) {
      return { fontSize: '1.3rem' };
    }

    // Is only to display the pricing formula
    function getPriceFormula(rarity) {
      return MagicItemService.getPriceFormula(rarity)
    }

    // Rolls the dice to determine the price of an item
    function rollPriceForItem(index) {
      console.log("calling rollPriceForItem");
      const item = foundItems.value[index];
      if (item) {
        const { sides, times } = MagicItemService.getDieForRarity(item.rarity);
        item.rolledValue = MagicItemService.rollDie(sides, times);
        updatePrice(index);
      }
    }

    // Updates the price whenever the item prices input field is changed & when the roll button is clicked
    // TODO Should be moved to the MagicItemService
    function updatePrice(index) {
      console.log("calling updatePrice")
      const item = foundItems.value[index];
      if (item && item.rolledValue) {
        item.price = calculatePriceFromRoll(item.rarity, item.rolledValue);
      }
    }

    // Determines which dice to roll & how many
    function getDieForRarity(rarity) {
      console.log("calling getDieForRarity")
      return MagicItemService.getDieForRarity(rarity)
    }

    // TODO Re-name "calculatePrice", since it is calculating the price from webpage rolls & user input of physical dice values
    function calculatePriceFromRoll(rarity, roll) {
      console.log("calling calculatePriceFromRoll")
      return MagicItemService.calculatePriceFromRoll(rarity, roll)
    }

    // Toggles the black market, which adds 1000 to the roll to chose homebrew item tables instead of official items
    function toggleBlackMarketMode() {
      blackMarketMode.value = !blackMarketMode.value;
    }

    // Utilizes html2canvas to make a screenshot PDF of the webpage. 
    function printPage() {
      console.log("print page is being called")
      printService.printPage()
    }

    return {
      tableRoll,
      modifier,
      itemCountRoll,
      percentileRolls,
      totalRoll,
      foundItems,
      rollTable,
      rollItemCount,
      rollPercentile,
      updatePercentileInputs,
      searchItems,
      getTextSize,
      getHeaderSize,
      getSubTextSize,
      AppState,
      getPriceFormula,
      rollPriceForItem,
      updatePrice,
      getDieForRarity,
      calculatePriceFromRoll,
      blackMarketMode,
      toggleBlackMarketMode,
      printPage,
    };
  }
};
</script>

<style scoped>
/* NOTE this changes the stylization for CTRL+P printing */
@media print {
  body {
    margin: 0 !important;
    padding: 0 !important;
  }

  /* Shift everything up to remove navbar space */
  .container {
    position: fixed !important;
    top: -45px !important;
    left: 0 !important;
    width: 100% !important;
    text-align: center !important;
  }

  /* Hide unnecessary UI elements */
  .btn,
  .modal,
  h1,
  .print-hidden {
    display: none !important;
  }

  /* Keep two-column layout and ensure text doesn't cut off */
  .row {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    /* Two per row */
    gap: 5px !important;
    justify-content: center !important;
    align-items: start !important;
  }

  /* Ensure cards fit content dynamically */
  .print-card {
    page-break-inside: avoid !important;
    width: 49.5% !important;
    /* Maximize width */
    max-width: 49.5% !important;
    min-height: 6in !important;
    /* Allow room for long descriptions */
    padding: 0.3rem !important;
    font-size: 0.75rem !important;
    text-align: left !important;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  /* Reduce space to fit more text */
  .print-card * {
    max-height: 100% !important;
    margin-bottom: 1px !important;
  }

  /* Reduce text size on long descriptions */
  .formatted-text {
    font-size: 0.7rem !important;
    line-height: 1.2 !important;
    /* Reduce line spacing */
  }

  /* Force smaller text for very long descriptions */
  .print-card[data-length="long"] .formatted-text {
    font-size: 0.65rem !important;
    line-height: 1.1 !important;
  }

  /* Force even smaller text for extremely long descriptions */
  .print-card[data-length="extra-long"] .formatted-text {
    font-size: 0.6rem !important;
    line-height: 1 !important;
  }
}

/* end of media */
/*  */

.formatted-text {
  font-size: 1.4rem;
  line-height: 1.2;
  word-wrap: break-word;
  /* Ensures text doesn't overflow */
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  height: 15in;
  padding: 1.5rem;
}

.item-card {
  height: 7.5in;
  overflow: hidden;
}

.item-details {
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  /* Removes excess spacing above break line */
}

.inline-details {
  flex-direction: row;
  justify-content: space-between;
}

.compact-hr {
  margin: 2px 0;
  /* Reduces excess space above and below break line */
}

.small-text {
  font-size: 1.4rem;
  /* Makes rarity, type, and weight smaller */
  margin-bottom: 0;
  /* Removes unnecessary space */
}

.price-formula {
  font-size: 0.85rem;
  font-style: italic;
  color: #4a2c2a;
  /* Dark brown to match theme */
  margin-bottom: 5px;
}
</style>