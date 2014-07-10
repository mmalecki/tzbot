var getTime = require('./get-time.js')

function pad(n) {
  return n < 10 ? ('0' + n.toString()) : n.toString();
}

function timeToString(d) {
  return [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
}

module.exports = function tzbot(ircb) {
  function reply(to, location) {
    console.log('checking ' + location + ' for ' + to)
    getTime(location, function (err, time) {
      ircb.say(to, timeToString(time))
    })
  }

  ircb.on('message', function (from, to, message) {
    // If this is a direct message, reply to the person who sent it.
    if (to === ircb.nick) return reply(from, message)
    // If this is a channel message, check if it's meant for us and reply to
    // the channel.
    var match = message.match(new RegExp('^' + ircb.nick + '[,:]? (.+)'));
    if (match) reply(to, match[1])
  })
}
