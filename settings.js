//Ubah Image/Thumbnail di folder maslent/pplent/maslent.png (Cari fotomu Ubah namnya ganti jadi maslent.png trus di gantu make pp mu yang baru

const fs = require('fs')
const chalk = require('chalk')
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
//==============================\
autoread = true
///Ganti sesuai lu terus ganti sempak lu ya,
global.pulsa = "6285771095624"
global.gopay = "6285771095724"
global.dana = "6285771095624"
global.packname = 'By'
global.footer = '©VallBotz'
global.ovo = "6285771095624"
global.ownerlen = "Vallsadboy"//Ubah
global.owner = ['6285771095624'] //ubh nomor owner hp
global.ownername = "Vallsadboy" //ubah
global.ytname = "YT : @VallBotz"//ubah
global.socialm = "IG : @vall_sadboy"//ubah
global.location = "Indonesia, Depok, Jabar"//ubah
global.ownernomer = "6285771095624"//ubah nomorhp owner
global.premium = ['6285771095624']//ubah nomor hp premium
global.nomorcs = '6285771095624'
global.botname = 'VallBotz' //ubah
global.linkz = "https://chat.whatsapp.com/LMoogYB7Fjc3v1ep9GwBG2"//ubah
global.websitex = "https://youtube.com/@xynabotzreal"//ubah
global.botscript = 'di channel XynaBotz Ya'
global.themeemoji = "😿"//ubah
global.packname = "Sticker By Vall?"//ubah
global.author = "Made by Valldesu"//ubah
global.wm = "VallBotz"//ubah
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Berhasil Di Proses!...', //gk usah di ganti lu gk bakal bisa nanti malah error 
    admin: 'Fitur ini hanya dapat digunakan oleh admin!',
    botAdmin: 'Bot Harus Jadi Admin Dulu!',
    premime: 'Fitur Khusus Premium Jika Ingin Mendaftar Jenis Sewa',
    owner: 'Fitur ini hanya dapat digunakan oleh owner',
    group: 'Fitur Hanya Digunakan Untuk Grup!',
    private: 'Fitur yang Digunakan Hanya Untuk chat Pribadi!',
    bot: 'Fitur ini hanya dapat digunakan oleh bot',
    wait: 'Lagi Di Proses Sayang😣',
    linkm: 'Di mana tautannya?',
    endLimit: 'Upss Limit Kamu sudah habis..Tunggu Waktu menunjukan Pukul 12:00 Limit Anda otomatis akan Di reset!!!',
    nsfw: 'Fitur nsfw belum diaktifkan, silahkan hubungi admin untuk aktivasi',
}
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.thum = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.log0 = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.err4r = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.thumb = fs.readFileSync("./Maslent/pplent/maslent.jpg")
    global.limitawal = {
    premium: "Infinity",
    free: 12, // limit awall 
    monayawal: 1000
}
global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}
global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
