export function toHtml(data){
    document.getElementById('ip').innerHTML = 'IP Address: ' +  data.ip_address;
    document.getElementById('isp').innerHTML = 'Internet Service Provider: ' +  data.connection.isp_name;
}