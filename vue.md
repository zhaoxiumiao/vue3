# vue学习笔记
### vue中应用和组件的基础概念
   - createApp表示创建一个Vue应用, 储存到 app 变量中 --- vue2中是new Vue({}) 的语法
   - 传入的参数表示, 这个应用最外层的组件, 应该如何展示
   - mvvm 设计模式，m -> model 数据， v -> view 视图, vm -> viewModel 视图数据连接层(就是vue应用的根组件)
### 理解Vue中的生命周期函数
   - 生命周期函数：在某一刻会自动执行的函数
     - beforeCreate -- 在实例生成之前会自动执行的函数
     - created -- 在实例生成之后会自动执行的函数
     - beforeMount -- 在模板已经编译成函数后自动执行的函数
     - mounted -- 再组件内容被渲染到页面之后自动执行的函数
     - beforeUpdate -- 当data 中的数据发生变化时自动执行的函数
     - updated -- 当 data 中的数据发生变化，同时页面完成更新后，会自动执行的函数
     - beforeUnmount -- 当 Vue 应用失效时，自动执行的函数 app.unmount()执行销毁 -- vue2 beforeDestroy()
     - unmounted -- 当Vue 应用失效时，且dom 完全销毁之后，会自动执行的函数 -- vue2 destroyed()