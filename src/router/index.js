import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Html from '@/components/Html'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ],
  // routes: [
  //   {
  //     path: '/',
  //     name: 'Html',
  //     component: Html
  //   }
  // ]
})
