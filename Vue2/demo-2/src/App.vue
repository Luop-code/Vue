
<template>
  <div id="app">
   <h1>App根组件</h1>

   <br>
   <div class="box">
     <!-- 渲染Left组件和Right组件 -->
     <!-- 以标签形式，使用注册组件 -->
    
 
   
     <br>
     <Left :msg="message" :user="userinfo"></Left>
     <Right></Right>
    
   </div>
  </div>
</template>

<script>
// 导图需要使用的.vue组件
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'

export default {

  data(){
       return {
      message:'hello',
      userinfo:{name:'lp',age:21}
    }
  },
 
  
  // 注册组件
  components: {
    Left,
    Right,
  
  }
}
</script>

<style lang="less">
#app {
padding: 1px 20px 20px;
background-color: #efefef;
}
</style>
