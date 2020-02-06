<template>
  <v-container fluid>

    <ProjectCards :projects="persoProjects"/>

  </v-container>
</template>

<script>
import ProjectCards from '@/components/ProjectCards'
export default {
  components: {
    ProjectCards,
  },
  computed: {
    persoProjects() {
      return this.$store.getters['projects/persoProjects']
    }
  }
}
</script>