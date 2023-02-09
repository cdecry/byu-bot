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

// checks if a) user has used byu-bot before b) user has used byu-bot in THIS server
exports.checkUserServer = async function (discordID, serverID) {
    return new Promise((resolve, reject) => {
        User.findOne({ 'discordID': discordID }, 'servers', async function (err, user) {
            if (err) {
                reject(err);
            }
            let res;
            if (!user) {
                res = await queries.addUser(discordID, serverID);
                console.log(`checkUserServer new user server: ${String(res.server)}`);
                resolve({ user: res.user, server: res.server, userExists: false, usedInServer: false });
            } else {

                //let server = user.servers.find(s => s.serverID === serverID);
                let server = user.servers[serverID];
                console.log(`checkUserServer user but no server   server: ${String(user.servers[serverID])}`);

                if (!server) {
                    // res = await.addUserServer(discordID, serverID)
                    // resolve({ user: user, server: res.server, userExists: true, usedInServer: true });
                    resolve({ user: user, server: server, userExists: true, usedInServer: true });
                } else {
                    resolve({ user: user, server: server, userExists: true, usedInServer: false });
                }
            }
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

exports.getUserGlobalBalance = async function (discordID) {
    return new Promise((resolve, reject) => {
        User.findOne({ 'discordID': discordID }, 'globalBalance', function (err, user) {
            if (err) {
                reject(err);
            }
            resolve(user.globalBalance);
        });
    });
}