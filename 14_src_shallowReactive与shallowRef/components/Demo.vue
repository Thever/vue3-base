<template>
  <h4>当前的x.y值是: {{x.y}}</h4>
  <button @click="x={y:888}">点我替换x</button>
  <button @click="x.y++">点我x.y++</button>
  <hr>
  <h4>{{person}}</h4>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资： {{job.j1.salary}}k</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { ref, reactive, toRefs, shallowReactive, shallowRef } from 'vue'
export default {
  name: 'Demo',
  setup() {
    //  数据
    //  shallowReactive只会响应第一层的属性，里面的不考虑
    // let person = shallowReactive({
    let person = reactive({
      name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })
    
    // let x = ref(0)
    // ref 和 shallowRef传入简单类型数据没区别，传入对象才能体现区别
    //  shallow不处理对象类型数据，只处理简单数据类型
    //  ref会处理对象数据类型，简单数据类型
    // let x = ref({
    let x = shallowRef({
      y:0
    })
    // console.log(x)

    return {
      person,
      ...toRefs(person),
      x
    }
  },
}
</script>

<style>
</style>
