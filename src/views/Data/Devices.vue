<template>
<div class="container" id="searches">
  <PageHeader
    :title="'Devices'"
    :desc="'Every device that has ever connected to your account.'"
    :showBack="true"
  />
  <div class="card styled-card">
    <div class="card-content">

      <div class="is-size-5" style="margin-bottom: .5em;">
        You connected a total of
        <span class="has-text-weight-bold">{{ totalDevices }}</span>
        devices:
      </div>

      <div
        class="card"
        v-for="(device, index) in currentFeed"
        :key="index"
      >
        <div class="card-content">
          {{ device.user_agent }} was last seen on
          <span class="has-text-weight-bold">
            {{ lastSeen(device.last_seen )}}
          </span>
        </div>
      </div>

      <div class="bottom">
        <hr />

        <a @click="goTop"
          class="has-text-weight-bold"
        >Go back to Top</a>

        <br>
        <b-button
          style="margin-top: 15px;"
          class="is-primary"
          rounded
          size="is-large"
          icon-right="chevron-down"

          @click="showMore"
          v-show="currentFeed.length !== totalDevices"
        />
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import PageHeader from '@/components/PageHeader.vue';
import { Getter, Action } from 'vuex-class';
import readableDate from '@/utils/date';

@Component({
  components: {
    PageHeader
  }
})
export default class Devices extends Vue {
  private totalDevices = 0;

  @Getter
  private currentFeed!: [];

  @Action
  private setFeed!: Function;

  async created() {
    const devices: object[] = this.$store.getters.devices.devices;

    this.totalDevices = devices.length;
    await this.setFeed(devices.slice(0, 10));
  }

  private lastSeen = readableDate;

  private showMore = async () => {
    const data: object[] = this.$store.getters.devices.devices;
    const currentFeed: object[] = this.$store.getters.currentFeed;

    await this.setFeed(
      currentFeed.concat(data.slice(
        currentFeed.length,
        currentFeed.length + 10
      ))
    );
  }

  private goTop = () => {
    window.scrollTo(0, 0);
  }
}
</script>