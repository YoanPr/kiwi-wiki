<template>
    <NavBar />
  
    <div class="px-8 container grid place-items-center max-w-3xl mx-auto gap-y-1 bg-orange-200">
        <h3 class="text-2xl">Création Article</h3>
        <h4 class="mb-3"> Adresse de l'article : {{url}}</h4>
<<<<<<< HEAD
        <input class="mb-3" id="titreArticle" type="text" placeholder="Titre article" v-bind:value="title"  ><br>
=======
        <input class="mb-3" id="titreArticle" type="text" placeholder="Titre article"><br>
>>>>>>> 6a03d9ce8a6fa03b827200a69b53cd1556b0b063
        <Edition :paramContenuArticle=contenu />
        <input class="mb-3" id="textArticle" type="hidden" placeholder="Texte article"><br>
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        id="boutonAjout" type="button" v-on:click="creationArticle(isNew)">
            Ajouter
        </button>
    </div>
    <Footer />
</template>
  
<script setup>    
    import NavBar from './NavBar.vue'
    import Footer from './Footer.vue'
    import Edition from './Edition.vue'
    import useArticles from '../useArticles.js'

    // TRUE si on crée un nouvel article, FALSE sinon
    let isNew = true

    // Titre de l'article (null si nouvel article)
    let title = null

    const creationArticle = useArticles['methods']['creationArticle']
    const props = defineProps(['paramArticle'])

    let contenu = "" 
    if (props['paramArticle'] != null) {
        console.log("not null")
        console.log(props['paramArticle']['texte'])
        contenu = props['paramArticle']['texte']
        isNew = false
        title = props['paramArticle']['titre']
    }
    else {
        console.log("article = null")
    }
    console.log("creation param article", props.paramArticle)
    const article = props.paramArticle
    const url = window.location.host + window.location.pathname
</script>