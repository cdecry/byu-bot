const blueDotURL = "https://i.pinimg.com/originals/32/ae/a1/32aea150742ae5fc9b6af2a727271900.png";
const defaultColor = 0xcae7f9;
module.exports = Object.freeze({
    PREFIX: "~",
    // about embed
    ABOUT_TITLE: "hi, i'm byu~",
    ABOUT_DESCRIPTION: "**byu-bot** is a miscellaneous discord bot originally created for the purpose of custom embedded auto responses!",
    ABOUT_COLOR: defaultColor,
    ABOUT_AUTHOR: "byu",
    ABOUT_AUTHOR_ICON: blueDotURL,
    ABOUT_IMAGE: "https://cdn.discordapp.com/attachments/707639739888435301/731940350439981136/unknown.png",
    ABOUT_THUMBNAIL: "https://cdn.discordapp.com/attachments/707639739888435301/1072947217385652244/image.png",
    ABOUT_FOOTER: "use  ~help  to see some of byu's commands!",
    ABOUT_FOOTER_ICON: blueDotURL,
    // help embed
    HELP_DESCRIPTION: "**full commands list:**\nuse `/help <command name>` to get more info about a command. ",
    HELP_AUTHOR: "byu help!",
    HELP_AUTHOR_ICON: blueDotURL,
    HELP_COLOR: defaultColor,
    HELP_FIELDS: [ { name: "<:blueheart:1072991772067774565> info commands", value: "`about` `help` `ping`", inline: false }, { name: '<:blueheart:1072991772067774565> fun commands', value: '`idk`', inline: false } ]
});