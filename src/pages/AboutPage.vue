<script setup>
import { onMounted, onUnmounted } from 'vue';
import MagicItemService from '@/services/MagicItemService';

// NOTE adds randomized quail silhouettes all over the website 
onMounted(() => {
    MagicItemService.addRandomQuails();
});

onUnmounted(() => {
    MagicItemService.clearAllQuails();
});

</script>

<template>
  <div class="about container py-4">
    <section class="mb-6">
      <h2 class="text-2xl font-bold mb-2">About the Quail Kingdom Market Website</h2>
      <p class="mb-2">
        The Quail Kingdom Market was created as a quick & easy way for members of <strong>The Brass Key Collective</strong> D&D group to purchase magic items using the downtime purchasing rules outlined in <em>Xanathar's Guide to Everything</em>.
      </p>
      <p>
        It features custom-built item tables & includes a <strong>Black Market</strong> section to allow for the inclusion of homebrew items tailored to each DM's campaign.
      </p>
    </section>

    <section class="mb-6">
      <h3 class="text-xl font-semibold mb-2">Item Rarity & Pricing</h3>
      <p class="mb-2">
        Please review the rarity of each item carefully to ensure players are paying the correct price. While we've done our best to organize the tables accurately, some discrepancies may exist.
      </p>
      <p>
        If you notice any errors in item rarity, please report them to a Brass Key Collective organizer.
      </p>
    </section>

    <section class="mb-6">
      <h3 class="text-xl font-semibold mb-2">About Black Market Items</h3>
      <p class="mb-2">
        Black Market prices are displayed in <span class="italic">grey</span> to indicate that they are tentative. Homebrew items are not always balanced in the same way as official content, so these prices are considered placeholders.
      </p>
      <p>
        DMs are encouraged to cross out & update Black Market prices based on what makes sense for their game. As always, the DM has the final say on what items are available & how much they cost.
      </p>
    </section>

    <section class="mb-6">
      <h3 class="text-xl font-semibold mb-2">Printing</h3>
      <p>
        Use the <strong>"Print Items"</strong> button to generate a print-friendly version of the item list. This version features a designated space for the DM's authorization signature, facilitating easy auditing of characters & ensuring legitimate item purchases.
      </p>
    </section>

    <section class="mb-6">
      <h3 class="text-xl font-semibold mb-2">The Lore of the Quail Kingdom</h3>
      <p>
        The Quail Kingdom has become renowned throughout the realm as the premier destination for those seeking magical treasures. Under the Quail King's guidance, the kingdom's citizens have cultivated an intricate network of contacts, suppliers, & skilled appraisers who can locate even the most elusive enchanted items. Whether you're a seasoned adventurer or a novice explorer, the people of the Quail Kingdom stand ready to help you find exactly what you need for your next quest.
      </p>
    </section>
  </div>
</template>

<style scoped lang="scss">
.about {
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
  color: #4a2c2a;

  h2, h3 {
    color: #4a2c2a;
  }

  p {
    color: #4a2c2a;
  }
}
</style>