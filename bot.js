const Discord = require('discord.js');
// const MessageAttachment = require('discord.js');
var auth = require('./auth.json');

function addLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
  }

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
    ]
})

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
})

client.on("messageCreate", (message) => {
    var msg = message.content.substring(1);
    if (msg == "test") {
        const attachment = new Discord.MessageAttachment('https://i.pinimg.com/originals/7d/ee/4b/7dee4bf1e6b48c682ce73781fec4d765.png'); //ex. https://i.imgur.com/random.jpg
        message.channel.send({ content: "I sent you a photo!", files: [attachment] })
    }


    // 日常推送龟龟和熊熊meme
    if (msg == "init") {
        var interval = setInterval (function () {
            
            var max = 100;
            var randNum = addLeadingZeros(Math.floor(Math.random() * max), 4);
            var folder = (Math.floor(Math.random() * 2) == 0) ? 'turtlememe' : 'bearmeme';
            
            
            if (folder == 1) {
                const attachment = new Discord.MessageAttachment('./download/'+folder+'/google_'+randNum+'.jpg');
            }
            // use the message's channel (TextChannel) to send a new message
            const attachment = new Discord.MessageAttachment('./download/'+folder+'/google_'+randNum+'.jpg');
            message.channel.send({ content: "日常推送龟龟和熊熊meme", files: [attachment] })
            .catch(console.error); // add error handling here
        }, 60 * 10 * 1000); 
    }
})

client.login(auth.token);