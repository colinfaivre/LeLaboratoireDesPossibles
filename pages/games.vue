<template>
  <v-container fluid>
    <v-row justify="center">
      <v-card
        class="ma-2"
        width="450"
        min-width="320"
      >
        <v-img
          class="white--text align-end"
          height="250px"
          :src="require('@/assets/images/perso/asteroid.png')"
        >
        </v-img>
        <v-card-title color="primary">Vanilla JS Asteroid</v-card-title>

        <v-card-text>
          <div class="text--primary">Arcade game</div>
          <div class="text--grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </v-card-text>

        <v-card-actions class="ml-2 mb-2">
          <img :src="require('@/assets/images/tech/javascript.png')" alt="javascript" height="30px" class="mr-2">
        </v-card-actions>
      </v-card>

      <v-card
        class="ma-2"
        width="450"
        min-width="320"
      >
        <v-img
          class="white--text align-end"
          height="250px"
          :src="require('@/assets/images/perso/tictactoe.png')"
        >
        </v-img>
        <v-card-title color="primary">Vanilla JS TicTacToe</v-card-title>

        <v-card-text>
          <div class="text--primary">Un clone de Slack</div>
          <div class="text--grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </v-card-text>

        <v-card-actions class="ml-2 mb-2">
          <img :src="require('@/assets/images/tech/javascript.png')" alt="javascript" height="30px" class="mr-2">
        </v-card-actions>
      </v-card>

      <v-card
        class="ma-2"
        width="450"
        min-width="320"
      >
        <v-img
          class="white--text align-end"
          height="250px"
          :src="require('@/assets/images/perso/tetris.png')"
        >
        </v-img>
        <v-card-title color="primary">Fork d'un tetris en vue.js</v-card-title>

        <v-card-text>
          <div class="text--primary">Un clone de Gmail</div>
          <div class="text--grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </v-card-text>

        <v-card-actions class="ml-2 mb-2">
         <img :src="require('@/assets/images/tech/vue.png')" alt="vue.js" height="30px" class="mr-2">
          <img :src="require('@/assets/images/tech/sass.png')" alt="sass.js" height="30px" class="mr-2">
          <img :src="require('@/assets/images/tech/javascript.png')" alt="javascript" height="30px" class="mr-2">
        </v-card-actions>
      </v-card>

      <v-card
        class="ma-2"
        width="450"
        min-width="320"
      >
        <v-img
          class="white--text align-end"
          height="250px"
          :src="require('@/assets/images/perso/elevator.png')"
        >
        </v-img>
        <v-card-title color="primary">Simulation d'ascenceurs</v-card-title>

        <v-card-text>
          <div class="text--primary">Un clone de Slack</div>
          <div class="text--grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </v-card-text>

        <v-card-actions class="ml-2 mb-2">
          <img :src="require('@/assets/images/tech/javascript.png')" alt="javascript" height="30px" class="mr-2">
        </v-card-actions>
      </v-card>

    </v-row>
  </v-container>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

</style>