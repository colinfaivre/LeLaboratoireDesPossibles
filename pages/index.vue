<template>
    <div>
        <v-container
            class="gradient landing"
            fluid
        >
            <v-col
                class="d-flex flex-column align-center justify-center"
            >
                <img src="@/assets/images/labo-logo.svg" alt="Le laboratoire des possibles">
                <h1 class="brand-font z-up secondary--text">
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
                    rel="noopener noreferrer"
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
                    Engagez-moi
                </v-btn>
            </v-col>
        </v-container>


        <div class="sub-landing">
            <p class="presentation-text">
                Développeur front-end en freelance depuis 2017.
                Je travaille essentiellement à distance sur vos projets d'applications web.
                J'ai obtenu une certification de la part de Google qui valide mes compétences concernant le web mobile et je mentore les étudiants de la formation "Développeur web" sur openclassrooms
            </p>
            <nuxt-link class="nav-item" to="/pro">
                <div class="icon-container">
                    <v-icon color="secondary">mdi-briefcase</v-icon>
                </div>
                <div class="text-container">
                    <div class="nav-title">
                        Projets professionnels
                    </div>
                    <div class="sub-title">
                        Applications web
                    </div>
                </div>
            </nuxt-link>

            <nuxt-link class="nav-item" to="/certifications">
                <div class="icon-container">
                    <v-icon color="secondary">mdi-certificate</v-icon>
                </div>
                <div class="text-container">
                    <div class="nav-title">
                        Certification Google
                    </div>
                    <div class="sub-title">
                        Mobile Web Specialist
                    </div>
                </div>
            </nuxt-link>

            <nuxt-link class="nav-item" to="/mentorat">
                <div class="icon-container">
                    <v-icon color="secondary">mdi-school</v-icon>
                </div>
                <div class="text-container">
                    <div class="nav-title">
                        Mentorat
                    </div>
                    <div class="sub-title">
                        Openclassrooms
                    </div>
                </div>
            </nuxt-link>
        </div>


        <div class="sub-landing">
            <p class="presentation-text">
                Parallèlement à mon activité professionnelle, je crée des applications pour le plaisir et pour continuer de me former.
                Entretenir le plaisir d'apprendre et de produire sont essentiels à ma pratique de développeur.
            </p>
            <nuxt-link class="nav-item" to="/perso">
                <div class="icon-container">
                    <v-icon color="secondary">mdi-palette</v-icon>
                </div>
                <div class="text-container">
                    <div class="nav-title">
                        Projets personnels
                    </div>
                    <div class="sub-title">
                        Applications web
                    </div>
                </div>
            </nuxt-link>

            <nuxt-link class="nav-item" to="/games">
                <div class="icon-container">
                    <v-icon color="secondary">mdi-space-invaders</v-icon>
                </div>
                <div class="text-container">
                    <div class="nav-title">
                        Jeux
                    </div>
                    <div class="sub-title">
                        Vanilla JS
                    </div>
                </div>
            </nuxt-link>

            <nuxt-link class="nav-item" to="/clones">
                <div class="icon-container">
                    <v-icon color="secondary">mdi-microscope</v-icon>
                </div>
                <div class="text-container">
                    <div class="nav-title">
                        Clones
                    </div>
                    <div class="sub-title">
                        Applications connues
                    </div>
                </div>
            </nuxt-link>
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
.landing {
    height: calc(100vh - 135px);
    display: flex;
}
.sub-landing {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 80px;
    padding-bottom: 40px;
    background-color: #d1d1d1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .presentation-text {
        text-align: center;
        width: 500px;
        max-width: 100%;
        padding-left: 10px;
        padding-right: 10px;
    }
}

.nav-item {
    width: 350px;
    max-width: 100%;
    background-color: rgb(170, 170, 170);
    padding: 5px;
    border-radius: 35px;
    display: flex;
    margin-bottom: 10px;

    &:hover {
        background-color: rgb(146, 146, 146);
    }
    .icon-container {
        width: 60px;
        height: 60px;
        border-radius: 30px;
        background-color: #1E1E1E;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .text-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 15px;
        padding-right: 15px;
        .nav-title{
            font-size: 18px;
            font-weight: bold;
        }
    }
}
</style>
