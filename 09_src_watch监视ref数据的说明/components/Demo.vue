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
    let person = ref({
      name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })
    
    //  监视sum,直接检测保存数据的结构，不能直接监视值(sum.value),相当于监视0
    //  监视的对象是数组，ref包裹的简单数据，reactive包裹的对象
    console.log(sum)
    watch(sum, (newValue, oldValue) => {
      console.log(`sum的值变化了`)
      console.log(newValue)
      console.log(oldValue)
    })

    console.log(person)
    //  person是ref包裹的实例对象，里面一层的value是Proxy(借助reactive函数生成)，除非value的整个值被替换掉了，这才被认为是value的值变化了，只是修改value里面的属性内容，则不为认为是value变化了
    //  解决方法一：直接监控person.value属性,监听其改变，这时候value的属性内容变化了，也会被认为value变化了 ==> 也就相当于监视了一个reactive对象，默认开启了deep,开启深度监视
    // watch(person.value, (newValue, oldValue) => {
    //   console.log(`person的值变化了`)
    //   console.log(newValue)
    //   console.log(oldValue)
    // })

    //  解决方法二：开启深度监视
    watch(person, (newValue, oldValue) => {
      console.log(`person的值变化了`)
      console.log(newValue)
      console.log(oldValue)
    }, {deep:true})
    return {
      sum, msg, person
    }
  },
}
</script>

<style>
</style>
