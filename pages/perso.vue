<template>
  <v-container fluid>

    <ProjectsPresentation :pageData="persoProjects.data" />
    <ProjectCards :projects="persoProjects.list"/>

  </v-container>
</template>

<script>
import ProjectCards from '@/components/ProjectCards'
import ProjectsPresentation from '@/components/ProjectsPresentation'

export default {
  components: {
    ProjectCards,
    ProjectsPresentation
  },
  computed: {
    persoProjects() {
      return this.$store.getters['projects/persoProjects']
    }
  }
}
</script>