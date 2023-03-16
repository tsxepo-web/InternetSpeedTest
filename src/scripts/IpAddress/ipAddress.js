
fetch("http://ip-api.com/json")
.then(res => res.json())
.then((result) =>{
    document.querySelector(".ip-address").innerHTML = "Ip Address: " + result.query;
    document.querySelector(".isp").innerHTML = "Internet Service Provider: " + result.isp;
})
.catch((error) => {
    console.log("Error: ", error);
});