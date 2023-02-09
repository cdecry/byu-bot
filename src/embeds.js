const { defaultColor, blueDotURL, byuColored, byuPfp, emptyField, empty, emoteBlueHeart, emoteSparkles, timestamp, noTimestamp } = require("./constants");

const aboutTitle = "hi, i'm byu~";
const aboutDescription = "**byu-bot** is a miscellaneous discord bot originally created for the purpose of custom embedded auto responses!";
const aboutColor = defaultColor;
const aboutAuthor = "byu";
const aboutAuthorIcon = blueDotURL;
const aboutImage = byuColored;
const aboutThumbnail = byuPfp;
const aboutFooter = "use  ~help  to see some of byu's commands!";
const aboutFooterIcon = blueDotURL;
const aboutFields = emptyField;

const helpTitle = empty;
const helpDescription = "**full commands list:**\nuse `/help <command name>` to get more info about a command.";
const helpColor = defaultColor;
const helpAuthor = "byu help!";
const helpAuthorIcon = blueDotURL;
const helpImage = empty;
const helpThumbnail = byuPfp;
const helpFooter = empty;
const helpFooterIcon = blueDotURL;
const helpFields = [
    { name: `${emoteBlueHeart} currency commands`, value: '`fish`', inline: false },
    { name: `${emoteBlueHeart} info commands`, value: "`about` `help` `ping`", inline: false },
    { name: `${emoteBlueHeart} fun commands`, value: '`idk`', inline: false }
];

// const fishTitle = function () {
//     getRandomInt
// }

const fishTitle = `${emoteSparkles} ${emoteBlueHeart} you caught a fishy! $`;
const fishDescription = empty;
const fishColor = defaultColor;
const fishAuthor = empty;
const fishAuthorIcon = blueDotURL;
const fishImage = empty;
const fishThumbnail = empty;
const fishFooter = empty;
const fishFooterIcon = blueDotURL;
const fishFields = emptyField;

exports.embedAbout = {
    title: aboutTitle,
    description: aboutDescription,
    timestamp: timestamp,
    color: aboutColor,
    author: {
        name: aboutAuthor, icon_url: aboutAuthorIcon
    },
    image: {
        url: aboutImage
    },
    thumbnail: {
        url: aboutThumbnail
    },
    footer: {
        text: aboutFooter, icon_url: aboutFooterIcon
    },
    fields: aboutFields
};

exports.embedHelp = {
    title: helpTitle,
    description: helpDescription,
    timestamp: noTimestamp,
    color: helpColor,
    author: {
        name: helpAuthor, icon_url: helpAuthorIcon
    },
    image: {
        url: helpImage
    },
    thumbnail: {
        url: helpThumbnail
    },
    footer: {
        text: helpFooter, icon_url: helpFooterIcon
    },
    fields: helpFields
};

exports.embedFish = {
    title: fishTitle,
    description: fishDescription,
    timestamp: noTimestamp,
    color: fishColor,
    author: {
        name: fishAuthor, icon_url: fishAuthorIcon
    },
    image: {
        url: fishImage
    },
    thumbnail: {
        url: fishThumbnail
    },
    footer: {
        text: fishFooter, icon_url: fishFooterIcon
    },
    fields: fishFields
};