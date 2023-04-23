<template>
  <div>
    <h1>Test</h1>
    <p>ChatView</p>
    <p>Card title: {{ selectedCard.title }}</p>
  </div>
</template>

<script>
export default {
  name: "ChatView",
  data() {
    return {
      selectedCard: "",
    };
  },
  created() {
    const selectedCard = JSON.parse(localStorage.getItem("selectedCard"));
    if (selectedCard) {
      this.selectedCard = selectedCard;
    }
  },
};
</script>
