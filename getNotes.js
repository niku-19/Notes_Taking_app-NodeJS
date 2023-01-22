const fs = require('fs');
const chalk = require("chalk")
const getNotes = () => {
  return 'Your notes...'
}

const addNotes  = (title , body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
  notes.push({
    title: title,
    body: body
  });
  saveNotes(notes);
  console.log(chalk.bgGreen('New note added!'));
} else {
  console.log('Note title taken!');
}
 }

 const removeNotes = (title) => {
  const notes = loadNotes();
  const filterNotes = notes.filter((note) => {
    return note.title !== title
  })
  if(notes.length > filterNotes.length) {
    console.log(chalk.bgGreen("notes has been removed")); 
    saveNotes(filterNotes);
  }else {
    console.log(chalk.bgRed("No notes has been removed"));
  }
 }


const saveNotes = (notes,filter) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}





module.exports = {
  getNotes,
  addNotes,
  removeNotes
};