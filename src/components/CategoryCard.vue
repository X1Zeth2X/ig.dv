<template>
<div id="category-card">
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">{{ data.title }}</p>
      <p class="card-header-icon">
        <b-icon :icon="data.icon"></b-icon>
      </p>
    </div>

    <div class="card-image">
      <img :src="require('@/assets/' + data.image)" :alt="data.image">
    </div>

    <div class="card-content">
      {{ data.description }}
    </div>

    <footer class="card-footer">
      <b-button
        class="is-info card-footer-item"
        expanded
        @click="viewMore"
      >
        View
      </b-button>
    </footer>
  </div>
</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { CategoryInfo } from '@/types/category';

@Component
export default class CategoryCard extends Vue {
  @Prop() data!: CategoryInfo;
  private IGData = null;

  viewMore = () => {
    const path = this.$route.path + this.data.route;
    this.$router.push({
      name: 'Account History'
    });
  }
}
</script>