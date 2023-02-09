const Eris = require("eris");
const c = require('./constants');
const utils = require('./utils');
const dao = require('./data/dataAccess');
const { embedAbout, embedHelp, embedFish } = require("./embeds");

exports.cmdPing = async function (client, msg) {
    // this is slower bc caches, dont use unless necessary
    // msg.channel.createMessage({ content: "pong!" })
    client.createMessage(msg.channel.id, { content: "pong!" });
}

exports.cmdAbout = async function (client, msg) {
    client.createMessage(msg.channel.id, { embed: embedAbout });
}

exports.cmdHelp = async function (client, msg) {
    client.createMessage(msg.channel.id, { embed: embedHelp });
}

exports.cmdFish = async function (client, msg) {
    let amount = utils.getRandomInt(3, 85);
    let res = await dao.handleFish(msg.author.id, msg.channel.guild.id, amount);

    client.createMessage(msg.channel.id, { embed: embedFish });
}