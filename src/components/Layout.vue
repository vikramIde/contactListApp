<template>
    <q-layout>
      <div slot="header" class="toolbar">
      <button class="hide-on-drawer-visible" @click="$refs.leftDrawer.open()">
        <i>menu</i>
      </button>
        <q-toolbar-title :padding="0">
          Mobile app
        </q-toolbar-title>
      <button v-if="canGoBack" class="" @click="goBack">
            <i class="on-left">keyboard_arrow_left</i>
      </button>
      </div>
      <q-drawer ref="leftDrawer">
        <div class="toolbar light">
          <q-toolbar-title :padding="1">
              Menu
          </q-toolbar-title>
        </div>

        <div class="list no-border platform-delimiter">
          <q-drawer-link icon="view_quilt" to="/" exact>
            Home
          </q-drawer-link>
          <hr>
          <div class="list-label">System Config</div>
          <q-drawer-link icon="phone" to="/manage_data">
            Manage Contact
          </q-drawer-link>
          <q-drawer-link icon="face" to="/view_profile">
            Edit Profile
          </q-drawer-link>
        </div>
      </q-drawer>
      <router-view class="layout-view"></router-view>
    </q-layout>
</template>
<script>
export default {
  data () {
    return {
      canGoBack: window.history.length > 1
    }
  },
  methods: {
    goBack () {
      window.history.go(-1)
    }
  }
}
</script>
