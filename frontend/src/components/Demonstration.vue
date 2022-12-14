<template>
    <NavBar />
    <div class="bg-indigo-100">
        <div class="container grid place-items-center max-w-3xl mx-auto gap-y-1 bg-indigo-100">
            <p class="text-center text-3xl my-6">Vidéo de démonstration!</p>
         
            <iframe width="800" height="500"
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe> 
            <div class="p-5 mt-auto place-items-center ">
                <button class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    id="boutonAjout" type="button" v-on:click="retourAccueil()">
                    Retour à l'accueil
                </button>
            </div>
        </div>
    </div>
    <Footer />
</template>