# vue2 vu3 不同
### vue2 创根节点是new Vue({}) vue3是 Vue.createApp().mount('#app')
### vue2的组件template中不能有两个根元素 vue3可以
### vue2中直接对数组中元素进行赋值改动页面不会更新渲染，vue3可以
### vue3中v-if比v-for优先级高 所以不能同时写在一个标签上 vue2则可以