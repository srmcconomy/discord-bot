var DiscordClient = require('discord.io')
var config = require('./config')
var bot = new DiscordClient({
  autorun: true,
  email: 'pbjbot@gmail.com',
  password: config.password
})

bot.on('ready', function() {
  console.log(bot.username + ' - ' + bot.id);
})

bot.on('message', function(user, userID, channelID, message, rawEvent) {
  console.log(arguments)
})
