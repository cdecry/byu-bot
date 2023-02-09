const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const { addUser, getUserGlobalBalance } = require("./queries");