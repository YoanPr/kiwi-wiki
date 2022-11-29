<script>
export default {
  data() {
    return {
      name: 'Vue.js'
    }
  },
  methods: {
    async getToutLesArticles(){
      let response = await fetch('http://localhost:3000/api/articles')
      let articles = await response.json()
      return articles
    },
    async getArticleFromUrl(url) {
      let response = await fetch('http://localhost:3000/api/articles?url=' + url)
      let article = await response.json()
      return article[0]
     },
    async getArticlesFromTitre(titre) {
        let response = await fetch('http://localhost:3000/api/articles?titre[$like]=%' + titre + '%')
        let articles = await response.json()
        return articles
     }
   }
}
</script>

<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>

</template>
