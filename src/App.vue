<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png" /> <HelloWorld />
    <DropDown dropDownName="State" />
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
    this.$store.dispatch("loadData");
    //this.items = this.$store.state.posts;
    console.log("in App.created(): " + this.$store.state.arrDistricts);
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
