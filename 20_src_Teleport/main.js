//  引入的不再是Vue构造函数了， 是 createApp 工厂函数
//  构造函数：首字母大写，通过new方法调用
//  工厂函数：首字母不用大写，不通过new方法调用，直接调用就行
import { createApp } from 'vue';
import App from './App.vue';
//  传入APP壳子调用createAPP工厂函数创建实例，挂载到#app上
createApp(App).mount('#app');

/*
//  创建应用实例对象-app(类似于Vue2中的vm,但app比vm更'轻')
const app = createApp(APP)
app.mount('#app')
*/
/*
const vm = new Vue({
  render: h => h(App)
})
vm.$mount('#app')
*/
