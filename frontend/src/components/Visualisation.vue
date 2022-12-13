<template>
    <NavBar />
  
    <div class="container max-w-3xl mx-auto bg-blue-500">
        <button class="mb-4" id="boutonAjout" type="button" v-on:click="modifierArticle">Modifier</button>
        <h1 class="font-bold border-b">{{ article.titre  }}</h1>
        <p class="my-10">{{ article.texte }} </p>
        <button class="bg-blue-300 hover:bg-blue-400 rounded-full"><a :href="`${article.titre}`">Ouvrir</a></button>
    </div>
    <Footer />
</template>
  
<script setup>    
    import NavBar from './NavBar.vue'
    import Footer from './Footer.vue'
    import useArticles from '../useArticles.js'
    const getArticles = useArticles['methods']['getArticles']
    for (a in getArticles) {
        console.log(a);
    }
    function modifierArticle() {}
</script>