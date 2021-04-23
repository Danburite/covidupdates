import axios from 'axios';

const currentWorldUpdate = () => {
    const currentWorldUpdateLink = 'https://api.quarantine.country/api/v1/summary/latest';
    let call = axios.get(currentWorldUpdateLink)
        .then(function (response) {
            return response;
        }).then(item => {
            const e = item.data;
            return e;
        }).catch(e=>console.log(e));
    return call;
}

const currentRegionUpdate = (country) => {
    const currentRegionUpdateLink = 'https://api.quarantine.country/api/v1/summary/region?region=' + country;

    let call = axios.get(currentRegionUpdateLink)
        .then(function (response) {
            return response;
        }).then(item => {
            const e = item.data;
            return e;
        }).catch(e=>console.log(e));
    return call;
}

const allAvailableRegions = () => {
    const allAvailableRegionsLink = 'https://api.quarantine.country/api/v1/regions';
    let call = axios.get(allAvailableRegionsLink)
        .then(function (response) {
            return response;
        }).then(item => {
            const e = item.data;
            return e;
        }).catch(e=>console.log(e));
    return call;
}

export { currentWorldUpdate, currentRegionUpdate, allAvailableRegions }
