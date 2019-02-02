export default {
  getURL: function(ddn) {
    switch (ddn) {
      case "State":
        this.url = "https://api.jsonbin.io/b/5c514fa04c4430170a939bd9/2";
        break;
      case "District":
        //this.url = "https://api.jsonbin.io/b/5c514fa04c4430170a939bd9";
        this.url = "https://api.jsonbin.io/b/5c3ec57f05d34b26f20aa54a";
        break;
    }
    return this.url;
  },

  mapDropDown: function(ddn, json) {
    console.log(ddn);
    let rows = [];

    switch (ddn) {
      case "State":
        for (let i in json.DATA) {
          rows.push({ name: json.DATA[i][1], key: json.DATA[i][0] });
        }
        break;
      case "District":
        rows.push({ name: , key: json.DATA[i][0] });
        break;
    }

    return rows;
  }
};
