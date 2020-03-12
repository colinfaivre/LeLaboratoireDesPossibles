import {db} from '@/store/db'

export const state = () => ({
    technos: db.technos,
    projects: db.projects,
    categories: db.categories,
})

export const getters = {
    proProjects: state => {
        return {
            list: state.projects.filter(project => project.category === "pro"),
            data: state.categories.filter(category => category.id === "pro")[0]
        }
    },
    persoProjects: state => {
        return {
            list: state.projects.filter(project => project.category === "perso"),
            data: state.categories.filter(category => category.id === "perso")[0]
        }
    },
    gameProjects: state => {
        return {
            list: state.projects.filter(project => project.category === "game"),
            data: state.categories.filter(category => category.id === "game")[0]
        }
    },
    cloneProjects: state => {
        return {
            list: state.projects.filter(project => project.category === "clone"),
            data: state.categories.filter(category => category.id === "clone")[0]
        }
    },
    arProjects: state => {
        return {
            list: state.projects.filter(project => project.category === "ar"),
            data: state.categories.filter(category => category.id === "ar")[0]
        }
    },
    wotProjects: state => {
        return {
            list: state.projects.filter(project => project.category === "wot"),
            data: state.categories.filter(category => category.id === "wot")[0]
        }
    },
}