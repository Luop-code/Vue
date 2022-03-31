<template>
  <div class="left-container">
   <h3>Left组件--------{{ count }}</h3>
   <button @click="count+=1">+1</button>
   <button @click="resetCount">重置</button>
  </div>
</template>

<script>
// 导入 eventBus.js模块

export default {
    data(){
        return {
            count:0
        }
    },
    methods: {
        resetCount(){
            this.count = 0
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