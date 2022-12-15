<template>
    <NavBar />
    <div class="bg-indigo-100">
        <div class="container mx-auto grid gap-y-1 bg-transparent w-4/6">
            <h2 class="my-2 text-center text-3xl py-5 text-gray-800 font-extrabold mt-3">Liste des articles</h2>
                <table class="table-fixed border-black h-screen flex-1">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                        <th class="px-4 py-2 w-52">
                            Titre
                        </th>
                        <th class="px-4 py-2 w-52" >
                            Aperçu
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
                        :class="['bg-white border-b text-sm']"
                        >
                        <td class="px-4 py-2 text-black font-medium" v-bind:id="'titre-' + article.id">
                        {{ article.titre }}  
                        </td> 
                        <td class="px-4 py-2 text-gray-500" v-bind:id="'texte-' + article.id">
                            <div v-if="article.texte.length<50">{{ article.texte }}</div>
                            <div v-else>{{ article.texte.substring(0,50)+"..." }}</div>
                        </td>                        
                        <td class="px-4 py-2 text-black font-medium">
                            <button class="bg-white  py-2 px-4 font-semibold  border border-gray-400 rounded shadow">
                                <a :href="`${article.url}`">Ouvrir</a>
                            </button>
                        </td>
                        </tr>
                    </tbody>
                </table>

        </div>
    </div>
    <Footer />
</template>
<!-- <script src='./useArticles.js' /> -->

<script setup>    
    import NavBar from './NavBar.vue'
    import Footer from './Footer.vue'
    import useArticles from '../useArticles.js'
    const getArticles = useArticles['methods']['getArticles']
</script>