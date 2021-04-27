import React from "react";
import { shallow, mount } from "enzyme";
import { GlobalDataCards } from "../components/GlobalDataCards";

//Global Data Cards Unit Render Tests
describe('<GlobalDataCards/> component tests', () => {
    let wrapper;

    const mockStats = {
        "summary": {
            "total_cases": 31,
            "active_cases": 34,
            "deaths": 31,
            "recovered": 35,
            "critical": 33,
            "tested": 36,
            "death_ratio": 0.33,
            "recovery_ratio": 0.30
        }
    }

    beforeEach(() => {
        wrapper = shallow(<GlobalDataCards stats={mockStats}/>);
    });
    
    afterEach(() => {
        jest.clearAllMocks();
    });
      
    it("renders active cases card", () => {
        const activeCase = "Active Cases";
        expect(wrapper.contains(activeCase)).toEqual(true);
    });

    it("renders deaths card", () => {
        const deaths = "Deaths";
        expect(wrapper.contains(deaths)).toEqual(true);
    });
    
    it("renders total cases card", () => {
        const totalCase = "Total Cases";
        expect(wrapper.contains(totalCase)).toEqual(true);
    });

    it("renders recovered card", () => {
        const recovered = "Recovered";
        expect(wrapper.contains(recovered)).toEqual(true);
    });

    it("renders critical card", () => {
        const critical = "Critical";
        expect(wrapper.contains(critical)).toEqual(true);
    });

    it("renders tested card", () => {
        const tested = "Tested";
        expect(wrapper.contains(tested)).toEqual(true);
    });

    it("renders death ratio card", () => {
        const deathRatio = "Death Rate";
        expect(wrapper.contains(deathRatio)).toEqual(true);
    });

    it("renders recovery ratio card", () => {
        const recoveryRate = "Recovery Rate";
        expect(wrapper.contains(recoveryRate)).toEqual(true);
    });
});