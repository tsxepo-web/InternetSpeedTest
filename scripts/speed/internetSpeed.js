import { calculateSpeed } from "./modules/calculateSpeed.js";
import { toHtml } from "./modules/DOM.js";
import { storage } from "./modules/storage.js";

class FetchSpeed{
    constructor() {};
    async getSpeed(){
        const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrR4E_xuZHL1GWNjpDG74lTz4RMUtraBX9KCeajjq_&s';
        try {
            var startTime = new Date().getTime();
            const response = await fetch(url);
            var endTime = new Date().getTime();
            
            const imageSize = response.headers.get('content-length');
            var speed = calculateSpeed(startTime, endTime, imageSize);
            storage(speed);
            toHtml(speed);
        } catch (errror) {
            return console.log(errror.message);
        }
    }
}
const speed = new FetchSpeed();
speed.getSpeed();