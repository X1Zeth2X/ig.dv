<template>
<div class="container" id="about">
  <PageHeader
    :title="'About IG.dv'"
    :desc="'Yeah...'"
    :showBack="true"
    :backRoute="'Main'"
  />
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import PageHeader from '@/components/PageHeader.vue';

@Component({
  components: {
    PageHeader
  }
})
export default class About extends Vue {}
</script>