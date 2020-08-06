<template>
  <div class="container has-text-centered" id="main">
    <p class="header">
      IG.dv 📸
    </p>

    <p class="subheader">
      Parse and View data collected by Instagram.
      <br>
      Please drop the <code>part_1.zip</code> file.
    </p>

    <div v-if="zipFiles.length === 0" class="text-center">
      <b-field>
        <b-upload drag-drop v-model="zipFiles" multiple @input="onFileUpload">
          <section class="section">
            <div class="content has-text-centered">
              <p>
                <b-icon icon="upload" size="is-large"></b-icon>
              </p>
              <p>Drop your file here or click to load</p>
            </div>
          </section>
        </b-upload>
      </b-field>

      <b-button
        icon-right="image"
        class="is-primary"
        @click="$router.push('/about')"
        style="margin-right: .5em;"
      >Media Viewer</b-button>

      <b-button
        icon-right="information"
        class="is-light"
        @click="$router.push('/about')"
      >About IG.dv</b-button>
    </div>


    <div class="loading" v-else>
      <img :src="SVGPath" :alt="'Upload image'">
      <b-progress
        type="is-info"
        size="is-medium"
      />
      Please note that this is still in early development and is still buggy.
    </div>
    <br>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import router from '../router';
import { Action } from 'vuex-class';
import { getSVGPath } from '@/utils/view';

// Setup JSZip
import JSZip from 'jszip';
const zip = new JSZip();

@Component
export default class Main extends Vue {
  private zipFiles: File[] = [];

  @Action
  private setInstagramData!: Function;

  get SVGPath(): string | null {
    return getSVGPath('upload.svg');
  }

  onFileUpload = async () => {
    if (this.zipFiles.length === 0) {
      this.$buefy.toast.open({
        message: 'Failed to load zip file!',
        type: 'is-danger'
      });
    }

    const partOne: File = this.zipFiles[0];

    // Read the zip file.
    try {
      const result = await zip.loadAsync(partOne);
      const files = await result.files;

      // @TODO: Check if the files are actually part_1.zip files.

      // Go through the files as they resolve
      for (const [key, value] of Object.entries(files)) {
        // Separate the fileName from their format
        const fileName: string = key.slice(0, -5);
        const data = JSON.parse(await value.async('text'));

        // Don't set data if there is nothing to set.
        if (data[0] !== 'You have no data in this section') {
          await this.setInstagramData({
            key: fileName,
            value: data,
          });
        }
      }

      setTimeout(() => {
        router.push({ name: 'Categories' });
      }, 500);

    } catch (error) {
      this.$buefy.toast.open({
        message: `Something went wrong while extracting.\n${error}`,
        type: 'is-danger'
      });
    }
  }
}
</script>

<style lang="scss" scoped>
#main {
  max-width: 70%;

  .header {
    margin-top: 1em;
    font-size: 4em;
    font-weight: 900;
  }

  .subheader {
    font-size: 1.4em;
    margin-bottom: 2em;
  }

  .loading {
    max-width: 25rem;
    margin: 0 auto;
    align-content: center;
  }
}
</style>