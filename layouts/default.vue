<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon role="menu" color="secondary" @click.stop="drawer = !drawer" />
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :class="drawer ? 'accessibility-visible' : 'accessibility-hidden'"
      color="primary"
      dark
      app
    >
      <v-list>

        <nuxt-link
          to="/"
        >
          <v-list-item two-line tabindex="-1" link class="pt-3 pb-3">
            <v-list-item-action>
              <img
                src="@/assets/images/labo-logo.svg"
                alt=""
                height="25px"
                width="25px"
              >
            </v-list-item-action>
            <v-list-item-content>
              <p class="brand secondary--text ma-0">
                Le laboratoire
                <br>
                des possibles
              </p>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>

        <v-divider></v-divider>

        <nuxt-link
          v-for="menuItem in menuItems"
          :key="menuItem.index"
          :to="menuItem.link"
        >
          <v-list-item tabindex="-1" link>
            <v-list-item-action>
              <v-icon color="secondary">{{ menuItem.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ menuItem.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>

      </v-list>
    </v-navigation-drawer>

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
      menuItems: [
        {
          link: "/pro",
          icon: "mdi-briefcase",
          title: "Projets professionels",
        },
        {
          link: "/perso",
          icon: "mdi-palette",
          title: "Projets personnels",
        },
        {
          link: "/games",
          icon: "mdi-space-invaders",
          title: "Jeux",
        },
        {
          link: "/clones",
          icon: "mdi-microscope",
          title: "Clones",
        },
        {
          link: "/ar",
          icon: "mdi-cube-scan",
          title: "Réalité augmentée",
        },
        {
          link: "/wot",
          icon: "mdi-space-station",
          title: "Internet des objets",
        },
        {
          link: "/tech",
          icon: "mdi-chip",
          title: "Technologies utilisées",
        },
        {
          link: "/certif",
          icon: "mdi-school",
          title: "Formation",
        },
        {
          link: "/legal",
          icon: "mdi-bank",
          title: "Mentions légales",
        },
      ]
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

// Accessibility classes to hide/show drawer
// for it to be unfocusable when offscreen
.accessibility-visible {
  visibility: visible;
}
.accessibility-hidden {
  visibility: hidden;
}

// Test opacity page transition
.page-enter-active,
.page-leave-active {
opacity: 0;
transition: opacity 0.2s ease;
}
/* entering start */
.page-enter {
opacity: 0;
}
/* entering end */
.page-enter-to {
opacity: 1;
}
/* leaving start */
.page-leave {
opacity: 1;
}
/* leaving end */
.page-leave-to {
opacity: 0;
}
</style>