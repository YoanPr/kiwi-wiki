<template>
  <NavBar />

<div class="container max-w-2xl mx-auto bg-blue-500">
<h3>Créer articles</h3>
<input class="mb-3" id="urlArticle" type="text" placeholder="URL article"><br>
<input class="mb-3" id="titreArticle" type="text" placeholder="Titre article"><br>
<input class="mb-3" id="textArticle" type="text" placeholder="Texte article"><br>
<button class="mb-4" id="boutonAjout" type="button" v-on:click="creationArticle">Ajouter</button>
<hr>

<h2 class="my-2">Liste des articles</h2>
<ul id="list">
    
    <div class="flex flex-col m-5 space-y-5">
            <div class="max-w-2xl  bg-yellow-600 " v-for="article in getArticles">                
                <h1 class="font-bold border-b">{{ article.titre  }}</h1>
                <p class="my-10">{{ article.texte }} </p>
                <button class="bg-blue-300 hover:bg-blue-400 rounded-full"><a v-bind:href="article.url">Ouvrir</a></button>
            </div>
        </div>
</ul>

</div>
    <Footer />
</template>
<!-- <script src='./useArticles.js' /> -->

<script setup>    
    import NavBar from './components/NavBar.vue'
    import Footer from './components/Footer.vue'
    import useArticles from './useArticles.js'
    const creationArticle = useArticles['methods']['creationArticle']
    const getArticles = useArticles['methods']['getArticles']
</script>