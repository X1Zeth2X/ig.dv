<template>
<div class="container" id="profile">
  <PageHeader
    :title="'Profile'"
    :desc="'Your IG profile information.'"
    :showBack="true"
  />

  <div class="card styled-card">
    <div class="card-content">
      <div class="columns">
        <div class="column is-2 has-text-centered">
          <figure class="image">
            <img :src="profileData.profile_pic_url" alt="profile-pic"/>
          </figure>

          <br/>
          <p>
            You've made 
            <span class="has-text-weight-bold"
            >{{ profileData.profile_picture_changes.length }}</span>
            changes to your profile picture.
          </p>
        </div>

        <div class="column">
          <div class="media-right">
            <p class="is-size-4 has-text-weight-bold">{{ profileData.name }}</p>
            <p class="subtitle">
              <a @click="viewUser(profileData.username)">
                @{{ profileData.username }}
              </a>
            </p>

            <div class="is-size-5">
              <p>
                <b-icon icon="format-quote-open" />
                {{ profileData.biography }}
              </p>

              <p>
                <b-icon icon="email-outline" />
                {{ profileData.email }}
              </p>

              <p>
                <b-icon icon="calendar-plus" />
                You joined on
                {{ dateJoined }}
              </p>

              <p>
                <b-icon icon="gender-male-female" />
                {{ profileData.gender }}
              </p>

              <p>
                <b-icon icon="incognito" />
                {{ profileData.private_account ?
                   'Your account is private.' :
                   'Your account is public.'
                }}
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <h4 class="has-text-weight-bold is-size-4">Information about you</h4>

          <ul class="is-size-5">
            <li>
              <b-icon icon="home-city" />
              You live in
              <span has-text-weight-bold>
                {{ informationAboutYou[0].primary_location.city_name }}.
              </span>
            </li>

            <li 
              v-for="number in informationAboutYou[0].inferred_phone_numbers"
              :key="number"
            >
              <b-icon icon="cellphone-iphone" />
              <span has-text-weight-bold>
                {{ number }}
              </span>
            </li>
          </ul>

          <br />
          <h4 class="has-text-weight-bold is-size-4">Settings</h4>
          <p class="is-size-5">
            <b-icon icon="comment-multiple-outline" />
            Allow comments from {{ informationAboutYou[1].allow_comments_from }}
          </p>
        </div> <!-- Column end -->

      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

import PageHeader from '@/components/PageHeader.vue';
import readableDate from '@/utils/date';
import { viewUser } from '@/utils/view';

@Component({
  components: {
    PageHeader
  }
})
export default class Profile extends Vue {
  private picChanges = 0;

  @Getter
  private informationAboutYou!: object[];

  @Getter
  private profileData!: {
    date_joined: string;
  };

  get dateJoined(): string {
    const dateJoined = this.profileData.date_joined;
    return readableDate(dateJoined);
  }

  private viewUser = viewUser;
}
</script>

<style lang="scss" scoped>
.image {
  img {
    border-radius: 50%;
  }
}
</style>