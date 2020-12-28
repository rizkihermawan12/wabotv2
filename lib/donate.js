exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `
  
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───
         
 *Donasi Ke ${BotName}*
≽️⚜ *INDOSAT*: _085803639392_
≽️⚜ *OVO*: _085803639392_

DONASIKAN TERUSS..
UNTUK BOT KAMI AGAR SELALU AKTIF.
DAN BISA UPDATE SCRIPT !!

╭── *SOSMED ADMIN* ──
│1. *Group WhatsApp*
│ _${grupch1}_
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

