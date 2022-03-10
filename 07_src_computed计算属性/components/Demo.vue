<template>
  <h1>一个人的信息</h1>
  姓:<input type="text" v-model="person.firstName" />
  <br>
  名:<input type="text" v-model="person.lastName" />
  <br>
  <span>全名：{{person.fullName}}</span>
  <br>
  全名：<input type="text" v-model="person.fullName">
</template>

<script>
//  引入组合api computed
import { reactive, computed } from 'vue'
export default {
  name: 'Demo',
  // beforeCreate(){
  //   console.log(`---beforeCreate---`)
  // },
  setup() {
    let p = {
      firstName: '张',
      lastName: '三',
      age: 18,

    }
    let person = reactive(p)

    //  计算属性计算全名-简写(没有考虑计算属性被修改的情况)
    //  由于使用了reactive封装了数据，使得数据具有响应式
    // person.fullName = computed(() => {
    //   //  传入回调函数，return计算值
    //   return  person.firstName + '-' + person.lastName
    // })

    //   计算属性计算全名-完整写法(考虑读和写)
    person.fullName = computed({
      get(){
        return  person.firstName + '-' + person.lastName
      },
      set(value) {
        const nameArr = value.split('-')
        person.firstName = nameArr[0]
        person.lastName = nameArr[1]
      }
    })
    //  返回值,返回属性和方法,给模板字符串提供属性和方法(常用)
    return {
      person
    }
  },
  // vue2计算属性，可以读取setup
  // computed:{
  //   fullName() {
  //     return this.person.firstName + '-' + this.person.lastName
  //   }
  // },
}
</script>

<style>
</style>
