<template>
<div class="container" id="messages">
  <PageHeader
    :title="'Messages'"
    :desc="'Recent exchanges of messages you\'ve made.'"
    :showBack="true"
  />

  <div class="card">
    <div class="card-content">
      <div class="is-size-5" style="margin-bottom: .5em;">
        You have a total of
        <span class="has-text-weight-bold">{{ totalDMs }}</span>
        DMs (showing {{ currentFeed.length }}):
      </div>

      <div
        class="card"
        v-for="(dm, index) in currentFeed"
        :key="index"
      >
        <div class="card-content">
          <div class="columns">
            <div class="column">
              Conversations:

              <ul>
                <li
                  v-for="(participant, index) in dm.participants"
                  :key="index"
                >{{ participant }}</li>
              </ul>

            </div>
          </div>

          <b-button>
            View
          </b-button>
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
          v-show="currentFeed.length !== totalDMs"
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

@Component({
  components: {
    PageHeader
  }
})
export default class Messages extends Vue {
  private totalDMs = 0;

  @Getter
  private currentFeed!: object[];

  @Action
  private setFeed!: Function;

  async created() {
    const DMs: object[] = this.$store.getters.DMs;

    this.totalDMs = DMs.length;
    await this.setFeed(DMs.slice(0, 10));
  }

  private goTop = () => {
    window.scrollTo(0, 0);
  }

  private showMore = async () => {
    const DMs: object[] = this.$store.getters.DMs;
    const currentFeed: object[] = this.$store.getters.currentFeed;
    const data = DMs.slice(currentFeed.length, currentFeed.length + 10);

    await this.setFeed(currentFeed.concat(data));
  }
}
</script>

<style lang="scss" scoped>
.message {
  padding: .5em;
  word-wrap: break-word;
  overflow: hidden;
  width: 100%;
  border-radius: 1em;
}
</style>