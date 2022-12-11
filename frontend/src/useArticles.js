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
  const urlInput = document.getElementById('urlArticle')
  const titreInput = document.getElementById('titreArticle')
  const textArticle = document.getElementById('textArticle')
  app.service('articles').create({
    url: urlInput.value,
    titre: titreInput.value,
    texte: textArticle.value,
  })
  urlInput.value = ''
  titreInput.value = ''
  textArticle.value = ''
}

 export default {

    data() {
      return {
        message: 'Helloo'
      }
    },
  
    methods: {
      creationArticle, getArticles
    }
  }
