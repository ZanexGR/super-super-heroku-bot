const Discord = require("discord.js"); // use discord.js
const PREFIX = "/" // bot's prefix

var bot = new Discord.Client(); // sets Discord.Client to bot

bot.on("ready", function() { // when the bot starts up, set its game to Use *help and tell the console "Booted up!"
    bot.user.setGame("playing zanex dick") // sets the game the bot is playing
    console.log("Booted up!") // messages the console Booted up!
});

bot.login(process.env.token);
