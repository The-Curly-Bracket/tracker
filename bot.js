// Calling packages
const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const eli = require('eliapi')

// Authenticate
try {
    bot.token = JSON.parse(fs.readFileSync('/home/pibot/Coding/tracker/token.json'));
}
catch(err) {
    bot.token = JSON.parse(fs.readFileSync('token.json'));
}
console.log(`Logging in with token: ${bot.token}`)
bot.login(bot.token);
console.log('Bot started successfully');

// Command handler
bot.commands = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
	if (err) console.error(err);

	let jsfiles = files.filter(f => f.split('.').pop() === 'js');
	if (jsfiles.length <= 0) { return console.log('No commands found...') }
	else { console.log(`${jsfiles.length} commands found.`) }

	jsfiles.forEach((f, i) => {
		let cmds = require(`./commands/${f}`);
		console.log(`Command ${f} loaded.`);
		bot.commands.set(cmds.config.name, cmds);
		try {cmds.init(bot)} catch {}
	})
});

// Error handler
bot.on('error', console.error);

// Config
const prefix = '';
const userID = 'PLACEHOLDER';

// More setup
bot.on('ready', () => {
    bot.user.setStatus('online');
    console.log(`Launch completed at ${new Date()}`);
});

// Command Listener
bot.on('message', async message => {

    

});