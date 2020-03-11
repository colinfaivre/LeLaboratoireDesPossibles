<template functionnal>
    <v-row justify="center">

        <ProjectCard
            v-for="project in projects"
            :key="project.index"
            :screenshot="project.screenshot"
            :title="project.title"
            :customer="project.customer"
            :githubLink="project.githubLink"
            :webLink="project.webLink"
            :bookLink="project.bookLink"
            :subtitle="project.subtitle"
            :text="project.text"
            :technos="project.technos"
            :year="project.year"
        />
            
    </v-row>
</template>

<script>
import ProjectCard from '@/components/ProjectCard'
export default {
    components: {
        ProjectCard,
    },
    props: [
        'projects'
    ]
}
</script>