import axios from 'axios';
import 'dotenv/config'

const request = axios.create({
    baseURL: 'http://localhost:8082/api/v0',
    headers: {"content-type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Origin" : "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Authorization" : process.env.IDTOKEN,}
});

//request.defaults.headers.common['Authorization'] = "AUTH_TOKEN";

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
}

// const configHeaders = {
//     "content-type": "application/json",
//     "Accept": "application/json",
//     "Access-Control-Allow-Origin" : "*",
//     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//   };

export const post = async (path, body = {}) => {
    const response = await request.post(path, body);
    return response.data;
}

export default request;
