<template>
  <v-card outlined style="box-shadow: none" @click="$emit('click')">
    <v-list-item>
      <v-avatar tile size="50" class="mr-2">
        <img :src="icon" />
      </v-avatar>
      <v-list-item-content>
        <v-list-item-title class="font-weight-bold" style="font-size: 16px">
          {{ title }}
        </v-list-item-title>
        <v-list-item-subtitle style="font-size: 14px" class="text-wrap">{{
          subTitle
        }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    title: String,
    subTitle: String,
    icon: String,
  },
};
</script>
