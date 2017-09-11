import Vue from 'vue'
import { LocalStorage } from 'quasar'

export default {
  state: LocalStorage.get.item('profile') || {},
  set (id, item) {
    Vue.set(this.state, id, item)
    LocalStorage.set('profile', this.state)
  },
  del (id) {
    Vue.delete(this.state, id)
    LocalStorage.set('profile', this.state)
  },
  clear(){
  	this.state ={};
  	LocalStorage.remove('profile')
  }

}
