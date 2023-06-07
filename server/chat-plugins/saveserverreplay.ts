import {FS} from '../../lib';

const path = require('path');
const fs = require('fs');

export const commands: Chat.ChatCommands = {
	ssr: 'saveserverreplay',
	// see /test/common.js: saveReplay
	saveserverreplay(target, room) {
		if (!room?.battle) {
			return this.errorReply(this.tr`You can only save replays for battles.`);
		}

		const format = Dex.formats.get(room.battle.format, true);
		let hideDetails = !format.id.includes('customgame');
		if (format.team && room.battle.ended) hideDetails = false;
		const data = room.getLog(hideDetails ? 0 : -1);
		const {id, password} = room.getReplayData();
		// Nihilslave: to pass the no-unused-vars check
		if (password === '^') {
			hideDetails = false;
		}
		let link = room.roomid.slice(7) + '-' + room.p1 + '-' + room.p2 + '.html';
		let rating = 0;
		if (room.battle.ended && room.battle.rated) rating = room.battle.rated;
		const secret = room.settings.isPrivate || room.hideReplay;

		let filePath = path.resolve(__dirname, `../../../replays/${link}`);
		if (room.battle.replaySaved) {
			FS(filePath).unlinkIfExistsSync();
		}
		if (secret || target === 'silent') {
			link = '.' + link;
			filePath = path.resolve(__dirname, `../../../replays/${link}`);
		}

		const out = fs.createWriteStream(filePath, {flags: 'w'});
		// see client::src/battle-log.ts: createReplayFile
		out.on('open', () => {
			out.write(
				`<!DOCTYPE html>\n` +
				`<meta charset="utf-8" />\n` +
				`<title>${format} replay: ${room.p1?.name} vs. ${room.p2?.name}</title>\n` +
				`<meta name="description" content="Watch a replay of a Pokémon battle between ${room.p1?.name} and ${room.p2?.name} (${format})" />` +
				'<style>\n' +
				'html,body {font-family:Verdana, sans-serif;font-size:10pt;margin:0;padding:0;}body{padding:12px 0;} .battle-log {font-family:Verdana, sans-serif;font-size:10pt;} .battle-log-inline {border:1px solid #AAAAAA;background:#EEF2F5;color:black;max-width:640px;margin:0 auto 80px;padding-bottom:5px;} .battle-log .inner {padding:4px 8px 0px 8px;} .battle-log .inner-preempt {padding:0 8px 4px 8px;} .battle-log .inner-after {margin-top:0.5em;} .battle-log h2 {margin:0.5em -8px;padding:4px 8px;border:1px solid #AAAAAA;background:#E0E7EA;border-left:0;border-right:0;font-family:Verdana, sans-serif;font-size:13pt;} .battle-log .chat {vertical-align:middle;padding:3px 0 3px 0;font-size:8pt;} .battle-log .chat strong {color:#40576A;} .battle-log .chat em {padding:1px 4px 1px 3px;color:#000000;font-style:normal;} .chat.mine {background:rgba(0,0,0,0.05);margin-left:-8px;margin-right:-8px;padding-left:8px;padding-right:8px;} .spoiler {color:#BBBBBB;background:#BBBBBB;padding:0px 3px;} .spoiler:hover, .spoiler:active, .spoiler-shown {color:#000000;background:#E2E2E2;padding:0px 3px;} .spoiler a {color:#BBBBBB;} .spoiler:hover a, .spoiler:active a, .spoiler-shown a {color:#2288CC;} .chat code, .chat .spoiler:hover code, .chat .spoiler:active code, .chat .spoiler-shown code {border:1px solid #C0C0C0;background:#EEEEEE;color:black;padding:0 2px;} .chat .spoiler code {border:1px solid #CCCCCC;background:#CCCCCC;color:#CCCCCC;} .battle-log .rated {padding:3px 4px;} .battle-log .rated strong {color:white;background:#89A;padding:1px 4px;border-radius:4px;} .spacer {margin-top:0.5em;} .message-announce {background:#6688AA;color:white;padding:1px 4px 2px;} .message-announce a, .broadcast-green a, .broadcast-blue a, .broadcast-red a {color:#DDEEFF;} .broadcast-green {background-color:#559955;color:white;padding:2px 4px;} .broadcast-blue {background-color:#6688AA;color:white;padding:2px 4px;} .infobox {border:1px solid #6688AA;padding:2px 4px;} .infobox-limited {max-height:200px;overflow:auto;overflow-x:hidden;} .broadcast-red {background-color:#AA5544;color:white;padding:2px 4px;} .message-learn-canlearn {font-weight:bold;color:#228822;text-decoration:underline;} .message-learn-cannotlearn {font-weight:bold;color:#CC2222;text-decoration:underline;} .message-effect-weak {font-weight:bold;color:#CC2222;} .message-effect-resist {font-weight:bold;color:#6688AA;} .message-effect-immune {font-weight:bold;color:#666666;} .message-learn-list {margin-top:0;margin-bottom:0;} .message-throttle-notice, .message-error {color:#992222;} .message-overflow, .chat small.message-overflow {font-size:0pt;} .message-overflow::before {font-size:9pt;content:\'...\';} .subtle {color:#3A4A66;}\n' +
				'</style>\n' +
				'<div class="wrapper replay-wrapper" style="max-width:1180px;margin:0 auto">\n' +
				`<input type="hidden" name="replayid" value="${id}" />\n` +
				// todo: somehow add seed info here
				// maybe use room.battle.stream?
				'<div class="battle"></div><div class="battle-log"></div><div class="replay-controls"></div><div class="replay-controls-2"></div>\n' +
				`<pre class="urlbox" style="word-wrap: break-word;">https://replay.sciroccogti.top/files/${link}</pre>\n` +
				`<h1 style="font-weight:normal;text-align:left"><strong>${format}</strong>: <a href="https://pokemonshowdown.com/users/${toID(room.p1?.name)}" class="subtle" target="_blank">${room.p1?.name}</a> vs. <a href="https://pokemonshowdown.com/users/${toID(room.p2?.name)}" class="subtle" target="_blank">${room.p2?.name}</a></h1>\n` +
				'<p style="padding:0 1em;margin-top:0">' +
				`<small class="uploaddate" data-timestamp="${Date.now() / 1000}"><em>Uploaded:</em> ${new Date().toDateString().split(" ")[1]} ${new Date().toDateString().split(" ")[2]}, ${new Date().getFullYear()} ${rating ? '| <em>Rating:</em>' + rating : ''}</small>` +
				'</p>' +
				`<script type="text/plain" class="battle-log-data">${data}</script>\n` +
				'</div>\n' +
				'<script>\n' +
				`let daily = Math.floor(Date.now()/1000/60/60/24);document.write('<script src="https://psc.sciroccogti.top/js/replay-embed.js?version'+daily+'"></'+'script>');\n` +
				'</script>\n'
			);
			out.end();
		});

		room.battle.replaySaved = true;

		// this.connection.popup(`Replay saved! TTTEST_`);
		if (target !== 'silent') {
			this.connection.popup(this.tr`Your replay has been uploaded! It's available at: https://replay.sciroccogti.top/files/${link}`);

			this.connection.send('|queryresponse|savereplay|' + JSON.stringify({
				// log: data,
				// id: id,
				// password: password,
				uri: link,
				silent: true, // to avoid the official client popup
				// hidden: secret,
			}));
		}
	},
	saveserverreplayhelp: ["/ssr or /saveserverreplay - Save the replay of the battle to server. (We are not a registered server so saving replays to replay.pokemonshowdown.com won't work.)"],
	ssrhelp: ["/ssr or /saveserverreplay - Save the replay of the battle to server. (We are not a registered server so saving replays to replay.pokemonshowdown.com won't work.)"],
};
