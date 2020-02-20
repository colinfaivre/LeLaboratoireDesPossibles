<template>
    <v-container
        fill-height
        fluid
        class="gradient"
    >
        <v-row
            class="mt-6"
            no-gutters
            align="center"
            justify="center"
        >
            <v-col
                class="d-flex flex-column align-center justify-center"
            >
                    <img src="@/assets/images/labo-logo.svg" alt="Le laboratoire des possibles">
                    <h1 class="brand secondary--text">
                        Le laboratoire
                        <br/>
                        des possibles
                    </h1>
                    <div class="d-flex align-center">
                        <img src="@/assets/images/vue-logo.svg" alt="Vue.js" class="mr-3">

                        <p class="text-left grey--text body-1 mt-4">
                            Votre application web
                            <br>
                            développée en Vue.js
                        </p>
                    </div>
            </v-col>
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

<style lang="scss" scoped>
.gradient {
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(90, 90, 90, 0.2) 15%, rgba(255,255,255,1) 51%);
}
</style>