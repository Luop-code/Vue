<template>
  <div class="left-container">
      <h3>Left组件</h3>
      <br>
      <MyCount :init="9"></MyCount>
  </div>
</template>

<script>
export default {

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
  h3 {
   color: red;
 }

// 相当于把自己变成了后代选择器，给自身添加了data-v-xxx属性，再选择后代元素
 /deep/ h5 {
    color:pink;
  }
</style>