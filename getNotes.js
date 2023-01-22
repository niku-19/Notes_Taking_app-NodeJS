const fs = require("fs");
const chalk = require("chalk");
const getNotes = () => {
  return "Your notes...";
};

const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.find((note) => note.title === title);
  if (!duplicateNotes) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    listNotes(notes);
    console.log(chalk.bgGreen("New note added!"));
  } else {
    console.log(chalk.red("Note title taken! " + chalk.blue(title) + " Please Try To give Something Unique for Better Understading!"));
  }
};

const removeNotes = (title) => {
  const notes = loadNotes();
  const filterNotes = notes.filter((note) => {
    return note.title !== title;
  });
  if (notes.length > filterNotes.length) {
    console.log(chalk.bgGreen("notes has been removed"));
    saveNotes(filterNotes);
  } else {
    console.log(chalk.bgRed("No notes has been removed"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const listNotes = () => {
  const notes = fs.readFileSync("notes.json").toString();
  const notesDataJSON = JSON.parse(notes);
  console.log(chalk.bgBlue(" Your Notes List:- "));
  notesDataJSON.map((listItems) => {
    console.log(chalk.yellow(`${listItems.title}`));
  });
};

const readNotes = (title) => {
  const notes = loadNotes();
  const readingTitle = notes.find((titles) => {
    if(titles.title.toLowerCase() === title.toLowerCase()) {
      return titles;
    }
  })
  if(readingTitle) {
    console.log(chalk.green("notes Found!"))
    console.log(`${chalk.blue(readingTitle.title)} ${readingTitle.body}`);
  }else {
    console.log(chalk.red("Notes Title MisMatch! try Again!!"))
  }
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes,
  addNotes,
  removeNotes,
  listNotes,
  readNotes
};
