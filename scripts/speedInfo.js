
let startTime, endTime;
let imageSize = "";
let image = new Image();
let bitOutput = document.getElementById('bits');
let kbOutput = document.getElementById('kbs');
let mbOutput = document.getElementById('mbs');

let imageLink = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrR4E_xuZHL1GWNjpDG74lTz4RMUtraBX9KCeajjq_&s';

window.onload = () => init();

const init = async () => {
    startTime = new Date().getTime();
    image.src = imageLink;
};

image.onload = async function() {
    endTime = new Date().getTime();

    await fetch(imageLink)
        .then((response) => {
            imageSize = response.headers.get('content-length');
            calculateSpeed();
        });
};

function calculateSpeed() {
    let timeDuration = (endTime - startTime) / 1000;
    let sizeInBits = imageSize * 8;
    let speedInBps = (sizeInBits / timeDuration).toFixed(2);
    let speedInKbps = (speedInBps / 1024).toFixed(2);
    let speedInMbps = (speedInKbps / 1024).toFixed(2);
    localStorage.setItem('speed', speedInMbps);

    mbOutput.innerHTML += `${speedInMbps} Mbps`;
}

