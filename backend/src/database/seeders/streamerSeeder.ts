import { Streamer } from "../models/Streamer"

const firstNames = ["Felix", "George", "Richard", "Joe", "Robert", "Adam", "Monica", "Samanta", "Alex", "Cassandra", "Joel", 'John', 'Emily', 'Michael', 'Emma', 'Daniel', 'Olivia', 'Matthew', 'Sophia', 'David', 'Ava', 'Andrew', 'Isabella', 'James', 'Mia', 'Christopher', 'Charlotte', 'Joseph', 'Amelia', 'William', 'Abigail'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson']
const nicknames = ['xqc', 'Ninja', 'Shroud', 'Pokimane', 'DrDisrespect', 'TimTheTatman', 'Lirik', 'Summit1G', 'Tfue', 'Valkyrae', 'Asmongold', 'Gothalion', 'Courage', 'Forsen', 'Amouranth', 'Syndicate', 'Sodapoppin', 'LilyPichu', 'DisguisedToast', 'KSI', "xtentacion", "izakooo", "Dakotaz", "Qry", "Ogre", "IDK"]
const descriptions = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
    "Nulla euismod velit ac diam efficitur, at hendrerit urna lacinia.",
    "Sed malesuada augue a aliquet tempor.",
    "Etiam dignissim tellus at justo fringilla, non bibendum lectus aliquam.",
    "Pellentesque consequat mi sit amet justo viverra, eu sagittis lorem luctus.",
    "Fusce at dolor in est vestibulum venenatis.",
    "Nam condimentum urna ac neque gravida, ac congue massa posuere.",
    "Curabitur vel ligula ullamcorper, dapibus urna ut, luctus arcu.",
    "Quisque in lectus auctor, sagittis risus ac, ullamcorper quam."
];
const platforms = ["Twitch", "Kick", "TikTok", "Rumble", "YouTube"]

const up = async () => {
    const data = []

    for(let i=0; i<nicknames.length; i++){
        data.push({
            firstName: firstNames[Math.floor(Math.random()*firstNames.length)],
            lastName: lastNames[Math.floor(Math.random()*lastNames.length)],
            nickname: nicknames[i],
            platform: [platforms[Math.floor(Math.random()*platforms.length)]],
            description: descriptions[Math.floor(Math.random()*descriptions.length)],
            upvotes: Math.floor(Math.random()*100),
            downvotes: Math.floor(Math.random()*50)
        })  
    }

    await Streamer.bulkCreate(data)
}

export default {
    up
}

