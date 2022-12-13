<template>
    <Visualisation v-if="found()" :paramArticle=article />
    <Creation v-else :paramUrl="url" />
</template>
<script setup>
    import NavBar from './NavBar.vue'
    import Visualisation from './Visualisation.vue'
    import Creation from './Creation.vue'
    import useArticles from '../useArticles.js'
    import { useRouter, useRoute } from 'vue-router';

    const getArticleFromURL = useArticles['methods']['getArticleFromURL']
    const route = useRoute()
    const url = (route.params.proprieteUrlArticle).join('/')
    //const v = 3.14
    const article = await getArticleFromURL(url)
    console.log(article)

    function found(){
       return article !== null;
    }


</script>
