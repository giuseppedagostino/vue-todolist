var app = new Vue({
  el: "#root",
  data: {
    listItem: ["Studiare Vue","Ripassare Javascript","Tornare a studiare Vue"],
    newItem: "",
    done: "",
    color: "white"
  },
  methods: {
    addNewItem: function() {
      console.log(this.newItem);
      if (this.newItem != "") {
        this.listItem.push(this.newItem);
        this.newItem = "";
      } else {
        alert("Devi inserire un valore corretto.")
      }
    },
    removeItem: function(index) {
      console.log("collegato");
      this.listItem.splice(index, 1);
    },

    doneItem: function(indexDone) {
      console.log("collegato Done " + indexDone);
      if (this.done[indexDone] == "") {
        console.log("Si");
        this.done = "done";
      } else {
        console.log("No");
        this.done = "";
      }
    },

    whiteColor: function() {
      this.color = "white";
    },
    bisqueColor: function() {
      this.color = "bisque";
    },
    lightSteelBlueColor: function() {
      this.color = "lightsteelblue";
    },
    indianRedColor: function() {
      this.color = "indianRed";
    }
  }
});
