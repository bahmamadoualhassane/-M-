const fs = require('fs');

module.exports = {
  config: {
    name: "file",
    version: "1.0",
    author: "ÑÅŘÜŢØ",
    countDown: 5,
    role: 0,
    shortDescription: "Send bot script",
    longDescription: "Send bot specified file ",
    category: "owner",
    guide: "{pn} file name. Ex: .{pn} filename"
  },

  onStart: async function ({ message, args, api, event }) {
    const permission = ["61560421992487", "100026415671401"];
    if (!permission.includes(event.senderID)) {
      return api.sendMessage("❌ 𝑳𝒐𝒍 𝒅𝒆́𝒈𝒂𝒈𝒆 𝒎𝒖𝒆𝒕𝒕𝒆𝒔 🧘‍♀️  𝒔𝒆𝒖𝒍 🧞‍♂️ÑÅŘÜŢØ🧞‍♂️ 𝒑𝒆𝒖𝒙 𝒖𝒕𝒊𝒍𝒊𝒔𝒆𝒓 𝒄𝒆𝒕𝒕𝒆 𝒄𝒐𝒎𝒎𝒂𝒏𝒅𝒆 😡", event.threadID, event.messageID);
    }
    
    const fileName = args[0];
    if (!fileName) {
      return api.sendMessage("le fichier ❓.", event.threadID, event.messageID);
    }

    const filePath = __dirname + `/${fileName}.js`;
    if (!fs.existsSync(filePath)) {
      return api.sendMessage(`𝐃𝐞𝐬𝐨𝐥𝐞́ 𝐛𝐨𝐬𝐬 𝐜𝐞𝐭𝐭𝐞 𝐜𝐦𝐝 𝐧'𝐞𝐱𝐢𝐬𝐭𝐞 𝐩𝐚𝐬 𝐝𝐚𝐧𝐬 𝐦𝐞𝐬 𝐜𝐦𝐝𝐬 [✖]: ${fileName}.js`, event.threadID, event.messageID);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    api.sendMessage({ body: fileContent }, event.threadID);
  }
};
