<template>
<div class="container" id="comments">
  <PageHeader
    :title="'Likes'"
    :desc="'Likes you have made on comments and media.'"
    :showBack="true"
  />

  <div class="card styled-card">
    <div class="card-content">
      <!-- Tabs -->
      <b-tabs type="is-toggle" expanded v-model="currentTab">
        <b-tab-item
          label="Media like activity."
          icon="post"
        />
        <b-tab-item
          label="Comment like activity."
          icon="comment-text-outline"
        />
      </b-tabs>

      <component :is="currentTab === 0 ? 'MediaLikes' : 'CommentLikes'" />
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import PageHeader from '@/components/PageHeader.vue';
import MediaLikes from '@/components/Likes/MediaLikes.vue';

@Component({
  components: {
    PageHeader,
    MediaLikes,
    'CommentLikes': () => import('@/components/Likes/CommentLikes.vue')
  }
})
export default class Comments extends Vue {
  private currentTab = 0;
  private currentComponent = 'MediaLikes';
}
</script>
