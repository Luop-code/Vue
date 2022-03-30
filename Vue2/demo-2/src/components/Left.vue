<template>
  <div class="left-container">
      <h3>Left组件</h3>
      <p>msg的值是{{msg}}</p>
      <p>user的值是{{ user }}</p>
      <button @click="msg = 'abc'">修改msg</button>
      <button @click="user.name = 'zs' ">修改user</button>
      <br>
      <button @click="send">发送给right</button>
  </div>
</template>

<script>
// 导入 eventBus.js模块
import bus from './eventBus.js'
export default {
  props:['msg','user'],
  data(){
    return {
      str: `hello world`
    }
  },
  methods:{
   
    send(){
       // 通过eventBus发送数据
      bus.$emit('share',this.str)
    }
  }
}
</script>

<style lang="less" scoped>
// scoped，原理就是，自动为每个标签添加 data-v-xxx的属性，这样就不会样式冲突
.left-container {
  
    flex: 1;
    padding:0 20px 20px;
    background-color: orange;
    min-height: 250px;
 
}

</style>