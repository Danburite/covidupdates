import React, { useState, useEffect } from "react";
import { Grid, Paper } from '@material-ui/core';

export const GlobalDataCards = ({stats}) => {
    const [covidInfo, setCovidInfo] = useState(stats.summary);
    const [currentDate, setCurrentDate] = useState("");

    const getInitialData = () => {
        setCovidInfo(stats.summary);

        const dataDate = new Date(stats.generated_on * 1000);
        setCurrentDate(dataDate.toDateString());
    }

    useEffect(() => { 
        getInitialData();
    });

    return (
        <div className="global-card-data-display">
            <Grid container direction="row" justify="space-evenly" alignItems="stretch">
                <Grid item xs={3} container className="global-card-column-one">
                    <Paper>
                        <div className="global-card-active-cases">
                            <h3>
                                Active Cases
                            </h3>
                            <p>
                                {(covidInfo === undefined) ? "" : covidInfo.active_cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </p>
                        </div>
                    </Paper>
                    <Paper>
                        <div className="global-card-tested">
                            <h3>
                                Tested
                            </h3>
                            <p>
                                {(covidInfo === undefined) ? "" : covidInfo.tested.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </p>
                        </div>
                    </Paper>
                    <Paper>
                        <div className="global-card-critical">
                            <h3>
                                Critical
                            </h3>
                            <p>
                                {(covidInfo === undefined) ? "" : covidInfo.critical.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </p>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={6} className="global-card-column-two">
                    <Paper>
                        <div className="global-card-total-cases">
                            <h2>
                                Total Cases
                            </h2>
                            <span>
                                {(covidInfo === undefined) ? "" : covidInfo.total_cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </span>
                        </div>
                    </Paper>
                    <div className="global-card-update-date">
                        <p>This information was updated on {currentDate}</p>
                    </div>
                </Grid>
                <Grid item xs={3} container className="global-card-column-three">
                    <Paper>
                        <div className="global-card-recovered">
                            <h3>
                                Recovered
                            </h3>
                            <p>
                                {(covidInfo === undefined) ? "" : covidInfo.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </p>
                        </div>
                    </Paper>
                    <Paper>
                        <div className="global-card-recovery-ratio">
                            <h3>
                                Recovery Rate
                            </h3>
                            <p>
                                {(covidInfo === undefined) ? "" : (covidInfo.recovery_ratio * 100).toFixed(2) + "%"}
                            </p>
                        </div>
                    </Paper>
                    <Paper>
                        <div className="global-card-deaths">
                            <h3>
                                Deaths
                            </h3>
                            <p>
                                {(covidInfo === undefined) ? "" : covidInfo.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </p>
                        </div>
                    </Paper>
                    <Paper>
                        <div className="global-card-death-rate">
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
