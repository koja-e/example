import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/barcode',
      name: 'barcode',
      component: () => import('@/pages/barcode')
    },
    {
      path: '/character_recognition',
      name: 'characterRecognition',
      component: () => import('@/pages/characterRecognition')
    }
  ],
  /**
   * ページ遷移時にページの頭に戻る
   */
  scrollBehavior () {
    return {x: 0, y: 0}
  }
})

export default router
