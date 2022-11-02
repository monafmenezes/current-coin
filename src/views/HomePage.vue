<template>
  <div class="about container mx-auto flex flex-col items-center justify-start">
    <h2 class="mt-14 mb-14 text-white text-xl font-light">
      Select to search by date
    </h2>
    <div class="grid grid-cols-5 gap-4">
      <div v-for="coin in coins" :key="coin.name" class="w-44">
        <d-button @click="searchGo(coin.name, coin.search, coin.image)">{{
          coin.name
        }}</d-button>
        <d-card
          :image-coin="coin.image"
          :alt-coin="coin.name"
          :value-coin="coin.value"
        />
      </div>
    </div>
  </div>
</template>
<script>
import DCard from "../components/DCard.vue";
import DButton from "../components/DButton.vue";
import coins from "@/services/coins";
export default {
  components: { DButton, DCard },
  data() {
    return {
      coins: [
        { name: "Bitcoin", image: "logo.png", search: "bitcoin", value: "" },
        { name: "Dacxi", image: "dacxi.png", search: "dacxi", value: "" },
        { name: "Eth", image: "eth.png", search: "ethereum", value: "" },
        { name: "Atom", image: "atom.svg", search: "cosmos", value: "" },
        { name: "Luna", image: "luna.svg", search: "terra-luna", value: "" },
      ],
    };
  },
  created() {
    this.getCoin();
  },
  mounted() {
    this.updateCoin();
  },
  methods: {
    searchGo(route, search, image) {
      this.$router.push({
        name: "search",
        params: { coin: route },
        query: { search, image },
      });
    },
    getCoin() {
      this.coins.forEach((coin) => {
        coins
          .list(coin.search)
          .then((response) => {
            coin.value = response.data[0].current_price;
          })
          .catch((err) => console.log(err));
      });
    },
    updateCoin() {
      setInterval(() => {
        this.getCoin();
      }, 10000);
    },
  },
  beforeUnmount() {
    clearInterval(this.attCoin);
  },
};
</script>
