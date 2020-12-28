exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `
	

  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️

         ───
📆 *${tampilTanggal}*
⏱️  *${tampilWaktu}*
         ───

╔═══
║ *FITUR BOT ${BotName}*
╠════════════

🌄 *STICKER MAKER* 🌄
1. *#sticker*
Membantu anda membuat sticker dengan cepat aowkwk

*MEDIA COMMAND* 📽️
Cari media tinggal download? *Disini aja cuy*

1. *#ytmp3* <linkyoutube>
2. *#ytmp4* <linkyoutube>
3. *#tiktok* <linktiktok>
4. *#ig* <linkIg>
5. *#fb* <linkFb>
6. *#twt* <linkTweet>

 *EDUCATION COMMAND* 📄
 Bingung cari Pertanyaan? disini aja cuy banyak.
1. *#wiki* <query>Wikipedia.
2. *#nulis* <teks>
3. *#quran*
4. *#pantun*
5. *#nama* <nama anda>
6. *#pasangan* <Rizki & Hmm>
7. *#lirik* <nama lagu>
8. *#chord* <nama lagu>

📂 *INFORMATION* 📂
1. *#sholat* <daerah>
2. *#covid*
3. *#infogempa*

[*${BotName}*]
 *OTHERS COMMAND* 📠
1. *#tts* <teks>
2. *#quotes*
3. *#donasi*
4. *#foto cewek*
5. *#foto cowok*
6. *#pokemon*
7. *#loli*
8. *#hentai*
9. *#fotoanime*
10. *#namaninja* <nama lu>


*CREATOR KONTACT*📸
1. *#creator*
2. *#owner*


Mau Pasang Iklan di : *${BotName}*
Hubungin Owner ♻️

╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ *${grupch1}*
║│
║│3. *YouTube <subscribe>*
║│ ${grupch2}
║│
║│4.. *Instagram <Follow>*
║│ *${instagramlu}*
║│
║│5. *Creator ${BotName}*
║│ ${whatsapplu}
║╰───────────
╠════════════════════`
}
