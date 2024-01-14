import axios from "axios"
import { MapPayload } from "./components/Maps/types";

const API_URL = process.env.REACT_APP_ACCESS_TOKEN_DATABASE_HEROKU;

const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

export function fetchProducts(){
    return axios(`${API_URL}/products`);
}

export function fetchLocalMapBox(local: string){
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

export function saveOrder(payload : MapPayload){
    return axios.post(`${API_URL}/orders`, payload);
}
