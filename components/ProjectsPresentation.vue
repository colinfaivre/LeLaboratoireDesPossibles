<template>
    <div class="page">
        <h2 class="page-title">{{ pageData.name }}</h2>
        <p class="page-description">
        {{ pageData.description }}
        </p>
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
}
</style>