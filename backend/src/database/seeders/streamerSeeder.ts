import { Streamer } from "../models/Streamer"

const firstNames = ["Felix", "George", "Richard", "Joe", "Robert", "Adam", "Monica", "Samanta", "Alex", "Cassandra", "Joel", 'John', 'Emily', 'Michael', 'Emma', 'Daniel', 'Olivia', 'Matthew', 'Sophia', 'David', 'Ava', 'Andrew', 'Isabella', 'James', 'Mia', 'Christopher', 'Charlotte', 'Joseph', 'Amelia', 'William', 'Abigail'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson']
const nicknames = ['xqc', 'Ninja', 'Shroud', 'Pokimane', 'DrDisrespect', 'TimTheTatman', 'Lirik', 'Summit1G', 'Tfue', 'Valkyrae', 'Asmongold', 'Gothalion', 'Courage', 'Forsen', 'Amouranth', 'Syndicate', 'Sodapoppin', 'LilyPichu', 'DisguisedToast', 'KSI', "xtentacion", "izakooo", "Dakotaz", "Qry", "Ogre", "IDK"]
const descriptions = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquip est laborum sunt non nisi in esse cillum sint adipisicing aliqua. Amet dolor commodo nisi ea occaecat consectetur ut velit irure. Irure occaecat qui ea esse quis tempor.",
    "Sit deserunt laboris duis elit in. Ullamco dolor ut proident fugiat labore do enim sit tempor ullamco laborum laborum do. Consequat commodo do magna non veniam et cillum Lorem labore magna veniam ea. Non do est exercitation elit cupidatat non. Dolore Lorem nostrud id labore qui pariatur ipsum laborum officia.",
    "Nulla euismod velit ac diam efficitur, at hendrerit urna lacinia.",
    "Mollit officia enim aute laborum quis in elit ea labore anim excepteur consectetur. Commodo Lorem aliqua voluptate minim nulla adipisicing ut consectetur labore irure excepteur minim eiusmod. Deserunt sit velit elit irure pariatur eiusmod ullamco tempor occaecat esse. Excepteur exercitation aute aliqua elit non adipisicing incididunt duis tempor velit dolor. Ea occaecat quis enim officia irure proident quis id. Exercitation culpa cupidatat culpa elit excepteur.",
    "Commodo nostrud aute consectetur non in non velit esse. Sit qui non sint laborum ad quis commodo labore mollit pariatur enim eu officia aute. Nisi aliqua dolore voluptate nulla est ullamco amet adipisicing amet incididunt aute nulla tempor. Nostrud proident ipsum exercitation reprehenderit amet consequat nostrud veniam irure commodo et. Officia do eiusmod qui in veniam voluptate non. Nostrud ut voluptate velit aliqua non aliquip aliqua quis.",
    "Pellentesque consequat mi sit amet justo viverra, eu sagittis lorem luctus.",
    "Labore exercitation dolor ipsum cillum ex nulla mollit irure esse consectetur fugiat sit. Pariatur quis est do aliquip cillum. Nulla non non magna do culpa nostrud exercitation deserunt. Enim officia labore eu aute ea eu magna. Sunt quis ea eu ut irure laboris consequat excepteur et nulla non anim veniam sit. Elit sint in dolore mollit aliqua est elit excepteur sint irure labore pariatur.",
    "Officia sit minim consequat deserunt pariatur enim esse mollit excepteur eu. Cupidatat minim enim velit fugiat aliquip dolor sit labore officia eu. Laboris duis quis commodo labore cillum. Proident excepteur id do ad sunt est laborum culpa in ipsum. Amet id minim tempor nostrud. Id reprehenderit consequat do esse ullamco aliqua est ullamco sint laboris adipisicing.",
    "Aute ad adipisicing in nulla laboris proident laborum veniam minim sunt. Amet culpa duis sint est non magna nostrud exercitation incididunt laborum nostrud. Officia pariatur magna duis adipisicing voluptate ipsum nostrud.",
    "Culpa ullamco Lorem tempor mollit nulla in. Quis magna cupidatat occaecat sit incididunt do officia dolor ad. Culpa fugiat consectetur dolore sint laboris velit consectetur. Aute deserunt minim excepteur eu id esse consectetur excepteur do. Ipsum aliquip aliquip veniam dolor consectetur esse. Ad cillum irure irure anim pariatur cupidatat. Do proident pariatur occaecat ullamco consequat nostrud culpa anim duis irure eiusmod adipisicing deserunt."
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

