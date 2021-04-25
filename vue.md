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
### vue中的常用模板语法
   -  v-if
   -  v-on @ [动态属性] 修饰符 -> .prevent 阻止默认事件
   -  v-bind : [动态属性]
   -  v-show
   -  v-for
   -  v-html
   -  {{}} 插值语法
### 数据 方法 计算属性 侦听器
   - data 变量
   - methods 方法 定义的方法this都是指向Vue的实例 插值中也能使用
     - //只要页面重新渲染，就会重新计算
   - computed 计算属性 插值里使用 
     - 特性当计算属性所依赖的内容发生变更时，才会重新执行计算
   - watch
     - 监听的属性(to,from){} 变化是触发
   - 总结
     - computed和 method 都能实现的一个功能，建议使用computed，因为有缓存
     - computed 和 watcher 都能实现的功能，建议使用 computed 因为更加简洁
### 样式绑定
   - 三种写法
     - '字符串'
     - {属性值:boolean}
     - ['','',{}]数组形式
   - 行内样式
     - 建议是写成对象形式，也可以写成字符串
### 条件渲染
   - v-show
     - 控制display的值
   - v-if 
     - 是控制dom存在与否
   - v-else-if
   - v-else
### 列表循环渲染
   - v-for
     - 循环数组
       - (item,index) in 数组
     - 循环对象 
       - (value,key,index) in 对象
     - 直接循环数字
     - 加上唯一的key值，会提升性能
   - 数组页面数据更新
     - 使用数组变更函数 push,pop,shift,unshift,splice,sort,reverse
     - 直接替换数组
     - 直接更新数组内容
   - 对象
     - 直接添加对象内容，也可以自动更新页面
   - template标签可以作为一个占位符不会在页面中渲染
### 事件绑定
   - 事件可以传参 $event->事件对象 
   - 绑定多个事件 事件以逗号分割 且要加小括号引用事件
   - 事件修饰符
     - .stop 停止冒泡
     - .self 事件本事才会触发
     - .prevent 阻止默认事件
     - .capture 开启捕获事件
     - .once 事件绑定只执行一次
     - .passive 提升性能
   - 按键修饰符
     - .enter 按下回车时才执行 tab,delete,esc,up,down,left,right,ctrl等等
   - 鼠标修饰符
     - left 左键
     - right 右键
     - middle 中间键
   - 精确修饰符: exact -> 一般写在按键修饰符后边
### 表单中双向绑定(v-model)
   - input使用 
   - textarea使用 变成单标签使用
   - checkbox使用 值只能是true false 或者是空数组 值是数组时input标签中必须有value值 数组中的值会根据你的勾选元素进行添加和删除
   - radio 初始值是字符串 点哪个就是哪个的value值
   - select option 中value中的值
   - select中添加multiple开启多选 这时候值是数组
   - 修饰符
     - .lazy 失去焦点是触发
     - .number 数据会被转换成数字
     - .trim 取消空格
### 组件
   - 组件特点
     - 组件具备复用性
     - app.component()定义的组件是全局组件 名字建议 小写字母单词，中间用横线间隔
     - components 属性定义的是局部组件 建议大写字母开头，驼峰命名
   - 组件传值
     - 父向子传值
       - props:[]
       - props:{}//可以校验类型 String, Boolean, Array, Object, Function, Symbol 
          ```js 
          props:{
            content:{
              type:Number,
              required: true,//表示必填
              default: 123,//表示默认值是789
              validator: function(value){
                return value < 1000;//校验值
              }
            }
          }
          //如果父组件穿的值是content-abc
          props['contentAbc']//用驼峰来接收
          ```
       - 单项数据流
         - 父组件中传给子组件的数据是只读的,不能直接进行修改
       - Non-prop属性
         - 不接收父组件的值 这个属性就会被放在组件外层标签当成一个属性显示在dom中 不想在dom中显示就设置
         inheritAttrs:false
         - $attrs中有所有父组件传来的值
     - 子向父
       - $emit('事件名',参数)  父组件上找到子组件对这个事件进行绑定 emits:['add'] 向外触发的事件 跟props 有差不多的意义
       - 父子组件有双向绑定时 使用v-model 在子组件标签上写上要双向绑定的数据，在子组件中接受modelValue , 在事件中写入 this.$emit(update:modelValue,更改后的数据)
       ```js
       <counter v-model:add-one.uppercase="count" v-model:add-two="count1"></counter>
       //这里注意v-model 可以取不同的名字，这样就可以使用多个v-model
       //当使用别名时这时候再自定义修饰符时子组件接受时使用 别名+Modifiers 没有别名时使用 ModelModifiers 来接受
       props:{
            'addOne':{
                type:String
            },
            'addTwo':Number,
            'addOneModifiers':{
                default:()=>({})
            }
        },
       ``` 
