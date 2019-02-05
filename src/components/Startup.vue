<script>
import { store } from "./store/store";
export default {
  name: "Startup",
  data() {
    return {};
  },
  created() {
    console.log("in startup");
    this.$store.dispatch("loadData");
  }
};
</script>
