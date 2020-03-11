<template>
  <v-container fluid>

    <ProjectPresentation
      :name="arProjects.data.name"
      :description="arProjects.data.description"
      :quote="arProjects.data.quote"
    />
    <ProjectList :projects="arProjects.list"/>

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
    arProjects() {
      return this.$store.getters['projects/arProjects']
    }
  }
}
</script>