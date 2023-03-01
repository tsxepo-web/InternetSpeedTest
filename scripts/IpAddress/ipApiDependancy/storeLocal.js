export function storage(data){
    localStorage.setItem('IP Address', data.ip_address);
    localStorage.setItem('Internet Service Provider', data.connection.isp_name);
}