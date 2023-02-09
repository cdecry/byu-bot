const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const { addUser, getUserGlobalBalance, checkUserServer, updateUserServerBalance, addToUserServerBalance } = require("./queries");

exports.handleFish = async function (discordID, serverID, amount) {
    let userCheck = await checkUserServer(discordID, serverID);
    console.log(`handleFish: ${JSON.stringify(userCheck.server)}, ${amount}`);
    let resUser = await addToUserServerBalance(userCheck.user, serverID, amount);
    console.log(`new: ${JSON.stringify(resUser.servers)}`);
}