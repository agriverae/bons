import React from "react";
import CharInfo from "../CharInfo";
import mockData from "./mockData.json";
import { shallow } from "enzyme";

const wrapper = shallow(
  <CharInfo
    name={mockData.name}
    hp={mockData.hp}
    maxHp={mockData.maxHp}
    shield={mockData.shield}
    image={mockData.image}
  />
);

describe("When CharInfo Renders", () => {
  it("Displays the name of the character", () => {
    expect(wrapper.find(".sideContent__title").text()).toBe(`${mockData.name}`);
  });

  it("Displays the hp and maxHp", () => {
    expect(wrapper.find(".sideContent__description .text--strong").text()).toBe(
      `${mockData.hp}/${mockData.maxHp}`
    );
  });

  it("Displays shield", () => {
    expect(wrapper.find(".shieldData .text--strong").text()).toBe(
      `${mockData.shield}`
    );
  });

  it("Displays image provided", () => {
    expect(
      wrapper.containsMatchingElement(
        <img src={mockData.image} alt={mockData.name} />
      )
    ).toBe(true);
  });

  it("Displays default image, if no image is provided", () => {
    const wrapperSpecial = shallow(
      <CharInfo
        name={mockData.name}
        hp={mockData.hp}
        maxHp={mockData.maxHp}
        shield={mockData.shield}
      />
    );

    expect(
      wrapperSpecial.containsMatchingElement(
        <img src="defaultImage.jpg" alt={mockData.name} />
      )
    ).toBe(true);
  });
});
