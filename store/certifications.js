import {db} from '@/store/db'

export const state = () => ({
    certifications: db.certifications,
})

export const getters = {
    certifications: state => {
        return state.certifications
    },
}