# tzbot
UNIX-y time zone IRC bot.

```
< mmalecki> tzbot: san francisco
< tzbot> 13:04:53
```

## Installation
```sh
npm -g i tzbot
```

## Usage

```
Options:
  --host, -h       IRC server (e.g. chat.freenode.net)  [required]
  --port, -p       IRC server port                      [required]
  --secure         Whether to use TLS                   [default: true]
  --nick, -n       Bot's nick                           [required]
  --real-name, -r  Bot's real name                      [required]
  --username, -u   Bot' username                        [required]
  --channel, -c    Channel(s) to connect to
```

Like:

```
tzbot -h chat.freenode.net -p 6697 -n tzbotexample -r tzbotexample -u tzbotexample -c '#nodebombrange'
```
