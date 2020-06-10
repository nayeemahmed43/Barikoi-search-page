import axios from 'axios';

const API_KEY = 'MTcxNTo2Tlo1UlFaM1Ux';
const ROOT_URL = `https://barikoi.xyz/v1/api/search/autocomplete/${API_KEY}/place?`;

export const FETCH_DATA = 'FETCH_DATA';

export function fetchData(name) {
    const url = `${ROOT_URL}&q=${name}`;
    const request = axios.get(url);
    console.log('Request',request)

    return {
        type: 'FETCH_DATA',
        payload: request
    }
}