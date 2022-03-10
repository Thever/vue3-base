<template>
  <input type="text" v-model="keyWord">
  <h3>{{keyWord}}</h3>
</template>

<script>
import {ref, customRef} from 'vue'
export default {
  name: 'App',
  setup(){
    //  使用vue提供的内置ref
    // let keyWord = ref('hello')

    //  自定义一个ref-myRef
    function myRef(value='', delay=0) {
      //  customRef(处理函数,要返回一个对象)
      return customRef((track, trigger) => {
        let timer
        return {
          get(){
            console.log(`有人从myRef这个容器中读取数据了，我把${value}给他了`)
            //  通知Vue追踪value的变化(提前和get商量一下，让他认为这个value是有用的)
            track()
            //  返回对应的值
            return value
          },
          set(newValue){
            console.log(`有人把myRef这个容器中的数据改为了${newValue}`)
            //  value形参也属于函数作用域
            // value = newValue
            //  通知vue去重新解析模板
            //  trigger()
            //  防抖
            //  延迟解析模板数据
            //  有定时器就删除
            timer && clearTimeout(timer)
            //  手动设置延迟处理
            timer =  setTimeout(() => {
              value = newValue
              trigger()
            },delay)
          }
        }
      })
    }

    //  使用程序员自定义的ref
    let keyWord = myRef('hello', 500)

    return {keyWord}
  }
}
</script>

<style>
</style>
