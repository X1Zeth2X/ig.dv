<template>
<div class="container" id="media">
  <PageHeader
    :showBack="true"
    :backRoute="'Main'"
  />

  <div class="is-size-5 has-text-centered">
    <h3 class="is-size-3 has-text-weight-bold">
      Media viewer, getting started. 🗃
    </h3>

      In order to view your media files, do the following:
      <br />

    <div class="content">
      <span class="has-text-weight-bold">Download</span> the part.zip (not the part_1.zip, it should be 2+),
      <span class="has-text-weight-bold">Extract</span> that zip file and then
      <span class="has-text-weight-bold">Select</span> the directory or drop it in here.
    </div>

      <b-field>
        <b-upload drag-drop>
          <section class="section">
            <div class="content has-text-centered">
              <p>
                <b-icon icon="upload" size="is-large"></b-icon>
              </p>
              <p>Drop your file here or click to load.</p>
            </div>
          </section>
        </b-upload>
      </b-field>
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
export default class Media extends Vue {}
</script>

<style lang="scss" scoped>
#media {
  .content {
    padding-top: 1em;
    padding-bottom: 1em;
    max-width: 450px;
    margin: 0 auto;
  }
}
</style>