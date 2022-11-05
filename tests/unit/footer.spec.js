import { shallowMount } from "@vue/test-utils";
import DFooter from "@/components/DFooter.vue";

describe("Footer.vue - unit", () => {
  it("shold be a vue instance", () => {
    const wrapper = shallowMount(DFooter);
    expect(wrapper.vm).toBeDefined();
  });
});
