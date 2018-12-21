import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld/index.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text().includes('date picker')).toBe(true);
  });
});
