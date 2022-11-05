import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue - unit", () => {
  it("shold be a vue instance", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.vm).toBeDefined();
  });
});
