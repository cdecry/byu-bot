const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const { addUser, getUserGlobalBalance, checkUserServer, updateUserServerBalance, addToUserServerBalance, getUserServerBalance } = require("./queries");

exports.handleFish = async function (discordID, serverID, amount) {
    let userCheck = await checkUserServer(discordID, serverID);
    let resUser = await addToUserServerBalance(userCheck.user, serverID, amount);
    return resUser;
}

exports.handleBalance = async function (discordID, serverID) {
    let userCheck = await checkUserServer(discordID, serverID);
    // les resUser = await getUserServerBalance(discordID,)
    return userCheck.user.servers[serverID].balance;
}