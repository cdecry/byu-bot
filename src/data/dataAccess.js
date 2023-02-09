const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const { addUser, getUserGlobalBalance, checkUserServer, updateUserServerBalance, addToUserServerBalance } = require("./queries");

exports.handleTestAddUser =  async function (discordID, serverID) {
    
    // return values: 0 first time byu-bot, 1 first time server, 2 alr exists in both
    let userCheck = await checkUserServer(discordID, serverID);

    if (!userCheck.userExists) {
        await addUser(discordID, serverID);
        return 0;
    }
    else if (userCheck.userExists && !userCheck.usedInServer) {
        // resolver for adding server
        return 1;
    }
    return 2;
}

exports.handleFish = async function (discordID, serverID, amount) {
    let userCheck = await checkUserServer(discordID, serverID);
    console.log(`handleFish: ${JSON.stringify(userCheck.server)}, ${amount}`);
    let resUser = await addToUserServerBalance(userCheck.user, serverID, amount);
    console.log(`new: ${JSON.stringify(resUser.servers)}`);
}