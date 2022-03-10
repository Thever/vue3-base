<template>
  <div class="app">
    <h3>我是App组件(祖),{{name}}--{{price}}</h3>
    <Child />
  </div>
</template>

<script>
import {reactive, toRefs, provide} from 'vue'
import Child from '@/components/Child'
export default {
  name:'App',
  components:{
    Child
  },
  setup(){
    let car = reactive({name: '奔驰',price:'40w'})

    //  给自己的后代组件传递数据
    //  provide(提供的数据名称，数据)
    provide('car', car)

    return { ...toRefs(car) }
  }
}
</script>

<style>
  .app{
    background-color:gray;
    padding:10px;
  }
</style>