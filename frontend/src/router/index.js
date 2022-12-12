import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Home.vue'
import Empty from '../components/Empty.vue'

const routes = [
    {
        path: '/',
        component: Home,

    },
    {
        path: '/:propriete_url_article+', 
        component: Empty,
        props: true
    }
]
// Commentaires sur le routage ci-dessus :
// Seule la page d'accueil www.wiki.fr/< Rien après le slash > pointe vers la page d'accueil
// (component "Home")
// Tout lien de la forme www.wiki.fr/x/y/z correspond à la création
// pointera sur la page de gestion d'un article (component "Empty" pour l'instant)

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router