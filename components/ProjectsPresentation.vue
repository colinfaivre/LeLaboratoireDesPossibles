<template functionnal>
    <div class="page">
        <h2 class="page-title">
            {{ pageData.name }}
        </h2>
        <p class="page-description">
            {{ pageData.description }}
        </p>
        
        <div v-if="pageData.quote" class="page-quote">
            {{ pageData.quote }}
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'pageData'
        ]
    }
</script>

<style lang="scss" scoped>
.page-description {
    width: 60%;
    text-align: center;
    margin: auto;
    margin-bottom: 20px;
}
.page-quote {
    width: 60%;
    text-align: center;
    margin: auto;
    margin-bottom: 20px;
}
@media (max-width: 1000px)
{
    .page-description {
        width: 100%;
    }
}
</style>