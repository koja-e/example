<template>
  <div>
    0
    <a @click="onClick">click</a >
      <video id='video' autoplay muted playsinline></video>
      <button @click="onShot" style="width:20vw;height:20vw;">撮影</button>
      <canvas id="picture"></canvas><br>
      <div>(原材料名表示){{ raw_matrial }}</div><br>
  </div>
</template>

<script>
export default {
  name: 'barcode',
  data () {
    return {
      raw_matrial: ''
    }
  },
  watch: {
    raw_matrial: function (newV) {
      if (newV === '') return

      let check = window.confirm('取得した原材料：　' + newV + '\n\n撮影を終了する');
      if (check) {
        window.location.href = 'https://corona-lab.tech/cl/counseling/1'
      } else{
        this.raw_matrial = ''
      }
    }
  },
  mounted () {
    /* eslint-disable no-unused-vars */
    /* eslint-disable no-mixed-spaces-and-tabs */
    /* eslint-disable no-useless-escape */
    async function setupCamera(videoId)
    {
      //var constraints = { audio: false, video: { facingMode: "environment" } };
      var constraints = { audio: false, video: { facingMode: "environment" , deviceId: videoId } };

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

      const deviceInfos = await navigator.mediaDevices.enumerateDevices();
      var videoId = "";

    	deviceInfos.forEach(deviceInfo=>{
    		if( deviceInfo.kind == 'videoinput' )
    		{
    			videoId = deviceInfo.deviceId;
    		}
    	});

      /*
      const deviceInfos = await navigator.mediaDevices.enumerateDevices();

      var targetDeviceId = "";
      var videoId = "";

    	deviceInfos.forEach(deviceInfo=>{
    		console.log(deviceInfo.kind, deviceInfo.label, deviceInfo.deviceId);
        var text = deviceInfo.kind + ":" + deviceInfo.label + ":" + deviceInfo.deviceId;
        targetDeviceId += text ;
        targetDeviceId += "," ;
        if ( deviceInfo.label.match(/back/)) {
          //strにhogeを含む場合の処理
          videoId = deviceInfo.deviceId;
        }
    	})
      //var div_raw_matrial = document.getElementById("raw_matrial");
      //div_raw_matrial.innerText = targetDeviceId;
      */
      await setupCamera(videoId);

      //await setupCamera();

      const constraints = await navigator.mediaDevices.getSupportedConstraints();
    	for (const [key, value] of Object.entries(constraints)) {
        console.log(`${key}: ${value}`);
      }
      navigator.mediaDevices.ondevicechange = function(event) {
        console.log("ondevicechange", event)
      }
    }

    // window.addEventListener('load', async ()=>{
    (async() => {
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

    // });
    })();
    /* eslint-disable no-unused-vars */
    /* eslint-disable no-mixed-spaces-and-tabs */
    /* eslint-disable no-useless-escape */
  },
  methods: {
    onClick: function() {
      this.raw_matrial = this.raw_matrial + '0';
    },
    //撮影ボタン押下
    onShot: function() {
        const _this = this;
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

        // var div_raw_matrial = document.getElementById("raw_matrial");

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

            // div_raw_matrial.innerText = text4;
            _this.raw_matrial = text4;
          };
          xhr2.send( json );
        };
        xhr.send( JSON.stringify(body) );
    }
  }
}
</script>
