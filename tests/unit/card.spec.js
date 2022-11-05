import { shallowMount } from "@vue/test-utils";
import DCard from "@/components/DCard.vue";

describe("Card.vue - unit", () => {
  it("shold be a vue instance", () => {
    const wrapper = shallowMount(DCard, {
      props: {
        imageCoin: "logo.png",
        altCoin: "bitcoin",
        valueCoin: 0,
      },
    });
    expect(wrapper.html()).toBeTruthy();
  });
});
