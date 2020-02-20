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
                    color="secondary"
                >
                    <v-icon color="grey lighten-4">mdi-github-circle</v-icon>
                </v-btn>
                <v-btn
                    v-if="project.webLink"
                    :href="project.webLink"
                    target="_blank" 
                    large
                    fab 
                    color="secondary"
                >
                    <v-icon color="grey lighten-4">mdi-arrow-right</v-icon>
                </v-btn>
            </div>
            <v-card-title color="primary">
                {{ project.title }}
            </v-card-title>
            <v-card-text>
                <div class="text--primary">
                    {{ project.subtitle }}
                </div>
                <div class="text--grey">
                    {{ project.text }}
                </div>
            </v-card-text>
            <v-card-actions class="ml-2 mb-2">
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
</style>