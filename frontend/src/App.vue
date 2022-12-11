<template>

<h3>Créer articles</h3>
<input class="mb-3" id="urlArticle" type="text" placeholder="URL article"><br>
<input class="mb-3" id="titreArticle" type="text" placeholder="Titre article"><br>
<input class="mb-3" id="textArticle" type="text" placeholder="Texte article"><br>
<button class="mb-4" id="boutonAjout" type="button" v-on:click="creationArticle()">Ajouter</button>
<hr>

<h2 class="my-2">Liste des articles</h2>
<ul id="list"></ul>

</template>
<script src='./useArticles.js'></script>

