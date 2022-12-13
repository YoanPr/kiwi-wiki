<template>
    <NavBar />
        <div class="px-8 container max-w-2xl mx-auto grid gap-y-1 bg-orange-200">
            <h2 class="my-2 text-center mt-3">Liste des articles</h2>
            <ul id="list">
                
                <div class="flex flex-col m-5 space-y-5">
                        <div class="max-w-2xl  bg-yellow-600 " v-for="article in getArticles">                
                            <h1 class="font-bold border-b text-center py-2">{{ article.titre  }}</h1>
                            <p class="my-10">{{ article.texte }} </p>
                            <button class="bg-blue-300 hover:bg-blue-400 rounded-full"><a :href="`${article.titre}`">Ouvrir</a></button>
                        </div>
                    </div>
            </ul>

        </div>
    <Footer />
</template>
<!-- <script src='./useArticles.js' /> -->

<script setup>    
    import NavBar from './NavBar.vue'
    import Footer from './Footer.vue'
    import useArticles from '../useArticles.js'
    const creationArticle = useArticles['methods']['creationArticle']
    const getArticles = useArticles['methods']['getArticles']
</script>