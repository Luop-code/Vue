const path = require("path");

// 1.导入html-webpack-plugin插件，得到插件的构造函数
const HtmlPlugin = require("html-webpack-plugin");

// 2.new构造函数，创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
  template: "./src/index.html", //指定要复制哪个页面
  filename: "./index.html", //指定复制出来的文件名和存放路径
});

//使用node.js导出语法，向外导出一个webpack配置对象
module.exports = {
  // 在开发调试阶段，建议设置devtool的值
  devtool: "eval-source-map",
  // 实际发布时，建议设置为nosources-source-map或直接关闭SourceMap
  // devtool: "nosources-source-map",

  // 代表webpack运行的模式，可选值：development和production
  //   结论：开发一定要用development,因为追求的是打包速度而不是体积
  // 而发布上线的时候用production
  mode: "development",

  //   entry:指定要处理哪个文件
  entry: path.join(__dirname, "./src/index.js"), //打包入口文件的路径

  //   指定生成的文件存放到哪里
  output: {
    // 存放的目录
    path: path.join(__dirname, "dist"),

    // 生成的文件名
    filename: "js/main.js",
    clean: true,
  },

  devServer: {
    open: true, //首次打包成功后，自动打开浏览器
    static: {
      directory: path.join(__dirname, ""),
    },
    compress: true,
    port: 9000, //http协议中，80端口号可以省略
  },

  //插件的数组，将来webpack在运行时，会加载并调用这些插件
  plugins: [htmlPlugin],

  module: {
    // webpack默认只能处理.js结尾的文件。由于代码包含了index.css文件，因此默认无法处理
    // 当webpack发现某个文件处理不了的时候，会查找webpack.config.js配置文件
    // 看module.rules数组中，是否配置了对应的loader加载器
    // webpack把index.css这个文件，先转交给最后一个loader（css-loader）进行处理
    // 当css-loader处理完毕后，会把处理的结果，转交给下一个loader（style-loader）
    // 当发现没有下一个loader后，就把处理给结果转交给webpack
    // webpack把结果合并到/dist/main.js中，最终生成打包好的文件
    rules: [
      //定义了不同模块的loader
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      //  处理.less文件的loader
      { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
      // 处理图片文件的loader,limit用来指定图片大小，只有<=limit字节大小的图片才被转成base64格式
      {
        test: /\.jpg|png|gif$/,
        // 在配置url-loader时，多个参数间用&符号分隔
        use: "url-loader?limit=20000&outputPath=images",
      },
      // 处理高级js语法,exclude排除第三方包，只需要转换自己的代码
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
    ],
  },
  resolve: {
    alias: {
      // 告诉webpack，程序员写的代码中，@符号表示src这一层目录
      "@": path.join(__dirname, "./src/"),
    },
  },
};
