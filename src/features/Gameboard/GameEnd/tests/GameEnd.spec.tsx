import React from "react";
import GameEnd from "../GameEnd";
import { shallow } from "enzyme";

describe("When GameEnd renders", () => {
  it("Displays a victory message", () => {
    const wrapper = shallow(<GameEnd won={true} lost={false} />);

    expect(
      wrapper.containsAllMatchingElements([
        <p key={"congrats"}>Congratulations</p>,
        <p key={"win"}>You Win! (:</p>,
      ])
    ).toBe(true);
  });

  it("Displays a defeat message", () => {
    const wrapper = shallow(<GameEnd won={false} lost={true} />);
    expect(wrapper.find("p").text()).toBe("Ups... you lose!");
  });

  it("Displays play again message", () => {
    const wrapper = shallow(<GameEnd won={false} lost={true} />);
    expect(wrapper.find("Link").text()).toBe("Play Again?");
  });

  it("Displays a defeat message when won and lost are true", () => {
    const wrapper = shallow(<GameEnd won={true} lost={true} />);
    expect(wrapper.find("p").text()).toBe("Ups... you lose!");
  });
});
