# Notes_Taking_app-NodeJS
built using nodeJS. 
package using fs,yargs,chalk.
yarn add yargs
yarn add chalk@latest

#TO ADD A NOTES 
node .\notes.js add --title="SOME__TITLE" --body="NOTE__BODY"

#TO REMOVE A NOTES
node .\notes.js remove --title="SOME__TITLE" 

#TO LIST ALL NOTES
node .\notes.js list

#TO READ NOTES
node .\notes.js read --title="SOME__TITLE" 
