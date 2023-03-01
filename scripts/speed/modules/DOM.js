export function toHtml(speed) {
    var mbOutput = document.getElementById('mbps');
    mbOutput.innerHTML += `${speed} Mbps`;
}