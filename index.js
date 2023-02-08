const Eris = require("eris");
const dotenv = require('dotenv');
var c = require('./constants');

dotenv.config();

client = new Eris(process.env.TOKEN);
prefix = '~';

// client status
client.on("ready", () => {
    console.log("byu is ready!");
    client.editStatus("idle", {name: 'dead', type: 0, url: ''});
});

client.on("error", (err) => console.error(err));

function validCommand(msg) {
    if (msg.author.bot || !msg.channel.guild || !msg.content.startsWith(prefix)) return false;
    return true;
}

function createEmbed(title, description, color, author, authorIconURL, imageURL, thumbnailURL, footer, footerIcon) {
    return {
        title: title,
        description: description,
        timestamp: new Date(),
        color: color,
        author: {
            name: author, icon_url: authorIconURL
        },
        image: {
            url: imageURL
        },
        thumbnail: {
            url: thumbnailURL
        },
        footer: {
            text: footer, icon_url: footerIcon
        }
        // fields: [
        //     { name: "prefix", value: "`~`", inline: true },
        //     { name: "date-created", value: "idk", inline: true}
        // ]
    };
}

function cmdPing(msg) {
    // this is slower bc caches, dont use unless necessary
    // msg.channel.createMessage({ content: "pong!" })
    client.createMessage(msg.channel.id, { content: "pong!" });
}

function cmdAbout(msg) {

    let embed = createEmbed(c.ABOUT_TITLE, c.ABOUT_DESCRIPTION, c.ABOUT_COLOR, c.ABOUT_AUTHOR, c.ABOUT_AUTHOR_ICON, c.ABOUT_IMAGE, c.ABOUT_THUMBNAIL, c.ABOUT_FOOTER, c.ABOUT_FOOTER_ICON);
    client.createMessage(msg.channel.id, { embed: embed });
}

client.on("messageCreate", async (msg) => {

    if (validCommand(msg)) {
        
        switch(msg.content) {
            case `${prefix}ping`:
                cmdPing(msg);
                break;
            case `${prefix}about`:
                cmdAbout(msg);
                break;
            default:
                console.log('Command does not exist');
                return;
        }
    }
});


client.connect();