import Vue from 'vue'
import App from 'components/com_app.vue'
import CSS from 'css/bootstrap.css'

 new Vue({
  el:'#app',
  render(createElements){
    return createElements(App)
  }
})