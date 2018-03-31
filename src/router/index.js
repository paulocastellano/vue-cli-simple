import Vue from 'vue'
import Router from 'vue-router'

import Typografy from '@/components/Typografy'

import Login from '@/components/Login'
import RecoverPassword from '@/components/RecoverPassword'
import Register from '@/components/Register'
import ResetPassword from '@/components/ResetPassword'
import SucessPassword from '@/components/SucessPassword'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Typografy',
      component: Typografy
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/recuperar-senha',
      name: 'RecoverPassword',
      component: RecoverPassword
    },
    {
      path: '/cadastro',
      name: 'Register',
      component: Register
    },
    {
      path: '/redefinir-senha',
      name: 'ResetPassword',
      component: ResetPassword
    },
    {
      path: '/recuperar-senha-sucesso',
      name: 'SucessPassword',
      component: SucessPassword
    }
  ]
})
