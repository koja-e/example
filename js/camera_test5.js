async function setupCamera() 
{
  var constraints = { audio: false, video: { facingMode: "environment" } };

  //const stream = await navigator.mediaDevices.getUserMedia({'audio': true, 'video': true});
  const stream = await navigator.mediaDevices.getUserMedia( constraints );
  const video = document.getElementById('video');
  video.srcObject = stream;
  
  return new Promise((resolve) => {
    video.onloadedmetadata = () => {
      video.width = video.videoWidth * 0.7;
      video.height = video.videoHeight * 0.7 ;
      resolve();
    };
  });
}

async function start(){
  await setupCamera();
  const deviceInfos = await navigator.mediaDevices.enumerateDevices();
	deviceInfos.forEach(deviceInfo=>{
		console.log(deviceInfo.kind, deviceInfo.label, deviceInfo.deviceId);
	})
	const constraints = await navigator.mediaDevices.getSupportedConstraints();
	for (const [key, value] of Object.entries(constraints)) {
    console.log(`${key}: ${value}`);
  }
  navigator.mediaDevices.ondevicechange = function(event) {
    console.log("ondevicechange", event)
  }
}

//撮影ボタン押下
function onShot()
{
    const video = document.getElementById('video');
    const canvas = document.querySelector("#picture");
    const ctx = canvas.getContext("2d");

    video.pause();  // 映像を一度停止
    setTimeout( () => {
      video.play();    // 0.5秒後にカメラ再開
    }, 500);

    // canvasに画像を貼り付ける
    var w = video.width;
    var h = video.height;
    canvas.setAttribute('width', w);
    canvas.setAttribute('height', h);
    ctx.drawImage(video, 0, 0, w, h);
  
    //画像をBase64に変換する
    var dataRaw = canvas.toDataURL("image/jpeg");  
    var dataArray = dataRaw.split( ',' );
    var base64string = dataArray[ 1 ];
  
    var div_raw_matrial = document.getElementById("raw_matrial");

    let body = {
      requests: [
        {image: {content: base64string}, features: [{type: 'TEXT_DETECTION'}]}
      ]
    };

    //---------------------------
    //CloudVisionAPI実行
    const url = 'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyD6zE1TyBncQGocEqknyy70oGUn7hmmxAY';
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = () => {

      const from_json = JSON.parse(xhr.responseText);
      const analizedText = from_json.responses[0].fullTextAnnotation.text;

      //---------------------------
      //CoronaLab 仮の健康度を算出 API実行
      const url2 = 'https://dev.lahmu-cdn-web.food-score.tech/api/v1/temporary_scores';
      let xhr2 = new XMLHttpRequest();
      xhr2.open('POST', url2, true );
      xhr2.setRequestHeader('Content-Type', 'application/json');

      let json = JSON.stringify({
        raw_material: "",
        raw_material_ocr_str: analizedText
      });      

      xhr2.onreadystatechange = () => {
        const from_json2 = JSON.parse(xhr2.responseText);
        var text1 = from_json2.tagged_raw_material_str;

        //タグを削除
        var text2 = text1.replace(/<\/span>/g, '');
        var text3 = text2.replace(/<span class=\"text-danger\">/g, '');
        var text4 = text3.replace(/<span style=\"font-weight:bold;\">/g, '');

        div_raw_matrial.innerText = text4;
      };
      xhr2.send( json );
    };
    xhr.send( JSON.stringify(body) );
}


window.addEventListener('load', async ()=>{
  if(!navigator.permissions || !navigator.permissions.query){
    console.log("this browser doesn't have permission API", navigator.userAgent)
  }
  if(!navigator.mediaDevices.getDisplayMedia){
    console.log("this browser doesn't have getDisplayMedia", navigator.userAgent)
  }
	const deviceInfos = await navigator.mediaDevices.enumerateDevices();
	deviceInfos.forEach(deviceInfo=>{
		console.log(deviceInfo.kind, deviceInfo.label, deviceInfo.deviceId);
	})
  
  start();
  
});
