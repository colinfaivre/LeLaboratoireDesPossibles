<template>
    <v-container
    >

        <v-row
            no-gutters
        >
            <v-col class="text-center">
                <img src="@/assets/images/labo-logo.svg" alt="Le laboratoire des possibles">
            </v-col>
        </v-row>

        <v-row
            no-gutters
            justify="center"
            class="text-center"
        >
            <v-col>
                <h1 class="brand secondary--text">
                    Le laboratoire
                    <br/>
                    des possibles
                </h1>
            </v-col>
        </v-row>

        <v-row
            no-gutters
            justify="center"
        >
            <div class="d-flex align-center">
                <img src="@/assets/images/vue-logo.svg" alt="Vue.js" class="mr-3">

                <p class="text-left grey--text body-1 mt-4">
                    Votre application web
                    <br>
                    développée en Vue.js
                </p>
            </div>
        </v-row>
        
        <v-row
            no-gutters
            align="center"
            justify="center"
        >
            <v-col class="text-center">
            <v-btn
                href="https://www.malt.fr/profile/colinfaivre"
                target="_blank"
                x-large
            >
                <img
                src="@/assets/images/malt-logo-primary.svg"
                alt="Malt"
                height="30px"
                width="30px"
                class="pr-2"
                >
                Demander un devis
            </v-btn>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
export default {
  
}
</script>

<style lang="sass" scoped>

</style>