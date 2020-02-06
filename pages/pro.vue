<template>
  <v-container fluid>

    <ProjectCards :projects="proProjects"/>
    
  </v-container>
</template>

<script>
import ProjectCards from '@/components/ProjectCards'
export default {
  components: {
    ProjectCards,
  },
  computed: {
    proProjects() {
      return this.$store.getters['projects/proProjects']
    }
  }
}
</script>