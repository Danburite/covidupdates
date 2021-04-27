import React from "react";
import { shallow, mount } from "enzyme";
import { GlobalDataCards } from "../components/GlobalDataCards";
import { Grid, Paper } from '@material-ui/core';

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
        const activeCase = (
            <Paper>
                <div className="global-card-active-cases">
                    <h3>
                        Active Cases
                    </h3>
                    <p>
                        {mockStats.summary.active_cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </p>
                </div>
            </Paper>
        );
        expect(wrapper.contains(activeCase)).toEqual(true);
    });

    it("renders deaths card", () => {
        const deaths = (
            <Paper>
                <div className="global-card-deaths">
                    <h3>
                        Deaths
                    </h3>
                    <p>
                        {mockStats.summary.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </p>
                </div>
            </Paper>
        );
        expect(wrapper.contains(deaths)).toEqual(true);
    });
    
    it("renders total cases card", () => {
        const totalCase = (
            <Paper>
                <div className="global-card-total-cases">
                    <h2>
                        Total Cases
                    </h2>
                    <span>
                        {mockStats.summary.total_cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </span>
                </div>
            </Paper>
        );
        expect(wrapper.contains(totalCase)).toEqual(true);
    });

    it("renders recovered card", () => {
        const recovered = (
            <Paper>
                <div className="global-card-recovered">
                    <h3>
                        Recovered
                    </h3>
                    <p>
                        {mockStats.summary.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </p>
                </div>
            </Paper>
        );
        expect(wrapper.contains(recovered)).toEqual(true);
    });

    it("renders critical card", () => {
        const critical = (
            <Paper>
                <div className="global-card-critical">
                    <h3>
                        Critical
                    </h3>
                    <p>
                        {mockStats.summary.critical.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </p>
                </div>
            </Paper>
        );
        expect(wrapper.contains(critical)).toEqual(true);
    });

    it("renders tested card", () => {
        const tested = (
            <Paper>
                <div className="global-card-tested">
                    <h3>
                        Tested
                    </h3>
                    <p>
                        {mockStats.summary.tested.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </p>
                </div>
            </Paper>
        );
        expect(wrapper.contains(tested)).toEqual(true);
    });

    it("renders death ratio card", () => {
        const deathRatio = (
            <Paper>
                <div className="global-card-death-rate">
                    <h3>
                        Death Rate
                    </h3>
                    <p>
                        {(mockStats.summary.death_ratio * 100).toFixed(2) + "%"}
                    </p>
                </div>
            </Paper>
        );
        expect(wrapper.contains(deathRatio)).toEqual(true);
    });

    it("renders recovery ratio card", () => {
        const recoveryRate = (
            <Paper>
                <div className="global-card-recovery-ratio">
                    <h3>
                        Recovery Rate
                    </h3>
                    <p>
                        {(mockStats.summary.recovery_ratio * 100).toFixed(2) + "%"}
                    </p>
                </div>
            </Paper>
        );
        expect(wrapper.contains(recoveryRate)).toEqual(true);
    });
});