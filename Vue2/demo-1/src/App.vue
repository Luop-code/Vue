
<template>
  <div id="app">
   <h1>App根组件</h1>
   <br>
   <div class="box">
     <!-- 渲染Left组件和Right组件 -->
     <!-- 以标签形式，使用注册组件 -->
     <Test></Test>
     <Left></Left>
     <Right></Right>
    
   </div>
  </div>
</template>

<script>
// 导图需要使用的.vue组件
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'
import Count from  '@/components/Count.vue'
import Test from '@/components/Test.vue'
export default {
  
  // 注册组件
  components: {
    Left,
    Right,
    Count,
    Test
  }
}
</script>

<style lang="less">
#app {
padding: 1px 20px 20px;
background-color: #efefef;
}
</style>
