/* Planned functionality includes:
Auto ban new accounts made within 5 minutes that join
Auto kick new accounts that do not have a profile pic with a DM to that user to add a pfp before joining again
Create a human verification system so instead of a reaction to the rules, they get a DM, react to it there, and then a random 4 number combination will be shown in emojis that they will need to type out to be verified as human to receive the Basic role, on my server that's Kidult

*/


/* saving this for the future, it will allow me to add human verification in the future using a random number or letter combo and have them type it out
module.exports = {
	a: '🇦', b: '🇧', c: '🇨', d: '🇩',
	e: '🇪', f: '🇫', g: '🇬', h: '🇭',
	i: '🇮', j: '🇯', k: '🇰', l: '🇱',
	m: '🇲', n: '🇳', o: '🇴', p: '🇵',
	q: '🇶', r: '🇷', s: '🇸', t: '🇹',
	u: '🇺', v: '🇻', w: '🇼', x: '🇽',
	y: '🇾', z: '🇿', 0: '0️⃣', 1: '1️⃣',
	2: '2️⃣', 3: '3️⃣', 4: '4️⃣', 5: '5️⃣',
	6: '6️⃣', 7: '7️⃣', 8: '8️⃣', 9: '9️⃣',
	10: '🔟', '#': '#️⃣', '*': '*️⃣',
	'!': '❗', '?': '❓',
};
*/
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


\\ when a new member joins, this code checks to see how old the account is and bans if its under 5 minutes old
client.on('guildMemberAdd', member => {
    ]
if (Date.now() - user.CreatedAt <= 300) {
	guildMember.ban({ days: 14, reason: 'New Account' })
	.then(console.log)
	.catch(console.error);

}}
	

client.login('token');
