<template>
<div id="mediaLikes">
  <div class="card" v-for="(like, index) in currentFeed" :key="index">
    <div class="card-content">
      You liked <span class="has-text-weight-bold" v-text="like[1]"/>'s
      comment on {{ like[0] }}.
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
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

@Component
export default class MediaLikes extends Vue {
  @Getter
  private currentFeed!: Array<[]>;

  @Action
  private setFeed!: Function;

  mounted() {
    this.loadCommentLikes();
  }

  private loadCommentLikes = async () => {
    const commentLikes: Array<[]> = this.$store.getters.likes.comment_likes;
    await this.$store.dispatch('setFeed', commentLikes.slice(0, 10));
  }

  showMore = async () => {
    // Check what's the current tab
    // 0 - Media, 1 - Comment
    const currentFeed: Array<[]> = this.$store.getters.currentFeed;
    const commentLikes: Array<[]> = this.$store.getters.likes.comment_likes;
    const data: Array<[]> = commentLikes.slice(currentFeed.length, currentFeed.length + 10);

    await this.setFeed(commentLikes.concat(data));
  }

  goTop = () => {
    window.scrollTo(0, 0);
  }
}
</script>