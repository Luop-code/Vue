<template>
  <div id="app">
   <h1 ref="myh1">App根组件 --- </h1>
    <button @click="showThis">打印this</button>
    <button @click="onReset">重置Left组件的count值</button>
   <br>

    <input type="text" v-if="inputVisible" @blur="showButton">
    <button v-else @click="showInput">展示输入框</button>

   <div class="box">
     <Left ref="comLeft"></Left>
   </div>
  </div>
</template>

<script>
import Left from '@/components/Left.vue'

export default {
  data(){
    return {
      inputVisible: false
    }
  },
  methods:{
    showButton(){
      this.inputVisible = false
    },
    showInput(){
      this.inputVisible = true
    },
    showThis(){
      // console.log(this.$refs.myh1);
      this.$refs.myh1.style.color = 'red'
    },
    onReset(){
      
      // this.$refs.comLeft.count= 0
      this.$refs.comLeft.resetCount()
    }
  },
  components:{
    Left,

  }
}
</script>

<style lang="less" >
#app {
padding: 1px 20px 20px;
background-color: #efefef;
}
</style>
