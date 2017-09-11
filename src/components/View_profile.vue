<template>
    <div class="layout-padding">
        <div class="card " >
          <div class="card-title">
            <label><strong>Name</strong></label>
            {{userProfile.name}}
          </div>
          <div class="card-content">
            <div class="item-content">
              <div class="item-label"> 
                <label><strong>Addresse</strong></label>
                <p class="item-title">{{userProfile.addresse}}</p>
              </div>
            </div>
          </div>
          <div class="card-actions card-no-top-padding">
            <label><strong>Age</strong></label>
            <div class="text-grey">
              {{userProfile.age}}
            </div>
             <label><strong>Phone</strong></label>
            <div>
              ({{userProfile.phone}} )
            </div>
            <div class="auto"></div> 
              <button class="primary" @click="openProfileEdit()">
               Edit <i>edit</i>
              </button>
          </div>
        </div>
      </div>
</template>

<script>

/**
  * Structure to store Profile
**/
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
      Router.replace({path: 'edit_profile'})
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
