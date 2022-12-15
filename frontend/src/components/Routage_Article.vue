<template>
    <div class="bg-indigo-100">
    <div class="bg-indigo-100" v-if="found()">
        
        <Visualisation  v-if="modeVisualisation" :paramArticle=article>
        
        </Visualisation>
        <Creation v-else :paramArticle=article />
    </div>
    <Creation v-else :paramUrl="url" />
    <div class="container grid place-items-center max-w-3xl mx-auto gap-y-1 bg-indigo-100">
        <div class="p-5 mt-auto place-items-center ">
        <button type="button" v-on:click="changeMode" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Changer de mode </button>
    </div>
    </div>
    
    <Footer />
</div>
</template>
<script setup>
    import Visualisation from './Visualisation.vue'
    import Creation from './Creation.vue'
    import useArticles from '../useArticles.js'
    import Footer from './Footer.vue'
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
