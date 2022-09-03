let fs = require('fs')
let fetch = require('node-fetch')
let handler  = async (m, { conn, usedPrefix: _p }) => {
m.reply('Bot On')
}
handler.customPrefix = /^(tes|tess|test|bot)$/i
handler.command = new RegExp

module.exports = handler
