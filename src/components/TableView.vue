<template>
  <div>
    <table>
      <thead>
      <tr>
        <th v-for="header in headers" :key="header">
          {{ header }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="row in jsonData" :key="row.id">
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

<style>
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}
</style>
