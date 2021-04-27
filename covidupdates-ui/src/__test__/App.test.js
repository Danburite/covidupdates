import React from "react";
import { shallow } from "enzyme";
import App from "../App";


//App Unit Render Tests
describe('<App/> component unit tests', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App/>);
    });
    
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("renders without crashing", () => {
        shallow(<App />);
    });
      
    it("renders page header", () => {
        const header = (
            <div className="navbar-title">
                <h1>COVID-19 Updates</h1>
            </div>
        )
        expect(wrapper.contains(header)).toEqual(true);
    });
    
    it("renders page footer", () => {
        const footer = (
            <footer>
                <div className="footer-title">
                    <br/>
                    <div className="footer-description">
                        COVID-19 Updates is a small project developed to track current information in the recent pandemic
                    </div>
                    <div className="footer-author">
                        Developed by Sherman Lee
                    </div>
                </div>
            </footer>
        )
        expect(wrapper.contains(footer)).toEqual(true);
    });
});