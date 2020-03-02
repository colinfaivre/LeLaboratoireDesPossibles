const vue = {
    name: "vue",
    url: "https://vuejs.org/",
}
const nuxt = {
    name: "nuxt",
    url: "https://fr.nuxtjs.org/",
}
const sass = {
    name: "sass",
    url: "https://sass-lang.com/",
}
const firebase = {
    name: "firebase",
    url: "https://firebase.google.com/",
}
const javascript = {
    name: "javascript",
    url: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
}
const material = {
    name: "material",
    url: "https://material.io/design/",
}
const pwa = {
    name: "pwa",
    url: "https://developers.google.com/web/progressive-web-apps",
}
const vuetify = {
    name: "vuetify",
    url: "https://vuetifyjs.com/en/",
}
const typescript = {
    name: "typescript",
    url: "https://www.typescriptlang.org/",
}
const buefy = {
    name: "buefy",
    url: "https://buefy.org/documentation/dropdown/",
}

const technos = {
    vue: {
        name: "vue",
        url: "https://vuejs.org/",
        description: "",
    },
    nuxt: {
        name: "nuxt",
        url: "https://fr.nuxtjs.org/",
        description: "",
    },
    sass: {
        name: "sass",
        url: "https://sass-lang.com/",
        description: "",
    },
    firebase: {
        name: "firebase",
        url: "https://firebase.google.com/",
        description: "",
    },
    javascript: {
        name: "javascript",
        url: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
        description: "",
    },
    material: {
        name: "material",
        url: "https://material.io/design/",
        description: "",
    },
    pwa: {
        name: "pwa",
        url: "https://developers.google.com/web/progressive-web-apps",
        description: "",
    },
    vuetify: {
        name: "vuetify",
        url: "https://vuetifyjs.com/en/",
        description: "",
    },
    typescript: {
        name: "typescript",
        url: "https://www.typescriptlang.org/",
        description: "",
    },
    buefy: {
        name: "buefy",
        url: "https://buefy.org/documentation/dropdown/",
        description: "",
    },
}

const categories = [
    {
        id: "pro",
        name: "Projets professionnels",
        description: `
            Le laboratoire des possible c'est avant tout une entreprise
            qui se consacre au développement Front-end. Le framework Vue.js est
            utilisé pour créer des applications web. Back-offices, dates, projets (longueurs), nombre de clients...
        `
    },
    {
        id: "perso",
        name: "Projets personnels",
        description: `
            Avant que l'entreprise ne voie le jour, de nombreux sites internets
            à l'usage de leur développeur ont servis un but artistique pour coller aux plaisirs du moment.        
        `
    },
    {
        id: "game",
        name: "Jeux",
        description: `
            Le laboratoire des possibles, c'est aussi retrouver le plaisir simple de recréer les jeux d'arcade de notre enfance.
            Pour challenger ses connaissanes en JS et repousser les limites de l'utilisation classique du HTML et du CSS.
        `
    },
    {
        id: "clone",
        name: "Clones",
        description: `
            Que serait un laboratoire sans ses expériences dangereuses et controversées ?
            Cette pièce du laboratoire se consacre entièrement à la reproduction plus ou moins fidèle d'applications bien connues.
            Reproductions et clones ont, la première place. Peureux, s'abstenir.
        `
    },
    {
        id: "ar",
        name: "Réalité augmentée",
        description: `
            Expérimenter, tester, essayer, reproduire, recommencer. Quand la technologie s'invite au
            frontières du réel :)
        `
    },
    {
        id: "wot",
        name: "Objects connectés",
        description: `
            Expérimenter, tester, essayer, reproduire, recommencer. Quand la technologie s'invite au
            frontières du réel :)
        `
    },
]

