import HttpClient from "../index";

const RESTFUL_URL = process.env.REACT_APP_API_URL || "";

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
