<template>
    <div class="bg-indigo-100">
    <NavBar />
  
    <div class="container flex flex-col p-5 max-w-3xl mx-auto bg-indigo-100">
        <p class="font-bold text-5xl py-5 pl-5 border-b">{{ paramArticle.titre }}</p>
        <p v-html="HTMLContent" class="py-5 pl-5"></p>
    </div>
    </div>
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
