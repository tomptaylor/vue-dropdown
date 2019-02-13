export default {
  getURL: async function(ddn) {
    var url = "";
    console.log("here" + ddn);
    switch (ddn) {
      case "State":
        url = "https://api.jsonbin.io/b/5c514fa04c4430170a939bd9/2";
        this.results = await this.getIT(this.theurl);
        this.rows = await this.mapDropDown(ddn, this.results);

        break;
      case "District":
        //this.url = "https://api.jsonbin.io/b/5c514fa04c4430170a939bd9";
        break;
    }
    //console.log(url);
    //this.rows = this.getIT(this.url, ddn);
    //console.log("rows" + this.rows);
    //this.mapDropDown(ddn, this.rows);
    return this.rows;
  },
  getIT: async function(ddn) {
    var url = "";
    switch (ddn) {
      case "State":
        url = "https://api.jsonbin.io/b/5c514fa04c4430170a939bd9/2";
        //this.results = await this.getIT(this.theurl);
        //this.rows = await this.mapDropDown(ddn, this.results);

        break;
      case "District":
        //this.url = "https://api.jsonbin.io/b/5c514fa04c4430170a939bd9";
        break;
    }
    let response = await fetch(url, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "secret-key":
          "$2a$10$036UXxSL9oiSYBbeDqdNd.frX7BvsGTNNDekEX2iUKfHj7U1p1k6G"
      }
    });

    let json = await response.json();
    var results = [];
    //      .then(json => {
    //        console.log(json);
    for (let i in json.DATA) {
      //          console.log(json.DATA[i]);
      let row = {};
      for (let y in json.COLUMNS) {
        //          console.log(json.COLUMNS[y]);

        row[json.COLUMNS[y]] = json.DATA[i][y];
        //   //console.log(row[json.COLUMNS[y]]);

        //      console.log(row);
      }
      //    console.log("hi" + typeof rows);
      results.push(row);
      //          console.log("after" + rows);
    }
    // this.rows = results;

    console.log("inside getit" + results);

    results = this.mapDropDown(ddn, results);
    return results;
    //    });
  },
  mapDropDown: function(ddn, json) {
    console.log(json);
    let rows = [];

    switch (ddn) {
      case "State":
        for (let i in json) {
          //  console.log(i);
          //  console.log( json[i]);
          rows.push({ name: json[i].STATE, key: json[i].ABB });
        }
        break;
      case "District":
        // rows.push({ name: json.DATA[i][1], key: json.DATA[i][0] });
        break;
    }
    console.log("map");
    console.log(rows);
    this.rows = rows;
    return this.rows;
  }
};
