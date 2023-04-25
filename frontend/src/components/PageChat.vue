<template>
  <div class="chat" ref="currentMessage">
    <v-avatar rounded size="40" v-if="chat.isAi">
      <v-img :src="require('@/assets/chat/bot.png')" />
    </v-avatar>
    <v-avatar rounded size="40" v-else>
      <v-img :src="require('@/assets/chat/user.png')" />
    </v-avatar>
    <div class="message mt-5" v-if="chat.value == 'Loading...'">
      <v-progress-linear indeterminate color="primary"></v-progress-linear>
    </div>
    <div class="message mt-2" v-else>
      {{ chat.value }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chat: {
      type: Object || null,
    },
  },
  mounted() {
    this.$nextTick(() => {
      const div = this.$refs.currentMessage;
      div.scrollIntoView({ behavior: "smooth" });
    });
  },
};
</script>

<style scoped>
.chat {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
}

.message {
  flex: 1;
  color: #000000;
  font-size: 14px;
  max-width: 100%;
  overflow-x: scroll;
  white-space: pre-wrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.message::-webkit-scrollbar {
  display: none;
}
</style>
