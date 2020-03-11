<template>
  <v-container fluid>

    <ProjectPresentation
      :name="proProjects.data.name"
      :description="proProjects.data.description"
      :quote="proProjects.data.quote"
    />
    <ProjectList :projects="proProjects.list"/>
    
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
    proProjects() {
      return this.$store.getters['projects/proProjects']
    }
  }
}
</script>