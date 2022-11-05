import { shallowMount } from "@vue/test-utils";
import DButton from "../../src/components/DButton.vue";

describe("DButton.vue - unit", () => {
  it("shold be a vue instance", () => {
    const wrapper = shallowMount(DButton);
    expect(wrapper.vm).toBeDefined();
  });
});

describe("Button slots - unit", () => {
  it("should render the button with the text passed", () => {
    const wrapper = shallowMount(DButton, {
      slots: {
        default: "Main Content",
      },
    });
    expect(wrapper.html()).toContain("Main Content");
  });
});

describe("Button Event - unit", () => {
  it("It should emit the click event when the button is clicked", () => {
    const wrapper = shallowMount(DButton);
    wrapper.trigger("click");
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
