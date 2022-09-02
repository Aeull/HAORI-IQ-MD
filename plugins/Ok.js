let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/2e742d426964c9d937c68.jpg', m, { packname: "Siapa Kita?", author: "YNTKTS" })
}

handler.customPrefix = /^(ok|oke|Thanks)$/i
handler.command = new RegExp

module.exports = handler
