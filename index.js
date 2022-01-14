const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Project is running!");
})

app.get("/", (req, res) => {
  res.send("Hello world!");
})

const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on("message", message => {
  if(message.content === "~fact") {
    message.channel.send("Why kronieo#0001 is the best ww?: - gei,- gei, - gei, - gei, - super gei, - he is gei, - gei everyday, - gEI ")
  }
})

client.login(process.env.token)
