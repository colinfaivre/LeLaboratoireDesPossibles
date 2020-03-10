<template functionnal>
    <v-row justify="center">

        <v-card
            v-for="project in projects" :key="project.index"
            class="ma-3"
            width="450"
            min-width="320"
        >
            <v-img
                class="white--text align-end"
                height="250px"
                :src="require('@/assets/images/screenshots/' + project.screenshot )"
            >
            </v-img>

            <v-card-title
                v-if="!project.customer"
                class="primary lighten-1  white--text"
            >
                {{ project.title }}
            </v-card-title>

            <div
                v-if="project.customer" 
                class="px-4 py-2 customer"
                :style="{backgroundColor: project.customer.colorLight}"
            >
                <div class="d-flex align-center">
                    <a :href="project.customer.link" target="_blank" class="d-flex align-center justify-center">
                        <img
                            :src="require('@/assets/images/customers/' + project.customer.logo)"
                            :alt="project.customer.name"
                            height="50px"
                        >
                    </a>
                    <div class="customer-description ml-4">
                        <strong>{{ project.customer.type }}</strong>
                        <span>{{ project.customer.location }}</span>
                        <br/> 
                        <span v-if="project.customer.duration === 1">Mission d' </span>
                        <span v-else>Mission de </span>
                        {{ project.customer.duration }} mois
                    </div>
                </div>
            </div>

            <div class="on-card">
                <v-btn
                    v-if="project.githubLink"
                    :href="project.githubLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    fab
                    :style="{backgroundColor: project.customer ? project.customer.color : '#1E1E1E'}"
                >
                    <v-icon color="secondary">mdi-github</v-icon>
                </v-btn>
                <v-btn
                    v-if="project.webLink"
                    :href="project.webLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    fab 
                    :style="{backgroundColor: project.customer ? project.customer.color : '#1E1E1E'}"
                >
                    <v-icon color="secondary">mdi-arrow-right</v-icon>
                </v-btn>
                <v-btn
                    v-if="project.bookLink"
                    :href="project.bookLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    fab 
                    :style="{backgroundColor: project.customer ? project.customer.color : '#1E1E1E'}"
                >
                    <v-icon color="secondary">mdi-book-open-page-variant</v-icon>
                </v-btn>
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