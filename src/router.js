import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue'
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'

import Author from './components/Author.vue'
import Comment from './components/Comment.vue'


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
    // /detail/0 은 위에 보여줌
    // /detail/0/author 은 아래 코드를 보여줌
    // 명칭 : Nested routes
    // 보통 라우터관련 에러는 사일런스하게 지나감, 에러가 잘 안뜸-> 브라우저 콘솔창 확인바람
    children:[
        {
            // path:"/author", // / 표시는 홈표시임
            path:"author",
            component: Author,
        },
        {
            path:"comment",
            component: Comment,
        },
    ]
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