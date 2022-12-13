<template>
    <Visualisation v-if="found()" :paramArticle=article />
    <Creation v-else :paramUrl="url" />
</template>
<script setup>
    import Visualisation from './Visualisation.vue'
    import Creation from './Creation.vue'
    import useArticles from '../useArticles.js'

    const getArticleFromURL = useArticles['methods']['getArticleFromURL']

    const article = await getArticleFromURL(window.location.pathname)

    function found(){
       return article !== null;
    }


</script>
