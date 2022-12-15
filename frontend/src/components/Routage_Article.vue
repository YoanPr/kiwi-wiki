<template>
    <div class="bg-indigo-100">
    <div v-if="found()">
        
        <Visualisation  v-if="modeVisualisation" :paramArticle=article>
        </Visualisation>
        <Creation v-else-if="!modeVisualisation" :paramArticle=article>
        </Creation>

        <div v-if="modeVisualisation">
            <div class="container grid place-items-center max-w-3xl mx-auto gap-y-1 bg-indigo-100">
                <div class="p-5 mt-auto place-items-center">
                <button type="button" v-on:click="changeMode" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Editer</button>
            </div>
            </div>
        </div>
        <div v-else >
            <div class="container grid place-items-center max-w-3xl mx-auto bg-indigo-100">
                <div class="p-5 mt-auto grid grid-cols-2 place-items-center ">
                    <button type="button" v-on:click="suppressionArticle(article.id)" class="inline-block mx-3 px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Supprimer</button>
                    <button type="button" v-on:click="changeMode" class="inline-block mx-3 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Visualiser</button>
                </div>
            </div>
        </div>
    </div>
    <Creation v-else :paramUrl="url" />
    <Footer />
</div>
</template>
<script setup>
    import Visualisation from './Visualisation.vue'
    import Creation from './Creation.vue'
    import useArticles from '../useArticles.js'
    import Footer from './Footer.vue'
    import {ref} from 'vue'
    import { useRouter, useRoute } from 'vue-router'
import { getMemoedVNodeCall } from '@vue/compiler-core'

    const getArticleFromURL = useArticles['methods']['getArticleFromURL']
    const suppressionArticle = useArticles['methods']['suppressionArticle']

    const route = useRoute()
    const param = route.params['proprieteUrlArticle']
    const url = "/" + param.join('/')

    const article = await getArticleFromURL(url)

    let modeVisualisation = ref(true)
    function changeMode() {
        modeVisualisation.value = !modeVisualisation.value
        console.log(modeVisualisation.value)
    } 

    function found(){
       return article !== null;
    }

</script>
