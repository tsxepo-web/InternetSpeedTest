export function speedDOM(speed) {
    var mbOutput = document.getElementById('mbps');
    mbOutput.innerHTML += `${speed} Mbps`;
}