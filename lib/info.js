exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `*MENU ${BotName}*
  
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───
         

*About ${BotName}*

├≽️⚜ *AUTHOR*: RIZKI HERMAWAN
├≽️⚜ *DESIGNER*: RIZKI HERMAWAN
├≽️⚜ *YOUTUBE*: RIZKI HERMAWAN



╭── *SOSMED ADMIN* ──
│1. *Group WhatsApp*
│ ${grupch1}
│
│2. *YouTube <subscribe>*
│ _${grupch2}_
│
│3. *Instagram <Follow>*
│ _${instagramlu}_
│
│4. *Creator ${BotName}*
│ _${whatsapplu}_
╰───────────`
}
