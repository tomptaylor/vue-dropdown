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
  mounted: function() {
    this.foo = shared.foo; // now you can call this.foo() (in your functions/template)
  },
  created() {
    var url = "https://api.jsonbin.io/b/5c514fa04c4430170a939bd9";
    console.log(this.$props.dropDownName);
    //     switch (this.$props.dropDownName) {
    // 	case 'State ':
    //      url = "https://api.jsonbin.io/b/5c3436e87b31f426f8533a5c";
    // 		break;
    //     url = "https://api.jsonbin.io/b/5c514fa04c4430170a939bd9";
    // 		break;
    // };

    fetch(url, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "secret-key":
          "$2a$10$036UXxSL9oiSYBbeDqdNd.frX7BvsGTNNDekEX2iUKfHj7U1p1k6G"
      }
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        for (let i in json.DATA) {
          this.rows.push({ name: json.DATA[i][1], key: json.DATA[i][0] });
        }
        // console.log(this.rows);
        // this.states = json;
      });
  }
};
</script>
