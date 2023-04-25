<template>
  <div class="page-wrapper">
    <page-header />
    <page-cards />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import PageCards from "@/components/PageCards.vue";

export default {
  name: "HomeView",

  components: {
    PageHeader,
    PageCards,
  },
};
</script>

<style>
.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>
