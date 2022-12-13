<template>
    <p v-if="found()">Article trouvé</p>
    <p v-else>Article non trouvé</p>
</template>
<script setup>

    import useArticles from '../useArticles.js'

    const getArticleFromURL = useArticles['methods']['getArticleFromURL']

    const article = await getArticleFromURL(window.location.pathname)

    function found(){
       return article !== null;
    }


</script>
