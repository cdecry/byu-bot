const Eris = require("eris");
const c = require('./constants');
const utils = require('./utils');

module.exports = {
    cmdPing,
    cmdAbout,
};

function cmdPing(client, msg) {
    // this is slower bc caches, dont use unless necessary
    // msg.channel.createMessage({ content: "pong!" })
    client.createMessage(msg.channel.id, { content: "pong!" });
}

function cmdAbout(client, msg) {

    let embed = utils.createEmbed(c.ABOUT_TITLE, c.ABOUT_DESCRIPTION, c.ABOUT_COLOR, c.ABOUT_AUTHOR, c.ABOUT_AUTHOR_ICON, c.ABOUT_IMAGE, c.ABOUT_THUMBNAIL, c.ABOUT_FOOTER, c.ABOUT_FOOTER_ICON);
    client.createMessage(msg.channel.id, { embed: embed });
}