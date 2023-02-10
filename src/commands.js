const Eris = require("eris");
const c = require('./constants');
const utils = require('./utils');
const dao = require('./data/dataAccess');
const { embedAbout, embedHelp, embedFish, embedBalance } = require("./embeds");

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
    let randomFish = utils.getRandomFish();
    let res = await dao.handleFish(msg.author.id, msg.channel.guild.id, randomFish.amount);
    let balance = res.servers[msg.channel.guild.id]["balance"];
    client.createMessage(msg.channel.id, { embed: embedFish(msg.author.username, randomFish.fish, randomFish.amount, balance) });
}

exports.cmdBalance = async function (client, msg) {
    let balance = await dao.handleBalance(msg.author.id, msg.channel.guild.id);
    client.createMessage(msg.channel.id, { embed: embedBalance(msg.author.username, msg.member.avatarURL, balance) });
}