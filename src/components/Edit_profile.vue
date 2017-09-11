<template>
    <div class="layout-padding">
        <div class="card " >
          <div class="card-title">
            <label><strong>Name</strong></label>
            <input type="text" v-model="userProfile.name" name="name">
          </div>
          <div class="card-content">
            <div class="item-content">
              <div class="item-label"> 
                <label><strong>Addresse</strong></label>
                <textarea v-model="userProfile.addresse"></textarea>
              </div>
            </div>
          </div>
          <div class="card-actions card-no-top-padding">
            <label><strong>Age</strong></label>
            <div class="text-grey">
              <input type="text" v-model="userProfile.age" name="age">
            </div>
             <label><strong>Phone</strong></label>
            <div>
              <input type="text" v-model="userProfile.phone" name="age">
            </div>
            <div class="auto"></div> 
              
          </div>
            <button class="primary" @click="updateProfile()">
              Update <i>edit</i>
            </button>
            <button class="primary" @click="openProfileEdit()">
              Cancel <i>close</i>
            </button>
        </div>
      </div>
</template>

<script>

/* global userProfile */
import Router from 'router'
export default {
  componenets: {
  },
  mounted () {
    this.userProfile = userProfile
  },
  methods: {
    openLeftNav () {
      this.$emit('show_nav')
    },
    openProfileEdit () {
      Router.replace({path: 'view_profile'})
    },
    updateProfile () {
      window.userProfile = this.userProfile
      this.openProfileEdit()
    }
  },
  data () {
    return {
      mailHasError: '',
      model: '',
      userProfile: ''

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
