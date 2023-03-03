# Welcome to Internet Speed Test
## Architecture
![architecture](https://github.com/tsxepo-web/InternetSpeedTest/blob/3ee7a020ef7fe867da0dc6a3d8c6575981272e67/SpeedTest.drawio.svg)

### Website
on load the website's html returns the client's:
- IP Address
- Internet Service Provider
- Internet Speed in Mbps

### Local Storage
the returned client information is then saved to the browser's Local Storage.
- the information is also used when the client visits the site again.

### IP Api
abtractapi is used to extract the client's ip address and internet service provider.
See [abstractapi](https://www.abstractapi.com) for more details.