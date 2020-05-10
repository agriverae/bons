import React from "react";
import { shallow } from "enzyme";
import Card from "../Card";
import mockData from "./mockData.json";

const mockCallback = jest.fn();

const wrapper = shallow(
  <Card
    id={mockData.id}
    effect={mockData.effect}
    value={mockData.value}
    selected={mockData.selected}
    onCardSelected={mockCallback}
  />
);

const wrapperSelected = shallow(
  <Card
    id={mockData.id}
    effect={mockData.effect}
    value={mockData.value}
    selected={true}
    onCardSelected={mockCallback}
  />
);

describe("Renders Component Card", () => {
  it("renders effect and value", () => {
    expect(wrapper.find(".card__description").text()).toBe(
      `${mockData.effect}: ${mockData.value}`
    );
  });

  it("displays image depending of effect", () => {
    expect(
      wrapper.containsMatchingElement(
        <img
          src={`../../../shared/images/${mockData.effect}.jpg`}
          alt={mockData.effect}
        />
      )
    ).toBe(true);
  });

  it("Function called on card click", () => {
    wrapper.find(".card").simulate("click");
    expect(mockCallback.mock.calls.length).toBe(1);
  });

  it("Card has been selected", () => {
    expect(wrapperSelected.exists(".selected")).toBe(true);
  });
});
