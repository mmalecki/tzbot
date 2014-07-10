var getTime = require('./get-time.js')

function pad(n) {
  return n < 10 ? ('0' + n.toString()) : n.toString();
}

function timeToString(d) {
  return [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
}

module.exports = function tzbot(ircb) {
  function reply(to, message) {
    console.log('checking ' + message + ' for ' + to)
    getTime(message, function (err, time) {
      ircb.say(to, timeToString(time))
    })
  }

  ircb.on('message', function (from, to, message) {
    // If this is a direct message, reply to the person who sent it.
    if (to === ircb.nick) return reply(from, message)
    // If this is a channel message, reply to the channel.
    reply(to, message)
  })
}
