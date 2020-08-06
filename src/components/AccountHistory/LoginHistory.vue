<template>
<div class="card">
  <div class="card-content">
    <ul class="is-size-6">
      <li>
        <b-icon icon="cookie"/>
        <span class="has-text-weight-bold"> Cookie: </span>
        {{ data.cookie_name }}
      </li>

      <li>
        <b-icon icon="ip-network"/>
        <span class="has-text-weight-bold"> IP Address: </span>
        {{ data.ip_address }}

        <span style="float: right;">
          <b-button
            outlined
            size="is-small"
            class="is-info"
            rounded
            icon-right="magnify"
            @click="viewIP(data.ip_address)"
          >View on WhoIS</b-button>
        </span>
      </li>

      <li>
        <b-icon icon="earth"/>
        <span class="has-text-weight-bold"> Language Code: </span>
        {{ data.language_code }}
      </li>

      <li>
        <b-icon icon="calendar"/>
        <span class="has-text-weight-bold"> Timestamp: </span>
        {{ timestamp }}
      </li>

      <li>
        <b-icon icon="devices"/>
        <span class="has-text-weight-bold"> User Agent: </span>
        {{ data.user_agent }}
      </li>

      <li v-show="data.device_id">
        <b-icon icon="card-account-details"/>
        <span class="has-text-weight-bold"> Device ID: </span>
        {{ data.device_id }}
      </li>
    </ul>
  </div>
</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import readableDate from '@/utils/date';
import { viewIP } from '@/utils/view';

@Component
export default class LoginHistory extends Vue {
  @Prop() data!: {
    timestamp: string;
  };

  get timestamp(): string {
    return readableDate(this.data.timestamp);
  }

  private viewIP = viewIP;
}
</script>