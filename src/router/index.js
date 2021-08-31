/* Vue */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/barcode',
      name: 'barcode',
      component: () => import('@/pages/barcode')
    },
  ],
  /**
   * ページ遷移時にページの頭に戻る
   */
  scrollBehavior () {
    return {x: 0, y: 0}
  }
})

export default router