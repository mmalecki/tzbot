#!/usr/bin/env node
var IRCb = require('ircb')
var args = require('yargs')
  .alias('host', 'h')
  .demand('host')
  .describe('host', 'IRC server (e.g. chat.freenode.net)')

  .alias('port', 'p')
  .demand('port')
  .describe('port', 'IRC server port')

  .default('secure', true)
  .describe('secure', 'Whether to use TLS')

  .alias('nick', 'n')
  .demand('nick')
  .describe('nick', 'Bot\'s nick')

  .alias('real-name', 'r')
  .demand('real-name')
  .describe('real-name', 'Bot\'s real name')
  
  .alias('username', 'u')
  .demand('username')
  .describe('username', 'Bot\' username')

  .alias('channel', 'c')
  .describe('channel', 'Channel(s) to connect to')

  .argv

var tzbot = require('./tzbot.js')
var reconnect = require('reconnect' + (args.secure ? '/tls' : ''))

reconnect(function (stream) {
  var irc = IRCb({
    nick: args.nick,
    realName: args['real-name'],
    username: args.username,
    channels: Array.isArray(args.channel) ? args.channel : [args.channel]
  })
  stream.pipe(irc).pipe(stream)
  tzbot(irc)
}).connect({
  host: args.host,
  port: args.port
})
