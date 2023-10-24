import { mount } from "@vue/test-utils";
import ResponseCard from "@/components/ResponseCard.vue";
import FormInput from "@/components/FormInput.vue";

// group of tests:
describe("Example", () => {
  it("Sanity test", () => {
    expect(true).toBe(true);
  });
  it("Test if 1 + 1 = 2", () => {
    // function can be called "test"
    expect(1 + 1).toBe(2);
  });
  xit("1 + 1 != 3", () => {
    // x prefix skips the test
    expect(1 + 1).not.toBe(3);
  });
});

describe("Response card", () => {
  beforeEach(() => {
    const el = document.createElement("div");
    el.id = "card-holder";
    document.body.appendChild(el);
  });

  afterEach(() => (document.body.outerHTML = ""));

  it("Correctly shows meessage from props", () => {
    mount(ResponseCard, {
      props: {
        message: "Example message",
      },
    });
    const card = document.getElementById("card-holder");
    expect(card.innerHTML).toContain("Example message");
  });

  it("Correctly teleports card to #card-holder", () => {
    mount(ResponseCard);
    const cardHolder = document.getElementById("card-holder");
    const card = document.getElementById("card");
    expect(cardHolder.outerHTML).toContain(card.outerHTML);
  });
});

describe("Form Input", () => {
  it("Correctly shows label from props", () => {
    const wrapper = mount(FormInput, {
      props: {
        labelText: "Example form input",
      },
    });

    expect(wrapper.text()).toBe("Example form input");
  });
});
