import React from "react";
import { shallow } from "enzyme";
import MonsterEffect from "../MonsterEffect";
import mockData from "./mockData.json";

const mockCallback = jest.fn();

const wrapper = shallow(
  <MonsterEffect
    closeModal={mockCallback}
    modalOpen={mockData.modalOpen}
    effect={mockData.effect}
    value={mockData.value}
  />
);

describe("When MonsterEffect renders", () => {
  it("Displays effect of monster", () => {
    expect(wrapper.find("#effect").text()).toBe(
      `Monster Effect: ${mockData.effect}`
    );
  });

  it("Displays effect of monster", () => {
    expect(wrapper.find("#value").text()).toBe(`Value: ${mockData.value}`);
  });

  it("Function called on button Clicked", () => {
    wrapper.find("button").simulate("click");
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});

describe("When MonsterEffect is not rendered", () => {
  const wrapperSpecial = shallow(
    <MonsterEffect
      closeModal={mockCallback}
      modalOpen={false}
      effect={mockData.effect}
      value={mockData.value}
    />
  );
  it("Doesn't display element", () => {
    expect(wrapperSpecial.type()).toEqual(null);
  });
});
