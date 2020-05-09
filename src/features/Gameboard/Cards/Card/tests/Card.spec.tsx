import React from "react";
import { shallow } from "enzyme";
import Card from "../Card";
import data from "./card.json";

const mockCallback = jest.fn();

const wrapper = shallow(
  <Card
    id={data.id}
    effect={data.effect}
    value={data.value}
    selected={data.selected}
    onCardSelected={mockCallback}
  />
);

const wrapperSelected = shallow(
  <Card
    id={data.id}
    effect={data.effect}
    value={data.value}
    selected={true}
    onCardSelected={mockCallback}
  />
);

describe("Renders Component Card", () => {
  it("renders effect and value", () => {
    expect(wrapper.find(".card__description").text()).toBe(
      `${data.effect}: ${data.value}`
    );
  });

  it("Function called on card click", () => {
    wrapper.find(".card").simulate("click");
    expect(mockCallback.mock.calls.length).toBe(1);
  });

  it("Card has been selected", () => {
    expect(wrapperSelected.exists(".selected")).toBe(true);
  });
});
