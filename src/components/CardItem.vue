<template>
  <v-card outlined>
    <v-list-item>
      <v-avatar tile size="40" class="mr-2">
        <img :src="iconPath" />
      </v-avatar>
      <v-list-item-content>
        <v-list-item-title> Headline 5 </v-list-item-title>
        <v-list-item-subtitle class="text-wrap"
          >Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "CardItem",
  data() {
    return {
      iconPath: "/images/bug.png",
    };
  },
};
</script>
