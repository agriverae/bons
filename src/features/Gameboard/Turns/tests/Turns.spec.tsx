import React from "react";
import { shallow } from "enzyme";
import Turns from "../Turns";
import mockData from "./mockData.json";

const mockCallback = jest.fn();

const wrapper = shallow(
  <Turns
    currentTurn={mockData.currentTurn}
    turnsLeft={mockData.turnsLeft}
    endTurn={mockCallback}
    endTurnActive={mockData.endTurnActive}
  />
);

describe("When Turns Component is rendered", () => {
  it("Displays the current turn", () => {
    expect(wrapper.find("#currentTurn").text()).toBe(`${mockData.currentTurn}`);
  });

  it("Displays previous turn", () => {
    expect(wrapper.find("#previousTurn").text()).toBe(
      `${mockData.currentTurn - 1}`
    );
  });

  it("Displays 0 as previous turn if currentTurn is 0", () => {
    const wrapperSpecial = shallow(
      <Turns
        currentTurn={0}
        turnsLeft={mockData.turnsLeft}
        endTurn={mockCallback}
        endTurnActive={mockData.endTurnActive}
      />
    );

    expect(wrapperSpecial.find("#previousTurn").text()).toBe("0");
  });

  it("Displays turns left", () => {
    expect(wrapper.find("#turnsLeft").text()).toBe(`${mockData.turnsLeft}`);
  });

  it("Displays disabled button", () => {
    expect(
      wrapper.containsMatchingElement(
        <button
          disabled={mockData.endTurnActive}
          onClick={mockCallback}
          className="button button--cyan"
        >
          End Turn
        </button>
      )
    ).toBe(true);
  });

  it("Displays enabled button", () => {
    const wrapperSpecial = shallow(
      <Turns
        currentTurn={mockData.currentTurn}
        turnsLeft={mockData.turnsLeft}
        endTurn={mockCallback}
        endTurnActive={false}
      />
    );
    expect(
      wrapperSpecial.containsMatchingElement(
        <button
          disabled={false}
          onClick={mockCallback}
          className="button button--cyan"
        >
          End Turn
        </button>
      )
    ).toBe(true);
  });

  it("Function called on card click", () => {
    wrapper.find("button").simulate("click");
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
