<template>
<div class="container" id="accountHistory">
  <PageHeader 
    :title="'Account History'"
    :desc="'Your account history and logins.'"
    :showBack="true"
  />

  <div class="card styled-card" id="registration">
    <div class="card-header">
      <div class="card-header-title">
        Registration Info
      </div>
      <div class="card-header-icon">
        <b-icon icon="account-plus" />
      </div>
    </div>

    <div class="card-content">
      <b-taglist
        attached
        v-for="[info, value] in Object.entries(registrationInfo)"
        :key="info"
      >
        <b-tag type="is-primary" class="title-info is-size-6">{{ removeUnderscore(info) }}</b-tag>
        <b-tag type="is-grey-light" class="is-size-6">{{ value ? value : 'None'}}</b-tag>
      </b-taglist>
    </div>

  </div>

  <div class="card styled-card" id="loginHistory">
    <div class="card-header">
      <div class="card-header-title">
        Login History
        <span class="has-text-weight-normal">: {{ loginEntries }} entries, showing: {{ currentFeed.length }}.</span>
      </div>

      <div class="card-header-icon">
        <b-icon icon="history" />
      </div>
    </div>

    <!-- Login history content -->
    <div class="card-content">

      <div v-for="(entry, index) in currentFeed" :key="index"
      ><LoginHistory :data="entry"/></div>

      <b-button
        outlined
        class="is-primary more has-text-centered"
        @click="showMore"
      >Show more</b-button>

    </div>

  </div>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

import PageHeader from '@/components/PageHeader.vue';
import LoginHistory from '@/components/AccountHistory/LoginHistory.vue';

@Component({
  components: {
    PageHeader,
    LoginHistory
  }
})
export default class AccountHistory extends Vue {
  private registrationInfo: object = {};
  private loginEntries = 0;

  @Getter('currentFeed')
  private currentFeed!: object[]

  @Action('setFeed')
  private setFeed!: Function;

  async mounted() {
    // Load the account history information
    const data = this.$store.state.account_history;
    this.loginEntries = data.login_history.length;
    this.registrationInfo = data.registration_info;

    await this.$store.dispatch('setFeed', data.login_history.slice(0, 10));
  }

  removeUnderscore = (title: string) => {
    const updatedTitle = title.replace(/[^A-Z0-9]+/ig, ' ');
    return updatedTitle;
  }

  showMore = async () => {
    const data = this.$store.state.account_history.login_history;
    const currentFeed: object[] = this.$store.getters.currentFeed;

    await this.$store.dispatch(
      'setFeed',
      currentFeed.concat(data.slice(
        currentFeed.length,
        currentFeed.length + 10
      ))
    );
  }
}
</script>

<style lang="scss" scoped>
#registration {
  margin-top: 1em;

  .title-info {
    text-transform: capitalize;
  }

  .info {
    padding-bottom: .2em;
  }

  .tag-content {
    font-size: 2em;
  }
}

#loginHistory {
  margin-top: 1em;

  .entry {
    margin-top: .5em;
  }
}
</style>