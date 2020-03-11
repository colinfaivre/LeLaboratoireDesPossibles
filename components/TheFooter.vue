<template>
  <v-footer
    color="primary"
    inset
    app
    class="py-3 d-flex justify-center"
  >
  
    <v-btn
      v-for="socialNetwork in socialNetworks"
      :key="socialNetwork.index"
      :href="socialNetwork.link"
      target="_blank"
      rel="noopener noreferrer"
      class="mx-1"  
      text
      icon
      large
      color="secondary"
      :aria-label="socialNetwork.name"
    >
      <v-icon color="secondary">{{ socialNetwork.icon }}</v-icon>
    </v-btn>

  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      socialNetworks: [
        {
          link: "https://github.com/colinfaivre",
          icon: "mdi-github-circle",
          name: "Github",
        },
        {
          link: "mailto:colin.faivre@gmail.com",
          icon: "mdi-email",
          name: "Email",
        },
        {
          link: "https://www.linkedin.com/in/colin-faivre-020498136/",
          icon: "mdi-linkedin",
          name: "Linkedin",
        },
      ]
    }),
  }
</script>