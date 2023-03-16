import { showProgress } from "./modules/progress.js";

const url = 'http://localhost:3000/upload-avatar';
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const files = document.querySelector('[type=file]')
    const formData = new FormData();
    formData.append('avatar', files[0]);

    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = function(event) {
        console.log(`Uploaded ${event.loaded} of ${event.total}`);
        let percentage = (event.loaded / event.total) * 100;
        let progressCircle = document.getElementById('upload-progress');

        document.querySelector('#mbps-upload').innerHTML =  percentage.toFixed(0) + "%";

        showProgress(percentage, progressCircle);
    }

    xhr.onloadend = function() {
        if(xhr.status == 200) {
            console.log("success");
        }else {
            console.log("error" + this.status);
        }
    };

    xhr.open('POST', url);
    xhr.send(files);
})