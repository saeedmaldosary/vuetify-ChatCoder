<template>
  <div class="page-wrapper">
    <v-container fluid fill-height>
      <v-layout column>
        <v-flex grow style="margin-bottom: 150px">
          <div id="chat_container">
            <div
              v-for="(chat, i) in wrapper"
              :key="i"
              class="wrapper"
              :class="{ ai: chat.isAi }"
            >
              <page-chat :chat="chat" :key="i" />
            </div>
          </div>
        </v-flex>
        <v-flex shrink>
          <form @submit.prevent="fetchAnswer">
            <v-card color="grey lighten-4">
              <v-card-text>
                <v-container>
                  <v-row class="textarea">
                    <v-col cols="12">
                      <v-row no-gutters>
                        <v-col cols="11">
                          <v-textarea
                            outlined
                            style="background-color: white"
                            hide-details
                            v-model="question"
                            :rows="1"
                            placeholder="Ask ChatCoder"
                          ></v-textarea>
                        </v-col>
                        <v-col cols="1" align-self-center>
                          <v-btn
                            type="submit"
                            color="primary"
                            :disabled="loading"
                            class="mt-2 ml-2"
                            icon
                          >
                            <v-icon>mdi-send</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import PageChat from "../components/PageChat.vue";
export default {
  components: { PageChat },
  data() {
    return {
      question: "",
      selectedCard: "",
      wrapper: [],
      loading: false,
    };
  },
  created() {
    const selectedCard = JSON.parse(localStorage.getItem("selectedCard"));
    if (selectedCard) {
      this.selectedCard = selectedCard;
    }
  },
  methods: {
    async fetchAnswer() {
      try {
        this.loading = true;
        this.wrapper.push({
          isAi: false,
          value: this.question,
        });
        this.wrapper.push({
          isAi: true,
          value: "Loading...",
        });
        const res = await fetch(process.env.BACKEND_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question: this.question,
            selectedCard: this.selectedCard.title,
          }),
        });
        const data = await res.json();
        const parsedData = data.bot.trim();
        this.wrapper.pop();
        this.wrapper.push({
          isAi: true,
          value: parsedData,
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
        this.question = "";
      }
    },
  },
};
</script>
<style scoped>
.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.v-card {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.textarea {
  margin: auto;
  max-width: 900px;
}

.chat-container {
  height: calc(100% - 80px);
  overflow-y: auto;
  padding: 20px;
}

.wrapper {
  padding: 15px;
  border-radius: 5px;
}

.ai {
  background-color: #f5f5f5;
}
</style>
