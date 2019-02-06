import Vue from "vue";
import Vuex from "vuex";
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
          console.log(json);
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
