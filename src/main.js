// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================
import './assets/formeo.min.js'
import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
import appconfig from '../config/appconfig.js'
import axios from 'axios'

class Profile {
  // Defining the properties of the User Profile Object
  constructor () {
    this.name = 'Vikram'
    this.age = 25
    this.height = '5`8'
    this.addresse = '24th e cross, Bangalore'
    this.country = 'India'
    this.phone = '8867116215'
    this.sex = 'Male '
  }
}

window.userProfile = new Profile()

window.appconfig = appconfig
window.axios = axios

Vue.use(Quasar) // Install Quasar Framework

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    render: h => h(require('./App'))
  })
})
