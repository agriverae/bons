import React from "react";
import { shallow } from "enzyme";
import Cards from "../Cards";
import mockCards from "./cards.json";

const mockCallback = jest.fn();

console.log(mockCards);

const wrapper = shallow(
  <Cards cards={mockCards} onCardSelected={mockCallback} cardSelectedId={"1"} />
);

describe("When cards component is rendered", () => {
  it("Renders cards from array", () => {
    console.log(wrapper.find("Card").debug());
    expect(wrapper.find("Card").length).toBe(3);
  });
});
