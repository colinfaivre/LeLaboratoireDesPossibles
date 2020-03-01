<template>
  <v-container fluid>

    <ProjectsPresentation :pageData="gameProjects.data" />
    <ProjectCards :projects="gameProjects.list"/>

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
    gameProjects() {
      return this.$store.getters['projects/gameProjects']
    }
  }
}
</script>