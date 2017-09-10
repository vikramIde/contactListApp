<template>
    <div class="layout-view">
          <q-field
            icon="cloud"
            label="Your Gmail"
            helper="Helper"
            :error="mailHasError"
            error-label="We need a valid email"
            :count="10"
          >
          <q-input suffix="@gmail.com" v-model="model" />
        </q-field>
        <q-field
            icon="cloud"
            label="Your Gmail"
            helper="Helper"
            :error="mailHasError"
            error-label="We need a valid email"
            :count="10"
          >
          <q-input suffix="@gmail.com" v-model="model" />
        </q-field>
        <q-field
            icon="cloud"
            label="Your Gmail"
            helper="Helper"
            :error="mailHasError"
            error-label="We need a valid email"
            :count="10"
          >
          <q-input suffix="@gmail.com" v-model="model" />
        </q-field>
        <q-field
            icon="cloud"
            label="Your Gmail"
            helper="Helper"
            :error="mailHasError"
            error-label="We need a valid email"
            :count="10"
          >
          <q-input suffix="@gmail.com" v-model="model" />
        </q-field>
        <q-field
            icon="cloud"
            label="Your Gmail"
            helper="Helper"
            :error="mailHasError"
            error-label="We need a valid email"
            :count="10"
          >
          <q-input suffix="@gmail.com" v-model="model" />
        </q-field>
    </div>
</template>

<script>

/**
  * Structure to store Profile 
**/

class Profile {

  //Defining the properties of the User Profile Object
  constructor(height, width) {
      this.name = 'Vikram'
      this.age = 25
      this.height = '5`8'
      this.addresse='24th e cross, Bangalore'
      this.country='India'
      this.phone='8867116215'
  }
}

//import Profile from '../assets/profile.js'
import {
  QField,
  QToggle,
  QDatetime,
  QOptionGroup,
  QInput,
  QSelect,
  QChipsInput,
  QRating
} from 'quasar'

export default {
componenets:{
    QField,
    QToggle,
    QDatetime,
    QOptionGroup,
    QInput,
    QSelect,
    QChipsInput,
    QRating
},
  mounted () {
    console.log('I am index.vue')
    console.log(this.$refs)
    let user = new Profile()
    console.log(user)
  },
  methods: {
    openLeftNav () {
      this.$emit('show_nav')
    }
  },
  data () {
    return {
      mailHasError:'',
      model:''
    }
  }
}
</script>

<style lang="stylus">
.logo-container
  width 192px
  height 268px
  perspective 800px
  position absolute
  top 50%
  left 50%
  transform translateX(-50%) translateY(-50%)
.logo
  position absolute
  transform-style preserve-3d
</style>
