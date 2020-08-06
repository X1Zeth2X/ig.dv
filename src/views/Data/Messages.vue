<template>
<div class="container" id="messages">
  <PageHeader
    :title="'Messages'"
    :desc="'Recent exchanges of messages you\'ve made.'"
    :showBack="true"
  />

  <div class="card styled-card">
    <div class="card-content">
      Will be last to be implemented, it's quite complicated.
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

import PageHeader from '@/components/PageHeader.vue';

@Component({
  components: {
    PageHeader
  }
})
export default class Messages extends Vue {
  @Getter
  private DMs!: object;
}
</script>