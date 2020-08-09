<template>
  <div class="container" id="categories">
    <PageHeader
      :title="'Category'"
      :desc="'Pick a category to view more information.'"
    />

    <b-button
      rounded
      class="is-warning"
      @click="goToMain"
    >Go to Main (Resets Data)</b-button>

    <div class="columns cards">
      <div
        class="column" 
        v-for="category in categories.slice(0, 3)"
        :key="category.title"
      >
        <CategoryCard :data="category"/>
      </div>
    </div>

    <div class="columns cards">
      <div
        class="column" 
        v-for="category in categories.slice(3, 6)"
        :key="category.title"
      >
        <CategoryCard :data="category"/>
      </div>
    </div>

    <div class="columns cards">
      <div
        class="column" 
        v-for="category in categories.slice(6, 9)"
        :key="category.title"
      >
        <CategoryCard :data="category"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import CategoryCard from '@/components/CategoryCard.vue';
import PageHeader from '@/components/PageHeader.vue';
import { CategoryInfo } from '@/utils/category';

@Component({
  components: {
    CategoryCard,
    PageHeader
  }
})
export default class Categories extends Vue {
  categories: CategoryInfo[] = [
    {
      title: 'Profile',
      icon: 'account',
      image: 'profile.svg',
      description: 'View your profile details and information.',
      route: '/profile'
    },
    {
      title: 'Account History',
      icon: 'crosshairs-gps',
      image: 'map.svg',
      description: 'View your registration information and login history.',
      route: '/accountHistory'
    },
    {
      title: 'Comments',
      icon: 'comment-multiple',
      image: 'comment.svg',
      description: 'Recent comments you have made on posts.',
      route: '/comments'
    },

    {
      title: 'Likes',
      icon: 'heart',
      image: 'like.svg',
      description: 'Likes you have made on comments and media.',
      route: '/likes'
    },
    {
      title: 'Connections',
      icon: 'account-group',
      image: 'connections.svg',
      description: 'People you have blocked, followers, and more.',
      route: '/connections'
    },
    {
      title: 'Messages',
      icon: 'inbox-multiple',
      image: 'messages.svg',
      description: 'Your conversations with people and participants.',
      route: '/messages'
    },

    {
      title: 'Searches',
      icon: 'magnify',
      image: 'searches.svg',
      description: 'Searches you\'ve made on the application.',
      route: '/likes'
    },
    {
      title: 'Devices',
      icon: 'devices',
      image: 'devices.svg',
      description: 'Cameras and devices that has been tied to your account.',
      route: '/connections'
    },
    {
      title: 'Story and Seen activity',
      icon: 'history',
      image: 'activity.svg',
      description: 'Stories and seen content you\'ve interacted with',
      route: '/messages'
    },
  ];

  private goToMain = () => {
    // Remove Vuex saves
    this.$store.commit('resetState');
    localStorage.removeItem('vuex');

    // Go back to main
    this.$router.push({ name: 'Main' })
  }
}
</script>

<style lang="scss" scoped>
#categories {
  .cards {
    padding-top: 1em;
  }
}
</style>