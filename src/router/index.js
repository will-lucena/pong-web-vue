import { createRouter, createWebHistory } from 'vue-router'
//import LoadingSpinner from '@/components/LoadingSpinner.vue'
//import ErrorComponent from '@/components/ErrorComponent.vue'
import Home from '@/views/Home.vue'
import AboutPage from '@/views/AboutPage.vue'
import BlogPage from '@/views/BlogPage.vue'
import BlogPostPage from '@/views/BlogPostPage.vue'
import LeadsPage from '@/views/LeadsPage.vue'
import LeadsReportPage from '@/views/LeadsReportPage.vue'
//import ContactPage from '@/views/ContactPage.vue'
import NotFound from '@/views/NotFound.vue'

// Common loading/error components configuration
/* Commented out since not using lazy loading currently
const pageComponents = (component) => ({
  component: component,
  loading: LoadingSpinner,
  error: ErrorComponent,
  delay: 200,
  timeout: 3000,
})
*/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogPage,
    },
    {
      path: '/blog/:id',
      name: 'blog-post',
      component: BlogPostPage,
    },
    {
      path: '/leads',
      name: 'leads',
      component: LeadsPage,
    },
    {
      path: '/leads/report',
      name: 'leads-report',
      component: LeadsReportPage,
    },
    /* {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
    }, */
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    },
  ],
})

// Global navigation error handler
router.onError((error) => {
  console.error('Navigation error:', error)
  router.push({ name: 'not-found' })
})

export default router
