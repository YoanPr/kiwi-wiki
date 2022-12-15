<template>
    <NavBar />
    <div class="bg-indigo-100">
        <div class="container grid place-items-center max-w-3xl mx-auto gap-y-1 bg-indigo-100">
            <p class="text-center text-3xl my-6">Qui sommes-nous ?</p>
         
            <div class="columns-2 text-justify">
                <div class="w-96">
                    <p>Nous sommes 4 alternants ingénieurs en 2ème année de l'école d'ingénieur ENSEEIHT fillière "Sciences du Numérique".</p>
                    <br>
                    <p>Dans le cadre du cours d'Application Web du Semestre 7, nous avons réalisé un Wiki avec Node, Express, Feathers, Knex pour le backend et Vue, Tailwind et Vite pour le frontend.</p>
                    <br>
                    <p>Le nom kiwi-wiki vient de l'inversement de kiwi qui donne wiki. On a donc naturellement pris le fruit et l'animal kiwi en tant que mascotte du site!</p>
                    <br>
                    <p>On espère que kiwi-wiki vous plaira autant qu'à nous,<br><div class="text-right">Carl, Mathilde, Jonathan et Yoan</div></p> 
                </div>
                <img src="../../public/kiwi.png"/>
            </div>
            <div class="p-5 mt-auto place-items-center ">
                <button class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    id="boutonAjout" type="button" v-on:click="retourAccueil()">
                    <a href="/">Retour à l'accueil</a>
                </button>
            </div>
        </div>
    </div>
    <Footer />
</template>
<script setup>
    import NavBar from './NavBar.vue'
    import Footer from './Footer.vue'
</script>