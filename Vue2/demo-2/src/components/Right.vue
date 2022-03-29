<template>
  <div class="right-container">
      <h3>Right组件-----{{ count }}</h3>
      <button @click="add">+1</button>
     
  </div>
</template>

<script>
export default {
  data(){
    return {
      // 子组件自己的数据，希望把count值传给父组件
      count:0
    }
},
  methods:{
    add(){
      this.count += 1;
      // 把结果传给父组件,通过自定义事件
      this.$emit('numchange',this.count)
    }
  }
}
</script>

<style lang="less">
.right-container {
    
    padding:0 20px 20px;
    background-color: lightskyblue;
    min-height: 250px;
   
}


</style>