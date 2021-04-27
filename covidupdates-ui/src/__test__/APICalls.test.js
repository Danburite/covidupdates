import React from "react";
import { shallow } from "enzyme";
import { currentWorldUpdate, currentRegionUpdate, allAvailableRegions } from "../functions/APICalls";


//API Calls Integration Tests
describe('API Calls integration tests', () => {
    let wrapper;

    it("testing currentWorldUpdate() function", () => {
        const request = currentWorldUpdate();
        request.then(promise => {
            const response = promise.data;
            expect(response.status).toBe("200");
        }, function(error) {
            assert.fail(error);
        });
    });

    it("testing currentRegionUpdate() function", () => {
        const key = "usa"
        const request = currentRegionUpdate(key);
        request.then(promise => {
            const response = promise.data;
            expect(response.status).toBe("200");
        }, function(error) {
            assert.fail(error);
        });
    });

    it("testing allAvailableRegions() function", () => {
        const request = allAvailableRegions();
        request.then(promise => {
            const response = promise.data;
            expect(response.status).toBe("200");
        }, function(error) {
            assert.fail(error);
        });
    });
});