'use strict';
const BootBot = require('BootBot');

const bot = new BootBot({
  accessToken:'EAARKjqIsmgsBAEZB85ENWjlph9FZBwP5ZBAFDHDazgTd8B4lQgPpslxQXy8ZBnTw4yUnGBRYZAkp2bbAivZC5mUKZAbqqCeYRBbSkc7gUSyhQlUwBAh27ab8Vpq6sIpDrjqsaBnurlQM0wwyFSwayzSzQ2hDJUP1jZBzvanRFZCgZAmI34wlaUwfZA4',
  verifyToken:'tutuanletkpt',
  appSecret:'b8b71b6f5f0bca8c2df902a29a450466'  
})

bot.hear(['hello', 'hi', 'hey'], (payload, chat) =>{
    chat.say('hello there');
});

bot.start();