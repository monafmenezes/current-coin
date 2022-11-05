import { shallowMount } from "@vue/test-utils";
import DHeader from "@/components/DHeader.vue";

describe("Header.vue - unit", () => {
  it("shold be a vue instance", () => {
    const wrapper = shallowMount(DHeader);
    expect(wrapper.vm).toBeDefined();
  });
});
