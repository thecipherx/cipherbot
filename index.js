/**
 * its V3 version Of Cipher bot
 * Hello Machanzz.. I made this tool. I'm Mohammed Khalid Sha

 *Actually I Cracked Many Tools and Mod it in a Single Tool that's Cipherbot
 * And this is collection of several developments that have been carried out so far
 *if you recode this plz give me credits
 *
 *
 *    Machanmare Insta Follow Cheyyan Marakkalle
 *       insta id @the_khalid_sha , @solo_comrade_ , @_dark_prince._ 
 *
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
    message:"Tool Select Cheyy:",
    choices:
      [
        "[#]  Info & Contact",
        "[#]  Update Cipherbot",
        "[#]  NewsFeed Auto Liker",
        "[#]  Hashtag Post Bot Liker",
        "[#]  Target's Post Auto Liker",
        "[#]  Like & Comment Hashtag Posts",
        "[#]  Like & Comment  Target's Posts",
        "[#]  Follow&Like&Comment Hashtag Posts",
        "[#]  Follow&Like&Comment  Target's Posts",
        "[#]  UnFollow Who Not Follow You Back",
        "[#]  UnFollow All Your Followings",

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
      case "[#]  Info & Contact":
        await require("./src/.info.js");
        break;
      
      case "[#]  Update Cipherbot":
        await require("./src/.update.js");
        break;
          
      case "[#]  NewsFeed Auto Liker":
        await require("./src/.botLikeNF.js");
        break;

      case "[#]  Hashtag Post Bot Liker":
        await require("./src/.HashLiker.js");
        break;

      case "[#]  Target's Post Auto Liker":
        await require("./src/.botLike.js");
        break;
        
      case "[#]  Like & Comment Hashtag Posts":
        await require("./src/.c&lbyHash.js");
        break;
      
      case "[#]  Like & Comment  Target's Posts":
        await require("./src/.c&lbyP.js");
        break;
        
      case "[#]  Follow&Like&Comment Hashtag Posts":
        await require("./src/.flchash.js");
        break;  
            
      case "[#]  Follow&Like&Comment  Target's Posts":
        await require("./src/.flcP.js");
        break;
          
      case "[#]  UnFollow All Your Followings":
        await require("./src/.unfollowall.js");
        break;
        
      case "[#]  UnFollow Who Not Follow You Back":
        await require("./src/.rmnotfollback.js");
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
                    |__] |__|  | {bold.red v3.2} 
 
}`);
console.log(chalk `{bold.red           "©2020 #T34M 4N0NYM0U5"}`);
console.log(chalk `{bold.yellow {bold.cyan  =====================================================}
 |      CIPHER INSTAGRAM BOT v3.2                    |
 |  {bold.green "KHALID SHA"} [The CipherX]- The Author           |
 |        @the_khalid_sha [INSTAGRAM]                |
 | git clone https://github.com/TheCipherX/cipherbot |}`);
console.log(chalk `{bold.cyan  =====================================================
} `);      

main()
