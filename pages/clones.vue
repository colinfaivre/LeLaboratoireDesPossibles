<template>
  <v-container fluid>

    <ProjectsPresentation :pageData="cloneProjects.data" />
    <ProjectCards :projects="cloneProjects.list"/>

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
    cloneProjects() {
      return this.$store.getters['projects/cloneProjects']
    }
  }
}
</script>