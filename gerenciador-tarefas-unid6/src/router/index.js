import { createRouter, createWebHistory } from 'vue-router'
import InicialView from '../views/InicialView.vue'
import DetalhesView from '../views/DetalhesView.vue'
import LoginView from '../views/LoginView.vue'
import AdminView from '../views/AdminView.vue'
import ObjetoView from '../views/ObjetoView.vue'
import UsuariosView from '../views/UsuariosView.vue'
import AutorView from '../views/AutorView.vue'

const routes = [
  { path: '/', component: InicialView },
  { path: '/detalhes', component: DetalhesView },
  { path: '/login', component: LoginView },
  { path: '/admin', component: AdminView },
  { path: '/objeto', component: ObjetoView },
  { path: '/usuarios', component: UsuariosView },
  { path: '/autor', component: AutorView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
