<template>
  <div>
    <table class="c-table">
      <thead>
      <tr class="c-headers">
        <th v-for="header in headers" :key="header">
          {{ header }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr class="c-rows" v-for="row in jsonData" :key="row.id">
        <td>{{ row.roomId }}</td>
        <td>{{ row.name }}</td>
        <td>{{ row.cardNumber }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableView',
  props: {
    headers: {
      type: Array,
      required: true
    },
    jsonData: {
      type: Array,
      required: true
    }
  },
};
</script>

<style scoped>
.c-table {
  width: 100%;
  border-collapse: collapse;
}
.c-headers {
  background-color: #f8f8f8;
  border-bottom: 1px solid #ccc;

}
.c-rows {
  border-bottom: 1px solid #ccc;
}
td {
  padding: 10px;
  text-align: center;
}
</style>
