let fs = require('fs')
let fetch = require('node-fetch')
let handler  = async (m, { conn, usedPrefix: _p }) => {
m.reply('Bot On')
}
handler.customPrefix = /^(tes|tess|test|bot|robot)$/i
handler.command = new RegExp

module.exports = handler
