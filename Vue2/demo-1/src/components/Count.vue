

<template>
  <div>
      components下注册的都是私有组件
      <h5>Count 组件</h5>
      <p>count 的值是 :{{ count }}</p>
      <button @click="count+=1">+1</button>

      <button @click="show">打印this</button>
  </div>
</template>

<script>
export default {
  // props是自定义属性，允许使用者通过自定义属性，为当前组件指定初始值
  // props中的数据，可以直接在模板结构中被使用
  // props是只读的，不能直接修改其值
  // props:['init'],
  props:{
    // 自定义属性A:{/* 配置选项 */}
    init:{
      // 如果外界使用时没有传递init属性，则默认值生效
      default:0,

      // init 的值必须是Number属性 数字
      type:Number,

      // 必填项校验，如果不传init，会报错
      required:true
    }
  },

  data(){
  return {
    count:this.init
  }
},

methods:{
  show(){
    console.log(this);
  }
}
}
</script>

<style lang="less">

</style>