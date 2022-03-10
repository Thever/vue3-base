<template>
  <h4>当前求和为: {{sum}}</h4>
  <button @click="sum++">点我++</button>
  <hr>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资： {{job.j1.salary}}k</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { ref, reactive, toRefs, readonly, shallowReadonly } from 'vue'
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

    //  响应式数据：ref() reactive() 数组
    //  readonly(响应式数据)，返回一个数据，将数据保护起来不允许修改,深只读
    // person = readonly(person)
    //  shallowReadonly(响应式数据)，只不允许修改第一层的数据，深度属性数据可以修改，浅只读
    person = shallowReadonly(person)

    return {
      sum,
      ...toRefs(person),
    }
  },
}
</script>

<style>
</style>
