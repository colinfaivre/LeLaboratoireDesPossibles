<template>
  <v-container fluid>
    <v-row justify="center">

      <v-card
        v-for="project in proProjects" :key="project.index"
        class="ma-2"
        width="450"
        min-width="320"
      >
        <v-img
          class="white--text align-end"
          height="250px"
          :src="require('@/assets/images/screenshots/' + project.screenshot )"
        >
        </v-img>
        <v-card-title color="primary">
          {{ project.title }}
        </v-card-title>
        <v-card-text>
          <div class="text--primary">
            {{ project.subtitle }}
          </div>
          <div class="text--grey">
            {{ project.text }}
          </div>
        </v-card-text>
        <v-card-actions class="ml-2 mb-2">
          <img  v-for="techno in project.technos" :key="techno.index" :src="require('@/assets/images/tech/' + techno + '.png')" :alt="techno" height="30px" class="mr-2">
        </v-card-actions>
      </v-card>

    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    proProjects() {
      return this.$store.getters['projects/proProjects']
    }
  }
}
</script>

<style lang="scss" scoped>

</style>