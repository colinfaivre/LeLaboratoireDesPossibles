<template>
  <v-container fluid>

    <ProjectsPresentation :pageData="arProjects.data" />
    <ProjectCards :projects="arProjects.list"/>

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
    arProjects() {
      return this.$store.getters['projects/arProjects']
    }
  }
}
</script>