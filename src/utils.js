const Eris = require("eris");
const { prefix } = require("./constants");

exports.validCommand = function (msg) {
    if (msg.author.bot || !msg.channel.guild || !msg.content.startsWith(prefix)) return false;
    return true;
}

exports.createEmbed = function (title, description, color, author, authorIconURL, imageURL, thumbnailURL, footer, footerIcon, fields, timestamp) {
    return {
        title: title,
        description: description,
        timestamp: timestamp,
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
        },
        fields: fields
        // fields: [
        //     { name: "audio commands", value: "n/a", inline: true },
        //     { name: "action commands", value: "n/a", inline: false}
        // ]
    };
}

exports.getRandomInt = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

exports.getRandomFish = function() {
    let randomIndex = this.getRandomInt(0, 79);
    let fish = [ "tadpole", "frog", "horse mackerel", "crucian carp", "bluegill", "pale chub", "crawfish", "anchovy", "dace", "puffer fish", "carp", "killifish", "yellow perch", "dab", "freshwater goby", "loach", "black bass", "pond smelt", "sea bass", "neon tetra", "zebra turkeyfish", "squid", "ribbon eel", "clown fish", "salmon", "catfish", "tilapia", "rainbowfish", "olive flounder", "bitterling", "sweetfish", "cherry salmon", "sea butterfly", "surgeonfish", "butterfly fish", "sea horse", "goldfish", "pop-eyed goldfish", "guppy", "nibble fish", "suckerfish", "pike", "king salmon", "mitten crab", "moray eel", "betta", "piranha", "football fish", "angelfish", "red snapper", "ray", "soft-shelled turtle", "char", "koi", "saddled bichir", "ocean sunfish", "ranchu goldfish", "giant trevally", "snapping turtle", "blowfish", "barred knifejaw", "giant snakehead", "gar", "mahi-mahi", "tuna", "hammerhead shark", "oarfish", "arowana", "arapaima", "sturgeon", "napoleonfish", "blue marlin", "saw shark", "whale shark", "golden trout", "stringfish", "dorado", "great white shark", "barreleye", "coelacanth" ];
    let amount = [3, 3, 3, 3, 5, 5, 5, 5, 7, 7, 7, 7, 7, 8, 8, 8, 10, 10, 11, 11, 11, 11, 13, 13, 13, 13, 14, 14, 14, 16, 16, 17, 17, 17, 19, 19, 20, 20, 20, 22, 22, 23, 23, 25, 25, 26, 26, 28, 28, 29, 29, 31, 31, 32, 32, 34, 34, 35, 35, 37, 37, 38, 38, 40, 40, 41, 41, 43, 43, 45, 46, 46, 48, 49, 49, 51, 51, 53, 53, 55, 55, 57, 57, 59, 59, 61, 61, 63, 63, 65, 65, 67, 67, 69, 69, 71, 71, 73, 73, 75, 75, 77, 77, 79, 79, 81, 81, 83, 83, 85];
    return { fish: fish[randomIndex], amount: amount[randomIndex] };
}