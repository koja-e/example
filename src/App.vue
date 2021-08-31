<template>
  <div id="app">
    <!-- <a href="https://corona-lab.tech/cl/counseling/1">link</a > -->
    <a @click="onClick">click</a >
    <div id="barcode_type">---</div> <div id="barcode">---</div>
    <div id="raw_matrial">{{ raw_matrial }}</div>
    <div id="photo-area" class="viewport"></div>
  </div>
</template>

<script>
import $ from 'jquery'
import Quagga from 'quagga'

export default {
  name: 'App',
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
    this.mTest()

    /* eslint-disable no-unused-vars */
    /* eslint-disable no-undef */
    $(function () {

        startScanner();

    });

    //APIリクエストの二重送信を避けるためのフラグ
    var _requestFlg = 0;

    //取得したバーコード値
    var _oldBarcode = "00000000";

    const startScanner = () => {
      const _this = this;
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
              xhr.open("GET", 'https://corona-lab.tech/api/v1/healthy_products/barcode/' + result.codeResult.code );

              xhr.onreadystatechange = () =>{
                _requestFlg = 0;

                const from_json = JSON.parse(xhr.responseText);
                // document.getElementById("raw_matrial").innerText = from_json[0].raw_material;
                _this.raw_matrial = from_json[0].raw_material;
              }
              xhr.send();
            }
          }
        });
    }
    /* eslint-disable no-unused-vars */
    /* eslint-disable no-undef */
  },
  methods: {
    async mTest () {
      await this.$store.dispatch('signIn')
    },
    onClick: function() {
      this.raw_matrial = this.raw_matrial + '0';
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
