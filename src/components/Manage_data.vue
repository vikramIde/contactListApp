<template>
    <div class="layout-padding">
      <p class="caption">
        <span class="desktop-only">Your Contact List</span>
        <span class="mobile-only">Your Contact List</span>
      </p>
      <p>
      <q-search
        v-model="searchModel"
        :debounce="600"
        placeholder="Search Contacts"
        icon="local_hotel"
        float-label="What is your Contact?"
      />
      </p>
      <div class="card " v-for="contact in contactList">
        <div class="card-title">
          <label><strong>Name : </strong></label>
          {{contact.name.givenName}}
        </div>
        <div class="card-content">
          <div class="item-content">
            <div class="item-label">
               <label><strong>Display Name : </strong></label>
              <p class="item-title">{{contact.displayName}}</p>
            </div>
          </div>
        </div>
        <div class="card-actions card-no-top-padding">
          <div class="text-grey">
             <label><strong>Phone : </strong></label>
            {{contact.phoneNumbers[0].value}}
          </div>
          <div class="auto"></div> 
          <button class="warning clear small" ><i class="on-left">eye</i>view</button>
        </div>        
      </div>
    </div>
</template>

<script>
import Router from 'router'

/* global appconfig ,axios */

function onError(contactError) {
  alert('onError!');
};
export default {
  mounted () {
    // this.getLayouts()
  },
  data () {
    return {
      cardList: [],
      contacts: [],
      searchModel: ''
    }
  },
  methods: {
    // getLayouts () {
    //   const url = appconfig.dev.BASE_URL + '/api/mobile/get_layouts?api_token=' + appconfig.dev.APP_TOKEN
    //   axios.get(url).then(response => {
    //     this.cardList = mapCards(response.data.data)
    //   })
    // },
    openFormView (id) {
      Router.replace({ path: 'fillform/' + id })
    },
    getContacts (searchString) {
      // find all contacts with 'Bob' in any name field
      var options      = new ContactFindOptions()
      options.filter   = searchString
      options.multiple = true
      options.desiredFields = [navigator.contacts.fieldType.id,navigator.contacts.fieldType.displayName,navigator.contacts.fieldType.phoneNumbers,navigator.contacts.fieldType.name]
      options.hasPhoneNumber = true
      var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name,navigator.contacts.fieldType.phoneNumbers,navigator.contacts.fieldType.addresses]
      navigator.contacts.find(fields, this.onSuccess, onError, options)
    },
    onSuccess (contacts) {
      this.contacts = contacts
      console.log(contacts)
    }

  },
  computed: {
    contactList () {
        
        if(this.searchModel.length > 2)
        {
          this.getContacts(this.searchModel)
        }

        if(this.contacts.length >0)
          return this.contacts
        else
          return []
    }
  }

}

</script>
