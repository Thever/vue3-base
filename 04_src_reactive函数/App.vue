<template>
  <h1>一个人的信息</h1>
  <!-- vue3中读取name的值会自动添加.value，不需要手动添加.value -->
  <h2 v-show="person.name">姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h2 v-show="person.sex">性别:{{ person.sex }}</h2>
  <h3>工作种类:{{ person.job.type }}</h3>
  <h3>工作薪水:{{ person.job.salary }}</h3>
  <h3>爱好:{{ person.hobby }}</h3>
  <h3>测试的数据c:{{ person.job.a.b.c }}</h3>
  <button @click="changeInfo">修改人的信息</button>
  <button @click="addSex">添加一个sex属性</button>
  <button @click="deleteName">删除一个name属性</button>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  name: 'App',
  setup() {
    //  配置非响应数据
    //  let name = '张三'
    //  let age = 18

    /*//  使用vue3中的ref来配合响应数据
    let name = ref('张三')
    let age = ref(18)

    //  vue3 reactive可以用来处理对象和数组
    let job = reactive({
      type:'前端工程师',
      salary:'30k',
      a:{
        b:{
          c:66666
        }
      }
    })
    
    let hobby = reactive(['抽烟','喝酒','烫头'])*/

    //  将数据放到对象中，再丢给reactive进行处理
    let p = {
      name: '张三',
      age: 18,
      job: {
        type: '前端工程师',
        salary: '30k',
        a: {
          b: {
            c: 66666,
          },
        },
      },
      hobby: ['抽烟','喝酒','烫头']
    }
    let person = reactive(p)

    function changeInfo() {
      /*
      //  直接修改不行
      //  name = '李四'
      //  age = 48

      //  使用ref封装的引用实例对象方法来修改值
      //  修改基本类型值
      name.value = '李四'
      age.value = 48
      //  修改对象类型值
      // console.log(name)
      // console.log(age)
      console.log(job)
      //  reactive用来处理对象类型数据，直接可以需改
      job.type = '全栈工程师'
      job.salary = '50k'
      //  reactive处理对象数据是深层次的
      job.a.b.c = '9999'
      //  也能处理数组
      hobby[0] = '学习'
      */
      // 封装后的处理
      person.name = '李四'
      person.age = 48
      person.job.type = '全栈工程师'
      person.job.salary = '50k'
      person.job.a.b.c = '9999'
      //  通过数组下标来修改内容
      person.hobby[0] = '学习'
    }

    function addSex() {
      person.sex = '男'
    }

    function deleteName(){
      delete person.name
    }


    //  返回值,返回属性和方法,给模板字符串提供属性和方法(常用)
    return {
      person,
      changeInfo,
      addSex,
      deleteName
    }
  },
}
</script>

<style>
</style>
