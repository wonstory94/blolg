<template>
  <div v-for="(a,i) in blog" :key="i">


      <!-- $router.push() 함수로 페이지 이동 가능 -->
      <h4 @click="$router.push('/detail/'+i)">{{a.title}}</h4>
     
     <!-- 

         $router랑  $route는 다르다
         $route는 현재 url에 대한 정보
         $route.fullPath 는 현재 경로 다보여 줌
         $router는 페이지 이동이나 router 자체를 보여줌
         $router.go(-1) , $router.go(-2) 등등
      -->



        <!--router-link로 페이지 이동 -->
      <router-link :to="'/detail/'+i">
        <h4>{{a.title}}</h4>
        <p>{{a.date}}</p>
      </router-link>



  </div>
</template>

<script>
export default {
    name:'List',
    props:{
        blog :Array
    },
    component:{
    }
}
</script>

<style>

</style>
