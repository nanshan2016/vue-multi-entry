/**
 * Created by gaoying on 2018/4/12.
 */
import VueRouter from 'vue-router';
import JobList from '@/components/containers/joblist'

export default new VueRouter({
  routes: [
    {
      path: '/index',
      name: 'joblist',
      component: JobList
    }
  ]
})
