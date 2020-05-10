import React from "react";
import { shallow } from "enzyme";
import Cards from "../Cards";
import mockData from "./mockData.json";

const mockCallback = jest.fn();

const wrapper = shallow(
  <Cards cards={mockData} onCardSelected={mockCallback} cardSelectedId={"1"} />
);

describe("When cards component is rendered", () => {
  it("Renders cards from array", () => {
    expect(wrapper.find("Card").length).toBe(3);
  });
});
