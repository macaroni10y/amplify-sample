<template>
  <authenticator>
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}!</h1>
      <input type="text" v-model="roomId">
      <button @click="viewRoom">view room</button>
      <table-view v-if="roomInfo" :json-data="roomInfo" :headers="['Room ID', 'Name', 'Card Number']"/>
      <button @click="signOut">Sign Out</button>
    </template>
  </authenticator>
</template>

<script>
import '@aws-amplify/ui-vue/styles.css';
import {Authenticator} from "@aws-amplify/ui-vue";
import {getUsers} from "../amplify/backend/function/selectUsers/src/selectUsers.js";
import TableView from "@/components/TableView.vue";

export default {
  components: {TableView, Authenticator},
  data() {
    return {
      roomId: '',
      roomInfo: [],
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
