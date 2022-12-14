<template>
    <NavBar />
  
    <div class="container flex flex-col p-5 max-w-3xl mx-auto bg-indigo-100">
        <p class="font-bold text-5xl py-5 pl-5 border-b">{{ paramArticle.titre }}</p>
        <p v-html="HTMLContent" class="py-5 pl-5"></p>

        <div class="p-10 mt-auto grid grid-cols-2 place-items-center ">
            <button type="button" v-on:click="modifierArticle" class="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">Accueil</button>
            <button type="button" v-on:click="modifierArticle" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Modifier</button>      
        </div>
    </div>

    <Footer />
</template>

<script>    
    import NavBar from './NavBar.vue'
    import Footer from './Footer.vue'
    import {marked} from 'marked';

    function modifierArticle() {
        alert("à faire");
    }

    export default {
    components: {
        NavBar, Footer
    },

    props : ['paramArticle'],
    data(){
        return {
            HTMLContent: marked(this.paramArticle.texte)
        }
    }
    }
</script>
