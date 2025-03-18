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
            <div class="mb-3">
              <label>Table Roll (d20):</label>
              <div class="input-group">
                <input v-model.number="tableRoll" type="number" class="form-control" placeholder="Roll result" />
                <button class="btn btn-secondary" @click="rollTable">Roll</button>
              </div>
            </div>
            <div class="mb-3">
              <label>Modifier (Gold Spent, Downtime, Charisma):</label>
              <div class="input-group">
                <input v-model.number="modifier" type="number" class="form-control" placeholder="Enter modifier" />
                <span class="input-group-text">Total: {{ totalRoll }}</span>
              </div>
            </div>
            <div class="mb-3">
              <label>Item Count Roll (d4):</label>
              <div class="input-group">
                <input v-model.number="itemCountRoll" type="number" class="form-control" placeholder="Roll result" />
                <button class="btn btn-secondary" @click="rollItemCount">Roll</button>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-success" @click="generateItems" data-bs-dismiss="modal">Get Items</button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="AppState.rollResults.selectedItems.length" class="mt-4">
      <h3>Available Items</h3>
      <ul>
        <li v-for="item in AppState.rollResults.selectedItems" :key="item.name">
          {{ item.name }} ({{ item.rarity }})
        </li>
      </ul>
      <button class="btn btn-outline-primary" @click="printItems">Print</button>
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

    // Compute total roll dynamically
    const totalRoll = computed(() => {
      return (tableRoll.value || 0) + (modifier.value || 0);
    });

    function rollTable() {
      tableRoll.value = Math.ceil(Math.random() * 20);
    }

    function rollItemCount() {
      itemCountRoll.value = Math.ceil(Math.random() * 4);
    }

    function generateItems() {
      AppState.rollResults.tableRoll = totalRoll.value;
      AppState.rollResults.itemCountRoll = itemCountRoll.value;
      AppState.rollResults.selectedItems = [/* TODO: Get items based on roll logic */];
    }

    function printItems() {
      window.print();
    }

    return {
      tableRoll,
      modifier,
      itemCountRoll,
      totalRoll,
      rollTable,
      rollItemCount,
      generateItems,
      printItems,
      AppState
    };
  }
};
</script>