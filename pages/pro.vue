<template>
  <v-container fluid>

    <ProjectsPresentation :pageData="proProjects.data" />
    <ProjectCards :projects="proProjects.list"/>
    
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
    proProjects() {
      return this.$store.getters['projects/proProjects']
    }
  }
}
</script>