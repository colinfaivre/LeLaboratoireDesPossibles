<template>
  <v-container fluid>

    <ProjectCards :projects="cloneProjects"/>

  </v-container>
</template>

<script>
import ProjectCards from '@/components/ProjectCards'
export default {
  components: {
    ProjectCards,
  },
  computed: {
    cloneProjects() {
      return this.$store.getters['projects/cloneProjects']
    }
  }
}
</script>