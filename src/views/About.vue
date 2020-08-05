<template>
<div class="container" id="about">
  <PageHeader
    :showBack="true"
    :backRoute="'Main'"
  />

  <!-- Content -->
  <div class="columns is-variable is-3">
    <div class="column">
      <img :src="require('@/assets/camera.svg')" alt="">
    </div>
    <div class="column">
      <h3 class="is-size-3 has-text-weight-bold">
        About IG.dv 📸
      </h3>

      <b-notification
        type="is-info"
        icon="information"
        has-icon
      >
        IG.dv is not affiliated with Instagram or Facebook
        and we have no connections with them either.
      </b-notification>

      <h3 class="is-size-3 has-text-weight-bold">
        What does it do?
      </h3>
      <p class="is-size-5">
        The short answer is that
        this tool simply allows you to view the data collected in a user friendly manner.
      </p>

      <br />
      <p class="is-size-5">
        If you're unaware, Instagram allows you to download the data they've mined and collected
        about you which are contained in <code>zip</code> file formats. When you extract those zip
        files, those data are in <code>json</code> file format in which you can read but typically
        those are for machines. 
      </p>
    </div>
  </div>

  <div class="columns is-variable is-5" style="margin-top: 2em">
    <div class="column">
      <h3 class="is-size-3 has-text-weight-bold">
        Why did I make it?
      </h3>

      <b-notification
        type="is-warning"
        icon="alert-box"
        has-icon
      >
        IG.dv does not send your data anywhere or to anyone, It's FOSS!
        <span class="has-text-weight-bold">https://github.com/X1Zeth2X/ig.dv</span>
      </b-notification>

      <p class="is-size-5">
        To raise awareness about people's personal information, to make them aware about what
        kind of information is collected about them by Big Tech companies, to educate people
        about the importance of data.
      </p>

      <br />
      <p class="is-size-5">
        Also to explore different technologies such as Electron and see how it went with Vue
        and Buefy (Bulma), which is pretty neat but I honestly haven't delve enough to point
        out what it's lacking and what it's good at, so far the experience has been really 
        smooth.
      </p>
    </div>

    <div class="column ">
      <img :src="require('@/assets/process.svg')" alt="">
    </div>
  </div>
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

<style lang="scss" scoped>
.info {
  margin: auto;
}
</style>