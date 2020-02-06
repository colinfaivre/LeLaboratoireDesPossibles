<template>
  <v-container fluid>

    <ProjectCards :projects="gameProjects"/>

  </v-container>
</template>

<script>
import ProjectCards from '@/components/ProjectCards'
export default {
  components: {
    ProjectCards,
  },
  computed: {
    gameProjects() {
      return this.$store.getters['projects/gameProjects']
    }
  }
}
</script>