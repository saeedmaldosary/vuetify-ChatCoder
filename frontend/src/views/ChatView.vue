<template>
  <div class="page-wrapper">
    <v-container fluid fill-height>
      <v-layout column>
        <v-flex grow v-if="messageSent">
          <div class="message-box mb-3">
            <v-avatar class="mr-2 mb-2">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
            {{ message }}
          </div>
          <div class="message-box">
            <v-avatar class="mr-2 mb-2">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
            Thanks
          </div>
        </v-flex>
        <v-flex shrink>
          <v-card color="grey lighten-4">
            <v-card-text>
              <v-container>
                <v-row class="textarea">
                  <v-col cols="12">
                    <v-row no-gutters>
                      <v-col cols="11">
                        <v-textarea
                          style="background-color: white"
                          outlined
                          hide-details
                          v-model="message"
                          :rows="1"
                          placeholder="Type your message here"
                        ></v-textarea>
                      </v-col>
                      <v-col cols="1" align-self-center>
                        <v-btn
                          @click="sendMessage"
                          color="primary"
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
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      messageSent: false,
    };
  },
  methods: {
    sendMessage() {
      this.messageSent = true;
    },
  },
};
</script>

<style scoped>
.page-wrapper {
  max-width: 840px;
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

.message-box {
  background-color: #f5f5f5; /* add gray background to message box */
  padding: 10px;
  width: 100%; /* add width property to make message box take full width */
}
</style>
