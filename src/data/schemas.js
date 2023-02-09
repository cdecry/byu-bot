const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

// users collection
const userSchema = new mongoose.Schema({
    discordID: { type: Number, required: true },
    globalBalance: { type: Number, required: true },
    servers: { type: Object, default: {} }
});

// servers collection
const serverSchema = new mongoose.Schema({
    serverID: { type: Number, required: true },
    serverName: { type: String, required: true },
    usersUsing: { type: mongoose.Schema.Types.Mixed, default: {} }
})

exports.User = mongoose.model('User', userSchema);