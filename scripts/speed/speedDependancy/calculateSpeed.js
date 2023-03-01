export function calculateSpeed(startTime, endTime, imageSize) {
    let timeDuration = (endTime - startTime) / 1000;
    let sizeInBits = imageSize * 8;
    let speedInBps = (sizeInBits / timeDuration).toFixed(2);
    let speedInKbps = (speedInBps / 1024).toFixed(2);
    let speedInMbps = (speedInKbps / 1024).toFixed(2);

    return speedInMbps;
}