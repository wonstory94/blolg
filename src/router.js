import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue'
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'

// 페이지로 나누고 싶으면 우선 컴포넌트로 만들어야함

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/detail:id", //detail/아무문자
    component: Detail,
  },
//   {
//     path: "/list",
//     component: List.Vue,
//   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 