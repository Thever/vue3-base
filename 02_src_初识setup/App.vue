<template>
  <h1>一个人的信息</h1>
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <button @click="sayHello">说话，vue3 setup配置的方法</button>
  <hr>
  <h2>性别：{{sex}}</h2>
  <button @click="sayWelcome">说话，vue2配置的方法</button>
  <hr>
  <h2>a:{{a}}</h2>
  <h3>vue2和vue3的配置不要混用,配置相同冲突的话以vue3 setup配置为主</h3>
  <h3>Vue2.x配置（data、methos、computed...）可以访问vue3 setup中的属性、方法,但vue3 setup不能访问vue2中的配置</h3>
  <h3>vue3 setup函数不能添加 async 修饰符，这样就是返回promise而不是配置对象了</h3>
  <button @click="test1">测试一下在Vue2的配置中去读取Vue3中的数据、方法</button>
  <br>
  <br>
  <button @click="test2">测试一下在Vue3的setup配置中去读取Vue2中的数据、方法</button>
</template>

<script>
// import {h} from 'vue'
export default {
  name: 'App',
    //  使用vue2的函数来配置
  data(){
    return {
      sex:'男',
      a:200
    }
  },
  methods:{
    sayWelcome(){
      alert(`欢迎！${this.sex}`)
    },
    test1(){
      console.log(this.sex)
      console.log(this.name)
      console.log(this.age)
      console.log(this.sayHello)
      this.sayHello()
    }
  },
  //  此处只是测试下setup,暂时不考虑数据响应式的问题
  setup(){
    //  数据
    let name = '张三'
    let age = 18
    let a = 100

    //  方法
    function sayHello(){
      alert(`我叫${name}，我${age}岁了， 你好啊`)
    }

    function test2(){
      console.log(name)
      console.log(age)
      console.log(sayHello)
      console.log(this.sex)
      console.log(this.sayWelcome)
      this.sayWelcome()
    }
    //  返回值,返回属性和方法,给模板字符串提供属性和方法(常用)
    return {
      name,age, sayHello, test2, a
    }

    //  返回渲染函数(了解)
    //  第一个return是返回渲染函数
    //  从vue中获取渲染函数h,传入两个参数，一个是要渲染的元素标签，一个是要渲染的元素内容
    //  第二个return是因为要将渲染函数渲染的内容返回出去
    //  return () => {return h('h1','jojo,我不做人啦！')}
    //  精简
    // return () => h('h1','jojo,我不做人啦！')
  },
}
</script>

<style>

</style>
