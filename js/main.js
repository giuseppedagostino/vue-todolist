var app = new Vue({
  el: "#root",
  data: {
    listItem: ["Studiare Vue","Ripassare Javascript","Tornare a studiare Vue"],
    newItem: "",
    done: ""
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
    doneItem: function() {
      if (this.done == "") {
        this.done = "done";
      } else if (this.done == "done") {
        this.done = "";
      }
    }
  }
});
