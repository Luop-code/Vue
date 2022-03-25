<template>
  <div class="right-container">
      <h3>Right组件</h3>
      <br>
      <MyCount :init="0"></MyCount>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.right-container {
    
    padding:0 20px 20px;
    background-color: lightskyblue;
    min-height: 250px;
   
}


</style>