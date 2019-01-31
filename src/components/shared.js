export default {
  getURL: function(ddn) {
    // switch (this.$props.dropDownName) {
    switch (ddn) {
      case "State":
        this.url = "https://api.jsonbin.io/b/5c514fa04c4430170a939bd9/2";
        break;
      case "District":
        this.url = "https://api.jsonbin.io/b/5c514fa04c4430170a939bd9";
        break;
    }
    return this.url;
  }
};
