<template functionnal>
    <div class="page">
        <h2 class="page-title">
            {{ name }}
        </h2>
        <p class="page-description">
            {{ description }}
        </p>
        
        <div v-if="quote" class="page-quote">
            {{ quote }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        quote: {
            type: String,
        }
    }
}
</script>

<style lang="scss" scoped>
.page-description {
    width: 60%;
    text-align: left;
    margin: auto;
    margin-bottom: 20px;
}
.page-quote {
    width: 60%;
    text-align: left;
    margin: auto;
    margin-bottom: 20px;
}
@media (max-width: 1000px)
{
    .page-description, .page-quote {
        width: 100%;
    }
}
</style>