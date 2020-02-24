<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      color="primary"
      dark
      app
      clipped
    >
      <v-list dense>

        <nuxt-link to="/pro">
          <v-list-item link>
            <v-list-item-action>
              <v-icon color="secondary">mdi-briefcase</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Projets pros</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>

        <nuxt-link to="/perso">
          <v-list-item link>
            <v-list-item-action>
              <v-icon color="secondary">mdi-palette</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Projets persos</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>

        <nuxt-link to="/games">
          <v-list-item link>
            <v-list-item-action>
              <v-icon color="secondary">mdi-space-invaders</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Jeux</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>

        <nuxt-link to="/clones">
          <v-list-item link>
            <v-list-item-action>
              <v-icon color="secondary">mdi-microscope</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Clones</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>

        <nuxt-link to="/ar">
          <v-list-item link>
            <v-list-item-action>
              <v-icon color="secondary">mdi-cube-scan</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Réalité augmentée</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>

        <nuxt-link to="/wot">
          <v-list-item link>
            <v-list-item-action>
              <v-icon color="secondary">mdi-space-station</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Internet des objets</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
        
        <nuxt-link to="/tech">
          <v-list-item link>
            <v-list-item-action>
              <v-icon color="secondary">mdi-chip</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Technologies utilisées</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>

        <nuxt-link to="/certif">
          <v-list-item link>
            <v-list-item-action>
              <v-icon color="secondary">mdi-school</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Formation</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        </nuxt-link>

        <nuxt-link to="/legal">
          <v-list-item link>
            <v-list-item-action>
              <v-icon color="secondary">mdi-bank</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Mentions Légales</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      clipped-left
      dark
    >
      <v-app-bar-nav-icon color="secondary" @click.stop="drawer = !drawer" />
      <nuxt-link to="/" class="mx-2 d-flex justify-center">
        <img
          src="@/assets/images/labo-logo.svg"
          alt="Le laboratoire des possibles"
          height="35px"
          width="35px"
        >
      </nuxt-link>
      <v-toolbar-title class="secondary--text pl-2">Le laboratoire des possibles</v-toolbar-title>
    </v-app-bar>

    <v-content class="default-background">
      <nuxt-child @openMenu="drawer = true"/>
    </v-content>
    
    <Footer/>
  </v-app>
</template>

<script>
import Footer from '@/components/Footer'
  export default {
    components: {
      Footer,
    },
    props: {
      source: String,
    },
    data: () => ({
      drawer: false,
    }),
  }
</script>

<style lang="scss">
.brand {
  font-family: 'Orbitron', sans-serif;
}
.default-background {
  background: rgb(231, 231, 231);
}
</style>