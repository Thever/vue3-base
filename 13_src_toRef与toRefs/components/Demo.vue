<template>
  <h4>{{person}}</h4>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资： {{job.j1.salary}}k</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue'
export default {
  name: 'Demo',
  setup() {
    //  数据
    let person = reactive({
      name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })

    // const name1 = person.name
    // console.log(`%%%`,name1)

    // const name2 = toRef(person, 'name')
    // console.log(`###`,name2)

    //  把person的属性分割
    // const x = toRefs(person)
    // console.log(`#####`, x)

    return {
      person,
      // //  toRef可以映射对象属性数据，修改映射后的内容，也会同时修改元数据
      // //  第一个参数传入对象，第二个参数传入对象的属性名key
      // name:toRef(person, 'name'),
      // age:toRef(person, 'age'),
      // //  深层次数据调整第一个对象参数，方便拼接
      // salary:toRef(person.job.j1, 'salary'),

      //  使用toRefs来分割属性
      ...toRefs(person)
    }
  },
}
</script>

<style>
</style>
