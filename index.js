/**
 *
 * Node.JS Instagram Tools
 * 
 * Original author of this project is man who say himself as "CIPHERX"
 * He deleted his own repository, then several members of CipherTeam are taking care
 * of development and new features.
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
const delay = require('delay');
const chalk = require('chalk');
const inquirer = require('inquirer');

const questionTools = [
  {
    type:"list",
    name:"Tools",
    message:"Select tools:",
    choices:
      [
        "[1]  Bot Like Timeline",
        "[2] Bom Like Target's Post",
        "[3] Delete All Media",
        ""
      ] 
  }
]

const main = async () => {
  var spinner;
  try{
    var toolChoise = await inquirer.prompt(questionTools);
    toolChoise = toolChoise.Tools;
    switch(toolChoise){
      case "[1]  Bot Like Timeline":
        await require("./src/botLikeTimeline.js");
        break;
      case "[2] Bom Like Target's Post":
        await require("./src/bomLike.js");
        break;
      case "[3] Delete All Media":
        await require("./src/deleteAllMedia.js");
        break;
      default:
        console.log('\nERROR:\n[?] Aw, Snap! \n[!] Something went wrong while displaying this program!\n[!] Please try again!');
    }
  } catch(e) {
    //spinner.stop(true);
    //console.log(e);
  }
}

console.log(chalk`
  {bold.cyan
  ╦┌┐┌┌─┐┌┬┐┌─┐┌─┐┬─┐┌─┐┌┬┐
  ║│││└─┐ │ ├─┤│ ┬├┬┘├─┤│││
  ╩┘└┘└─┘ ┴ ┴ ┴└─┘┴└─┴ ┴┴ ┴
   ____  _  ___  _  _  ____ ____ 
   |     |  |__] |__|  |___ |__/
   |___  |  |    |  |  |___ |  \
   
  ╔╦╗┌─┐┌─┐┬  ┌─┐    © 2020
   ║ │ ││ ││  └─┐   The CipherX 
   ╩ └─┘└─┘┴─┘└─┘   -------       
}
      `);

main()
