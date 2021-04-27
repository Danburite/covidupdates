import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import GitHubIcon from '@material-ui/icons/GitHub';

//App Unit Render Tests
describe('<App/> component unit tests', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App/>);
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
                    <div className="footer-icons">
                        <a href="https://github.com/Danburite"><GitHubIcon /></a>
                    </div>
                </div>
            </footer>
        )
        expect(wrapper.contains(footer)).toEqual(true);
    });
});