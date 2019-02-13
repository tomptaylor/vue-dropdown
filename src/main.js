// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Vuex from "vuex";

//import { store } from "./store/store.js";

Vue.use(Vuex);
Vue.config.productionTip = false;

/* eslint-disable no-new */

import Axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    arrDistricts: [],
    arrSchools: []
  },
  created() {
    console.log("in store, create");
    this.loadData();
  },
  actions: {
    loadData({ commit }) {
      fetch("https://api.jsonbin.io/b/5c3ec57f05d34b26f20aa54a", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "secret-key":
            "$2a$10$036UXxSL9oiSYBbeDqdNd.frX7BvsGTNNDekEX2iUKfHj7U1p1k6G"
        }
      })
        .then(response => response.json())
        .then(json => {
          //console.log(json);
          for (let i in json) {
            //console.log(i + json[i].district);
            if (store.state.arrDistricts.indexOf(json[i].district) === -1) {
              store.state.arrDistricts.push(json[i].district);
            }
          }
          console.log(store.state.arrDistricts);
        });
    },

    GET_TODO: async (context, payload) => {
      let { data } = await Axios.get(
        "https://api.jsonbin.io/b/5c3ec57f05d34b26f20aa54a"
      );
      console.log(data);
      //rows.push({ name: json.DATA[i][1], key: json.DATA[i][0] })
      context.commit("SET_TODO", data);
    },
    SAVE_TODO: async (context, payload) => {
      let { data } = await Axios.post("http://yourwebsite.com/api/todo");
      context.commit("ADD_TODO", payload);
    }
  }
});

new Vue({
  el: "#app",
  store: store,
  components: { App },
  template: "<App/>"
});
