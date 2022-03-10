<template>
  <div>
    <button @click="isShow = true">点我弹窗</button>
    <!-- teleport标签包裹内容，用to来指定放到什么html标签下，你也可以用css选择器，比如id -->
    <teleport to="body">
      <div v-if="isShow" class="mask">
        <div class="dialog">
          <h3>我是一个弹窗</h3>
          <h4>一些内容</h4>
          <h4>一些内容</h4>
          <h4>一些内容</h4>
          <button @click="isShow = false">关闭弹窗</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Dialog',
  setup() {
    let isShow = ref(false)
    return { isShow }
  },
}
</script>

<style>
.mask {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.dialog {
  width: 300px;
  height: 300px;
  background-color: green;
  text-align:center;
}
</style>