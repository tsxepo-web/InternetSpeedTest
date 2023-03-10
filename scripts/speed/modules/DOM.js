export function animate(totalSpeed) {
    let i = 0, speedOut;
    if (i < totalSpeed) {
    document.querySelector('.content').innerHTML = i.toFixed(2) + '<small>Mbps</small>';
    setTimeout(animate, 20);
    i += 1.02;
    } else {
    document.querySelector('.content').innerHTML = totalSpeed + '<small>Mbps</small>';
    }
}