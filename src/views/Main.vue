<template>
  <div class="container has-text-centered" id="main">
    <p class="header">
      IG.dv
    </p>

    <p class="subheader">
      Parse and View data collected by Instagram.
      <br>
      Please drop the <code>part_1.zip</code> file.
    </p>

    <b-field>
      <b-upload drag-drop v-model="zipFiles" multiple>
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
    <br>

    <router-link to="categories">
      Categories
    </router-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { mapState } from 'vuex';

// Setup JSZip
import JSZip from 'jszip';
const zip = new JSZip();

@Component
export default class Main extends Vue {
  private zipFiles: File[] = [];

  @Watch('zipFiles')
  onFileUpload = async () => {
    if (this.zipFiles.length === 0) {
      this.$buefy.toast.open({
        message: 'Failed to load zip file!',
        type: 'is-danger'
      });
    }

    const partOne: File = this.zipFiles[0];

    // if (partOne.name !== 'part_1.zip') {
    //   this.$buefy.toast.open({
    //     message: 'File name is invalid.',
    //     type: 'is-danger'
    //   });
    // }

    // Extract the zip file.
    try {
      const result = await zip.loadAsync(partOne);
      const files = await result.files;

      console.log('Loading files and contents.');
      console.log(this.$store.state);

      // Go through the files as they resolve
      for (const [key, value] of Object.entries(files)) {
        // Load those items in vuex
        this.$store.state
        console.log(await value.async('text'));
      }

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
    margin-top: 1.6em;
    font-size: 4em;
    font-weight: 900;
  }

  .subheader {
    font-size: 1.4em;
    margin-bottom: 2em;
  }
}
</style>