import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/login/Login.vue'
import StuHome from '@/components/stu/homepage/AppLayout.vue'
import PersonView from '@/views/person/Layout.vue'
import FirstpageView from '@/views/firstpage/Layout.vue'
import TeaHome from '@/components/teacher/homepage/AppLayout.vue'
import DeanHome from '@/components/dean/homepage/AppLayout.vue'
import AdminHome from '@/components/admin/homepage/AppLayout.vue'
import Notice from '@/components/stu/noticepage/notice.vue'
import Notice1 from '@/components/stu/noticepage/notice1.vue'
import Handbook from '@/components/stu/noticepage/handbook.vue'
import SelectTitle from '@/components/stu/selecttitle/SelectTitle.vue'
import Assignment from '@/components/stu/selecttitle/AssignmentBook.vue'
import OpeningReport from '@/components/stu/document/OpeningReport.vue'
import InterimReport from '@/components/stu/document/InterimReport.vue'
import Dissertation from '@/components/stu/document/Dissertation.vue'
import Arrangements from '@/components/stu/reply/Arrangements.vue'
import Record from '@/components/stu/reply/Record.vue'
import TeaFirstPage from '@/components/teacher/firstpage/FirstPage.vue'
import DeanPublishNotice from '@/components/dean/publishnotice/PublishNotice.vue'
import AdminFirstPage from '@/components/admin/firstpage/FirstPage.vue'
import Statistics from '@/components/admin/statistics/Statistics.vue'
import UserAdmain from '@/components/admin/userAdmin/UserAdmin.vue'
import TeaPublishNotice from '@/components/teacher/publishnotice/Publishnotice.vue'
import SubmitAssignment from '@/components/teacher/submitassignment/SubmitAssignment.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'login',
      component: Login,
    },
    {
      
      path: '/stuhome',
      name: 'stuhome',
      component: StuHome,
      children:[
        {
          path:'/record',
          component:Record,
        },
        {
          path:'/arrangements',
          component:Arrangements,
        },
        {
          path:'/dissertation',
          component:Dissertation,
        },
        {
          path:'/interimReport',
          component:InterimReport,
        },
        {
          path:'/openingReport',
          component:OpeningReport,
        },
        {
          path:'/assignment',
          component:Assignment,
        },
        {
          path:'/choiceTitle',
          component:SelectTitle,
        },
        {
          path:'/handbook',
          component:Handbook,
        },
        {
          path:'/person',
          component:PersonView,
        },
        {
          path:'/stuhome',
          component:FirstpageView,
        },
        {
          path:'/notice',
          component:Notice,
        },
        {
          path:'/notice/submitDoccumentTime',
          component:Notice1,
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue')
        },
      ]
    },
    {
      path: '/teahome',
      name: 'teahome',
      component: TeaHome,
      children:[
        {
          path:'/teahome',
          component:TeaFirstPage,
        },
        {
          path:'/publishNotice',
          component:TeaPublishNotice,
        },
        {
          path:'/submitAssignment',
          component:SubmitAssignment,
        },
      ]
    },
    {
      path: '/deanhome',
      name: 'deanhome',
      component: DeanHome,
      children:[
        {
          path:'/publishNotice',
          component:DeanPublishNotice,
        },
      ]
    },
    {
      path: '/adminhome',
      name: 'adminhome',
      component: AdminHome,
      children:[
        {
          path:'/adminhome',
          component:AdminFirstPage,
        },
        {
          path:'/statistics',
          component:Statistics,
        },
        {
          path:'/userAdmin',
          component:UserAdmain,
        },
      ]
    },  
  ]
})

export default router
