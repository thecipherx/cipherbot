/**
 *
 * Node.JS Instagram Tools
 * 
 * Original author of this project is man who say himself as "CipherX"

 * 
 * And this is collection of several developments that have been carried out so far
 *
 * All credits to contributor are written in their each file development
 * 
 * Thank to all of contributors for developing this project
 * Especially you :)
 *
 */

'use strict'
const Client = require('instagram-private-api').V1;
const { exec } = require("child_process");
const delay = require('delay');
const chalk = require('chalk');
const inquirer = require('inquirer');
const main = async () => {
  var spinner;
  }

console.log(chalk `{bold.green
       ____  _  ___   _  _   ____  ____ 
       |     |  |__]  |__|   |___  |__/
       |___  |  |     |  |   |___  |  \
                 ___  ____ ___ 
                 |__] |  |  |  
                 |__] |__|  |  
 
       {bold.red "CIPHERBOT UPDATE Instructions"}
}`);
console.log(chalk `{bold.yellow
 > Follow the below Instructions to Update CipherBot
 > Follow Instructions or Just Copy Paste Commands on a New Window 
 > 1. Goto cipherbot Directory.      | {bold.green $cd /$HOME/cipherbot }
 > 2. listout directory if you need. | {bold.green $ls }
 > 3. Execute update.sh file.        | {bold.green $bash update.sh}
 > 4. Thats all your cipherbot updated to latest Version
 ====================================================================
 Our Official Link 
 > URL: https://github.com/TheCipherX/cipherbot
}
      `);

main()
