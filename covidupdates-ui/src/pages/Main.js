import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import { GlobalDataCards } from "../components/GlobalDataCards";
import { CountryDataCards } from "../components/CountryDataCards";

export const Main = ({covidNumbers, regions}) => {
    const [stats, setStats] = useState(covidNumbers);
    const [countryOptions, setCountryOptions] = useState(regions);
    const [selectedRegion, setSelectedRegion] = useState("");
    const [infoToggle, setInfoToggle] = useState("world")

    const handleToggleChange = (event, newToggle) => {
        setInfoToggle(newToggle);
    }

    const handleSelectChange = (event) => {
        setSelectedRegion(event.target.value);
    }

    const getInitialData = () => {
        setStats(covidNumbers);

        //Organize and sort regions by name
        const alphabetizedRegions = regions;
        alphabetizedRegions.sort((a, b) => a.name.localeCompare(b.name));

        setCountryOptions(alphabetizedRegions);
    }

    useEffect(() => { 
        getInitialData();
    });

    return (
        <div className="main-page">
            <div className="main-toggle-buttons">
                <ToggleButtonGroup
                    value={infoToggle}
                    exclusive
                    onChange={handleToggleChange}
                >
                    <ToggleButton value="world">
                        World Information
                    </ToggleButton>
                    <ToggleButton value="country">
                        Country Information
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className="main-country-select-filter">
                {
                    infoToggle === "country" ? (
                        <FormControl>
                            <InputLabel>Country Filter</InputLabel>
                            <Select 
                                defaultValue={selectedRegion ? selectedRegion : ""}
                                value={selectedRegion ? selectedRegion : ""}
                                onChange={handleSelectChange}
                            >
                                {countryOptions.map(country => {
                                    return (
                                        <MenuItem key={country.key} value={country.key}>{country.name}</MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    ) : (
                        null
                    )
                }
            </div>
            <div className="main-card-data-display">
                {
                    infoToggle === "country" ? (
                        <CountryDataCards stats={stats} selectedRegion={selectedRegion}/>
                    ) : (
                        <GlobalDataCards stats={stats}/>
                    )
                }
            </div>
        </div>
    );
}