import React from "react";
import { shallow, mount } from "enzyme";
import { Main } from "../pages/Main";

//Main Unit Render Tests
describe('<Main/> component unit tests', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Main/>);
    });
    
    afterEach(() => {
        jest.clearAllMocks();
    });
      
    it("renders world toggle buttons", () => {
        const toggleButtons = "World Information"
        expect(wrapper.contains(toggleButtons)).toEqual(true);
    });

    it("renders country toggle buttons", () => {
        const toggleButtons = "Country Information"
        expect(wrapper.contains(toggleButtons)).toEqual(true);
    });
});