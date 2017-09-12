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
        icon="search"
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
            <a class="warning clear small" href="tel:{{contact.phoneNumbers[0].value}}">{{contact.phoneNumbers[0].value}}<i class="on-left">phone</i> </a>
          </div>
          <div class="auto"></div>

        </div>        
      </div>
    </div>
</template>

<script>
import Router from 'router'

/* global appconfig ,axios */

export default {
  data () {
    return {
      cardList: [],
      contacts: [],
      searchModel: ''
    }
  },
  methods: {
    getContacts (searchString) {
      // find all contacts with 'Bob' in any name field
      let options      = new ContactFindOptions()
      options.filter   = searchString
      options.multiple = true
      options.desiredFields = [navigator.contacts.fieldType.id,navigator.contacts.fieldType.displayName,navigator.contacts.fieldType.phoneNumbers,navigator.contacts.fieldType.name]
      options.hasPhoneNumber = true
      let fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name,navigator.contacts.fieldType.phoneNumbers,navigator.contacts.fieldType.addresses]
      navigator.contacts.find(fields, this.onSuccess, this.onError, options)
    },
    onSuccess (contacts) {
      this.contacts = contacts
    },
    onError (contactError) {
      alert('onError!')
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
