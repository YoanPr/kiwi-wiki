<template>
    <NavBar />
    <div class="bg-indigo-100">
        <div class="container grid place-items-center max-w-3xl mx-auto gap-y-1 bg-indigo-100">
            <p v-if="isNew" class="text-center my-4">Oups ! Aucun article n'est disponible à cette URL, mais vous pouvez dès maintenant en ajouter un nouveau en utilisant le formulaire ci-dessous ! </p>
            <h3 class="text-2xl mt-2">{{ isNew ? "Ajout" : "Modification "}} article</h3>
            <h4 class="mb-3"> Adresse de l'article : {{urlComplete }}</h4>
            <input class="mb-3" id="titreArticle" type="text" placeholder="Titre article" v-bind:value="title"><br>
            <Edition :paramContenuArticle=contenu />
            <input class="mb-3" id="textArticle" type="hidden" placeholder="Texte article"><br>

            <div class="p-5 mt-auto place-items-center ">
                <button class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    id="boutonAjout" type="button" v-on:click="creationArticle(url, isNew)">
                    {{ isNew ? "Ajouter" : "Valider la modification"}}
                </button>
            </div>
        </div>
    </div>
</template>
  
<script setup>    
    import NavBar from './NavBar.vue'
    import Footer from './Footer.vue'
    import Edition from './Edition.vue'
    import useArticles from '../useArticles.js'
    import { useRoute } from 'vue-router'

    const creationArticle = useArticles['methods']['creationArticle']
    const url = "/" + (useRoute().params['proprieteUrlArticle'].join('/'))
    const urlComplete = window.location.origin + url
    const props = defineProps(['paramArticle'])

    // TRUE si on crée un nouvel article, FALSE sinon
    let isNew = true

    // Titre de l'article (null si nouvel article)
    let title = null

    let contenu = "" 
    if (props['paramArticle'] != null) {
        contenu = props['paramArticle']['texte']
        isNew = false
        title = props['paramArticle']['titre']
    }
    else {
        console.log("article = null")
    }

    const article = props.paramArticle

</script>