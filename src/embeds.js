const { defaultColor, blueDotURL, byuColored, byuPfp, emptyField, empty, emoteBlueHeart, emoteSparkles, timestamp, noTimestamp, emoteBlueDot, currency, emoteBlueHeartPulse } = require("./constants");
const { getRandomInt } = require("./utils");

const aboutTitle = `hi, i'm byu~`;
const aboutDescription = `${emoteSparkles} **byu-bot** ${emoteBlueHeartPulse} is a miscellaneous discord bot originally created for the purpose of custom embedded auto responses!\n‎`;
const aboutColor = defaultColor;
const aboutAuthor = "byu";
const aboutAuthorIcon = "https://media.discordapp.net/attachments/995187851937447936/1073395721765650502/blueheart.png";
const aboutImage = byuColored;
const aboutThumbnail = byuPfp;
const aboutFooter = "use  ~help  to see some of byu's commands!";
const aboutFooterIcon = blueDotURL;
const aboutFields = [
    { name: `${emoteBlueDot} tech stack:`, value: '‎ ‎ ╰▸ ‎ Eris, JS, MongoDB', inline: true},
    { name: `${emoteBlueDot} created by:`, value: '‎ ‎ ╰▸ ‎ ue / crystal', inline: true},
];

const helpTitle = empty;
const helpDescription = "**full commands list:**\nuse `/help <command name>` to get more info about a command.";
const helpColor = defaultColor;
const helpAuthor = "byu help!";
const helpAuthorIcon = blueDotURL;
const helpImage = empty;
const helpThumbnail = byuPfp;
const helpFooter = empty;
const helpFooterIcon = "blueDotURL";
const helpFields = [
    { name: `${emoteBlueHeart} currency commands`, value: '`fish`', inline: false },
    { name: `${emoteBlueHeart} info commands`, value: "`about` `help` `ping`", inline: false },
    { name: `${emoteBlueHeart} fun commands`, value: '`idk`', inline: false }
];

const fishColor = defaultColor;
const fishAuthor = empty;
const fishAuthorIcon = blueDotURL;
const fishImage = empty;
const fishThumbnail = "https://cdn.discordapp.com/attachments/995187851937447936/1073355251484217414/acfish2.gif";
const fishFooter = empty;
const fishFooterIcon = "https://static.wikia.nocookie.net/animalcrossing/images/2/2c/NH-Icon-palechub.png/revision/latest?cb=20200401003129";
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

exports.embedFish = function(username, fish, amount, balance) {
    const fishTitle = `${emoteSparkles} ${emoteBlueHeart} ${username} caught a ${fish}! (  + ${amount} ${currency}  )`;
    const fishDescription = `**${emoteSparkles} ${emoteBlueHeart} ${username} caught a ${fish}! (  + ${amount} ${currency}  )**\n\n${emoteBlueDot} you sell it at the fish market .\n${emoteBlueDot} your new balance is ${balance} ${currency} !`;
    return {
      title: "",
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
  };