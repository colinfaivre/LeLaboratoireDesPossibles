<template>
  <v-container fluid>

    <ProjectPresentation
      :name="wotProjects.data.name"
      :description="wotProjects.data.description"
      :quote="wotProjects.data.quote"
    />
    <ProjectList :projects="wotProjects.list"/>

  </v-container>
</template>

<script>
import ProjectList from '@/components/ProjectList'
import ProjectPresentation from '@/components/ProjectPresentation'

export default {
  components: {
    ProjectList,
    ProjectPresentation
  },
  computed: {
    wotProjects() {
      return this.$store.getters['projects/wotProjects']
    }
  }
}
</script>