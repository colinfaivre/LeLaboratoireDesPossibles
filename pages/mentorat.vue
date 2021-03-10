<template>
  <v-container>
    <div class="page">
      <h2 class="page-title">Mentorat</h2>

      <v-img
        :src="require('@/assets/images/mentoring/openclassrooms_logo.png')"
        max-width="300px"
        class="mx-auto mb-2"
      />

      <v-img
        :src="require('@/assets/images/mentoring/developpeur_web_OC.png')"
        max-width="400px"
        class="mx-auto"
      />

      <br>

      Depuis 2020 j'accompagne les étudiants du parcours professionalisant <a href="https://openclassrooms.com/fr/paths/185-developpeur-web" target="blank">"Développeur web"</a> sur OpenClassrooms.
      L'accompagnement concerne la réalisation de 7 projets qui une fois validés ouvrent l'obtention d'un diplôme de  Développeur Web niveau BAC+2 reconnu par l'état.
      <br><br>

      <ul>
        <li><strong>Projet 1 : </strong> Découvrez le quotidien d'un développeur web</li>
          <ul>
            <li>Comprendre le web</li>
            <li>Veille technologique</li>
            <li>Métiers de développeur</li>
          </ul>

        <br>

        <li><strong>Projet 2 : </strong> Transformez une maquette en site web</li>
          <ul>
            <li>Git</li>
            <li>HTML5/CSS3</li>
            <li>Terminal</li>
            <li>Intégration maquette</li>
          </ul>

        <br>

        <li><strong>Projet 3 : </strong> Dynamisez une page web avec des animations CSS</li>
          <ul>
            <li>Sass</li>
            <li>Animation CSS</li>
          </ul>

        <br>

        <li><strong>Projet 4 : </strong> Optimisez un site web existant</li>
          <ul>
            <li>SEO</li>
            <li>Accessibilité</li>
          </ul>

        <br>

        <li><strong>Projet 5 : </strong> Construisez un site e-commerce</li>
          <ul>
            <li>Javascript</li>
            <li>Bootstrap 4</li>
          </ul>

        <br>

        <li><strong>Projet 6 : </strong> Construisez une API sécurisée pour une application d'avis gastronomiques</li>
          <ul>
            <li>Node.js/Express/MongoDB</li>
            <li>Sécurité</li>
            <li>API REST</li>
          </ul>

        <br>

        <li><strong>Projet 7 : </strong> Créez un réseau social d'entreprise</li>
          <ul>
            <li>MySQL</li>
            <li>Vue.js</li>
          </ul>

      </ul>

      <v-img
        :src="require('@/assets/images/mentoring/vue_land.png')"
        max-width="200px"
        class="mx-auto mt-12 mb-2"
      />

      <br>

      En tant que membre actif de la communauté Vue.js, je viens en aide à quelques débutant sur le channel discord
      <a href="https://discord.com/channels/325477692906536972/325654285255704578" target="_blank" rel="noopener noreferrer"><b>Vue Land</b></a>.
      C'est l'occasion pour moi de mieux comprendre Vue.js et de d'interroger ma pratique en venant en aide à d'autres développeurs.
      C'est un grand plaisir de pouvoir rendre à la communauté ce qu'elle m'a donné au cours de ces dernières années.
    </div>
  </v-container>
</template>

<script>
export default {
  computed: {
    certifications() {
      return this.$store.getters['certifications/certifications']
    }
  },
  created() {
    this.$store.dispatch('certifications/fetchCertifications')
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
