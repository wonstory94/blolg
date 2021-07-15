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
    //   아무문가 아니라 아무 숫자로 해주세요는 아래 코드
    // path: "/detail/:id(\\d+)", 정규식 문자로 적용 
    // path: "/detail/:id*", 누군가가 / 어쩌구 /어쩌구 /어쩌구 로 검색할때
    path: "/detail/:id", //detail/:아무문자
    component: Detail,
  },
//   {
//     //   404페이지
//     path: "/:qweㅇ로헝qwe", //detail/:아무문자
//     component: 404,
//   },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 