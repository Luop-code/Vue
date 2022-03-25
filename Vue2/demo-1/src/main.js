// 导入vue包，得到Vue构造函数
import Vue from "vue";
// 导入App.vue根组件，将来要把App.vue中的模板结构，渲染到html页面中
import App from "./App.vue";

// 导入需要被全局注册的组件
import Count from "./components/Count.vue";
Vue.component("MyCount", Count);

Vue.config.productionTip = false;

// 创建Vue的实例对象
new Vue({
  // 把render函数指定的组件，渲染到html页面
  render: (h) => h(App),
}).$mount("#app");

// Vue实例的 $mount()方法，作用和 el属性完全一样
