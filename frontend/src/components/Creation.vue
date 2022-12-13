<template>
    <NavBar />
  
    <div class="container max-w-3xl mx-auto bg-blue-500">
        <h3>Créer articles</h3>
        <input class="mb-3" id="urlArticle" type="text" placeholder="URL article"><br>
        <input class="mb-3" id="titreArticle" type="text" placeholder="Titre article"><br>
        <Edition />
        <input class="mb-3" id="textArticle" type="hidden" placeholder="Texte article"><br>
        <button class="mb-4" id="boutonAjout" type="button" v-on:click="creationArticle">Ajouter</button>
    </div>
    <Footer />
</template>
  
<script setup>    
    import NavBar from './NavBar.vue'
    import Footer from './Footer.vue'
    import Edition from './Edition.vue'
    import useArticles from '../useArticles.js'

    function creationArticle() {
        document.getElementById("textArticle").value = document.getElementById("md-editor-v3-textarea").value;
        useArticles['methods']['creationArticle']
    }
</script>