<template>
  <v-container fluid>

    <ProjectPresentation
      :name="cloneProjects.data.name"
      :description="cloneProjects.data.description"
      :quote="cloneProjects.data.quote"
    />
    <ProjectList :projects="cloneProjects.list"/>

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
    cloneProjects() {
      return this.$store.getters['projects/cloneProjects']
    }
  }
}
</script>