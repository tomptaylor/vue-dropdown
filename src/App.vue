<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png" /> <HelloWorld />
    <DropDown dropDownName="State" /> <DropDown dropDownName="District" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import DropDown from "./components/DropDown";
export default {
  name: "App",
  data() {
    return {
      arrDistricts: [],
      arrSchools: []
    };
  },
  components: {
    HelloWorld,
    DropDown
  },
  created() {
    fetch("https://api.jsonbin.io/b/5c3ec57f05d34b26f20aa54a", {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "secret-key":
          "$2a$10$036UXxSL9oiSYBbeDqdNd.frX7BvsGTNNDekEX2iUKfHj7U1p1k6G"
      }
    })
      .then(response => response.json())
      .then(json => {
        for (let i in json) {
          fruits.indexOf("Apple");
          if (this.arrDistricts.indexOf(json[i].district) === -1) {
            this.arrDistricts.push(json[i].district);
          }
        }
      });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
