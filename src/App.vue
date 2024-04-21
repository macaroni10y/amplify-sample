<template>
  <authenticator>
    <template v-slot="{ user, signOut }">
      <div class="c-header">
        <h1>Hello {{ user.username }}!</h1>
        <button @click="signOut">Sign Out</button>
      </div>
      <div class="c-main">
        <input type="text" v-model="roomId">
        <button @click="viewRoom">view room</button>
      </div>
      <div class="c-table">
        <table-view v-if="roomInfo" :json-data="roomInfo" :headers="['Room ID', 'Name', 'Card Number']"/>
      </div>

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

<style scoped>
.c-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #ccc;
}
.c-main {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.c-table {
  padding: 20px;
}
</style>
