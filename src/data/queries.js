const { User} = require("./schemas");
const queries = require("./queries");

exports.addUser =  async function (discordID, serverID) {
    const servers = {};
    servers[serverID] = {
        serverID: serverID,
        balance: 0,
        items: []
    };

    const newUser = new User({
        discordID: discordID,
        globalBalance: 0,
        servers: servers
    });

    await newUser.save();
    console.log('someone new is using byu-bot!');
    return { user: newUser, server: newUser.servers[serverID] };
}

// add this server to the user's servers object
exports.addToUserServers = async function (user, serverID) {
    return new Promise(async (resolve, reject) => {
        user.servers[serverID] = {
            serverID: serverID,
            balance: 0,
            items: []
        };

        await user.save(function (err, updatedUser) {
            if (err) {
                reject(err);
            }
            resolve(updatedUser);
        });
    });
}

// checks if a) user has used byu-bot before b) user has used byu-bot in THIS server
exports.checkUserServer = async function (discordID, serverID) {
    return new Promise((resolve, reject) => {
        // find a document user  that matches this discordid
        User.findOne({ 'discordID': discordID }, 'servers', async function (err, user) {
            if (err) {
                reject(err);
            }

            let res;
            let server;

            // if document doesn't exist, add this user and return an obj {user: userobj server: current server obj: ...}
            if (!user) {
                res = await queries.addUser(discordID, serverID);
                user = res.user;
                server = res.server;
            }
            
            else { // user exists!
                server = user.servers[serverID];

                if (!server) { // user exists but they haven't used byu in this server before
                    res = await queries.addToUserServers(user, serverID); // add server to user server list
                    server = res.servers[serverID];
                }
            }

            resolve({ user: user, server: server, userExists: true, usedInServer: false });
        });
    });
}

// add/sub to/from current server balance (general use)
exports.addToUserServerBalance = async function (user, serverID, amount) {
    return new Promise(async (resolve, reject) => {

        let temp = JSON.parse(JSON.stringify(user.servers));
        temp[serverID].balance = temp[serverID].balance + amount;
        user.servers = temp;

        await user.save().then(function (updatedUser) {
            resolve(updatedUser);
        }).catch(function (err) {
            reject(err);
        });
    });
};

// update server balnace DIRECTLY (admin use)
exports.updateUserServerBalance = async function (user, server, newBalance) {
    return new Promise(async (resolve, reject) => {
        user.servers[serverID].balance = newBalance;
        await user.save(function (err, updatedUser) {
            if (err) {
                reject(err);
            }
            resolve(updatedUser);
        });
    });
}

// update user server items

// update user global balance

// update user global items

// get user's server balance
exports.getUserServerBalance = async function (discordID, serverID) {
    return new Promise((resolve, reject) => {
        User.findOne({ 'discordID': discordID }, 'globalBalance', function (err, user) {
            resolve(user.servers[serverID]);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

// get user's global balance
exports.getUserGlobalBalance = async function (discordID) {
    return new Promise((resolve, reject) => {
        User.findOne({ 'discordID': discordID }, 'globalBalance', function (err, user) {
            resolve(user.globalBalance);
        })
        .catch((error) => {
            reject(error);
        });
    });
}