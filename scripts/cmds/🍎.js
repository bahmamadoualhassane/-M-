+cmd install 🍎.js 
module.exports = {
    config: {
        name: "🍎",
        version: "1.0",
        author: "ÑÅŘÜŢØ ",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
onStart: async function(){},
onChat: async function({ event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "🍎") return message.reply("🧞‍♂️🍎🍎𝐌𝐀𝐌𝐀𝐃𝐎𝐔-𝐁𝐀𝐇🍎🍎🧞‍♂️         🦧🍎𝐍𝐀𝐑𝐔𝐓𝐎-𝐔𝐙𝐔𝐌𝐀𝐊𝐈🍎🦧");
}
};
