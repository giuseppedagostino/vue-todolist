// - aggiungere un campo di input e un pulsante per aggiungere nuove cose da fare alla lista;
// - cancellare un item dalla lista, al click sulla relativa icona 'X'.
// Bonus:
// - Oltre al click sul pulsante, consentire l'inserimento del nuovo item anche premendo il tasto Invio della tastiera, dopo aver scritto il testo nel campo di input.

var app = new Vue({
  el: "#root",
  data: {
    listItem: ["Cose da fare 1","Cose da fare 2","Cose da fare 3"],
    newItem: "",
  },
  methods: {
    printNewItem: function() {
      console.log(this.newItem);
    },
  }
});
