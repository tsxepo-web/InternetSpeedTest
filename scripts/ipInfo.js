function showList(){
    var url = 'https://ipgeolocation.abstractapi.com/v1/?api_key=d5cac7efc1f849d8b2d4d9c9106187b8'
    fetch(url)
    .then(response => response.json())
    .then(data => createList(data))
    .catch(err => console.log(err))
}

function createList(data){
    document.getElementById('ip').innerHTML = 'IP Address: ' +  data.ip_address;
    document.getElementById('isp').innerHTML = 'Internet Service Provider: ' +  data.connection.isp_name;
    localStorage.setItem('IP Address', data.ip_address);
    localStorage.setItem('Internet Service Provider', data.connection.isp_name);
}
window.onload = () => showList();