<template>
  <v-container>
    <div class="page">
      <h2 class="page-title">Certifications obtenues</h2>

      <v-row justify="center">
          
          <v-card
            v-for="certification in certifications"
            :key="certification.index"
            class="ma-2 pa-3"
            width="900"
            min-width="320"
          >
            <div class="d-flex flex-column flex-sm-row">
              <div class="card-left">
                <img
                  class="white--text card-left-image"
                  :src="require('@/assets/images/certifs/' + certification.image)"
                />
              </div>
              <div class="ml-sm-5 card-right d-flex flex-column justify-space-between">
                <div class="header d-flex justify-space-between">
                  <div class="left">
                    <div class="title">
                      {{ certification.title }}
                    </div>
                    <img
                      v-if="certification.authorityImage"
                      width="90px"
                      class="white--text"
                      :src="require('@/assets/images/certifs/' + certification.authorityImage)"
                    />
                  </div>

                  <v-btn
                      v-if="certification.certifLink"
                      :href="certification.certifLink"
                      target="_blank"
                      rel="noopener noreferrer"
                      fab 
                      color="#1E1E1E"
                      class="certification-btn"
                  >
                    <v-icon color="secondary">mdi-trophy</v-icon>
                  </v-btn>
                </div>
                
                <!-- <a
                  v-if="certification.webLink"  
                  :href="certification.webLink"
                  target="_blank"
                  rel="noopener noreferrer"
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
  </v-container>
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
.card-left-image {
  width: 150px;
  height: 150px;
  margin: auto;
  display: flex;
}
@media (max-width: 600px) {
  .card-left {
    background-color: rgb(230, 230, 230);
    // width: 90px;
    // height: 90px;
  }
  .card-left-image {
    width: 200px;
    height: 200px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .header {
    margin-top: 10px;
    height: 100px;
  }
}
</style>