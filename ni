+cmd install ni.js  
const axios = require('axios');

async function fetchFromAI(url, params) {
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getAIResponse(input, userId, messageID) {
  const services = [
    { url: 'https://ai-tools.replit.app/gpt', params: { prompt: input, uid: userId } },
    { url: 'https://openaikey-x20f.onrender.com/api', params: { prompt: input } },
    { url: 'http://fi1.bot-hosting.net:6518/gpt', params: { query: input } },
    { url: 'https://ai-chat-gpt-4-lite.onrender.com/api/hercai', params: { question: input } }
  ];

  let response = "𝐒𝐚𝐥𝐮𝐭 😁, 𝐦𝐨𝐢 𝐜'𝐞𝐬𝐭 🍎╣𝗡𝗜𝗠𝗔╠🍎 𝐞𝐭 𝐬𝐮𝐢𝐬 𝐥𝐚̀ 𝐩𝐨𝐮𝐫 𝐫𝐞́𝐩𝐨𝐧𝐝𝐫𝐞 𝐚̀ 𝐭𝐞𝐬 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧𝐬...(⁠◠⁠‿⁠◕⁠).";
  let currentIndex = 0;

  for (let i = 0; i < services.length; i++) {
    const service = services[currentIndex];
    const data = await fetchFromAI(service.url, service.params);
    if (data && (data.gpt4 || data.reply || data.response)) {
      response = data.gpt4 || data.reply || data.response;
      break;
    }
    currentIndex = (currentIndex + 1) % services.length; // Move to the next service in the cycle
  }

  return { response, messageID };
}

module.exports = {
  config: {
    name: 'Ni',
    author: 'ÑÅŘÜŢØ',
    role: 0,
    category: 'ni',
    shortDescription: "𝐄́𝐜𝐫𝐢𝐭 𝐍𝐢 𝐚𝐯𝐚𝐧𝐭 𝐝𝐞 𝐩𝐨𝐬𝐞́ 𝐭'𝐞𝐬 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧",
  },
  onStart: async function ({ api, event, args }) {
    const input = args.join(' ').trim();
    if (!input) {
      api.sendMessage(`❤━━━━━━━━\nPlease provide a question or statement.\n━━━━━━━━━━━━━━━━`, event.threadID, event.messageID);
      return;
    }

    const { response, messageID } = await getAIResponse(input, event.senderID, event.messageID);
    api.sendMessage(`👩‍💻🙂❤━━━━━━━━\n${response}\n━━━━━━━━━━━━━━━━`, event.threadID, messageID);
  },
  onChat: async function ({ event, message }) {
    const messageContent = event.body.trim().toLowerCase();
    if (messageContent.startsWith("ni")) {
      const input = messageContent.replace(/^ni\s*/, "").trim();
      const { response, messageID } = await getAIResponse(input, event.senderID, message.messageID);
      message.reply(`
                       

❣🧞‍♂️⚜🍎╣𝗡𝗜𝗠𝗔╠🍎⚜🧞‍♂️❣
\n🧞‍♂️ ${response} 🧞‍♂️\n❣🧞‍♂️⚜🍎╣𝗡𝗜𝗠𝗔╠🍎⚜🧞‍♂️❣`, messageID);
    }
  }
};
