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
        v-for="[info, value] in Object.entries(accountHistory.registration_info)"
        :key="info"
      >
        <b-tag type="is-primary" class="title-info is-size-6">{{ removeUnderscore(info) }}</b-tag>
        <b-tag type="is-grey-light" class="is-size-6">{{ value ? value : 'None'}}</b-tag>
      </b-taglist>
    </div>

  </div>

  <div class="card styled-card">
    <div class="card-header">
      <div class="card-header-title">
        Login History
        <span class="has-text-weight-normal">: {{ accountHistory.login_history.length }} entries, showing: {{ currentFeed.length }}.</span>
      </div>

      <div class="card-header-icon">
        <b-icon icon="history" />
      </div>
    </div>

    <!-- Login history content -->
    <div class="card-content">

      <div v-for="(entry, index) in currentFeed" :key="index"
      ><LoginHistory :data="entry"/></div>

      <hr />
      <div class="bottom">
        <a @click="goTop"
          class="has-text-weight-bold"
        >Go back to Top</a>

        <br>
        <b-button
          style="margin-top: 15px;"
          class="is-primary"
          @click="showMore"
          rounded
          size="is-large"
          icon-right="chevron-down"
        />
      </div>
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
  @Getter
  private currentFeed!: object[]

  @Getter
  private accountHistory!: {
    login_history: object[];
    registration_info: object;
  };

  @Action
  private setFeed!: Function;

  async created() {
    // Load the account history information
    const data = this.accountHistory.login_history.slice(0, 10);
    await this.setFeed(data);
  }

  removeUnderscore = (title: string) => {
    const updatedTitle = title.replace(/[^A-Z0-9]+/ig, ' ');
    return updatedTitle;
  }

  showMore = async () => {
    const accountHistory = this.$store.getters.accountHistory.login_history;
    const currentFeed: object[] = this.$store.getters.currentFeed;
    const moreData = accountHistory.slice(
      currentFeed.length,
      currentFeed.length + 10
    )

    await this.setFeed(currentFeed.concat(moreData));
  }

  goTop = () => {
    window.scrollTo(0, 0);
  }
}
</script>

<style lang="scss" scoped>
#registration {
  margin-bottom: 1em;

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
</style>