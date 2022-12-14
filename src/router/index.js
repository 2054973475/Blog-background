import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* Layout */
import Layout from '@/layout';

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '首页', icon: 'dashboard' }
      }
    ]
  },

  {
    path: '/blog',
    component: Layout,
    redirect: '/blog/administration',
    name: 'blog',
    meta: {
      title: '博客管理',
      icon: 'nested'
    },
    children: [
      {
        path: 'administration',
        component: () => import('@/views/blog/administration/index'),
        name: 'administration',
        meta: { title: '博客管理' }
      },
      {
        path: 'leavingmessage',
        component: () => import('@/views/blog/leavingmessage/index'),
        name: 'leavingmessage',
        meta: { title: '博客留言' }
      },
      {
        path: 'editor/:id?',
        component: () => import('@/views/blog/editor/index'),
        name: 'editor'
      },
      {
        path: 'classification',
        component: () => import('@/views/blog/classification/index'),
        name: 'classification',
        meta: { title: '博客分类' }
      },
      {
        path: 'setup',
        component: () => import('@/views/blog/setup/index'),
        name: 'setup',
        meta: { title: '博客设置' }
      },
      {
        path: 'about',
        component: () => import('@/views/blog/about/index'),
        name: 'about',
        meta: { title: '关于博主' }
      }
    ]
  },
  {
    path: '/material',
    component: Layout,
    redirect: '/material/Links',
    name: 'material',
    meta: {
      title: '物料管理',
      icon: 'nested'
    },
    children: [
      {
        path: 'Links',
        name: 'Links',
        component: () => import('@/views/material/Links/index'),
        meta: { title: '友情链接' }
      },
      {
        path: 'Carousel',
        name: 'Carousel',
        component: () => import('@/views/material/Carousel/index'),
        meta: { title: '轮播图片' }
      }
    ]
  },
  {
    path: '/users',
    component: Layout,
    redirect: '/users/messageUsers',
    name: 'users',
    meta: {
      title: '用户管理',
      icon: 'user'
    },
    children: [
      {
        path: 'messageUsers',
        name: 'messageUsers',
        component: () => import('@/views/users/messageUsers/index'),
        meta: { title: '留言用户' }
      },
      {
        path: 'password',
        name: 'password',
        component: () => import('@/views/users/password/index'),
        meta: { title: '密码修改' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
];

const createRouter = () =>
  new Router({
    // base: '/admin',
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
