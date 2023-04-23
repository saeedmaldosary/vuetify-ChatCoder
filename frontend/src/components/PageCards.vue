<template>
  <div class="mx-3">
    <v-row>
      <v-col cols="12" md="4">
        <v-text-field
          class="mx-4"
          prepend-inner-icon="mdi-magnify"
          label="Search"
          v-model="search"
          outlined
          dense
          clearable
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row v-if="$vuetify.breakpoint.xs">
      <v-col v-for="card in filteredCards" :key="card.id" :cols="12">
        <card-item
          :title="card.title"
          :subTitle="card.subTitle"
          :icon="card.icon"
          @click="navigateToChatView(card)"
        />
      </v-col>
    </v-row>
    <v-row v-else-if="$vuetify.breakpoint.smAndUp">
      <v-col v-for="card in filteredCards" :key="card.id" :cols="6">
        <card-item
          :title="card.title"
          :subTitle="card.subTitle"
          :icon="card.icon"
          @click="navigateToChatView(card)"
        />
      </v-col>
    </v-row>
    <v-row v-else-if="$vuetify.breakpoint.mdAndUp">
      <v-col v-for="card in filteredCards" :key="card.id" :cols="4">
        <card-item
          :title="card.title"
          :subTitle="card.subTitle"
          :icon="card.icon"
          @click="navigateToChatView(card)"
        />
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col v-for="card in filteredCards" :key="card.id" :cols="3">
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
      search: "",
      cards: [
        {
          id: 1,
          title: "Text to command",
          subTitle: "Translate text into programmatic commands.",
          icon: "/images/command.png",
        },
        {
          id: 2,
          title: "Bug fixer",
          subTitle: "Find and fix bugs in source code.",
          icon: "/images/bug.png",
        },
        {
          id: 3,
          title: "Explain code",
          subTitle: "Explain a complicated piece of code.",
          icon: "/images/hashtag.png",
        },
        {
          id: 4,
          title: "SQL translate",
          subTitle: "Translate natural language to SQL queries.",
          icon: "/images/question_mark.png",
        },
      ],
    };
  },
  computed: {
    filteredCards() {
      if (!this.search) {
        return this.cards;
      }
      return this.cards.filter((item) =>
        item.title.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  watch: {
    search: function (newVal) {
      if (newVal === "") {
        this.filteredCards = this.cards;
      }
    },
  },
  methods: {
    navigateToChatView(card) {
      localStorage.setItem("selectedCard", JSON.stringify(card));
      this.$router.push({ name: "chat" });
    },
  },
};
</script>
