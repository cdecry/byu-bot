const Eris = require("eris");
const { prefix } = require("./constants");

exports.validCommand = function (msg) {
    if (msg.author.bot || !msg.channel.guild || !msg.content.startsWith(prefix)) return false;
    return true;
}

exports.createEmbed = function (title, description, color, author, authorIconURL, imageURL, thumbnailURL, footer, footerIcon, fields, timestamp) {
    return {
        title: title,
        description: description,
        timestamp: timestamp,
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

exports.getRandomInt = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}