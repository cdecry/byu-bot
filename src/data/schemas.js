const mongoose = require('mongoose');

// users collection
const userSchema = new mongoose.Schema({
    userID: { type: Number, required: true },
    globalBalance: { type: Number, required: true },
    servers: [{
        serverID: { type: Number, required: true },
        balance: { type: Number, required: true },
        items: [{
            itemID: { type: Number, required: true },
            quantity: { type: Number, required: true }
        }]
    }]
});

// servers collection
const serverSchema = new mongoose.Schema({
    serverID: { type: Number, required: true },
    serverName: { type: String, required: true },
    usersUsing: [String],
})

exports.User = mongoose.model('User', userSchema);