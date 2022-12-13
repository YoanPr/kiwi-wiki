<template>
    
    <button class="bg-lime-300 hover:bg-blue-400 rounded-full m-2 px-10 py-3" v-on:click="changeMode"> Changer de mode </button>
    <div v-if="found()">
        
        <Visualisation  v-if="modeVisualisation" :paramArticle=article>
        
        </Visualisation>
        <Creation v-else :paramArticle=article />
    </div>
    <Creation v-else :paramUrl="url" />
</template>
<script setup>

// annuler toutes modifs ici
    import Visualisation from './Visualisation.vue'
    import Creation from './Creation.vue'
    import useArticles from '../useArticles.js'
    import {ref} from 'vue'

    let modeVisualisation = ref(true)
    function changeMode() {
        modeVisualisation.value = !modeVisualisation.value
        console.log(modeVisualisation)
    } 

    const getArticleFromURL = useArticles['methods']['getArticleFromURL']

    const article = await getArticleFromURL(window.location.pathname)

    function found(){
       return article !== null;
    }


</script>
