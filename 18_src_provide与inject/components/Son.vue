<template>
  <div class="son">
    <h3>我是Son组件(孙), {{car.name}}--{{car.price}}</h3>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  name:'Son',
  setup(){
    //  通过inject用数据名称来获取上层组件传递的数据
    let car = inject('car')
    console.log(`car*****`, car)
    return {car}
  }
}
</script>

<style>
  .son{
    background-color:orange;
    padding:10px;
  }
</style>