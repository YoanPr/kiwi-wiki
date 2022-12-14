<template>
    <NavBar />
    <div class="bg-indigo-100">
        <div class="container grid place-items-center max-w-3xl mx-auto gap-y-1 bg-indigo-100">
            <p class="text-center my-4">Oups ! Aucun article n'est disponible à cette URL, mais vous pouvez dès maintenant en ajouter un nouveau en utilisant le formulaire ci-dessous ! </p>
            <h3 class="text-2xl mt-2">Création Article</h3>
            <h4 class="mb-3"> Adresse de l'article : {{url}}</h4>
            <input class="mb-3" id="titreArticle" type="text" placeholder="Titre article" v-bind:value="title"><br>
            <Edition :paramContenuArticle=contenu />
            <input class="mb-3" id="textArticle" type="hidden" placeholder="Texte article"><br>
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            id="boutonAjout" type="button" v-on:click="creationArticle(isNew)">
                Ajouter
            </button>
        </div>
    </div>
    <Footer />
</template>
  
<script setup>    
    import NavBar from './NavBar.vue'
    import Footer from './Footer.vue'
    import Edition from './Edition.vue'
    import useArticles from '../useArticles.js'
    const creationArticle = useArticles['methods']['creationArticle']
    const url = window.location.host + window.location.pathname
    const props = defineProps(['paramArticle'])

    // TRUE si on crée un nouvel article, FALSE sinon
    let isNew = true

    // Titre de l'article (null si nouvel article)
    let title = null

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

    const article = props.paramArticle

</script>