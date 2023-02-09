const Eris = require("eris");
const c = require('./constants');
const utils = require('./utils');
const dao = require('./data/dataAccess');

// module.exports = {
//     cmdPing,
//     cmdAbout,
//     cmdHelp,
//     cmdTestAddUser,
// };

exports.cmdPing = async function (client, msg) {
    // this is slower bc caches, dont use unless necessary
    // msg.channel.createMessage({ content: "pong!" })
    client.createMessage(msg.channel.id, { content: "pong!" });
}

exports.cmdAbout = async function (client, msg) {
    let embed = utils.createEmbed(c.ABOUT_TITLE, c.ABOUT_DESCRIPTION, c.ABOUT_COLOR, c.ABOUT_AUTHOR, c.ABOUT_AUTHOR_ICON, c.ABOUT_IMAGE, c.ABOUT_THUMBNAIL, c.ABOUT_FOOTER, c.ABOUT_FOOTER_ICON, []);
    client.createMessage(msg.channel.id, { embed: embed });
}

exports.cmdHelp = async function (client, msg) {
    let embed = utils.createEmbed("", c.HELP_DESCRIPTION, c.ABOUT_COLOR, c.ABOUT_AUTHOR, c.ABOUT_AUTHOR_ICON, "", "", "", "", c.HELP_FIELDS);
    client.createMessage(msg.channel.id, { embed: embed });
}

exports.cmdTestAddUser = async function (client, msg) {

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

exports.cmdFish = async function (client, msg) {
    var amount = utils.getRandomInt(3, 85);

    let res = await dao.handleFish(msg.author.id, msg.channel.guild.id, amount);
    let embed = utils.createEmbed(`u went fishing an made ${amount} c:`, "", c.ABOUT_COLOR, "", "", "", "", "", "", []);
    client.createMessage(msg.channel.id, { embed: embed });
}