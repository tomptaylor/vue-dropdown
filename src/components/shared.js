export default {
  getURL: function() {
    switch (this.$props.dropDownName) {
      case "State":
        url = "https://api.jsonbin.io/b/5c3436e87b31f426f8533a5c";
        break;
      case "District":
        url = "https://api.jsonbin.io/b/5c514fa04c4430170a939bd9";
        break;
    }
    return url;
  }
};
