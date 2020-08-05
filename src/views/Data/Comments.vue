<template>
<div class="container" id="comments">
  <PageHeader
    :title="'Comments'"
    :desc="'Recent comments you have made on posts.'"
    :showBack="true"
  />

  <div class="card styled-card">
    <div class="card-header">
      <div class="card-header-title">
        Comments
      </div>

      <div class="card-header-icon">
        <b-icon icon="comment-quote" />
      </div>
    </div>

    <div class="card-content">

      <div class="is-size-5" style="margin-bottom: .5em;">
        You've made a total of
        <span class="has-text-weight-bold">{{ comments.media_comments.length }}</span>
        media comments:
      </div>

      <div
        class="card"
        v-for="(comment, index) in currentFeed"
        :key="index"
      >
        <div class="card-content">
          You commented <span class="has-text-weight-bold">"{{ comment[1] }}"</span>
          on <span class="has-text-weight-bold">{{ comment[2] }}'s</span> post.

          <b-tag
            class="is-grey-light"
            size="is-medium"
            style="float: right;"
          >{{ commentedOn(comment[0]) }}</b-tag>
        </div>
      </div>

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

import PageHeader from '@/components/PageHeader.vue';
import { Getter, Action } from 'vuex-class';
import readableDate from '@/utils/date';

@Component({
  components: {
    PageHeader
  }
})
export default class Comments extends Vue {
  @Getter
  private comments!: {
    media_comments: Array<[]>;
  };

  @Getter
  private currentFeed!: object[];

  @Action
  private setFeed!: Function;

  private commentedOn = (date: string): string => {
    return readableDate(date);
  }

  async created() {
    await this.setFeed(this.comments.media_comments.slice(0, 10));
  }

  showMore = async () => {
    const mediaComments: Array<[]> = this.$store.state.comments.media_comments;
    const currentFeed: Array<[]> = this.$store.getters.currentFeed;

    await this.$store.dispatch(
      'setFeed',
      currentFeed.concat(mediaComments.slice(
        currentFeed.length,
        currentFeed.length + 10
      ))
    );
  }

  goTop = () => {
    window.scrollTo(0, 0);
  }
}
</script>
