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
          <b-tag>
            Viewable online.
          </b-tag>
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

@Component
export default class LoginHistory extends Vue {
  @Prop() data!: any;

  get timestamp(): string {
    return readableDate(this.data.timestamp);
  }

  viewIP = (IP: string) => {
    window.open(`https://www.lookip.net/ip/${ IP }`, '_blank', 'nodeIntegration=no');
  }
}
</script>