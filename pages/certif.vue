<template>
  <div class="page">
    <h2 class="page-title">Certifications</h2>

    <v-row justify="center">
        
        <v-card
          v-for="certification in certifications"
          :key="certification.index"
          class="ma-2 pa-3"
          width="900"
          min-width="320"
        >
          <div class="d-flex">
            <img
              class="white--text card-left"
              width="150px"
              height="150px"
              :src="require('@/assets/images/certifs/' + certification.image)"
            />
            <div class="ml-5 card-right d-flex flex-column justify-space-between">
              <div class="header d-flex justify-space-between">
                <div class="left">
                  <img
                    v-if="certification.authorityImage"
                    class="white--text"
                    height="35px"
                    :src="require('@/assets/images/certifs/' + certification.authorityImage)"
                  />
                  <div class="title">
                    {{ certification.title }}
                  </div>
                </div>

                <v-btn
                    v-if="certification.certifLink"
                    :href="certification.certifLink"
                    target="_blank" 
                    fab 
                    color="#1E1E1E"
                >
                  <v-icon color="secondary">mdi-trophy</v-icon>
                </v-btn>
              </div>
              
              <!-- <a
                v-if="certification.webLink"  
                :href="certification.webLink"
                target="_blank"
              >
                Course link
              </a> -->
              <div class="footer d-flex justify-space-between">
                <div class="left"></div>
                <div class="right mr-1">
                  {{ certification.year }}
                </div>
              </div>
            </div>
          </div>
        </v-card>

    </v-row>
    
  </div>
</template>

<script>
export default {
  computed: {
    certifications() {
      return this.$store.getters['certifications/certifications']
    }
  }
}
</script>

<style lang="scss" scoped>
.header, .card-right, .footer {
  width: 100%;
}
</style>