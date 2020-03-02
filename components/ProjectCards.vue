<template>
    <v-row justify="center">

        <v-card
            v-for="project in projects" :key="project.index"
            class="ma-2"
            width="450"
            min-width="320"
        >
            <v-img
                class="white--text align-end"
                height="250px"
                :src="require('@/assets/images/screenshots/' + project.screenshot )"
            >
            </v-img>
            <div class="on-card">
                <v-btn
                    v-if="project.githubLink"
                    :href="project.githubLink"
                    target="_blank" 
                    large
                    fab
                    color="primary"
                >
                    <v-icon color="secondary">mdi-github-circle</v-icon>
                </v-btn>
                <v-btn
                    v-if="project.webLink"
                    :href="project.webLink"
                    target="_blank" 
                    large
                    fab 
                    color="primary"
                >
                    <v-icon color="secondary">mdi-arrow-right</v-icon>
                </v-btn>
            </div>

            <v-card-title
                v-if="!project.customer"
                color="primary"
                class="mb-6"
            >
                {{ project.title }}
            </v-card-title>

            <div
                v-if="project.customer" 
                class="mx-4 mt-4 customer"
            >
                <div class="d-flex">
                    <a :href="project.customer.link" target="_blank">
                        <img
                            :src="require('@/assets/images/customers/' + project.customer.logo)"
                            :alt="project.customer.name"
                            height="50px"
                        >
                    </a>
                    <div class="customer-description ml-2">
                        <strong>{{ project.customer.type }}</strong>
                        <span class="grey--text">{{ project.customer.location }}</span>
                        <br/> 
                        Mission de 
                        {{ project.customer.duration }} mois
                    </div>
                </div>
            </div>
            <v-card-text>
                <div class="text--primary">
                    {{ project.subtitle }}
                </div>
                <div class="project-text text--grey">
                    {{ project.text }}
                </div>
            </v-card-text>

            <v-card-actions class="ml-2 mr-2 d-flex justify-space-between">
                <div>
                    <a
                        v-for="techno in project.technos"
                        :href="techno.url"
                        :key="techno.index"
                        target="_blank"
                        class="mr-2"
                    >
                        <img
                            :src="require('@/assets/images/tech/' + techno.name + '.png')"
                            :alt="techno.name"
                            height="30px"
                        >
                    </a>
                </div>
                <div class="date">{{ project.year }}</div>
            </v-card-actions>
        </v-card>

    </v-row>
</template>

<script>
    export default {
        props: [
            'projects'
        ]
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
    margin-top: -30px;
}
.project-text {
    height: 100px;
}
.date {
    color: #9e9e9e;
    font-size: 15px;
}
</style>