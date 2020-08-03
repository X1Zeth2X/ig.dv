<template>
  <div class="container" id="categories">
    <PageHeader
      :title="'Category'"
      :desc="'Pick a category to view more information.'"
    />

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
import PageHeader from '@/components/PageHeader.vue';
import { CategoryInfo } from '@/types/category';

@Component({
  components: {
    CategoryCard,
    PageHeader
  }
})
export default class Categories extends Vue {
  fakeData: CategoryInfo[] = [
    {
      title: 'Account History',
      icon: 'crosshairs-gps',
      image: 'map.svg',
      description: 'Test',
      route: '/accountHistory'
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