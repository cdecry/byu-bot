const { User, Avatar, Item} = require("./schemas");

/*
const userSchema = new mongoose.Schema({
    discordID: { type: Number, required: true },
    globalBalance: { type: Number, required: true },
    servers: [{
        serverID: { type: Number, required: true },
        balance: { type: Number, required: true },
        items: [{
            itemID: { type: Number, required: true },
            quantity: { type: Number, required: true }
        }]
    }]
});*/

//#region userResolver
exports.addUser =  async function (discordID, serverID) {
    const newUser = new User({
        discordID: discordID,
        globalBalance: 0,
        servers: [{
            serverID: serverID,
            balance: 0,
            items: []
        }]
    });
    await newUser.save();
    console.log('someone new is using byu-bot!');
}

// exports.loginRequest = async function (username, password) {
//     return new Promise((resolve, reject) => {
//         User.findOne({ 'username': username }, 'id username password', function (err, user) {
//             if (user != null && password === user.password)
//                 resolve(user.id);
//             else
//                 resolve(null);
//         });
//     });
// }

// exports.getNumberOfUsers = async function () {
//     return new Promise((resolve, reject) => {
//         User.countDocuments({}, function (err, count) {
//             resolve(count);                
//         });
//     });
// }

exports.getUserGlobalBalance = async function (discordID) {
    return new Promise((resolve, reject) => {
        User.findOne({ 'discordID': discordID }, 'globalBalance', function (err, user) {
            resolve(globalBalance);
        });
    });
}

// exports.updateInventory = async function (id, inventory) {
//     return new Promise((resolve, reject) => {
//         User.updateOne({ 'id': id }, { $set: { 'inventory': inventory } }, function (err, count) {
//             console.log('updateInventory: User inventory updated');
//             resolve();                
//         });
//     });
// }


// exports.addToInventory = async function (discordID, itemType, itemTypeId, coined) {
//     return new Promise((resolve, reject) => {
//         User.findOne({ 'id': discordID }, 'inventory', function (err, user) {
//             if (user != null) {
//                 var inventoryObj = user.inventory;
                
//                 inventoryObj[itemType.toString()].push({id: itemTypeId, coined: coined});

//                 User.updateOne({ 'id': discordID }, { $set: { 'inventory': inventoryObj } }, function (err, count) {resolve();});
//             }
//             console.log('Added to inventory');
//             resolve();
//         });
//     });
// }

// //#endregion

// //#region avatarResolver

// exports.addAvatar =  async function (id, discordID, gender, eyeType, skinTone, equipped) {
//     const newAvatar = new Avatar({
//         id: id,
//         discordID: discordID,
//         gender: gender,
//         eyeType: eyeType,
//         skinTone: skinTone,
//         equipped: equipped,
//     });
//     await newAvatar.save();
//     console.log('new avatar created');
// }

// exports.getUserAvatar = async function (discordID) {
//     return new Promise((resolve, reject) => {
//         Avatar.findOne({ 'discordID': discordID }, 'gender eyeType skinTone equipped', function (err, avatar) {
//             var avatarObj = new Object();
//             avatarObj['discordID'] = discordID;
//             avatarObj['gender'] = avatar.gender;
//             avatarObj['eyeType'] = avatar.eyeType;
//             avatarObj['skinTone'] = avatar.skinTone;
//             avatarObj['equipped'] = avatar.equipped;
//             // console.log('equipped: ' + avatarObj.equipped);
//             resolve(avatarObj);
//         });
//     });
// }

// exports.changeEyeType =  async function (discordID, eyeType) {
//     return new Promise((resolve, reject) => {
//         Avatar.updateOne({ 'discordID': discordID }, { $set: { 'eyeType': eyeType } }, function (err, count) {
//             console.log('changeEyeType: Avatar eye type updated');
//             resolve();                
//         });
//     });
// }

// exports.changeSkinTone =  async function (discordID, skinTone) {
//     return new Promise((resolve, reject) => {
//         Avatar.updateOne({ 'discordID': discordID }, { $set: { 'skinTone': skinTone } }, function (err, count) {
//             console.log('changeSkinTone: Avatar skin tone updated');
//             resolve();                
//         });
//     });
// }

// exports.changeEquipped = async function (discordID, equipped) {
//     return new Promise((resolve, reject) => {
//         Avatar.updateOne({ 'discordID': discordID }, { $set: { 'equipped': equipped } }, function (err, count) {
//             console.log('changeEquipped: Avatar equipped updated');
//             resolve();                
//         });
//     });
// }

// //#endregion

// //#region itemResolver

// // for development
// exports.addItem =  async function (itemId, id, type, gender, name, description, price, ecoinPrice, requiredLevel, rarity, rarePoints, membership) {
//     const newItem = new Item({
//         itemId: itemId,
//         id: id,
//         type: type,
//         gender: gender,
//         name: name,
//         description: description,
//         price: price,
//         ecoinPrice: ecoinPrice,
//         requiredLevel: requiredLevel,
//         rarity: rarity,
//         rarePoints, rarePoints,
//         membership: membership,
//     });
//     await newItem.save();
//     console.log('addItem: new item added');
// }

// exports.getItem = async function (type, id) {
//     return new Promise((resolve, reject) => {
//         Item.findOne({ 'type': type, 'id': id }, function (err, item) {
//             resolve(item);
//         });
//     });
// }

//#endregion
