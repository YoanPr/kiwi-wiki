<template>
    <NavBar />
  
    <div id="abc">
        <div class="container max-w-3xl mx-auto bg-blue-500">
            <p class="font-bold text-3xl border-b">{{ paramArticle.titre }}</p>
            <p v-html="HTMLContent"></p>
            <button class="bg-blue-300 hover:bg-blue-400 rounded-full" 
                id="boutonAjout" v-on:click="modifierArticle" type="button">
                Modifier
            </button>
        </div>
    </div>
    <Footer />
    
</template>

<script>    
    import NavBar from './NavBar.vue'
    import Footer from './Footer.vue'
    import {marked} from 'marked';
    import { defineProps } from 'vue';        

    export default {
    props : ['paramArticle'],
    data(){
        return {
            HTMLContent: marked(this.paramArticle.texte)
        }
    }
    }
</script>
