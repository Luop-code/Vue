//1.使用ES6导入语法，导入jQuery
import $ from "jquery";

// 导入样式(webpack中一切皆模块，都可通过es6导入语法)
import "./css/index.css";
import "./css/index.less";

// 导入图片，给img标签的src动态赋值
import sun from "./images/sun.jpg";
console.log(sun);
$(".box").attr("src", sun);

//2.定义jQuery的入口函数
$(function () {
  //3.实现奇偶行变色
  $("li:odd").css("background", "red");
  $("li:even").css("background", "pink");
});

// 定义装饰器函数
function info(target) {
  target.info = "Person info";
}
// 定义一个类
@info
class Person {}
consol.log(Person.info);
