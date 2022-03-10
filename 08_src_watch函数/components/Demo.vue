<template>
  <h2>当前求和为:{{sum}}</h2>
  <button @click="sum++">点我+1</button>
  <hr>
  <h2>当前的信息为:{{msg}}</h2>
  <button @click="msg+='!'">修改信息</button>
  <hr>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>薪资： {{person.job.j1.salary}}k</h2>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
import { ref, watch, reactive } from 'vue'
export default {
  name: 'Demo',
  setup() {
    //  数据
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = reactive({
      name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })
    //  监视,不属于数据不需要变量接
    //  watch(监视的对象(变量或数组)，监视的回调，监视的配置(对象))
    //  情况一：监视ref所定义的一个响应式数据
    // watch(sum, (newValue, oldValue) => {
    //   console.log(`sum的值变化了`, newValue, oldValue)
    // })

    // watch(sum, (newValue, oldValue) => {
    //   console.log(`sum的值变化了`, newValue, oldValue)
    // }, {
    //   immediate:true,
    //   // deep:true // deep在vue3有点小问题
    // })
    //  情况二：监视ref所定义的多个响应式数据
    //  vue3 watch是组件函数可以多次调用，vue2中watch是配置项，最多只能配置一次
    //  单独配置
    // watch(sum, (newValue, oldValue) => {
    //   console.log(`sum的值变化了`, newValue, oldValue)
    // })
    // watch(msg, (newValue, oldValue) => {
    //   console.log(`msg的值变化了`, newValue, oldValue)
    // })
    
    //  使用数组进行配置
    // watch([sum, msg], (newValue, oldValue) => {
    //   console.log(`sum或msg的值变化了`, newValue, oldValue)
    // },{
    //   immediate:true
    // })

    //  情况三：监视reactive所定义的一个响应式数据
    //  注意：1.此处无法正确获取oldValue,暂时无法解决，等待版本更新
    //       2.强制开启了深度监视(deep配置无效)
    //  如果在生产环境中需要记录特定的属性，那么可以将该属性名拎出，用ref进行包裹
    // watch(person, (newValue, oldValue) => {
    //   console.log(`person变化了`)
    //   console.log(newValue)
    //   console.log(oldValue)
    // },{deep:false})  //  此处的deep配置无效

    //  情况四：监视reactive所定义的一个响应式数据某个属性
    //  监视reactive定义的对象的属性，需要传入一个函数返回对应的属性值才行
    //  直接写书写属性名会不能识别，提示只能识别ref包裹的简单数据，reactive包裹的对象或数组
    // watch(() => person.age, (newValue, oldValue) => {
    //   console.log(`person.age变化了`)
    //   console.log(newValue)
    //   console.log(oldValue)
    // })

    //  情况五：监视reactive所定义的一个响应式数据某些属性
    //  需要将对应的属性用返回函数包裹起来，在放入数组中返回
    // watch([() => person.name, () => person.age], (newValue, oldValue) => {
    //   console.log(`person的name或age变化了`)
    //   console.log(newValue)
    //   console.log(oldValue)
    // })

    //  特殊情况,如果监视的是reactive定义的对象中的某个属性，deep配置有效
    //  一般而言被监视的属性是对象
    watch(() => person.job, (newValue, oldValue) => {
      console.log(`person.job变化了`)
      console.log(newValue)
      console.log(oldValue)
    },{deep:true})  //此处由于监视的是reactive定义的对象中的某个属性，所以deep配置有效
    return {
      sum, msg, person
    }
  },
  //  vue2里写watch
  // watch:{
  //   //  简单写法
  //   // sum(newValue, oldValue){
  //   //   console.log(`sum的值变化了`, newValue, oldValue)
  //   // }
  //   //  完整写法
  //   // sum:{
  //   //   immediate:true,
  //   //   deep:true,
  //   //   handler(newValue, oldValue){
  //   //     console.log(`sum的值变化了`, newValue, oldValue)
  //   //   }
  //   // }
  // }
}
</script>

<style>
</style>
