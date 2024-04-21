<template>
  <authenticator>
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}!</h1>
      <input type="text" v-model="roomId">
      <button @click="viewRoom">view room</button>
      <p>{{ roomInfo }}</p>
      <button @click="signOut">Sign Out</button>
    </template>
  </authenticator>
</template>

<script>
import '@aws-amplify/ui-vue/styles.css';
import {Authenticator} from "@aws-amplify/ui-vue";
import {getUsers} from "../amplify/backend/function/selectUsers/src/selectUsers.js";

export default {
  components: {Authenticator},
  data() {
    return {
      roomId: {
        type: String,
        default: ''
      },
      roomInfo: {
        type: Object,
        default: {}
      }
    }
  },
  methods: {
    viewRoom() {
      getUsers(this.roomId).then(info => {
        this.roomInfo = info;
      });
    }
  }

}

</script>
