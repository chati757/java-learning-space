import Vue from 'vue'
import App from 'components/com_app.vue'

new Vue({
  el:'#app',
  render(createElements){
    return createElements(App)
  }
})