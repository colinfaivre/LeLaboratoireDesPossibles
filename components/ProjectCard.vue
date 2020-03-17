<template functionnal>
    <v-card 
        class="ma-3"
        width="450"
        min-width="320"
    >
        <v-img
            class="white--text align-end"
            height="250px"
            :src="require('@/assets/images/screenshots/' + screenshot )"
        >
        </v-img>

        <v-card-title
            v-if="!customer"
            class="primary lighten-1  white--text"
        >
            {{ title }}
        </v-card-title>

        <div
            v-if="customer" 
            class="px-4 py-2 customer"
            :style="{backgroundColor: customer.colorLight}"
        >
            <div class="d-flex align-center">
                <a :href="customer.link" target="_blank" class="d-flex align-center justify-center">
                    <img
                        :src="require('@/assets/images/customers/' + customer.logo)"
                        :alt="customer.name"
                        height="50px"
                    >
                </a>
                <div class="customer-description ml-4">
                    <strong>{{ customer.type }}</strong>
                    <span>{{ customer.location }}</span>
                    <br/> 
                    <div v-if="customer.duration">
                        <span v-if="customer.duration === 1">Mission d' </span>
                        <span v-else>Mission de </span>
                        {{ customer.duration }} mois
                    </div>
                    <div v-else>
                        <span>Personnel</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="on-card">
            <v-btn
                v-if="githubLink"
                :href="githubLink"
                target="_blank"
                rel="noopener noreferrer"
                fab
                :style="{backgroundColor: customer ? customer.color : '#1E1E1E'}"
            >
                <v-icon color="secondary">mdi-github-circle</v-icon>
            </v-btn>
            <v-btn
                v-if="webLink"
                :href="webLink"
                target="_blank"
                rel="noopener noreferrer"
                fab 
                :style="{backgroundColor: customer ? customer.color : '#1E1E1E'}"
            >
                <v-icon color="secondary">mdi-arrow-right</v-icon>
            </v-btn>
            <v-btn
                v-if="bookLink"
                :href="bookLink"
                target="_blank"
                rel="noopener noreferrer"
                fab 
                :style="{backgroundColor: customer ? customer.color : '#1E1E1E'}"
            >
                <v-icon color="secondary">mdi-book-open-page-variant</v-icon>
            </v-btn>
        </div>
        
        <v-card-text>
            <div class="text--primary">
                {{ subtitle }}
            </div>
            <div class="project-text text--grey">
                {{ text }}
            </div>
        </v-card-text>

        <v-card-actions class="ml-2 mr-2 d-flex justify-space-between">
            <div>
                <a
                    v-for="techno in technos"
                    :href="techno.url"
                    :key="techno.index"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mr-2"
                >
                    <img
                        :src="require('@/assets/images/tech/' + techno.name + '.png')"
                        :alt="techno.name"
                        height="30px"
                    >
                </a>
            </div>
            <div class="date">{{ year }}</div>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        props: {
            screenshot: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            customer: {
                type: Object,
            },
            githubLink: {
                type: String,
            },
            webLink: {
                type: String,
            },
            bookLink: {
                type: String,
            },
            subtitle: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
            },
            technos: {
                type: Array,
            },
            year: {
                type: Number,
                required: true
            },
        }
    }
</script>

<style lang="scss" scoped>
.card {
    position: relative;
    z-index: 1;
}
.on-card {
    position: absolute;
    z-index: 2;
    right: 15px;
    margin-top: -28px;
}
.project-text {
    height: 100px;
}
.date {
    color: #9e9e9e;
    font-size: 15px;
}
.customer-description {
    color: white;
}
</style>