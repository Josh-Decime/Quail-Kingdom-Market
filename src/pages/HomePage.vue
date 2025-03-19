<template>
  <div class="container mt-4">
    <h1>Magic Item Merchant</h1>
    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#rollModal">Find Magic Items</button>

    <!-- Modal for Rolling -->
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
          </div>
          <div class="modal-footer">
            <button class="btn btn-success" @click="generateItems" data-bs-dismiss="modal">Get Items</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { AppState } from '../AppState';

export default {
  setup() {
    const tableRoll = ref(null);
    const modifier = ref(0);
    const itemCountRoll = ref(null);
    const percentileRolls = ref([]);

    const totalRoll = computed(() => {
      return (tableRoll.value || 0) + (modifier.value || 0);
    });

    function rollTable() {
      tableRoll.value = Math.ceil(Math.random() * 20);
    }

    function rollItemCount() {
      itemCountRoll.value = Math.ceil(Math.random() * 4);
      updatePercentileInputs();
    }

    function updatePercentileInputs() {
      percentileRolls.value = Array(itemCountRoll.value || 0).fill(null);
    }

    function rollPercentile(index) {
      percentileRolls.value[index] = Math.ceil(Math.random() * 100);
    }

    function generateItems() {
      const tableId = getTableId(totalRoll.value);
      const selectedItems = percentileRolls.value.map(roll => AppState.magicItems[tableId]?.[roll] || null).filter(Boolean);
      AppState.rollResults.selectedItems = selectedItems;
    }

    function getTableId(roll) {
      if (roll >= 1 && roll <= 5) return 'A';
      if (roll >= 6 && roll <= 10) return 'B';
      if (roll >= 11 && roll <= 15) return 'C';
      if (roll >= 16 && roll <= 20) return 'D';
      return 'E';
    }

    return {
      tableRoll,
      modifier,
      itemCountRoll,
      percentileRolls,
      totalRoll,
      rollTable,
      rollItemCount,
      rollPercentile,
      updatePercentileInputs,
      generateItems,
      AppState
    };
  }
};
</script>
