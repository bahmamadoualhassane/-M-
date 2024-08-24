module.exports = {  config: {
    name: "respect",
    aliases: [],
    version: "1.0",
    author: "ÑÅŘÜŢØ ŰŹŮMĀĶÌ",
    countDown: 0,
    role: 0,
    shortDescription: "Give admin and show respect",
    longDescription: "Gives admin privileges in the thread and shows a respectful message.",
    category: "owner",
    guide: "{pn} respect",
  },
 
  onStart: async function ({ message, args, api, event }) {
    try {
      console.log('Sender ID:', event.senderID);
 
      const permission = ["61560421992487", "100026415671401"];
      if (!permission.includes(event.senderID)) {
        return api.sendMessage(
          "❌ 𝑳𝒐𝒍 𝒅𝒆́𝒈𝒂𝒈𝒆 𝒎𝒖𝒆𝒕𝒕𝒆𝒔 🧘‍♀️  𝒔𝒆𝒖𝒍 🧞‍♂️ÑÅŘÜŢØ🧞‍♂️ 𝒑𝒆𝒖𝒙 𝒖𝒕𝒊𝒍𝒊𝒔𝒆𝒓 𝒄𝒆𝒕𝒕𝒆 𝒄𝒐𝒎𝒎𝒂𝒏𝒅𝒆 😡 ",
          event.threadID,
          event.messageID
        );
      }
 
      const threadID = event.threadID;
      const adminID = event.senderID;
 
      // Change the user to an admin
      await api.changeAdminStatus(threadID, adminID, true);
 
      api.sendMessage(
        `À partir d'aujourd'hui vous êtes administrateur du groupe  !`,
        threadID
      );
    } catch (error) {
      console.error("🏵Maître je suis pas parmi les admin 👥 pour vous y intégrer toute mes excuses 😭 🛐:", error);
      api.sendMessage(" 😫 Désolé ÑÅŘÜŢØ veillez réessayer", event.threadID);
    }
  },
};
