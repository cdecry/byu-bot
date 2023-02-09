const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const { addUser, getUserGlobalBalance } = require("./queries");

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.DB_URI);
    
    // ADD USER
    await addUser(newId, );
}