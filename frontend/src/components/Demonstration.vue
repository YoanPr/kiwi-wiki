<template>
    <NavBar />
    <div class="bg-indigo-100">
        <div class="container grid place-items-center max-w-3xl mx-auto gap-y-1 bg-indigo-100">
            <p class="text-center text-3xl my-6">Vidéo de démonstration!</p>
         
            <iframe width="800" height="500"
                src="https://youtu.be/Q2QYRn8oT2A">
            </iframe> 
            <div class="p-5 mt-auto place-items-center ">
                <button class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    id="boutonAjout" type="button">
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