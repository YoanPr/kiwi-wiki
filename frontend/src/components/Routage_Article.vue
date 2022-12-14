<template>
    
    <button class="bg-lime-300 hover:bg-blue-400 rounded-full m-2 px-10 py-3" v-on:click="changeMode"> Changer de mode </button>
    <div class="bg-white" v-if="found()">
        
        <Visualisation  v-if="modeVisualisation" :paramArticle=article>
        
        </Visualisation>
        <Creation v-else :paramArticle=article />
    </div>
    <Creation v-else :paramUrl="url" />
</template>
<script setup>
    import Visualisation from './Visualisation.vue'
    import Creation from './Creation.vue'
    import useArticles from '../useArticles.js'
    import {ref} from 'vue'

    const getArticleFromURL = useArticles['methods']['getArticleFromURL']

    const article = await getArticleFromURL(window.location.pathname)

    let modeVisualisation = ref(true)
    function changeMode() {
        modeVisualisation.value = !modeVisualisation.value
        console.log(modeVisualisation)
    } 

    function found(){
       return article !== null;
    }


</script>
