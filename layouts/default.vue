<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      class="px-1"
    >
      <!-- Close button -->
      <button
        aria-label="close menu"
        v-if="drawer"
        @click.stop="drawer = !drawer"
        class="close-button"
      >
        <v-icon color="secondary">mdi-window-close</v-icon>
      </button>

      <!-- Menu button -->
      <v-app-bar-nav-icon
        aria-label="menu"
        color="secondary"
        @click.stop="drawer = !drawer"
        v-if="!drawer"
      />

      <v-spacer/>

      <!-- Page name -->
      <div class="secondary--text route-name">
        <span class="hidden-sm-and-down">
          <nuxt-link to="/" class="secondary--text">
            Laboratoire
          </nuxt-link>
          <span> / </span>
        </span>
        {{ routeName }}
      </div>

      <v-spacer/>

      <!-- Malt button -->
      <v-btn
        href="https://www.malt.fr/profile/colinfaivre"
        target="_blank"
        rel="noopener noreferrer"
        text
        icon
        color="secondary"
        aria-label="malt.fr"
      >
        <img src="@/assets/images/malt-logo-secondary.svg" alt="Malt" height="28px" width="28px">
      </v-btn>
      
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      color="primary"
      dark
      app
    >
      <v-list
        class="pt-0"
        :class="drawer ? 'accessibility-visible' : 'accessibility-hidden'"
      >

        <nuxt-link
          to="/"
        >
          <v-list-item two-line tabindex="-1" link class="pt-5 pb-5">
            <v-list-item-action class="mr-2">
              <img
                src="@/assets/images/labo-logo.svg"
                alt=""
                height="50px"
                width="50px"
              >
            </v-list-item-action>
            <v-list-item-content>
              <p class="brand-font secondary--text ma-0 drawer-title">
                Le laboratoire
                <br>
                des possibles
              </p>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>

        <v-divider/>

        <nuxt-link
          v-for="route in routes"
          :key="route.index"
          :to="route.link"
        >
          <v-list-item tabindex="-1" link>
            <v-list-item-action>
              <v-icon color="secondary">{{ route.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ route.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>

      </v-list>
    </v-navigation-drawer>

    <v-content class="default-background">
      <nuxt-child @openMenu="drawer = true"/>
    </v-content>
    
    <TheFooter/>
  </v-app>
</template>

<script>
import TheFooter from '@/components/TheFooter'
  export default {
    components: {
      TheFooter,
    },
    props: {
      source: String,
    },
    data: () => ({
      drawer: false,
      routes: [
        {
          link: "/pro",
          icon: "mdi-briefcase",
          name: "Projets professionels",
        },
        {
          link: "/perso",
          icon: "mdi-palette",
          name: "Projets personnels",
        },
        {
          link: "/games",
          icon: "mdi-space-invaders",
          name: "Jeux",
        },
        {
          link: "/clones",
          icon: "mdi-microscope",
          name: "Clones",
        },
        // {
        //   link: "/ar",
        //   icon: "mdi-cube-scan",
        //   name: "Réalité augmentée",
        // },
        // {
        //   link: "/wot",
        //   icon: "mdi-space-station",
        //   name: "Internet des objets",
        // },
        // {
        //   link: "/tech",
        //   icon: "mdi-chip",
        //   name: "Technologies utilisées",
        // },
        {
          link: "/certifications",
          icon: "mdi-school",
          name: "Certifications",
        },
        {
          link: "/legal",
          icon: "mdi-bank",
          name: "Mentions légales",
        },
      ]
    }),
    computed: {
      routeName() {
        const currentRoute = this.routes.filter(route => route.link === this.$route.path)
        if (currentRoute[0]) {
          return currentRoute[0].name
        } else {
          return 'Accueil'
        }
      }
    }
  }
</script>

<style lang="scss">
body {
  background-color: #1E1E1E;
}
.brand-font {
  font-family: 'Orbitron', sans-serif;
}
.drawer-title {
  font-size: 18px;
}
.default-background {
  background: rgb(238, 238, 238);
}
.close-button {
  width: 35px;
}
.route-name {
  font-size: 18px;
}
a {
  text-decoration: none;
}


// Page design
.page {
  padding-top: 30px;
  padding-bottom: 20px;
  max-width: 960px;
  margin: auto;
  color: #1E1E1E;
}
.page-title {
  font-family: 'Open Sans', sans-serif;
  font-size: 28px;
  color: rgb(48, 48, 48);
  text-align: center;
  padding-bottom: 30px;
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