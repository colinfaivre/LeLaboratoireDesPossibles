<template>
  <v-container fluid>

    <ProjectPresentation
      :name="persoProjects.data.name"
      :description="persoProjects.data.description"
      :quote="persoProjects.data.quote"
    />
    <ProjectList :projects="persoProjects.list"/>

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
    persoProjects() {
      return this.$store.getters['projects/persoProjects']
    }
  }
}
</script>