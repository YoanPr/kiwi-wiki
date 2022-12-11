import app from './connexion_socket'

function addArticleElement(article) {
    const articleElement = document.createElement('li')
    articleElement.innerText = article.titre
    document.body.appendChild(articleElement)
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
      creationArticle
    }
  }
