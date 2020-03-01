<template>
  <v-container fluid>

    <ProjectsPresentation :pageData="wotProjects.data" />
    <ProjectCards :projects="wotProjects.list"/>

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
    wotProjects() {
      return this.$store.getters['projects/wotProjects']
    }
  }
}
</script>