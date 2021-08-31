(function(){
    console.log('bookmark starting');
    let imgs = document.getElementsByTagName('img');
    for (let i = 0; i < imgs.length; i++) {
        console.log('tai anh');
        toDataURL(imgs[i].src, function(dataUrl) {
            download(dataUrl, i);
        })  
    }
})();

function download(base64, i) {    
    console.log(base64);
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.setAttribute("href", base64);
    link.setAttribute("download", 'image_' + i);
    link.click();
}

function toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}