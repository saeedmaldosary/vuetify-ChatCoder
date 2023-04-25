<template>
  <v-container fluid fill-height>
    <v-layout column>
      <v-flex grow>
        <!-- Your main content goes here -->
      </v-flex>
      <v-flex shrink>
        <v-card color="grey lighten-4">
          <v-card-text>
            <v-container>
              <v-row class="area">
                <v-col cols="12">
                  <v-row no-gutters>
                    <v-col cols="11">
                      <v-textarea
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
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    sendMessage() {
      // Do something with the message
      console.log("Sending message:", this.message);
      // Clear the message
      this.message = "";
    },
  },
};
</script>

<style scoped>
.v-card {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.area {
  margin: auto;
  max-width: 1000px;
}
</style>
