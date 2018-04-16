/**
 * Created by gaoying on 2018/4/12.
 */
import VueRouter from 'vue-router';
import Home from '@/components/containers/home'

export default new VueRouter({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
