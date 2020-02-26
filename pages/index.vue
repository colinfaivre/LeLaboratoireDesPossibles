<template>
    <div>
        <div
            class="gradient"
        >
            <v-col
                class="d-flex flex-column align-center justify-center top-screen"
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

                <v-btn
                    href="https://www.malt.fr/profile/colinfaivre"
                    target="_blank"
                    x-large
                    class="mt-10 btn"
                >
                    <img
                    src="@/assets/images/malt-logo-primary.svg"
                    alt=""
                    height="30px"
                    width="30px"
                    class="pr-2"
                    >
                    Demander un devis
                </v-btn>
            </v-col>
        </div>

        <div class="bottom-screen">
            <v-col
                class="d-flex flex-column align-center justify-center top-screen pt-10"
            >
                <h3 class="primary--text">
                    Nos applications
                </h3>

                <p class="mt-10">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum expedita sunt quae sint voluptates esse repellendus quis voluptatem illo ipsa? Dolore aliquid aperiam corrupti quis nesciunt voluptate nulla voluptatum cum.
                </p>

                <v-btn
                    @click="$emit('openMenu')"
                    x-large
                    class="mt-10 btn"
                >
                    <v-icon left>mdi-menu</v-icon>
                    Les applications
                </v-btn>
            </v-col>
            

            <img    
                src="@/assets/images/smokeIllustration.svg"  
                alt="Smoke Illustration"
                class="smoke-illustration"
                draggable="false"
            >
            <img    
                src="@/assets/images/groundIllustration.png"  
                alt="Ground Illustration"
                class="ground-illustration"
                draggable="false"
            >
        </div>

    </div>
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
.top-screen {
    height: 80vh;
    z-index: 2;
}
.btn {
    z-index: 2;
}
.brand {
    z-index: 2;
}
.bottom-screen {
    min-height: 1010px;
    background: #cacaca;
    margin-bottom: -1px;
}
.smoke-illustration {
    position: absolute;
    top: calc(42vh - 100px);
    left: 50%;
    transform: translate(-63%,0);
    width: 500px;
    height: auto;
    display: block;
    z-index: 0;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}
@media (max-width: 376px)
{
    .smoke-illustration {
        top: calc(40vh - 100px);
        width: 350px;
    }
    .bottom-screen {
        min-height: 650px;
    }
}
.ground-illustration {
    position: absolute;
    bottom: 0px;
    height: 100px;
    width: 100%;
    display: block;
    z-index: 1;
}

// @TODO Crééer de vrais styles communs plutôt que ceux-là
p {
    max-width: 600px;
}
h3 {
    font-family: roboto;
}
</style>