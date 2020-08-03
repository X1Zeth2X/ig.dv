<template>
<div id="header">
  <div v-show="showBack">
    <b-button
      @click="goBack"
      class="is-primary"
      icon-left="chevron-left"
    >
      Go Back
    </b-button>

    <div class="right">
      <span class="has-text-weight-bold is-size-4">IG.dv </span>
      <span class="is-size-4">by Zeth</span>
    </div>
  </div>

  <hr>
  <p class="is-size-1 has-text-weight-bold">{{ title }}</p>
  <p class="is-size-4">{{ desc }}</p>
</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class PageHeader extends Vue {
  @Prop() title!: string;
  @Prop() desc!: string;
  @Prop() showBack!: boolean;

  goBack = () => {
    this.$router.go(-1);
  }
}
</script>

<style lang="scss" scoped>
.right {
  float: right;
}
</style>