const Eris = require("eris");
const c = require('./constants');
const utils = require('./utils');
const dao = require('./data/dataAccess');

module.exports = {
    cmdPing,
    cmdAbout,
    cmdHelp,
    cmdTestAddUser,
};

async function cmdPing(client, msg) {
    // this is slower bc caches, dont use unless necessary
    // msg.channel.createMessage({ content: "pong!" })
    client.createMessage(msg.channel.id, { content: "pong!" });
}

async function cmdAbout(client, msg) {
    let embed = utils.createEmbed(c.ABOUT_TITLE, c.ABOUT_DESCRIPTION, c.ABOUT_COLOR, c.ABOUT_AUTHOR, c.ABOUT_AUTHOR_ICON, c.ABOUT_IMAGE, c.ABOUT_THUMBNAIL, c.ABOUT_FOOTER, c.ABOUT_FOOTER_ICON, []);
    client.createMessage(msg.channel.id, { embed: embed });
}

async function cmdHelp(client, msg) {
    let embed = utils.createEmbed("", c.HELP_DESCRIPTION, c.ABOUT_COLOR, c.ABOUT_AUTHOR, c.ABOUT_AUTHOR_ICON, "", "", "", "", c.HELP_FIELDS);
    client.createMessage(msg.channel.id, { embed: embed });
}

async function cmdTestAddUser(client, msg) {

    let res = await dao.handleTestAddUser(msg.author.id, msg.channel.guild.id);

    let embed;
    if (res === 0)
        embed = utils.createEmbed("thanks for using byu!", "i noticed that this is your first time using byu-bot. " + c.ABOUT_DESCRIPTION, c.ABOUT_COLOR, c.ABOUT_AUTHOR, c.ABOUT_AUTHOR_ICON, c.ABOUT_IMAGE, c.ABOUT_THUMBNAIL, c.ABOUT_FOOTER, c.ABOUT_FOOTER_ICON, []);
    else if (res === 1)
        embed = utils.createEmbed("this server is now in ur list of servers", "", c.ABOUT_COLOR, "", "", "", "", "", "", []);
    else
        embed = utils.createEmbed("welcome back c:", "", c.ABOUT_COLOR, "", "", "", "", "", "", []);

    client.createMessage(msg.channel.id, { embed: embed });
}