import axios from 'axios';
import 'dotenv/config'

const request = axios.create({
    baseURL: 'http://localhost:8080/api/v0',
    headers: {"content-type": "application/json",
    "Accept": "application/json",
    // "Access-Control-Allow-Origin" : "*",
    // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    // "Authorization" : process.env.TOKEN,
}
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

export const post = async (path, body = {}, options = {}) => {
    const response = await request.post(path, body, options);
    return response.data;
}

export default request;
