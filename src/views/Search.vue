<template>
  <div class="container mx-auto flex flex-col items-center">
    <h2 class="text-xl text-white text-center font-light pt-10 pb-4">
      Select the date and time and leave the rest to us 😁
    </h2>
    <div class="max-w-md w-11/12 h-80 bg-gold-transparent rounded flex flex-col items-center p-4">
      <h3 class="text-xl text-white">{{ info.name }}</h3>
      <img :src="require(`../static/${$route.query.image}`)" class="w-16 mt-3 animate-pulse" :alt="info.name" />
      <div v-if="!isSearch" class="flex flex-col items-center justify-center">
        <input v-model="info.date" class="mt-5 rounded p-1 bg-transparent text-white cursor-pointer" type="date" />
        <input class="rounded p-1 bg-purple bg-transparent text-white cursor-pointer" type="time"
          v-model="info.time" />
          <span v-if="invalid" class="text-white text-xs">{{ error }}</span>
      </div>

      <div v-else>
        <h3 class="text-white mt-5 mb-5 text-center">
          The date {{ info.date }} and time {{ info.time }} value chosen was R$
          {{ info.price }} BRL
        </h3>
      </div>

      <d-button v-if="!isSearch" class="w-32 mt-5" @click.prevent="getCoinDateTime()">Search</d-button>
      <d-button v-else class="w-32" @click="handleNewRequest()">New Request</d-button>
    </div>
    <router-link class="text-gold hover:text-white" to="/">Previous page</router-link>
  </div>
</template>

<script>
import coins from "@/services/coins";
import DButton from "../components/DButton.vue";
import { getUnixTime } from "date-fns";

export default {
  components: { DButton },
  name: "HomePage",
  data() {
    return {
      info: {
        name: this.$route.params.coin,
        date: null,
        price: null,
        time: null,
      },
      isSearch: false,
      error: "You must enter a valid value",
        invalid: false,
    };
  },
  methods: {
    getCoinDateTime() {
      if (this.info.date && this.info.time) {
        const dateRequest = new Date(`${this.info.date} ${this.info.time}`);
        const dateAtt = new Date();
        const timestampRequest = getUnixTime(Date.parse(dateRequest));
        const timestampAtt = getUnixTime(Date.parse(dateAtt));
        coins
          .listDateTime(this.$route.query.search, timestampRequest, timestampAtt)
          .then((response) => {
            this.info.price = response.data.prices[0][1].toFixed(3);
            this.isSearch = true;
            this.invalid = false;
          })
          .catch((err) => console.log(err));
      } else {
        this.invalid = true;
      }
    },
    handleNewRequest() {
      this.info.time = null;
      this.info.date = null;
      this.info.price = null;
      this.isSearch = false;
    },
  }
};
</script>
