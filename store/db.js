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
            Des applications web, back-offices et sites vitrines développés pour le compte d'agences web, startups et particuliers.
            Les principales technologies utilisées sont vue.js, nuxt et vuetify pour créer des applications web progressives respectant les normes du Material Design.
        `
    },
    {
        id: "perso",
        name: "Projets personnels",
        description: `
            Les projets personnels qui me tiennent à coeur.
            Parti d'un besoin immense de donner la première place à mes projets artistiques "Colin Faivre" et "Sourire Panique"
            autant qu'à l'association "Sémaphore" qui m'a offert un soutien inconditionnel. J'ai appris sur le tas à développer
            des sites webs avec la passion de donner vie à ces projets.     
        `
    },
    {
        id: "game",
        name: "Jeux",
        description: `
            Le laboratoire des possibles, c'est aussi retrouver le plaisir simple de recréer les jeux d'arcade de mon enfance.
            C'est un terrain de jeu sans pareil pour continuer d'apprendre le métier.
        `,
        quote: `
            "Below the surface of the machine, the program moves. 
            Without effort, it expands and contracts.
            In great harmony, electrons scatter and regroup.
            The forms on the monitor are but ripples on the water.
            The essence stays invisibly below." — Master Yuan-Ma, The Book of Programming
        `,
    },
    {
        id: "clone",
        name: "Clones",
        description: `
            Que serait un laboratoire sans ses expériences dangereuses et controversées ?
            Cette pièce du laboratoire se consacre entièrement à la reproduction plus ou moins fidèle d'applications bien connues.
        `,
        quote: `
            "Se tenir sur les épaules des géants et voir plus loin ... Voir dans l'invisible, à travers l'espace et le temps." - Jean-Claude Ameisen
        `
    },
    {
        id: "ar",
        name: "Réalité augmentée",
        // description: `
        //     Expérimenter, tester, essayer, reproduire, recommencer. Quand la technologie s'invite au
        //     frontières du réel :)
        // `
    },
    {
        id: "wot",
        name: "Objects connectés",
        // description: `
        //     Expérimenter, tester, essayer, reproduire, recommencer. Quand la technologie s'invite au
        //     frontières du réel :)
        // `
    },
]

