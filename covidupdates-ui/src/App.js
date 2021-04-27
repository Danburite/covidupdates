import React, { useState, useEffect } from "react";
import { currentWorldUpdate, allAvailableRegions } from "./functions/APICalls";
import { Main } from "./pages/Main";
import GitHubIcon from '@material-ui/icons/GitHub';
import "./assets/styles/site.scss";

function App() {
  const [regions, setRegions] = useState([]);
  const [covidNumbers, setCovidNumbers] = useState({});

  useEffect(() => { 
    const getInitialCalls = () => {
      allAvailableRegions()
        .then(promise => {
          const rawData = promise.data;
          const uniqueRegions = rawData.filter((item, index, self) => self.findIndex(
            (r) => {return (r.key === item.key)}) === index);
          setRegions(uniqueRegions);
        });
      currentWorldUpdate()
      .then(promise => {
        setCovidNumbers(promise.data);
      });
    }
    getInitialCalls();
  }, []);

  return (
    <div className="covidupdates-app">
      <div className="navbar-title">
        <h1>COVID-19 Updates</h1>
      </div>
      <Main covidNumbers={covidNumbers} regions={regions}/>
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
    </div>
  );
}

export default App;
