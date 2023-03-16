import { showSpeed } from "./modules/DOM.js";
import { speed } from "./modules/internetSpeed.js";
import { showProgress } from "./modules/progress.js";

let response = await fetch('https://fetch-progress.anthum.com/30kbps/images/sunrise-baseline.jpg');
const reader = response.body.getReader();
export let contentLength = +response.headers.get('Content-Length');
var speedMbps = speed();

let receivedLength = 0;
let chunks = [];
while(true) {
    const {done, value} = await reader.read();
    if (done) {
        break;
    }
    chunks.push(value);
    receivedLength += value.length;
    
    let percentage = (receivedLength / contentLength) * 100;
    let progressCircle = document.getElementById('circumference');
    
    showProgress(percentage, progressCircle);
    showSpeed(speedMbps, percentage);
}