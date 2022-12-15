<template>
    <NavBar />
    <div class="bg-indigo-100">
        <div class="container max-w-2xl mx-auto grid gap-y-1 bg-transparent">
            <h2 class="my-2 text-center text-3xl text-gray-600 font-extrabold mt-3">Liste des articles</h2>
            <ul id="list">

                <table class="table-fixed border-green-800 h-screen">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                        <th class="px-4 py-2 w-52">
                            Titre
                        </th>
                        <th class="px-4 py-2 w-52" >
                            Contenu
                        </th>
                        <th class="px-4 py-2 w-52">
                            Lien vers l'article
                        </th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-grey-100 text-center">
                        <tr
                        v-for="article in getArticles"
                        :key="article.titre"
                        :class="['bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-sm']"
                        >
                        <td class="px-4 py-2 text-black font-medium" v-bind:id="'titre-' + article.id">
                        {{ article.titre }}  
                        </td> 
                        <td class="px-4 py-2 text-gray-500" v-bind:id="'texte-' + article.id">
                        {{ article.texte }}  
                        </td>                        
                        <td class="px-4 py-2 text-black font-medium">
                            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                <a :href="`${article.url}`">Ouvrir</a>
                            </button>
                        </td>
                        </tr>
                    </tbody>
                </table>

            </ul>
        </div>
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
    const majArticles = useArticles['methods']['abonnementMajArticle']
    majArticles()
</script>