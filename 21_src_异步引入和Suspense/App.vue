<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        <h3>加载中....</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
//  静态引入
//  import Child from '@/components/Child'
//  动态引入(异步引入)，等待异步组件时可以先渲染其他内容
import { defineAsyncComponent } from 'vue'
const Child = defineAsyncComponent(() => import('./components/Child'))
export default {
  name:'App',
  components:{
    Child
  },
}
</script>

<style>
  .app{
    background-color:gray;
    padding:10px;
  }
</style>