import axios from 'axios';
import { baseUrl, endpoints } from '../config';

class Axios {
    constructor() {
        this.token = null;
        this.instance = null;
        this.setupAxios();
    }

    setupAxios() {
        this.instance = axios.create({
            baseURL: baseUrl.dev,
            headers: {
                'x-api-version': 'v1',
                'Content-Type': 'application/json'
            }
        });
        this.instance.interceptors.request.use((req) => {
            req.headers.token = this.token;
            return req;
        });
    }

    setToken(token) {
        this.token = token;
    }
}


 export default new Axios();

