<template>
<div id="category-card">
  <div class="card styled-card">
    <div class="card-header">
      <p class="card-header-title">{{ data.title }}</p>
      <p class="card-header-icon">
        <b-icon :icon="data.icon"></b-icon>
      </p>
    </div>

    <div class="card-image bottom" style="padding: 1em;">
      <img :src="SVGPath" :alt="data.image"
        style="height: 200px;"
      >
    </div>

    <div class="card-content">
      {{ data.description }}

      <b-button
        style="margin-top: 1em;"
        class="is-info"
        expanded
        rounded
        @click="viewMore"
      >
        View
      </b-button>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import { CategoryInfo } from '@/utils/category';
import { getSVGPath } from '@/utils/view';

@Component
export default class CategoryCard extends Vue {
  @Prop() data!: CategoryInfo;
  private IGData = null;

  get SVGPath(): string | null {
    return getSVGPath(this.data.image);
  }

  viewMore = () => {
    this.$router.push(this.data.route);
  }
}
</script>