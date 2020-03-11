<template>
  <v-container fluid>

    <ProjectPresentation
      :name="gameProjects.data.name"
      :description="gameProjects.data.description"
      :quote="gameProjects.data.quote"
    />
    <ProjectList :projects="gameProjects.list"/>

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
    gameProjects() {
      return this.$store.getters['projects/gameProjects']
    }
  }
}
</script>