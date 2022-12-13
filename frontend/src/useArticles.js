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
 
 // get & display already existing users
 app.service('articles').find({}).then(articlesList => {
    articlesList.forEach(article => addArticleElement(article)) 
 })

 // Listen to new articles being created
app.service('articles').on('created', article => {
  console.log('CREATED', article)
  addArticleElement(article)
})

// Creation de nouveau article
function creationArticle(){
  const pathname = window.location.pathname
  const titreInput = document.getElementById('titreArticle')
  const textArticle = document.getElementById("md-editor-v3-textarea")

  app.service('articles').create({
    url: pathname,
    titre: titreInput.value,
    texte: textArticle.value,
  })
  window.location.reload()
}

 export default {
  
    methods: {
      creationArticle, getArticles, rechercheArticles, getURLFromTitre,
      getArticleFromURL
    }
  }
