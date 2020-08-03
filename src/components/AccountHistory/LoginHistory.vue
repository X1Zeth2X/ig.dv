<template>
<div class="card">
  <div class="card-content">
    Cookie
  </div>
</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class LoginHistory extends Vue {
  @Prop() data!: object;
}
</script>