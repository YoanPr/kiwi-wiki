<script setup>
import useArticles from '../useArticles.js'
const rechercheArticles = useArticles['methods']['rechercheArticles']
const getURLFromTitre = useArticles['methods']['getURLFromTitre']

async function redirection_articles(){
    const titre = document.getElementById("input_recherche").value
    await getURLFromTitre(titre).then(url => {
        window.location.href = window.location.protocol + url;
        }
    )
}

</script>
<template>
 <nav class="flex items-center justify-between flex-wrap bg-sky-900 py-2 lg:px-12 shadow border-solid border-t-2 border-blue-700">
        <div class="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
            <div class="flex items-center flex-shrink-0 text-gray-800 mr-16">
                <img src ="../../public/kiwi.png" class="h-16 self-center">
            </div>
            <div class="block lg:hidden ">
                <button
                    id="nav"
                    class="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-lime-300 hover:text-blue-700 hover:border-blue-700">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
        </div>
    
        <div class="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
            <div class="text-md font-bold text-white lg:flex-grow">
                <a href="/"
                   class="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-800 px-4 py-2 rounded hover:bg-white mr-2">
                    Accueil
                </a>
            </div>
            <div class="text-md font-bold text-white lg:flex-grow">
                <a href="/livrables/video"
                   class="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-800 px-4 py-2 rounded hover:bg-white mr-2">
                    Vid??o de d??monstration
                </a>
            </div>
            <div class="text-md font-bold text-white lg:flex-grow">
                <a href="/about"
                   class="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-800 px-4 py-2 rounded hover:bg-white mr-2">
                    Qui sommes-nous?
                </a>
            </div>
            <!-- Barre de recherche -->
            <div class="relative mx-auto text-white lg:block hidden">
                <input
                    class="border-2 border-white bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none text-black"
                    type="rechercher" name="rechercher" placeholder="Rechercher un article" list="datalist-articles"
                    id= "input_recherche" v-on:input="rechercheArticles()" v-on:keyup.enter="redirection_articles()">
                <datalist id="datalist-articles">


                </datalist>
                <button type="button" v-on:click="redirection_articles()"
                class="absolute right-0 top-0 mt-3 mr-2">
                    <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                         version="1.1" id="Capa_1" x="0px" y="0px"
                         viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;"
                         xml:space="preserve"
                         width="512px" height="512px">
                <path
                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
              </svg>
                </button>
            </div>
        </div>

    </nav>
</template>
