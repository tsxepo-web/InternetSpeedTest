
export function showSpeed(speedMbps, percentage) {
    if(percentage === 100){
        document.querySelector('#pcnt').innerHTML = speedMbps + ' <br><hr>' + '<small>Mbps</small>';
    }else{
        document.querySelector('#pcnt').innerHTML = percentage.toFixed(0) + '%' + '<br><hr>' + 'l<small>oading...</small>';
    }
}