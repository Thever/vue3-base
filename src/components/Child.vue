<template>
  <div class="child">
    <h3>我是Child组件</h3>
    {{sum}}
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name:'Child',
  // setup(){
  //   let sum = ref(0)
  //   //  父组件做了异步引入和Suspense处理，就能返回一个promise实例让父组件等待并使用
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({sum})
  //     }, 3000)
  //   })
  // },
  //  父组件做了异步引入和Suspense处理的情况下，就能用async修饰符修饰setup了，可以等待返回数据
  async setup(){
    let sum = await new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(666)
      }, 3000)
    })
    return {sum}
  }
}
</script>

<style>
  .child{
    background-color:skyblue;
    padding:10px;
  }
</style>