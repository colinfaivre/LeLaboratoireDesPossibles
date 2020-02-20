<template>
  <v-container fluid>

    <ProjectCards :projects="wotProjects"/>

  </v-container>
</template>

<script>
import ProjectCards from '@/components/ProjectCards'
export default {
  components: {
    ProjectCards,
  },
  computed: {
    wotProjects() {
      return this.$store.getters['projects/wotProjects']
    }
  }
}
</script>