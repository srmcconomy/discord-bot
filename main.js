var DiscordClient = require('discord.io')
var bot = new DiscordClient({
  autorun: true,
  email: 'pbjbot@gmail.com',
  password: 'kerlogin'
})

bot.on('ready', function() {
  console.log(bot.username + ' - ' + bot.id);
})

bot.on('message', function(user, userID, channelID, message, rawEvent) {
  console.log(arguments)
})
