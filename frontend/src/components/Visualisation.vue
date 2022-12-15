<template>
    <div class="bg-indigo-100">
    <NavBar />
  
    <div class="container flex flex-col p-5 max-w-3xl mx-auto bg-indigo-100">
        <p v-bind:id="'titre-' + paramArticle.id" class="font-bold text-5xl py-5 pl-5 border-b">{{ paramArticle.titre }}</p>
        <hr class="my-2 h-px border-0 bg-gray-700">
        <article v-html="HTMLContent" v-bind:id="'texte-marked-' + paramArticle.id" class="py-5 pl-5 prose lg:prose-xl"></article>
    </div>
    </div>
</template>

<script>    
    import NavBar from './NavBar.vue'
    import Footer from './Footer.vue'
    import {marked} from 'marked';

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
