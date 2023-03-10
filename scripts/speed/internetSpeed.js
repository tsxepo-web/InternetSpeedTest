document.querySelector('button').addEventListener('click', (e) => {
  var imageLink = 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Tokyo_Sky_Tree_2012_%E2%85%A5.JPG',
    downloadSize = 82960000,
    startTime, endTime,
    downloadSrc = new Image();
    document.querySelector('.loader-content').classList.add('hide');
    document.querySelector('.loader').classList.remove('hide');
    
  startTime = new Date().getTime();
  var cacheImg = '?nn=' + startTime;
  downloadSrc.src = imageLink + cacheImg;
  console.log(downloadSrc);
  downloadSrc.onload = function () {
    endTime = new Date().getTime();
    var timeDuration = (endTime - startTime) / 1000,
    loadedBytes = downloadSize * 8,
    totalSpeed = ((loadedBytes / timeDuration) / 1024 / 1024).toFixed(2);

    let i = 0, speedOut;
    const animate = () => {
        if ( i < totalSpeed){
            document.querySelector('.content').innerHTML = i.toFixed(2) + '<small>Mbps</small>';
            setTimeout(animate, 20);
            i+=1.02;
        }else {
            document.querySelector('.content').innerHTML = totalSpeed + '<small>Mbps</small>';
        }
    }
    animate();

    document.querySelector('.content').innerHTML = totalSpeed + '<small>Mbps</small>';
    document.querySelector('.loader-content').classList.remove('hide');
    document.querySelector('.loader-content').classList.add('result');
    document.querySelector('.loader').classList.add('hide');
    document.querySelector('.content').classList.remove('hide');
    e.target.innerText = 'CHECK AGAIN'
  }
})