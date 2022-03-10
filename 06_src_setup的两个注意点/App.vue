<template>
  <Demo msg='你好啊' school='b站' @hello="showHelloMsg">
    <template v-slot:=qwe>
      <span>jojo，我不做人啦！</span>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo.vue'
export default {
  name: 'App',
  components:{
    Demo
  },
  setup(){
    function showHelloMsg(val){
      alert(`你好啊，你触发了hello时间，我收到的参数是：${val}!`)
    }
    return {
      showHelloMsg
    }
  }
}
</script>

<style>
</style>
