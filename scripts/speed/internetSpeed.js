import { speedDOM } from "./speedDependancy/DOM.js";
import { speedStorage } from "./speedDependancy/storeLocal.js";
import { calculateSpeed } from "./speedDependancy/calculateSpeed.js";

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
            speedStorage(speed);
            speedDOM(speed);
        } catch (errror) {
            return console.log(errror.message);
        }
    }
}
const speed = new FetchSpeed();
speed.getSpeed();