const projects = [
    // Projets pros
    {
        screenshot: "sapiendo.png",
        title: "Sapiendo",
        subtitle: "Back Office - Site conseil retraite",
        text: "Lo, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technos: [vue, vuetify, sass, material],
        category: "pro",
        year: 2019,
        githubLink: null,
        webLink: null,
        customer: {
            name: "WebId",
            type: "Agence web",
            location: "Lyon",
            duration: 3,
            logo: "webId.png",
            link: "https://www.web-id.fr/"
        }
    },
    {
        screenshot: "novaccess.png",
        title: "Novaccess",
        subtitle: "Back Office - Application ouvre portails",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technos: [vue, typescript, buefy, sass],
        category: "pro",
        year: 2019,
        githubLink: null,
        webLink: null,
        customer: {
            name: "MyJungly",
            type: "Agence web",
            location: "Paris",
            duration: 3,
            logo: "myJungly.png",
            link: "https://www.myjungly.com"
        }
    },
    {
        screenshot: "barnaby.jpg",
        title: "Barnaby",
        subtitle: "Application web - Commande de boissons",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technos: [javascript, vue, nuxt, sass],
        category: "pro",
        year: 2019,
        githubLink: null,
        webLink: null,
        customer: {
            name: "Barnaby",
            type: "Startup",
            location: "Bruxelles",
            duration: 1,
            logo: "barnaby.png",
            link: "https://barnaby.club/"
        }
    },
    {
        screenshot: "glifter.png",
        title: "Glifter",
        subtitle: "Back Office - Gestion articles",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technos: [javascript, vue, sass],
        category: "pro",
        year: 2019,
        githubLink: null,
        webLink: null,
        customer: {
            name: "MyJungly",
            type: "Agence web",
            location: "Paris",
            duration: 3,
            logo: "myJungly.png",
            link: "https://www.myjungly.com"
        }
    },
    {
        screenshot: "axiom.png",
        title: "Axiom",
        subtitle: "Back Office - Outil communication",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technos: [javascript, vue, sass],
        category: "pro",
        year: 2019,
        githubLink: null,
        webLink: null,
        customer: {
            name: "Antiopea",
            type: "Startup",
            location: "Paris",
            duration: 3,
            logo: "antiopea.png",
            link: "https://antiopea.com/"
        }
    },
    {
        screenshot: "psycho.png",
        title: "jeanyvesgauthier.com",
        subtitle: "Site vitrine - Psychanalyste",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technos: [vue, nuxt, sass, firebase, javascript, material, pwa],
        category: "pro",
        year: 2019,
        githubLink: null,
        webLink: null,
    },
    {
        screenshot: "optiquebeaubreuil.png",
        title: "Optique Beaubreuil",
        subtitle: "Site vitrine - Opticien",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technos: [javascript, vue],
        category: "pro",
        year: 2019,
        githubLink: null,
        webLink: null,
    },
    {
        screenshot: "optiqueduhameau.png",
        title: "Optique du Hameau",
        subtitle: "Site vitrine - Opticien",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technos: [javascript, vue],
        category: "pro",
        year: 2019,
        githubLink: null,
        webLink: null,
    },
    {
        screenshot: "marialagoutte.png",
        title: "Maria la goutte",
        subtitle: "Site vitrine - Artiste",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technos: [javascript, vue],
        category: "pro",
        year: 2019,
        githubLink: null,
        webLink: null,
    },
    
    // Projets persos
    {
        screenshot: "lelaboratoiredespossibles.jpeg",
        title: "Le laboratoire des possibles",
        subtitle: "Site vitrine - Developpeur",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technos: [vue, nuxt, vuetify, sass, firebase, javascript, material, pwa],
        category: "perso",
        year: 2019,
        githubLink: null,
        webLink: null,
    },
    {
        screenshot: "colinfaivre.jpeg",
        title: "colinfaivre.com",
        subtitle: "Site vitrine - Artiste",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technos: [vue, pwa],
        category: "perso",
        year: 2019,
        githubLink: null,
        webLink: "https://colinfaivre.com",
    },
    {
        screenshot: "sourirepanique.jpeg",
        title: "sourirepanique.com",
        subtitle: "Site vitrine - Groupe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technos: [vue, pwa],
        category: "perso",
        year: 2019,
        githubLink: null,
        webLink: "https://sourirepanique.com",
    },
    {
        screenshot: "semaphore.jpeg",
        title: "Semaphore",
        subtitle: "Plateforme - Artistes",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technos: [javascript, vue],
        category: "perso",
        year: 2019,
        githubLink: null,
        webLink: null,
    },
    {
        screenshot: "mojomatik.jpeg",
        title: "Mojomatik",
        subtitle: "Application pour booster son mojo",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technos: [vue, pwa],
        category: "perso",
        year: 2019,
        githubLink: null,
        webLink: null,
    },

    // Games
    {
        screenshot: "asteroid.png",
        title: "Vanilla JS Asteroid",
        subtitle: "Arcade game",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technos: [javascript],
        category: "game",
        year: 2019,
        githubLink: null,
        webLink: null,
    },
    {
        screenshot: "tetris.png",
        title: "Vue.js Tetris",
        subtitle: "Teris game",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technos: [vue, javascript, material, pwa],
        category: "game",
        year: 2019,
        githubLink: "https://github.com/colinfaivre/vue-tetris",
        webLink: null,
    },
    {
        screenshot: "breakout.png",
        title: "Breakout",
        subtitle: "Jeu de casse-brique",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technos: [vue, javascript, material, pwa],
        category: "game",
        year: 2019,
        githubLink: "https://github.com/colinfaivre/vue-tetris",
        webLink: null,
    },
    {
        screenshot: "tictactoe.png",
        title: "Vanilla JS TicTacToe",
        subtitle: "Morpion",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technos: [javascript, material],
        category: "game",
        year: 2019,
        githubLink: "https://github.com/colinfaivre/VanillaJs-TicTacToe",
        webLink: null,
    },
    {
        screenshot: "elevator.png",
        title: "Vanilla JS - Elevators",
        subtitle: "Simulation d'ascenseurs",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technos: [javascript, material],
        category: "game",
        year: 2019,
        githubLink: "https://github.com/colinfaivre/VanillaJs-Elevators",
        webLink: null,
    },

    // Clones
    {
        screenshot: "gmailclone.png",
        title: "Le Gmail de Chuck Norris",
        subtitle: "Un clone de Gmail",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technos: [javascript, material],
        category: "clone",
        year: 2019,
        githubLink: "https://github.com/colinfaivre/ChuckNorris-gmail",
        webLink: null,
    },
    {
        screenshot: "slackclone.png",
        title: "Un clone de Slack",
        subtitle: "Un clone de Slack",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technos: [javascript, vue],
        category: "clone",
        year: 2019,
        githubLink: "https://github.com/colinfaivre/slack-clone",
        webLink: null,
    },

    // Augemented reality
    {
        screenshot: "aframe.png",
        title: "A-Frame",
        subtitle: "Un projet pour tester A-frame",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technos: [javascript],
        category: "ar",
        year: 2019,
        githubLink: null,
        webLink: null,
    },
    {
        screenshot: "aframe.png",
        title: "A-Frame",
        subtitle: "Un projet pour tester A-frame",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technos: [javascript],
        category: "ar",
        year: 2019,
        githubLink: null,
        webLink: null,
    },

    // Web of things
    {
        screenshot: "wot.png",
        title: "Web of things",
        subtitle: "Un projet d'objet connecté",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technos: [javascript],
        category: "wot",
        year: 2019,
        githubLink: null,
        webLink: null,
    },
    {
        screenshot: "wot.png",
        title: "Web of things",
        subtitle: "Un projet d'objet connecté",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technos: [javascript],
        category: "wot",
        year: 2019,
        githubLink: null,
        webLink: null,
    },
]

export const db = {
    projects,
    categories,
    technos
}