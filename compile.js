const path = require('path');
const fs = require('fs');
//require sol compiler
const solc = require('solc');

//path resolves so we find the path in unix or windows or mac 
const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol');

//read in the contents of the file.  must specificy type of encoding for this file
const source = fs.readFileSync(inboxPath, 'utf8');


//module.export: now compiled must make it available to other files in our project ()

//must specify # contracts to compule. , and only need inbox contract to deploy
module.exports = console.log(solc.compile(source, 1).contracts[':Inbox']);

