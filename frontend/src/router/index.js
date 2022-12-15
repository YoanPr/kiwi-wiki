import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Demonstration from '../components/Demonstration.vue'
import QuiSommesNous from '../components/QuiSommesNous.vue'
import Routage_Article from '../components/Routage_Article.vue'

const routes = [
    {
        path: '/',
        component: Home,

    },
    {
        path: '/about',
        component: QuiSommesNous,
        
    },
    {
        path: '/livrables/video',
        component: Demonstration,
    },
    {
        path: '/:proprieteUrlArticle+', 
        component: Routage_Article,
        props: true
    }
]
// Commentaires sur le routage ci-dessus :
// Seule la page d'accueil www.wiki.fr/< Rien après le slash > pointe vers la page d'accueil
// (component "Home")
// Tout lien de la forme www.wiki.fr/x/y/z correspond à la création
// pointera sur la page de gestion d'un article (component "Routage_Article" pour l'instant)

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router