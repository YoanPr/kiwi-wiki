<template>
    <p v-if="found()">Article trouvé</p>
    <p v-else>Article non trouvé</p>
</template>
<script setup>
    import { useRouter, useRoute } from 'vue-router' 
    
    const route = useRoute()
    const param = route.params.id

    findArticle(param)

    function found() {
        return false
    }

    async function findArticle(url_article) {
        const resultat = await client.service('/articles').find({query: {url: url_article}})
        if(resultat.length == 0) {
            console.log("Not found")
        }
        else {
            const article = resultat[0]
        }
    }

</script>
