const Discord = require("discord.js");
const client = new Discord.Client();

var fs = require('fs');
var token = JSON.parse(fs.readFileSync('./token.json', 'utf8'));

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
  if (msg.content === 'buki') {
    msg.delete(msg)
  }
  if (msg.content === 'nasi') {
    msg.delete(msg)
  }
  if (msg.content === 'sub') {
    msg.delete(msg)
  }
  if (msg.content === 'sp') {
    msg.delete(msg)
  }
  if (msg.content === 'syu') {
    msg.delete(msg)
  }
});

client.login(token.token);
