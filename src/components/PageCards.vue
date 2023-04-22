<template>
  <div class="mx-3">
    <v-row v-if="$vuetify.breakpoint.xs">
      <v-col v-for="card in cards" :key="card.id" :cols="12">
        <card-item
          :title="card.title"
          :subTitle="card.subTitle"
          :icon="card.icon"
          @click="navigateToChatView(card)"
        />
      </v-col>
    </v-row>
    <v-row v-else-if="$vuetify.breakpoint.smAndUp">
      <v-col v-for="card in cards" :key="card.id" :cols="6">
        <card-item
          :title="card.title"
          :subTitle="card.subTitle"
          :icon="card.icon"
          @click="navigateToChatView(card)"
        />
      </v-col>
    </v-row>
    <v-row v-else-if="$vuetify.breakpoint.mdAndUp">
      <v-col v-for="card in cards" :key="card.id" :cols="4">
        <card-item
          :title="card.title"
          :subTitle="card.subTitle"
          :icon="card.icon"
          @click="navigateToChatView(card)"
        />
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col v-for="card in cards" :key="card.id" :cols="3">
        <card-item
          :title="card.title"
          :subTitle="card.subTitle"
          :icon="card.icon"
          @click="navigateToChatView(card)"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CardItem from "./CardItem.vue";
export default {
  components: { CardItem },
  name: "PageCards",
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Card 1",
          subTitle: "Greyhound divisely hello coldly fonwderfully",
          icon: "/images/bug.png",
        },
        {
          id: 2,
          title: "Card 2",
          subTitle: "Greyhound divisely hello coldly fonwderfully",
          icon: "/images/bug.png",
        },
        {
          id: 3,
          title: "Card 3",
          subTitle: "Greyhound divisely hello coldly fonwderfully",
          icon: "/images/bug.png",
        },
        {
          id: 4,
          title: "Card 4",
          subTitle: "Greyhound divisely hello coldly fonwderfully",
          icon: "/images/bug.png",
        },
      ],
    };
  },
  methods: {
    navigateToChatView(card) {
      this.$router.push({ name: "chat", params: { card } });
    },
  },
};
</script>
