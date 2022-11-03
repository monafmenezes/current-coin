  <template>
  <div
    class="w-full bg-gold-transparent h-52 rounded mt-4 flex flex-col justify-center items-center"
  >
    <img
      :src="require(`../static/${imageCoin}`)"
      :alt="altCoin"
      class="w-16 mb-4 animate-pulse"
    />
    <p class="text-white">R$ {{ valueCoin }} BRL</p>
  </div>
</template>

<script>
export default {
  name: "DCard",
  props: {
    imageCoin: {
      type: String,
      required: true,
    },
    altCoin: {
      type: String,
      required: true,
    },
    valueCoin: {
      type: [Number, String],
      required: true,
    },
  },
};
</script>
