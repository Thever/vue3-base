<template>
  <h4>当前求和为: {{sum}}</h4>
  <button @click="sum++">点我++</button>
  <hr>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资： {{job.j1.salary}}k</h2>
  <h3 v-show="person.car">座驾信息：{{person.car}}</h3>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
  <button @click="showRawPerson">输出最原始的person</button>
  <button @click="addCar">给人添加一台车</button>
  <button @click="person.car.name+='!'">换车名</button>
  <button @click="changePrice">换价格</button>
</template>

<script>
import { ref, reactive, toRefs, toRaw, markRaw } from 'vue'
export default {
  name: 'Demo',
  setup() {
    //  数据
    let sum = ref(0)
    let person = reactive({
      name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })

    function showRawPerson(){
      //  toRaw只能处理reactive封装的响应式数据
      const p = toRaw(person)
      //  p只是一个普通对象，不是响应式数据，所以不会让页面更新
      p.age++
      console.log(p)
    }

    function addCar(){
      let car = {
        name:'奔驰',
        price:40
      }
      //  markRaw标记对象，不让对象成为响应数据，就算操作也不会更新视图
      person.car = markRaw(car)
    }

    function changePrice(){
      console.log(`更改汽车的价格了`)
      person.car.price++
    }

    return {
      sum,
      person,
      ...toRefs(person),
      showRawPerson,
      addCar,
      changePrice
    }
  },
}
</script>

<style>
</style>
