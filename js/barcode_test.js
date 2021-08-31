
// $(function () {

    startScanner();

// });

//APIリクエストの二重送信を避けるためのフラグ
var _requestFlg = 0;

//取得したバーコード値
var _oldBarcode = "00000000";

const startScanner = () => {

  Quagga.init({
        inputStream: {
            name: "Live",
            type: "LiveStream",
            target: document.querySelector('#photo-area'),
            constraints: {
                decodeBarCodeRate: 3,
                successTimeout: 500,
                codeRepetition: true,
                tryVertical: true,
                frameRate: 15,
                width: 640,
                height: 480,
                facingMode: "environment"
            },
        },
        decoder: {
            readers: [
                "ean_reader"
            ]
        },

    }, function (err) {
        if (err) {
            console.log(err);
            return
        }

        console.log("Initialization finished. Ready to start");
        Quagga.start();

        // Set flag to is running
        _scannerIsRunning = true;
    });

    Quagga.onProcessed(function (result) {
        var drawingCtx = Quagga.canvas.ctx.overlay,
            drawingCanvas = Quagga.canvas.dom.overlay;
    });

    //バーコード読み取り後に呼ばれる
    Quagga.onDetected(function (result) {
      console.log(result.codeResult.code);

      document.getElementById("barcode_type").innerText = ( result.codeResult.format );
      document.getElementById("barcode").innerText = ( result.codeResult.code );

      if( _oldBarcode != result.codeResult.code )
      {
        _oldBarcode = result.codeResult.code;

        if( _requestFlg == 0 )
        {
          _requestFlg = 1;

          //商品情報取得APIを実行
          const xhr = new XMLHttpRequest();
          xhr.open("GET", 'https://dev.lahmu-cdn-web.food-score.tech/api/v1/healthy_products/barcode/' + result.codeResult.code );

          xhr.onreadystatechange = () =>{
            _requestFlg = 0;

            const from_json = JSON.parse(xhr.responseText);
            document.getElementById("raw_matrial").innerText = from_json[0].name + ":" + from_json[0].raw_material;
          }
          xhr.send();
        }
      }
    });
}
