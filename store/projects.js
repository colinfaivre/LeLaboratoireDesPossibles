import {db} from '@/store/db'

export const state = () => ({
    technos: {
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
    },    

    projects: db.projects
})

export const getters = {
    proProjects: state => {
        return state.projects.filter(project => project.category === "pro")
    },
    persoProjects: state => {
        return state.projects.filter(project => project.category === "perso")
    },
    gameProjects: state => {
        return state.projects.filter(project => project.category === "game")
    },
    cloneProjects: state => {
        return state.projects.filter(project => project.category === "clone")
    },
    arProjects: state => {
        return state.projects.filter(project => project.category === "ar")
    },
    wotProjects: state => {
        return state.projects.filter(project => project.category === "wot")
    },
}