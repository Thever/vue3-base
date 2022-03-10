<template>
  <h1>一个人的信息</h1>
  <!-- vue3中读取name的值会自动添加.value，不需要手动添加.value -->
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <h3>工作种类:{{job.type}}</h3>
  <h3>工作薪水:{{job.salary}}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'App',
  setup(){
    //  配置非响应数据
    //  let name = '张三'
    //  let age = 18

    //  使用vue3中的ref来配合响应数据
    let name = ref('张三')
    let age = ref(18)
    let job = ref({
      type:'前端工程师',
      salary:'30k'
    })

    function changeInfo(){
      //  直接修改不行
      //  name = '李四'
      //  age = 48

      //  使用ref封装的引用实例对象方法来修改值
      //  修改基本类型值
      name.value = '李四'
      age.value = 48
      //  修改对象类型值
      job.value.type= '全栈工程师'
      job.value.salary = '50k'
      console.log(name)
      console.log(age)
      console.log(job.value)
    }
    //  返回值,返回属性和方法,给模板字符串提供属性和方法(常用)
    return {
      name,age, changeInfo, job
    }
  },
}
</script>

<style>

</style>
