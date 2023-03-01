import { toHtml } from "./ipApiDependancy/DOM.js";
import { storage } from "./ipApiDependancy/storeLocal.js";

class FetchIpApi{
    constructor() {
    }

    async getIp(){
        var url = 'https://ipgeolocation.abstractapi.com/v1/?api_key=d5cac7efc1f849d8b2d4d9c9106187b8';
        try {
            const response = await fetch(url);
            const data = await response.json();
            storage(data);
            return toHtml(data);
        } 
        catch (errror) {
            return console.log(errror.message);
        }
    }
}

const ip = new FetchIpApi();
ip.getIp();