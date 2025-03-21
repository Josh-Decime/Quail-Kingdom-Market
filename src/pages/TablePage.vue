<template>
    <div class="container mt-4">
        <h1>Magic Item Tables</h1>

        <!-- Search Bar -->
        <div class="mb-3">
            <input v-model="searchQuery" type="text" class="form-control" placeholder="Search for an item...">
        </div>

        <!-- Loop through filtered tables -->
        <div v-for="tableKey in Object.keys(filteredTables)" :key="tableKey" class="mb-4">
            <h3 class="text-capitalize">Table {{ tableKey }} (Roll {{ filteredTables[tableKey].range[0] }}-{{
                filteredTables[tableKey].range[1] }})</h3>
            <ul>
                <li v-for="item in filteredTables[tableKey].filteredItems" :key="item.name">
                    <span class="roll-range">({{ item.range[0] }}-{{ item.range[1] }})</span>
                    <button class="btn btn-link dark-text" @click="selectItem(item)" data-bs-toggle="modal"
                        data-bs-target="#itemModal">
                        {{ item.name }}
                    </button>
                </li>
            </ul>
        </div>

        <!-- Item Modal -->
        <div class="modal fade" id="itemModal" tabindex="-1" aria-labelledby="itemModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="itemModalLabel">{{ selectedItem?.name }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p><strong>Rarity:</strong> {{ selectedItem?.rarity }}</p>
                        <p><strong>Type:</strong> {{ selectedItem?.type }}</p>
                        <p><strong>Weight:</strong> {{ selectedItem?.weight }} lbs</p>
                        <p v-if="selectedItem?.attunement"><strong>Requires Attunement</strong></p>
                        <hr>
                        <div v-html="formattedDescription" class="formatted-text"></div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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
        const selectedItem = ref(null);
        const searchQuery = ref("");

        const formattedDescription = computed(() => {
            return selectedItem.value?.description?.replace(/\n/g, '<br>') || '';
        });

        function selectItem(item) {
            selectedItem.value = item;
        }

        const filteredTables = computed(() => {
            if (!searchQuery.value) {
                return Object.fromEntries(
                    Object.entries(AppState.magicItems).map(([key, table]) => [
                        key,
                        { ...table, filteredItems: table.items }
                    ])
                );
            }

            const query = searchQuery.value.toLowerCase();
            return Object.fromEntries(
                Object.entries(AppState.magicItems)
                    .map(([key, table]) => {
                        const filteredItems = table.items.filter(item =>
                            item.name.toLowerCase().includes(query)
                        );
                        return filteredItems.length > 0 ? [key, { ...table, filteredItems }] : null;
                    })
                    .filter(Boolean)
            );
        });

        return {
            AppState,
            selectedItem,
            searchQuery,
            selectItem,
            formattedDescription,
            filteredTables
        };
    }
};
</script>

<style scoped>
/* Dark text for better visibility */
.dark-text {
    color: #4a2c2a !important;
    /* Dark brown */
}

/* Keeps roll range aligned properly */
.roll-range {
    margin-right: 10px;
    font-weight: bold;
}

/* Formats search bar */
input.form-control {
    max-width: 400px;
    margin-bottom: 10px;
}
</style>
