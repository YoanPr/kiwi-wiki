import app from './connexion_socket'
import { reactive, computed } from 'vue'



const data = reactive({
  articles : []
})

let compteur = 0 // Logs

const getArticles = computed(() => {
  compteur++; console.log("compteur=", compteur) // Logs
  return Object.values(data.articles)
})

function addArticleElement(article) {
    data.articles.push(article)
}

async function rechercheArticles(){
  const chaine_recherche = document.getElementById("input_recherche").value
  let element_dataliste = ''
  app.service('articles').find({
    query: {
      titre: {
        $like: '%' + chaine_recherche + '%'
      }
    }
  }).then(listeArticles => {
      listeArticles.forEach(article => 
        element_dataliste += '<option value="'+article.titre+'">'+ article.titre +'<option/>'
      )
    document.getElementById("datalist-articles").innerHTML = element_dataliste
  })
}

async function getURLFromTitre(titre){
 return app.service('articles').find({
    query: {
      titre: titre,
    }
  }).then(listeArticles => {
    if (listeArticles.length > 0) { 
      return listeArticles[0].url
    } 
    else {
      return titre
    } 
  })
}

async function getArticleFromURL(url){
  return app.service('articles').find({
     query: {
       url: url,
     }
   }).then(listeArticles => {
    if (listeArticles.length > 0) { 
      return listeArticles[0]
    } 
    else {
      return null
    } 
   })
 }
 
 // get & display already existing articles
 app.service('articles').find({}).then(articlesList => {
    articlesList.forEach(article => addArticleElement(article)) 
 })

 // Listen to new articles being created
app.service('articles').on('created', article => {
  console.log('CREATED', article)
  addArticleElement(article)
})

function abonnementMajArticle() {
  app.service('articles').on('patched', article => {
    console.log('PATCHED', article)
    const titre = document.getElementById('titre-' + article.id)
    const texte = document.getElementById('texte-' + article.id)
    titre.innerHTML = article.titre
    texte.innerHTML = article.texte
  })
}

// Creation de nouveau article
async function creationArticle(isNew){
  const pathname = window.location.pathname
  const titreInput = document.getElementById('titreArticle')
  const textArticle = document.getElementById("md-editor-v3-textarea")

  if(isNew) {
    app.service('articles').create({
      url: pathname,
      titre: titreInput.value,
      texte: textArticle.value,
    })
    console.log("un nouvel article")
  }
  else {
    await modificationArticle(titreInput.value, textArticle.value);
  }
  window.location.reload()
}

// Modification d'un article
async function modificationArticle(titreInput, textArticle){
  const article = await getArticleFromURL(window.location.pathname)
  const idArticle = article['id']
  app.service('articles').patch(idArticle, {
    titre: titreInput,
    texte: textArticle,
  })
 
}

 export default {
  
    methods: {
      creationArticle, getArticles, rechercheArticles, getURLFromTitre,
      getArticleFromURL, modificationArticle, abonnementMajArticle
    }
  }
