import React from "react";
import { shallow } from "enzyme";
import Modal from "../Modal";

const element = <h1>Hello</h1>;

describe("When Modal is displayed", () => {
  const wrapper = shallow(<Modal>{element}</Modal>);

  it("Displays the element as children", () => {
    expect(wrapper.containsMatchingElement(element)).toBe(true);
  });
});
