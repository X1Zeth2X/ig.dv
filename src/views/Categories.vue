<template>
  <div class="container" id="categories">
    <p class="is-size-1 has-text-weight-bold">Categories</p>

    <p class="is-size-4">
      Pick a category to view more information.
    </p>

    <div class="columns cards">
      <div
        class="column" 
        v-for="category in fakeData"
        :key="category.title"
      >
        <CategoryCard :data="category"/>
      </div>
    </div>

    <router-link to="/">
      Main page
    </router-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import CategoryCard from '@/components/CategoryCard.vue';
import { CategoryInfo } from '@/types/category';

@Component({
  components: {
    CategoryCard
  }
})
export default class Categories extends Vue {
  fakeData: CategoryInfo[] = [
    {
      title: 'Account History',
      icon: 'crosshairs-gps',
      image: 'map.svg',
      description: 'Test',
      route: '/'
    },
    {
      title: 'Comments',
      icon: 'comment-multiple',
      image: 'comment.svg',
      route: '/'
    },
    {
      title: 'Likes',
      icon: 'heart',
      image: 'like.svg',
      route: '/'
    },
  ];
}
</script>

<style lang="scss" scoped>
#categories {
  .cards {
    padding-top: 1em;
  }
}
</style>