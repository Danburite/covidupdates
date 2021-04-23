import React, { useState, useEffect } from "react";
import { Grid, Paper } from '@material-ui/core';
import CountUp from 'react-countup';
import { currentRegionUpdate } from '../functions/APICalls';

export const CountryDataCards = ({stats, selectedRegion}) => {
    const [covidInfo, setCovidInfo] = useState(stats.summary);
    const [prevInfo, setPrevInfo] = useState(stats.summary);
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => { 
        const getInitialData = () => {
            setCovidInfo(stats.summary);
            setPrevInfo(stats.summary);
    
            const dataDate = new Date(stats.generated_on * 1000);
            setCurrentDate(dataDate.toDateString());
        }

        getInitialData();
    }, [stats]);

    useEffect(() => {
        const getNewData = () => {
            currentRegionUpdate(selectedRegion)
                .then(promise => {
                    setCovidInfo(promise.data.summary);
                });
        }
        if (selectedRegion !== "") {
            getNewData();
        }
    }, [selectedRegion]);

    return (
        <div className="country-card-data-display">
            <Grid container direction="row" justify="space-evenly" alignItems="stretch">
                <Grid item xs={3} container className="country-card-column-one">
                    <Paper>
                        <div className="country-card-active-cases">
                            <h3>
                                Active Cases
                            </h3>
                            {(covidInfo === undefined && prevInfo === undefined) ? (
                                ""
                                ) : (
                                <CountUp start={prevInfo.active_cases} end={covidInfo.active_cases} duration={1} separator="," onEnd={() => setPrevInfo({...prevInfo, active_cases: covidInfo.active_cases})}/>
                                )
                            }
                        </div>
                    </Paper>
                    <Paper>
                        <div className="country-card-tested">
                            <h3>
                                Tested
                            </h3>
                            {(covidInfo === undefined && prevInfo === undefined) ? (
                                ""
                                ) : (
                                <CountUp start={prevInfo.tested} end={covidInfo.tested} duration={1} separator="," onEnd={() => setPrevInfo({...prevInfo, tested: covidInfo.tested})}/>
                                )
                            }
                        </div>
                    </Paper>
                    <Paper>
                        <div className="country-card-critical">
                            <h3>
                                Critical
                            </h3>
                            {(covidInfo === undefined && prevInfo === undefined) ? (
                                ""
                                ) : (
                                <CountUp start={prevInfo.critical} end={covidInfo.critical} duration={1} separator="," onEnd={() => setPrevInfo({...prevInfo, critical: covidInfo.critical})}/>
                                )
                            }    
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={6} className="country-card-column-two">
                    <Paper>
                        <div className="country-card-total-cases">
                            <h2>
                                Total Cases
                            </h2>
                            <div className="country-card-total-cases-number">
                                {(covidInfo === undefined && prevInfo === undefined) ? (
                                    ""
                                 ) : (
                                    <CountUp start={prevInfo.total_cases} end={covidInfo.total_cases} duration={1} separator="," onEnd={() => setPrevInfo({...prevInfo, total_cases: covidInfo.total_cases})}/>
                                 )
                                }
                            </div>
                        </div>
                    </Paper>
                    <div className="country-card-update-date">
                        <p>This information was updated on {currentDate}</p>
                    </div>
                </Grid>
                <Grid item xs={3} container className="country-card-column-three">
                    <Paper>
                        <div className="country-card-recovered">
                            <h3>
                                Recovered
                            </h3>
                            {(covidInfo === undefined && prevInfo === undefined) ? (
                                ""
                                ) : (
                                <CountUp start={prevInfo.recovered} end={covidInfo.recovered} duration={1} separator="," onEnd={() => setPrevInfo({...prevInfo, recovered: covidInfo.recovered})}/>
                                )
                            }
                        </div>
                    </Paper>
                    <Paper>
                        <div className="country-card-recovery-ratio">
                            <h3>
                                Recovery Rate
                            </h3>
                            <p>
                                {(covidInfo === undefined) ? "" : (covidInfo.recovery_ratio * 100).toFixed(2) + "%"}
                            </p>
                        </div>
                    </Paper>
                    <Paper>
                        <div className="country-card-deaths">
                            <h3>
                                Deaths
                            </h3>
                            {(covidInfo === undefined && prevInfo === undefined) ? (
                                ""
                                ) : (
                                <CountUp start={prevInfo.deaths} end={covidInfo.deaths} duration={1} separator="," onEnd={() => setPrevInfo({...prevInfo, deaths: covidInfo.deaths})}/>
                                )
                            }
                        </div>
                    </Paper>
                    <Paper>
                        <div className="country-card-death-rate">
                            <h3>
                                Death Rate
                            </h3>
                            <p>
                                {(covidInfo === undefined) ? "" : (covidInfo.death_ratio * 100).toFixed(2) + "%"}
                            </p>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