const projects = [
    // Projets pros
    {
        screenshot: "psycho.png",
        title: "jeanyvesgauthier.com",
        subtitle: "Site vitrine - Psychanalyste",
        text: `
            Développement d'une progressive web app pour le site vitrine d'un psychanalyste.
            L'app propose à l'utilisateur de l'installer sur l'écran d'accueil de son smartphone et elle est ensuite utilisable sans réseau.
        `,
        technos: [vue, nuxt, sass, firebase, javascript, material, pwa],
        category: "pro",
        year: 2020,
        githubLink: null,
        webLink: "http://jeanyves-gauthier-psychanalyste.com",
    },
    {
        screenshot: "sapiendo.png",
        title: "Sapiendo",
        subtitle: "Back Office - Site conseil retraite",
        text: `
            Participation au développement du front de l'espace admin  de https://www.sapiendo-retraite.fr
            Un site spécialisé dans le calcul de retraite réalisé sous Laravel. Intégration du front du site client.
        `,
        technos: [vue, vuetify, sass, material],
        category: "pro",
        year: 2019,
        githubLink: null,
        webLink: "https://www.web-id.fr/",
        customer: {
            name: "WebId",
            type: "Agence web",
            location: "Lyon",
            duration: 4,
            logo: "webId.png",
            color: "#301a44",
            colorLight: "#482768",
        }
    },
    {
        screenshot: "barnaby.jpg",
        title: "Barnaby",
        subtitle: "Application web - Commande de boissons",
        text: `
            Ajout d'une fonctionnalité sur https://Barnaby.club pour permettre à l'utilisateur de commander ses boissons
            depuis sa table en scannant un QR code.
        `,
        technos: [javascript, vue, nuxt, sass],
        category: "pro",
        year: 2019,
        githubLink: null,
        webLink: "https://barnaby.club/",
        customer: {
            name: "Barnaby",
            type: "Startup",
            location: "Bruxelles",
            duration: 1,
            logo: "barnaby.png",
            color: "#6273f6",
            colorLight: "#909cf9",
        }
    },
    {
        screenshot: "novaccess.png",
        title: "Novaccess",
        subtitle: "Back Office - Application ouverture de portails",
        text: `
            Développement du backoffice d'une application permettant d'ouvrir des portes de parkings privés.
            Gestion des utilisateurs, de leurs droits et abonnements
        `,
        technos: [vue, typescript, buefy, sass],
        category: "pro",
        year: 2019,
        githubLink: null,
        webLink: "https://www.myjungly.com",
        customer: {
            name: "MyJungly",
            type: "Agence web",
            location: "Paris",
            duration: 4,
            logo: "myJungly.png",
            color: "#171717",
            colorLight: "#303030",
        }
    },
    {
        screenshot: "glifter.png",
        title: "Glifter",
        subtitle: "Back Office - Gestion d'articles",
        text: `
            Participation au développement de Glifter - Personal Knowledge Assistant.
            Agrégateur de sources d’informations pour produire et partager des articles.
            Outil d'édition d'article se rapprochant de celui de l'application Medium
        `,
        technos: [javascript, vue, sass],
        category: "pro",
        year: 2019,
        githubLink: null,
        webLink: "https://www.myjungly.com",
        customer: {
            name: "MyJungly",
            type: "Agence web",
            location: "Paris",
            duration: 3,
            logo: "myJungly.png",
            color: "#171717",
            colorLight: "#303030",
        }
    },
    {
        screenshot: "axiom.png",
        title: "Axiom",
        subtitle: "Back Office - Outil de communication",
        text: `
            Participation au développement d'AXIOM.
            Une application desktop construite avec NW.js permettant de gérer son réseau,
            sécuriser ses échanges et certifier ses documents.
        `,
        technos: [javascript, vue, sass],
        category: "pro",
        year: 2018,
        githubLink: null,
        webLink: "https://antiopea.com/",
        customer: {
            name: "Antiopea",
            type: "Startup",
            location: "Paris",
            duration: 1,
            logo: "antiopea.png",
            color: "#7c40a3",
            colorLight: "#965abf",
        }
    },
    {
        screenshot: "optiquebeaubreuil.png",
        title: "Optique Beaubreuil",
        subtitle: "Site vitrine - Opticien",
        text: `
            Réalisation d'une application web vitrine en vue.js pour présenter les boutiques d'un opticien.
            Espace d'administration de contenus réalisé avec express.js.
        `,
        technos: [javascript, vue],
        category: "pro",
        year: 2018,
        githubLink: null,
        webLink: "http://optiquebeaubreuil.com/",
    },
    {
        screenshot: "optiqueduhameau.png",
        title: "Optique du Hameau",
        subtitle: "Site vitrine - Opticien",
        text: `
            Réalisation d'une application web vitrine en vue.js pour présenter les boutiques d'un opticien.
            Espace d'administration de contenus réalisé avec express.js.
        `,
        technos: [javascript, vue],
        category: "pro",
        year: 2018,
        githubLink: null,
        webLink: "http://optiqueduhameau.com/",
    },
    {
        screenshot: "marialagoutte.png",
        title: "Maria la goutte",
        subtitle: "Site vitrine - Artiste",
        text: `
            Développement d'un site web pour présenter l'activité artistique de 'Maria la goutte'.
            Développement d'un espace d'administration sur mesure avec Laravel.
        `,
        technos: [javascript, vue],
        category: "pro",
        year: 2017,
        githubLink: null,
        webLink: null,
    },
    
    // Projets persos
    {
        screenshot: "lelaboratoiredespossibles.jpeg",
        title: "Le laboratoire des possibles",
        subtitle: "Site vitrine - Developpeur",
        text: `
            Réalisation d'un application web vitrine pour présenter les projets de développement du Laboratoire des possibles.
            Progressive web app développée en vue.js avec nuxt et respectant les normes du Material design.
        `,
        technos: [vue, nuxt, vuetify, sass, firebase, javascript, material, pwa],
        category: "perso",
        year: 2020,
        githubLink: "https://github.com/colinfaivre/LeLaboratoireDesPossibles",
        webLink: "https://lelaboratoiredespossibles.com",
    },
    {
        screenshot: "colinfaivre.jpeg",
        title: "colinfaivre.com",
        subtitle: "Site vitrine - Artiste",
        text: `
            Réalisation d'un site vitrine pour présenter l'activité de Colin Faivre, un artiste expérimental.
        `,
        technos: [vue, pwa],
        category: "perso",
        year: 2017,
        githubLink: null,
        webLink: "https://colinfaivre.com",
    },
    {
        screenshot: "sourirepanique.jpeg",
        title: "sourirepanique.com",
        subtitle: "Site vitrine - Groupe",
        text: `
            Réalisation d'un site vitrine pour présenter le groupe Sourire Panique, un duo banjo / batterie hors du commun.
            Collaboration avec Gaëlle Maas, illustratrice.
        `,
        technos: [vue, pwa],
        category: "perso",
        year: 2017,
        githubLink: null,
        webLink: "https://sourirepanique.com",
    },
    {
        screenshot: "semaphore.jpeg",
        title: "Sémaphore",
        subtitle: "Plateforme - Artistes",
        text: `
            Réalisation d'un site pour l'association Sémaphore. Mise en relation d'artistes avec les services de l'association.
        `,
        technos: [javascript, vue],
        category: "perso",
        year: 2017,
        githubLink: null,
        webLink: null,
    },

    // Games
    {
        screenshot: "asteroid.png",
        title: "Vanilla JS Asteroid",
        subtitle: "Arcade game",
        text: `
            "Space War" un des premiers jeux vidéo créés au MIT en 1961.
            Accompagné du livre "Introducing avascript game development", j'ai développé une version personnelle.
            J'ai modifié la taille des astéroides ce qui rend le jeu plutot difficile...
            Je n'ai pas encore réussi à passer le premier niveau du jeu !
        `,
        technos: [javascript],
        category: "game",
        year: 2019,
        githubLink: null,
        webLink: null,
        bookLink: "https://www.apress.com/gp/book/9781484232514",
    },
    {
        screenshot: "tetris.png",
        title: "Vue.js Tetris",
        subtitle: "Tetris game",
        text: `
            Au cours d'une formation JS à laquelle j'ai participé, il était demandé de contribuer à un projet sur github.
            J'ai forké un projet de Tetris créé en vue.js et j'ai proposé des améliorations au niveau de l'interface utilisateur.
        `,
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
        text: `
            Le traditionnel jeu de casse-brique revisité par Mozilla. Un projet intéressant pour continuer de découvrir l'utilisation de l'élément <canvas>
            En voici une version personelle sous forme d'application web progressive.
        `,
        technos: [vue, javascript, material, pwa],
        category: "game",
        year: 2020,
        githubLink: "https://github.com/colinfaivre/vue-tetris",
        webLink: null,
    },
    {
        screenshot: "elevator.png",
        title: "Vanilla JS - Elevators",
        subtitle: "Simulation d'ascenseurs",
        text: `
            Une simulation reproduisant la logique d'un immeuble avec des boutons d'appel d'ascenseur à chaque étage
            et deux ascenseurs. Un devoir réalisé en cours de formation JS pour utiliser la programmation orientée objet.
        `,
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
        text: "Réalisation d'un clone de l'application Gmail. La boite mail se remplit de citations de Chuck Norris. Il est possible de placer des emails dans la corbeille ou dans les favoris.",
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
        text: "Réalisation d'un clone de l'application Slack. On peut créer des channels et ajouter des interlocuteurs, personne ne viendra vous déranger ...",
        technos: [javascript, vue],
        category: "clone",
        year: 2019,
        githubLink: "https://github.com/colinfaivre/slack-clone",
        webLink: "https://slack-clone-db2d2.web.app/create-channel",
    },

    // Augemented reality
    {
        screenshot: "aframe.png",
        title: "GIF augmenté",
        subtitle: "Un projet pour tester ar.js et le framemork 3D A-frame",
        text: "Une application pour placer un GIF en réalité augmenté sur un marqueur préalablement imprimé sur une feuille de papier. Simple et efficace pour refaire la déco du bureau !",
        technos: [javascript],
        category: "ar",
        year: 2020,
        githubLink: null,
        webLink: null,
    },
    {
        screenshot: "aframe.png",
        title: "Montgolfière augmentée",
        subtitle: "Un projet pour tester A-frame",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technos: [javascript],
        category: "ar",
        year: 2020,
        githubLink: null,
        webLink: null,
    },

    // Web of things
    // {
    //     screenshot: "wot.png",
    //     title: "Web of things",
    //     subtitle: "Un projet d'objet connecté",
    //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //     technos: [javascript],
    //     category: "wot",
    //     year: 2019,
    //     githubLink: null,
    //     webLink: null,
    // },
    // {
    //     screenshot: "wot.png",
    //     title: "Web of things",
    //     subtitle: "Un projet d'objet connecté",
    //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //     technos: [javascript],
    //     category: "wot",
    //     year: 2019,
    //     githubLink: null,
    //     webLink: null,
    // },
]

