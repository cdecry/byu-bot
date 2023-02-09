const Eris = require("eris");
const c = require('./constants');

module.exports = {
    validCommand,
    createEmbed,
};

function validCommand(msg) {
    if (msg.author.bot || !msg.channel.guild || !msg.content.startsWith(c.PREFIX)) return false;
    return true;
}

function createEmbed(title, description, color, author, authorIconURL, imageURL, thumbnailURL, footer, footerIcon, fields) {
    return {
        title: title,
        description: description,
        timestamp: new Date(),
        color: color,
        author: {
            name: author, icon_url: authorIconURL
        },
        image: {
            url: imageURL
        },
        thumbnail: {
            url: thumbnailURL
        },
        footer: {
            text: footer, icon_url: footerIcon
        },
        fields: fields
        // fields: [
        //     { name: "audio commands", value: "n/a", inline: true },
        //     { name: "action commands", value: "n/a", inline: false}
        // ]
    };
}