### 插槽(slot #可以代替v-slot:)
   - slot 中使用的数据有作用域 数据在哪里定义就是哪里的数据
   - v-slot:插槽名字 记得写在template标签上 slot标签上定义name名字
   - v-slot="slotProps" 这里slotProps是slot标签所有属性
   - 父组件定义子组件时使用的
### 动态组件和异步组件
   - 动态组件: 根据数据的变化，结合component 这个标签，来随时动态切换组件的显示可以通过<keep-alive>组件进行缓存
   - 异步组件:看一个异步组件实例 使用Vue.defineAsyncComponent() 里边是一个Promise resolve() 中写组件
   ```js
   asyncCommonItem:Vue.defineAsyncComponent(() =>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve({
                    template:`
                        <div>this is an async component</div>
                    `
                })
            },4000)
        })
    }) 
   ``` 
### 遗漏的基础语法
   - v-once
     - 让标签只渲染一次
   - ref 在渲染之后获取dom节点  / 组件引用的一个语法
   - provide提供数据 inject跨越多层组件接收数据
### 过渡和动画
   -  transition 标签
      -  .v-enter-from
      -  .v-enter-active
      -  .v-enter-to
      -  .v-leave-from
      -  .v-leave-active
      -  .v-leave-to
   - 可以使用 在transition中写入 enter-active-class = "class名" 进行animate.css库的引用  动画使用 v-enter-active 和 v-leave-active 这两个固定样式就行了
   - 动画属性
   ```js
    <transition name="hello" type="animation" :duration="{enter:1000,leave:3000}" :css="false">
    //type是以谁为准 duration设定时间
    //:css 是用不用css
    //js
    @before-enter="handleBeforeEnter" el
    @enter="handleEnter" el done
    @after-enter="handleAfter" 
    @before-leave="handleBeforeLeave"
    @leave="handleLeave"
    @after-leave="handleAfter"
   ``` 
   - 列表动画
     - transition-group 多了一个 v-move 别的和transition 差不多
   - 状态动画
     - 状态动画说白了就是通过js不断改变数据形成的动画
### Mixin 混入
   - 组件data,methods 优先级高于mixin data 优先级
   - 生命周期函数，先执行 mixin 里面的, 再执行组件里面的
   - 自定义的属性, 组件中的属性优先级高于 mixin 属性的优先级
   - app.mixin() 定义全局mixin
### 自定义指令 directive
   - 使用 app.directive() 或者 局部directives 定义自己的指令 这里边可以写生命周期函数
### Teleport 传送门功能
   - 有一个<teleport to="body">to 中是要去哪个标签下
### render函数
   - 虚拟bom js对象映射到真实dom
   - template -> render -> h -> 虚拟dom(js对象) -> 真实dom -> 展示到页面上
   - 用法
   ```js
   render(){
        const {h} = Vue
        return h('h'+this.level,{class:'ss'},this.$) //接收三个值分别是 tagName,属性,内容注意最后一个参数可以写成数组形式意思是进行嵌套
    }
   ```  
### 插件的定义和使用(plugin 插件)
   - 就是把通用性的功能封装起来 Vue.use(myPlugin) install(app,options) 第一个参数是实例,第二个参数是传递的参数
### Vue3中的compositionAPI
   - setup
   - ref, reactive,readonly,toRefs,toRef
     - ref() 将基础类型的数据进行响应式绑定
     - reactive() 处理非基础类型的数据
     - readonly() 做只读处理
     - toRefs() 对rective() 数据进行处理后在处理一下再进行结构出的值就是响应数据
     - toRef() 
### Composition API 开发 TodoList

### Composition API computed 计算属性

### composition API watch 侦听器
  - lazy 具备一定的惰性 最后一个参数{immediate:true}
  - 参数可以拿到原始值和当前值
### watchEffect
  - 立即执行 没有惰性, immediate
  - 不需要传递你要侦听的内容,自动感知代码依赖，不需要传很多参数，只要传递一个回调掉函数
  - 不能获取之前数据的值
  - 异步操作比较合适
  - 返回值是一个毁调函数 调用毁掉函数就可以取消监听
### Composition API 中使用生命周期函数
  - onBeforeMount
  - onMounted
  - onBeforeUpdate
  - onUpdated
  - onBeforeUnmount
  - onUnmountd
  - onRenderTracked 每次渲染后重新收集响应式依赖
  - onRenderTriggered 每次触发页面重新渲染时自动执行
  - step 执行是在 beforeCreate和created之间
### Composition API provide inject dom ref

### VueCli的使用
  - .vue 文件就是单文件组件
### vuex
  - dispatch 派发一个action
  - commit 触发一个 mutation
  - 在mutation 中改变数据
  - mutation action 一个是同步一个是异步