const certifications = [
    {
        image: "mobileWebSpecialist.png",
        title: "Mobile Web Specialist",
        subtitle: "subtitle",
        text: "Content text",
        year: "En cours",
        certifLink: null,
        webLink: "https://developers.google.com/certification/mobile-web-specialist",
        authorityImage: "googleDevelopers.png",
    },
    {
        image: "nuxt.png",
        title: "Nuxt.js - Vue.js on Steroids",
        subtitle: "subtitle",
        text: "Content text",
        year: "En cours",
        certifLink: null,
        webLink: "https://www.udemy.com/course/nuxtjs-vuejs-on-steroids/",
        authorityImage: "udemy.png",
    },
    {
        image: "es6.png",
        title: "Keeping up with the Javascripts : ES6",
        subtitle: "subtitle",
        text: "Content text",
        year: "2019",
        certifLink: "https://www.credential.net/b9e5cf43-c3d5-4ea4-82bc-86bec1ec56e6",
        webLink: "https://pirple.thinkific.com/courses/keeping-up-with-the-javascripts-part-1",
        authorityImage: "pirple.png",
    },
    {
        image: "calarts.jpg",
        title: "UI / UX Design",
        subtitle: "subtitle",
        text: "Content text",
        year: "2019",
        certifLink: "https://coursera.org/share/462fe0e0375851c4ac9d62fd6d9ff75e",
        webLink: "https://www.coursera.org/specializations/ui-ux-design",
        authorityImage: "coursera.png",
    },
    {
        image: "firebase.png",
        title: "Build Web Apps with Vue JS 2 & Firebase",
        subtitle: "subtitle",
        text: "Content text",
        year: "2019",
        certifLink: "https://www.udemy.com/certificate/UC-E70UY4AK/",
        webLink: "https://www.udemy.com/course/build-web-apps-with-vuejs-firebase/",
        authorityImage: "udemy.png",
    },
]

export const db = {
    projects,
    categories,
    technos,
    certifications,
}