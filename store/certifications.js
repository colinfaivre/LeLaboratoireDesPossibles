export const state = () => ({
    certifications: [],
})

export const getters = {
    certifications: state => {
        return state.certifications
    },
}

export const mutations = {
    SET_CERTIFICATIONS(state, certifications) {
        state.certifications = certifications
    }
}

export const actions = {
    fetchCertifications(context) {
        fetch('/db.json')
        .then(response => {
            response.json().then(data => {
                context.commit('SET_CERTIFICATIONS', data.certifications)
            })
        })
        .catch(err => {
            console.log('Fetch Error', err);
        })
    }
}