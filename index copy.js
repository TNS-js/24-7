const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('pong');
  } else if (msg.content === 'i am feeling good') {
    msg.reply('I am doing good')
  } else if (msg.content === 'Angela is hot') 
  msg.reply('I know right')
  {
 }
});

client.login('ODMyMzg1NTgyNzQyMzcyMzcy.YHjBew.hwna7Ph9hl1D1CWuCBa0EU5SGkM');