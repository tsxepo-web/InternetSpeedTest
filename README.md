# Welcome to Internet Speed Test
## Architecture
![architecture](https://github.com/tsxepo-web/InternetSpeedTest/blob/3ee7a020ef7fe867da0dc6a3d8c6575981272e67/SpeedTest.drawio.svg)

### Website
On-load the website's html returns the client's:
- IP Address
- Internet Service Provider
- Internet Speed in Mbps

### Local Storage
The returned client information is then saved to the browser's Local Storage.
- the information is also used when the client visits the site again.

### IP Api
Abstractapi is used to extract the client's ip address and internet service provider.
See [abstractapi](https://www.abstractapi.com) for more details.

### Speed Server
This returns client's internet speed in Mbps.
- the speed is achieved using this formula:
- ![formula](https://github.com/tsxepo-web/InternetSpeedTest/blob/4b7edb015edd4a89b5cde809f1357f69f206b498/SpeedTestFormula.drawio.svg) 