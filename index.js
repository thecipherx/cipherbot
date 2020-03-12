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
        "[2]  Bot Like Post by Hastag",
        "[3]  Bot Like Target's Post",
        "[4]  Delete All Media",

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

      case "[2]  Bot Like Post by Hastag":
        await require("./src/Ltag.js");
        break;

      case "[3] Bot Like Target's Post":
        await require("./src/botLike.js");
        break;

      case "[4] Delete All Media":
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
  ───────────▄▄▄▄▄▄▄▄▄───────────
  ────────▄█████████████▄────────
  █████──█████████████████──█████
  ▐████▌─▀███▄───────▄███▀─▐████▌
  ─█████▄──▀███▄───▄███▀──▄█████─
  ─▐██▀███▄──▀███▄███▀──▄███▀██▌─
  ──███▄▀███▄──▀███▀──▄███▀▄███──
  ──▐█▄▀█▄▀███─▄─▀─▄─███▀▄█▀▄█▌──
  ───███▄▀█▄██─██▄██─██▄█▀▄███───
  ────▀███▄▀██─█████─██▀▄███▀────
  ───█▄─▀█████─█████─█████▀─▄█───
  ───███────────███────────███───
  ───███▄────▄█─███─█▄────▄███───
  ───█████─▄███─███─███▄─█████───
  ───█████─████─███─████─█████───
  ───█████─████─███─████─█████───
  ───█████─████─███─████─█████───
  ───█████─████▄▄▄▄▄████─█████───
  ────▀███─█████████████─███▀────
  ──────▀█─███─▄▄▄▄▄─███─█▀──────
  ─────────▀█▌▐█████▌▐█▀─────────
  ────────────███████────────────}`);
console.log(chalk `{bold.green
   ____  _  ___   _  _   ____  ____ 
   |     |  |__]  |__|   |___  |__/
   |___  |  |     |  |   |___  |  \
             ___  ____ ___ 
             |__] |  |  |  
             |__] |__|  |  
 
   {bold.red "©2020 Security Exploiters"}
}`);
console.log(chalk `{bold.yellow
 > TITLE  : CIPHER INSTAGRAM BOT v2.0

 > CODEBY : {bold.green "KHALID SHA"} [The CipherX]
 > FOLLOW : @solo_comrade_ [INSTAGRAM]
 > URL: https://github.com/TheCipherX/cipherbot
}
      `);

main()
