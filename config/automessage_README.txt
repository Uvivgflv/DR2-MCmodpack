Hello, and welcome to AutoMessage! Feel free to delete this file if you don't need it anymore.

Your messages are sent to the player from either the client instance of the mod, or the server instance of the mod.
In single-player worlds, both are present at the same time. The mod can exist only on the server, and still sends
messages to the player; vanilla clients are able to receive the messages without issues.

The config files 'automessage-client.json' and 'automessage-server.json' each have a list of message files that you can
add to, and an option to disable the mod if needed. "Message files" are JSON files that hold a list of messages (the
list is defined by square brackets []), and messages follow the pattern:
{
  "identifier": "your_message_id",
  "schedule": "on_first_join",
  "type": "chat",
  "repeats": false,
  "pack_intro": false,
  "link": "",
  "text: "§2Your first message!§f"
}

So if you wanted to send messages from the client to the player, you would create a new file 'my_message_file.json' in 'config/messages'
containing your messages:
[
  {
    "identifier": "your_message_id",
    "schedule": "on_first_join",
    "type": "chat",
    "repeats": false,
    "pack_intro": false,
    "link": "https://www.google.com/",
    "text: "§2Your first message!§f"
  },
  {
    "identifier": "your__other_message_id",
    "schedule": "on_respawn",
    "type": "overlay",
    "repeats": true,
    "pack_intro": false,
    "text: "§2Welcome back!§f"
  }
]

And link the file in 'automessage-client.json':
{
  "general": {
    "enabled": true
  },
  "message_json_files": [
    "messages/my_message_file.json"
  ]
}

Or multiple files:
{
  "general": {
    "enabled": true
  },
  "message_json_files": [
    "messages/my_join_messages.json",
    "messages/first-join-messages.json",
    "messages/player_respawn.json",
    "messages/onPlayerDeath.json"
  ]
}

---

## MESSAGE VARIABLES/FIELDS ##

Message Identifier:
These are used for tracking your message if it repeats, or shouldn't repeat, and if it was sent at the correct schedule.

Message Schedule:
- on_first_join (sent when a player joins a level for the first time
- on_join_level (sends every time a player joins a level)
- on_death (sent every time the player dies)
- on_respawn (sent every time the player respawns)

Message Type:
- chat (sends like a regular chat message)
- overlay (displays centered on the client, above the action bar)

Message Repeat:
- true (the message will send when the same event happens again, even if the player has received it before)
- false (the message will not send again for the current world)

Message Pack Intro:
- true (the message can only ever be received once by the client from joining any level)
- false (the message may be received when joining other worlds)

Message Link:
This is an optional variable/field that can also be omitted as seen in the previous example. If it has any text, it will be attached to the message sent to the player.

Message Text:
The actual message being displayed to the player. You can optionally include '%player%' which will be replaced with the player's name, '%link%' which will be replaced with the link, and Minecraft's built in chat formatting using § (such as §4 for making text dark red, §2 for making text dark green.)
