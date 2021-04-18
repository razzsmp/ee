const mineflayer = require('mineflayer')
const bot = mineflayer.createBot({
  host: 'de16.falix.gg',             // minecraft server ip
  username: 'dzheyden1', // minecraft username
  //password: '12345678',          // minecraft password, comment out if you want to log into online-mode=false servers
  port: 26324,                // only set if you need a port that isn't 25565
  // version: false,             // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
  // auth: 'mojang'              // only set if you need microsoft auth, then set this to 'microsoft'
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  bot.chat(message)
})
const { mineflayer: mineflayerViewer } = require('prismarine-viewer')
bot.once('spawn', () => {
  mineflayerViewer(bot, { port: 3007, firstPerson: true }) // port is the minecraft server port, if first person is false, you get a bird's-eye view
})

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)