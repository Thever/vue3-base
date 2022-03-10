<template>
  <h1>一个人的信息</h1>
  <!-- vue3中读取name的值会自动添加.value，不需要手动添加.value -->
  <h2 v-show="person.name">姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <button @click="test">测试触发一下Demo组件的Hello事件</button>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'Demo',
  // beforeCreate(){
  //   console.log(`---beforeCreate---`)
  // },
  //  接受参数
  props:['msg','school'],
  //  接受自定义事件,避免输出竟敢
  emits:['hello'],
  setup(props, context) {
    console.log(`---setup---`)
    console.log(props)
    console.log(context)
    //  相当于vue2中的this.$attrs,获取传入的没被props接受的参数
    // console.log(context.attrs)
    //  相当于vue2中的this.$eimit,最好在emits中接受自定义事件
    // console.log(context.emit)
    //  相当于vue2中的this.$slots,用来接受父组件的插槽
    // console.log(context.slots)
    let p = {
      name: '张三',
      age: 18,
    }
    let person = reactive(p)

    //  方法
    function test(){
      context.emit('hello', 666)
    }
    //  返回值,返回属性和方法,给模板字符串提供属性和方法(常用)
    return {
      person,
      test
    }
  },
}
</script>

<style>
</style>
