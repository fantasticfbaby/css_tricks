import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//代码高亮文件引入
import hljs from 'highlight.js'
//样式文件,这里我选的是sublime样式，文件里面还有其他样式可供选择
import 'highlight.js/styles/monokai-sublime.css'
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
