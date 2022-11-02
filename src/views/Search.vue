<template>
  <div class="container mx-auto flex flex-col items-center">
    <h2 class="text-xl text-white font-light pt-10 pb-4">
      Select the date and time and leave the rest to us 😁
    </h2>
    <div
      class="max-w-lg w-full h-80 bg-gold-transparent rounded flex flex-col items-center p-4"
    >
      <h3 class="text-xl text-white">{{ info.name }}</h3>
      <img
        :src="require(`../static/${$route.query.image}`)"
        class="w-16 mt-3 animate-pulse"
        :alt="info.name"
      />
      <div v-if="!isSearch">
        <input
          v-model="info.date"
          class="mb-5 mt-5 rounded p-1 bg-transparent text-white cursor-pointer"
          type="date"
        />
        <input
          class="mb-5 mt-5 rounded p-1 bg-purple bg-transparent text-white cursor-pointer"
          type="time"
          v-model="info.time"
        />
      </div>

      <div v-else>
        <h3>
          The date {{ info.date }} and time {{ info.time }} value chosen was R$
          {{ info.price }} BRL
        </h3>
      </div>

      <d-button v-if="!isSearch" class="w-32" @click.prevent="handleSearch()"
        >Search</d-button
      >
      <d-button v-else class="w-32" @click="handleNewRequest()"
        >New Request</d-button
      >
    </div>
    <router-link class="text-gold hover:text-white" to="/"
      >Previous page</router-link
    >
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
    };
  },
  methods: {
    getCoinDateTime() {
      const dateRequest = new Date(`${this.info.date} ${this.info.time}`);
      const dateAtt = new Date();
      const timestampRequest = getUnixTime(Date.parse(dateRequest));
      const timestampAtt = getUnixTime(Date.parse(dateAtt));
      coins
        .listDateTime(this.$route.query.search, timestampRequest, timestampAtt)
        .then((response) => {
          this.info.price = response.data.prices[0][1];
        })
        .catch((err) => console.log(err));
    },
    handleSearch() {
      this.getCoinDateTime();
      this.isSearch = true;
    },
    handleNewRequest() {
      this.info.time = null;
      this.info.date = null;
      this.info.price = null;
      this.isSearch = false;
    },
  },
};
</script>
