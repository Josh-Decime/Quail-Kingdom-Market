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
              <!-- Iterate through found items -->
              <div v-for="(item, index) in foundItems" :key="index" class="mb-3">
                <strong>{{ item.name }}</strong> <!-- Show item name above input -->
                <div class="input-group">
                  <span class="input-group-text">Price (gp)</span>
                  <input v-model="item.price" type="text" class="form-control" placeholder="Roll for price">
                  <button class="btn btn-secondary" @click="item.price = rollPriceForItem(index)">Roll</button>
                </div>
                <!-- Show the price calculation formula -->
                <p class="price-formula">
                  <em>Price Formula: {{ getPriceFormula(item.rarity) }}</em>
                </p>
              </div>
            </div>



          </div>
          <div class="modal-footer">
            <button class="btn btn-success" @click="searchItems" data-bs-dismiss="modal">Search Items</button>
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
            <h5 class="card-title" :style="getHeaderSize(item)">{{ item.name }}</h5>
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
import html2canvas from "html2canvas";

export default {
  setup() {
    const tableRoll = ref(null);
    const modifier = ref(0);
    const itemCountRoll = ref(null);
    const percentileRolls = ref([]);
    const foundItems = ref([]);
    // Watch for foundItems updates and attach price properties
    watch(foundItems, (newItems) => {
      newItems.forEach((item) => {
        if (!item.price) {
          item.price = "Roll for price"; // Default text
        }
      });
    }, { deep: true });
    watch(percentileRolls, (newRolls) => {
      if (newRolls.length) {
        foundItems.value = MagicItemService.findMagicItems(totalRoll.value, newRolls);

        // Initialize prices as soon as items are found
        foundItems.value.forEach((item) => {
          item.price = ""; // Keep it empty until the player rolls
        });

      }
    }, { deep: true });


    const totalRoll = computed(() => {
      return MagicItemService.calculateTotalRoll(tableRoll.value, modifier.value);
    });

    function rollTable() {
      tableRoll.value = MagicItemService.rollDie(20);
    }

    function rollItemCount() {
      itemCountRoll.value = MagicItemService.rollDie(4);
      updatePercentileInputs();
    }

    function updatePercentileInputs() {
      percentileRolls.value = MagicItemService.initializePercentileRolls(itemCountRoll.value);
    }

    function rollPercentile(index) {
      percentileRolls.value[index] = MagicItemService.rollDie(100);
    }

    function searchItems() {
      foundItems.value = MagicItemService.findMagicItems(totalRoll.value, percentileRolls.value);
    }

    function getTextSize(description) {
      return description.length > 800 ? { fontSize: '0.85rem' } : { fontSize: '1rem' };
    }

    function getHeaderSize(item) {
      return { fontSize: item.description.length > 800 ? '1rem' : '1.25rem' };
    }

    function getSubTextSize(item) {
      return { fontSize: '0.75rem' };
    }

    function printPage() {
      // Hide unwanted elements for cleaner print output
      const unwantedElements = document.querySelectorAll(".btn, #rollModal");
      unwantedElements.forEach(el => el.style.display = "none");

      const element = document.body; // Capture the full page

      html2canvas(element, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const printWindow = window.open("", "_blank");

        printWindow.document.write(`
      <html>
        <head>
          <title>The Quail King welcomes you to the..</title>
          <style>
            body { margin: 0; text-align: center; font-family: Arial, sans-serif; }
            img { width: 100%; }
            .seal { position: fixed; bottom: 10px; right: 10px; width: 100px; }
          </style>
        </head>
        <body>
          <img src="` + imgData + `" />
          <script>
            window.onload = function() { 
              window.print();
              window.close();
            };
          </` + `script>
        </body>
        <footer>Thank you for your patronage</footer>
      </html>
    `);

        printWindow.document.close();

        // Restore hidden elements after print
        unwantedElements.forEach(el => el.style.display = "");
      });
    }



    function rollPrice(index) {
      if (foundItems.value[index]) {
        foundItems.value[index].price = MagicItemService.calculatePriceForItem(foundItems.value[index]);
      }
    }

    function getPriceFormula(rarity) {
      switch (rarity) {
        case "Common":
          return "(1d6 + 1) × 10 gp";
        case "Uncommon":
          return "1d6 × 100 gp";
        case "Rare":
          return "2d10 × 1,000 gp";
        case "Very Rare":
          return "(1d4 + 1) × 10,000 gp";
        case "Legendary":
          return "2d6 × 25,000 gp";
        default:
          return "N/A";
      }
    }

    function rollPriceForItem(index) {
      if (!foundItems.value[index]) return; // Safety check

      const item = foundItems.value[index];
      // console.log("Rolling price for:", item.name);

      // FORCE Vue to detect the price update
      foundItems.value[index] = {
        ...item,
        price: MagicItemService.calculatePriceForItem(item)
      };

      // console.log("New price:", foundItems.value[index].price);
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
      printPage,
      rollPrice,
      getPriceFormula,
      rollPriceForItem
    };
  }
};
</script>

<style scoped>
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
  font-size: 0.7rem;
  line-height: 1.2;
  word-wrap: break-word;
  /* Ensures text doesn't overflow */
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  height: 10in;
  padding: 1.5rem;
}

.item-card {
  height: 5in;
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
  font-size: 0.7rem;
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