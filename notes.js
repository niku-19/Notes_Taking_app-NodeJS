// const validator = require('validator');
const {addNotes,removeNotes,listNotes,readNotes} = require("./getNotes.js");
const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    addNotes(argv.title, argv.body);
  }
});
yargs.command({
  command: "list",
  describe: "List your notes",
  handler() {
    listNotes()
  }
});
yargs.command({
  command: "read",
  describe: "Read a note",
  builder : {
    title : {
      describe : "Note Title",
      demandOption : true,
      type : "string"
    }
  },
  handler(argv) {
    readNotes(argv.title);
  }
});
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    removeNotes(argv.title, argv.body)
  }
});

yargs.parse();

