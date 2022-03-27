<template>
  <div class="test-container">
      <h3 id="myh3">Test.vue组件 --- {{ books.length}}本图书</h3>
      <p id="p">message 的值 是 {{ message }}</p>
      <button @click="message += '~'">修改message的值</button>
  </div>
</template>

<script>
export default {
  props:['info'],
  data(){
  return {
     message:'hello vue',

    //  定义空数组，存储所有图书列表数据
     books:[]
  }
},
  methods:{
    show(){
    console.log('调用了Test组件的show方法');
  },
  // 使用Ajax请求 图书列表的数据
    initBookList(){
     const xhr =  new XMLHttpRequest()
     xhr.addEventListener('load',()=>{
       const result = JSON.parse(xhr.responseText)
       console.log(result);
       this.books = result.data
     })
     xhr.open('GET','http://www.liulongbin.top:3006/api/getbooks')
     xhr.send()
    }
},

  // 1-beforecreated(),创建阶段的第一个生命周期函数,组件的props/data/methods尚未被创建，都不可用-
  beforeCreate(){
/*     console.log(this.info);
    console.log(this.message);
    this.show() */
  },

// 2-created(),组件的props/data/methods都已创建好且可用，但是组件的模板结构尚未生成！
//     非常重要的一个生命周期函数，经常在里面调用methods中的方法，请求服务器数据，，并将请求到的数据
//     转存到data中，供 template模板渲染时使用
  created(){
    //    console.log(this.info);
    // console.log(this.message);
    // this.show();
    // this.initBookList();
    // const dom=document.querySelector('#myh3');  //无法操作DOM
    // console.log(dom);
  },

// 3-beforeMount(),将要把内存中编译好的HTML结构渲染到浏览器。此时浏览器还没有当前组件的DOM结构
  beforeMount(){
    // console.log('beforeMount');
    // const dom=document.querySelector('#myh3');  
    // console.log(dom);
  },

  // 4-mounted(),已经把内存的HTML结构，成功渲染到浏览器，此时浏览器已包含DOM结构
  mounted(){
        // console.log(this.$el);
        // // 要操作DOM，最早只能在这个阶段
        // const dom=document.querySelector('#myh3'); 
        // console.log(dom);
  },

// 5-beforeUpdate(),将要根据变化过后、最新的数据，重新渲染组件的模板结构
  beforeUpdate(){
      // console.log('beforeUpdate');
      // console.log(this.message);
      // // 这个阶段，数据是最新的，但是模板结构还是旧的，页面还没来得及渲染
      // const dom=document.querySelector('#p'); 
      // console.log(dom.innerHTML);
  },

//  6-updated(),当数据变化之后，为了能够操作到最新的DOM，必须把代码写到这个生命周期
  updated(){
      // console.log('update');
      // console.log(this.message);
      // const dom=document.querySelector('#p'); 
      // console.log(dom.innerHTML);
  },

  beforeDestroy(){
    console.log('beforedestroy');
    console.log(this.message);
  }
}
</script>

<style lang="less" scoped>
.test-container {
    background-color: pink;
    height: 200px;
}
</style>