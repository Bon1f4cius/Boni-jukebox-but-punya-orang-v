const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

else if (command === "loop") {
        if (serverQueue) {
            serverQueue.loop = !serverQueue.loop;
            return message.channel.send({embed: {color: "GREEN", description: `🔁  **|**  Loop is **\`${serverQueue.loop === true ? "enabled" : "disabled"}\`**`}});
        };
        return message.channel.send({embed: {color: "RED", description: "There is nothing playing"}});
    }
