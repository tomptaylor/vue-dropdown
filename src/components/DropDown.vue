<template>
  <div class="dd">
    <label>{{ dropDownName }}</label>
    <select v-model="selectedRow">
      <option v-for="row in rows" :value="row.key">{{ row.name }}</option>
    </select>
  </div>
</template>

<script>
import shared from "./shared";
export default {
  name: "DropDown",
  props: ["dropDownName"],
  data() {
    return {
      selectedRow: "",
      rows: []
    };
  },
  created() {
    this.url = shared.getURL(this.$props.dropDownName);
    fetch(this.url, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "secret-key":
          "$2a$10$036UXxSL9oiSYBbeDqdNd.frX7BvsGTNNDekEX2iUKfHj7U1p1k6G"
      }
    })
      .then(response => response.json())
      .then(json => {
        this.rows = shared.mapDropDown(this.$props.dropDownName, json);
      });
  }
};
</script>
