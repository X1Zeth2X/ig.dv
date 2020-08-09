<template>
<div class="container" id="searches">
  <PageHeader
    :title="'Searches'"
    :desc="'Clicks you\'ve made on the search bar and when you did it.'"
    :showBack="true"
  />
  <div class="card styled-card">
    <div class="card-content">

      <div class="is-size-5" style="margin-bottom: .5em;">
        You've made a total of
        <span class="has-text-weight-bold">{{ totalLength }}</span>
        searches:
      </div>

      <div
        class="card"
        v-for="(search, index) in currentFeed"
        :key="index"
      >
        <div class="card-content">
          You searched for:
          <span class="has-text-weight-bold">
            "{{ searchTypes[search.type] + search.search_click }}"
          </span>

          <b-tag
            class="is-grey-light"
            size="is-medium"
            style="float: right;"
          >{{ searchedOn(search.time) }}</b-tag>
        </div>
      </div>

      <div class="bottom" v-show="currentFeed.length !== totalLength">
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
          @click="showMore"
          icon-right="chevron-down"
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
export default class Searches extends Vue {
  private totalLength = 0;
  private searchTypes: object = {
    user: '@',
    hashtag: '#'
  };

  @Getter
  private currentFeed!: [];

  @Action
  private setFeed!: Function;

  async created() {
    const data: object[] = this.$store.getters.searches;

    this.totalLength = data.length;
    await this.setFeed(data.slice(0, 10));
  }

  private searchedOn = readableDate;

  private showMore = async () => {
    const data: object[] = this.$store.getters.searches;
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