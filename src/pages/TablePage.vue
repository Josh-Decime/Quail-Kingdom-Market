<template>
    <div class="container mt-4">
        <h1>Magic Item Tables</h1>

        <div v-for="(table, tableKey) in AppState.magicItems" :key="tableKey" class="mb-4">
            <h3 class="text-capitalize">Table {{ tableKey }} (Roll {{ table.range[0] }}-{{ table.range[1] }})</h3>
            <ul>
                <li v-for="item in table.items" :key="item.name">
                    <button class="btn btn-link" @click="selectItem(item)" data-bs-toggle="modal"
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

        const formattedDescription = computed(() => {
            return selectedItem.value?.description?.replace(/\n/g, '<br>') || '';
        });

        function selectItem(item) {
            selectedItem.value = item;
        }

        return {
            AppState,
            selectedItem,
            selectItem,
            formattedDescription
        };
    }
};
</script>

<style scoped>
.formatted-text {
    white-space: pre-line;
    line-height: 1.6;
}
</style>