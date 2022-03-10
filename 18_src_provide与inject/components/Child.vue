<template>
  <div class="child">
    <h3>我是Child组件(子) {{car.name}} --- {{car.price}}</h3>
    <Son />
  </div>
</template>

<script>
import {inject} from 'vue'
import Son from './Son.vue'
export default {
  name:'Child',
  components:{Son},
  setup(){
    //  子组件也能用inject获取上层组件用provide传递的数据，虽说用props传递会更方便
    let car = inject('car')
    console.log(`car**********`, car)
    return {car}
  }
}
</script>

<style>
  .child{
    background-color:skyblue;
    padding:10px;
  }
</style>