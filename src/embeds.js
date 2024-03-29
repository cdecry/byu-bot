const { defaultColor, blueDotURL, byuColored, byuPfp, emptyField, empty, emoteBlueHeart, emoteSparkles, timestamp, noTimestamp, emoteBlueDot, currency, emoteBlueHeartPulse, blueHeart } = require("./constants");
const { getRandomInt } = require("./utils");

const aboutTitle = `hi, i'm byu~`;
const aboutDescription = `${emoteSparkles} **byu-bot** ${emoteBlueHeartPulse} is a miscellaneous discord bot originally created for the purpose of custom embedded auto responses!\n‎`;
const aboutColor = defaultColor;
const aboutAuthor = "byu";
const aboutAuthorIcon = blueHeart;
const aboutImage = byuColored;
const aboutThumbnail = byuPfp;
const aboutFooter = "use  ~help  to see some of byu's commands!";
const aboutFooterIcon = blueHeart;
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
const helpFooterIcon = blueDotURL;
const helpFields = [
    { name: `${emoteBlueHeart} currency`, value: '`fish`', inline: false },
    { name: `${emoteBlueHeart} info`, value: "`about` `help` `ping`", inline: false },
    { name: `${emoteBlueHeart} fun`, value: '`idk`', inline: false }
];

const fishColor = defaultColor;
const fishAuthor = empty;
const fishAuthorIcon = blueDotURL;
const fishImage = empty;
const fishThumbnail = "https://cdn.discordapp.com/attachments/995187851937447936/1073355251484217414/acfish2.gif";
const fishFooter = empty;
const fishFooterIcon = "https://static.wikia.nocookie.net/animalcrossing/images/2/2c/NH-Icon-palechub.png/revision/latest?cb=20200401003129";
const fishFields = emptyField;

const balanceTitle = empty;
const balanceDescription = empty;
const balanceColor = defaultColor;
// const balanceAuthor = "user's wallet";
// const balanceAuthorIcon = blueDotURL;
const balanceImage = empty;
const balanceThumbnail = empty;
const balanceFooter = empty;
const balanceFooterIcon = blueDotURL;
// const balanceFields = [];


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

  exports.embedBalance = function(username, userAvatar, balance) {
    const balanceAuthor = `${username}'s wallet !`;
    const balanceAuthorIcon = userAvatar;
    const balanceFields = [
        { name: `${emoteBlueDot} pet:`, value: '‎ ‎ ╰▸ ‎ no pet :c ', inline: true},
        { name: `${emoteBlueDot} balance:`, value: `‎ ‎ ╰▸ ‎ ${currency} ${balance}`, inline: true},
    ]
    return {
      title: balanceTitle,
      description: balanceDescription,
      timestamp: noTimestamp,
      color: balanceColor,
      author: {
          name: balanceAuthor, icon_url: balanceAuthorIcon
      },
      image: {
          url: balanceImage
      },
      thumbnail: {
          url: balanceThumbnail
      },
      footer: {
          text: balanceFooter, icon_url: balanceFooterIcon
      },
      fields: balanceFields
    };
  };