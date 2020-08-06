<template>
<div class="container" id="connections">
  <PageHeader
    :title="'Connections'"
    :desc="'View users you\'ve blocked, close friends, followers, following, and hidden from your stories.'"
    :showBack="true"
  />

  <div class="columns">
    <div
      class="column"
      v-for="(connection, index) in connections"
      :key="index"
    >
      <div class="card styled-card">
        <div class="card-content is-size-4">
          You have
          <b-tag
            class="is-info has-text-weight-bold"
            size="is-medium"
            v-text="Object.keys(connection.value).length"
          ></b-tag>
          {{ connection.label }}.
        </div>

        <div class="card-footer">
          <b-button
            expanded
            class="is-info"
            @click="showDetails(connection)"
          >
            <b-icon icon="eye"/>
          </b-button>
        </div>
      </div>
    </div>
  </div>

  <h4 class="is-size-4">I should add a show more.. but I was lazy, so apologies for the (possible) lag.</h4>

  <b-modal
    :active.sync="showDetail" width="75%"
    v-if="detail !== null"
  >
    <div class="card">
      <div class="card-content is-size-5">
        <div 
          v-for="[username, date] in Object.entries(detail.value)"
          :key="username"
        >
          {{ detail.message }}:
          <a
            @click="viewProfile(username)"
            v-text="`@${username}`" 
            class="has-text-weight-bold"
          />

          <b-tag
            class="is-grey-light"
            size="is-medium"
            style="float: right;"
          >{{ timestamp(date) }}</b-tag>
          <hr />
        </div>

        One day... I just hope.
      </div>
    </div>
  </b-modal>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import PageHeader from '@/components/PageHeader.vue';
import readableDate from '@/utils/date';

interface ConnectionInfo {
  label: string;
  value: object;
  message: string;
}

@Component({
  components: {
    PageHeader
  }
})
export default class Connections extends Vue {
  private showDetail = false;
  private detail: object | null = null;

  showDetails(detail: object) {
    this.detail = detail;
    this.showDetail = true;
  }

  timestamp = (date: string): string => {
    return readableDate(date);
  }

  private connections: ConnectionInfo[] = [
    {
      label: 'blocked users',
      value: this.$store.getters.connections.blocked_users,
      message: 'You blocked'
    },
    {
      label: 'close friends',
      value: this.$store.getters.connections.close_friends,
      message: 'You added a close friend'
    },

    {
      label: 'followers, impressive 😉',
      value: this.$store.getters.connections.followers,
      message: 'Followed you'
    },
    {
      label: 'following, decent',
      value: this.$store.getters.connections.following,
      message: 'You followed'
    }
  ];

  viewProfile = (username: string) => {
    window.open(`https://instagram.com/${ username }`, '_blank');
  }
}
</script>