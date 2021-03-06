import HttpClient from "../index";
import {RESTFUL_URL} from '../../../helper/consts'

export default class HttpServices extends HttpClient {
    classInstance = null;
    constructor() {
        super(RESTFUL_URL);
    }

    static getInstance() {
        if (!this.classInstance) {
            this.classInstance = new HttpServices();
        }

        return this.classInstance;
    }
}

