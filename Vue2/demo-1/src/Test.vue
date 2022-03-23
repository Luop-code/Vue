<template>
    <div class="test-box">
        <h3>这是用户自定义的Test.vue---{{ username }}</h3>
        <button @click="changeName"> 修改用户名</button>
    </div>
</template>

<script>
// 默认导出，固定写法！
export default{
    // data 数据源
    // 注意： .vue组件中的data不能像之前一样。 不能指向对象
    // 注意： 组件中的data必须是一个函数,为了保证组件的独立性和可复用性
    data(){
        // 返回出去的{}中可以定义数据
        return {
            username:'admin'
        }
    },
    methods:{
        changeName(){
            // 组件中，this就表示当前组件的实例对象
            console.log(this);
            this.username='娃哈哈'
        }
    },

    // 当前组件的侦听器
    watch:{},

    // 当前组件的计算属性
    computed:{},

    // 当前组件的过滤器
    filters:{}

    
}
</script>


<style>
.test-box{
  background-color: pink;
}
</style>
