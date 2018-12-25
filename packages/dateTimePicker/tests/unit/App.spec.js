import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("should imoprt date-time-picker component", () => {
    const format = "hh:mm A";
    const wrapper = shallowMount(App, {
      propsData: { format }
    });
    expect(wrapper.html().includes('date-time-picker')).toBe(true)
  });
});
