const Eris = require("eris");
const c = require('./constants');
const commands = require('./commands');
const utils = require('./utils');
const dotenv = require('dotenv');

dotenv.config();

const client = new Eris(process.env.TOKEN);
var prefix = c.PREFIX;

client.on("ready").catch(err => console.log(err));

client.on("ready", async () => {
    console.log("byu is ready!");
    client.editStatus("idle", { name: 'your mom', type: 3, url: 'http://google.com' });
    await mongoose.connect(process.env.DB_URI);
});

client.on("error", (err) => console.error(err));

client.on("messageCreate", async (msg) => {

    if (utils.validCommand(msg)) {
        
        switch(msg.content) {
            case `${prefix}ping`:
                commands.cmdPing(client, msg);
                break;
            case `${prefix}about`:
                commands.cmdAbout(client, msg);
                break;
            case `${prefix}help`:
                commands.cmdHelp(client, msg);
                break;
            default:
                console.log('Command does not exist');
                return;
        }
    }
});


client.connect();