<template>
  <v-container fluid>

    <ProjectCards :projects="arProjects"/>

  </v-container>
</template>

<script>
import ProjectCards from '@/components/ProjectCards'
export default {
  components: {
    ProjectCards,
  },
  computed: {
    arProjects() {
      return this.$store.getters['projects/arProjects']
    }
  }
}
</script>