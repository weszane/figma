import fs, { read } from 'node:fs';
import path from 'node:path'
const u = e => 9777 === e ? "vendor-01a47a428e226879.min.js.br" : 3018 === e ? "vendor-4ee1f8b07e3167c7.min.js.br" : 5673 === e ? "vendor-1efe7fb48638985a.min.js.br" : 2520 === e ? "vendor-2f15b3ea4f34bb17.min.js.br" : 5296 === e ? "vendor-dcbe098377da75fd.min.js.br" : 8029 === e ? "vendor-6c6c2870ce07e06a.min.js.br" : 4694 === e ? "vendor-848e7ffd8f1079e5.min.js.br" : 764 === e ? "vendor-c64c5820813385d7.min.js.br" : 2457 === e ? "vendor-258e3cc434b12827.min.js.br" : 1470 === e ? "vendor-beae496753e0b610.min.js.br" : 7442 === e ? "vendor-ec82502e509a8a71.min.js.br" : 7177 === e ? "vendor-e73435aab1edd3e5.min.js.br" : 8243 === e ? "vendor-0b5f76a1eff6a185.min.js.br" : 991 === e ? "vendor-73aecbb572e14d1d.min.js.br" : 2866 === e ? "vendor-5ef4820463ee8cf8.min.js.br" : 9702 === e ? "vendor-b42d002b7ed7ab35.min.js.br" : 4657 === e ? "vendor-db79bd7e9ff9026c.min.js.br" : 8290 === e ? "vendor-ee1476b776de1215.min.js.br" : 4128 === e ? "vendor-e654dd5358007298.min.js.br" : 8537 === e ? "vendor-c0b67f332f68a3fb.min.js.br" : 6513 === e ? "vendor-72af5cafb2dcdf25.min.js.br" : 1274 === e ? "vendor-6cda632293b9cfbd.min.js.br" : 9757 === e ? "vendor-ab704ac2d646b0e4.min.js.br" : 4567 === e ? "vendor-2771bf956f46ecb5.min.js.br" : 3555 === e ? "svg-1616079be4c4cc91.min.js.br" : 4096 === e ? "svg-79e18bf377c0d109.min.js.br" : 7006 === e ? "svg-f9fbe75e04f7e829.min.js.br" : 6425 === e ? "svg-9950ea0d2064c7e5.min.js.br" : 8612 === e ? "svg-329ff1a667c06865.min.js.br" : 1512 === e ? "svg-7e19e13dc5ea0348.min.js.br" : 8019 === e ? "svg-b456c7017b1f85c8.min.js.br" : 459 === e ? "svg-9d31215b75e35ff1.min.js.br" : 2828 === e ? "svg-8e4de64115d6e222.min.js.br" : 6309 === e ? "svg-e0c7c70745f9efca.min.js.br" : 650 === e ? "formatter-prettier-d912262d546f29d2.min.js.br" : "" + (({
  12: "profiler",
  895: "f2246930",
  1081: "ead0c34b",
  1102: "b2835def",
  1293: "1e926454",
  1607: "7a72fc59",
  2677: "c5e2cae0",
  2896: "940032c6",
  3424: "2b17fec9",
  3988: "451de8f0",
  5026: "vscode-cc-lib",
  5215: "quill_composer",
  5384: "873233fc",
  6048: "469e6e40",
  6517: "048e062c",
  6651: "af221b13",
  6988: "c92dbc7e",
  7866: "6db9f521",
  7872: "a88a4c5a",
  7981: "1a115cee",
  8410: "draftjs_composer",
  8717: "0c62c2fd",
  9993: "181e8476"
})[e] || e) + "-" + ({
  12: "4956ca5f4aca6ca0",
  37: "9346031f5c11cf56",
  441: "d14bf0f6f9af476b",
  573: "476c41de6a1e841e",
  642: "026d5b3f99eccca6",
  895: "d1991d89484645f5",
  897: "e75a2edd457ef899",
  951: "f9f4cd263ad40650",
  1081: "a57e7d3e3fc6aeaf",
  1102: "6b4f3b130c2d4004",
  1200: "6bdaf3b1a08d1cfd",
  1250: "508c12cec01a4481",
  1291: "ee044a7ea7261bfa",
  1293: "bbf5c1d19d643819",
  1328: "eaa00f41d0b9dc1d",
  1528: "e8f4fd8d06b44909",
  1556: "f381b8b5a31037a5",
  1607: "a5b52d7db21b72d5",
  1881: "47777575c06f5e87",
  1971: "8d0ef4cbc3070eca",
  2598: "dd4b7b96d1ddbfbd",
  2677: "f3ee39d00aabfc9a",
  2896: "fa52eea2b5cfa98b",
  2995: "162584832186ccb8",
  3131: "3c557b2100a87605",
  3271: "9c44905ec043b20d",
  3383: "b603463561e8bebd",
  3424: "9591d77fe6607428",
  3592: "4b425388ec9da6b1",
  3674: "c42fee7da0257dfd",
  3682: "2155584b762eec85",
  3988: "3e57e55f8d5c4ed7",
  4452: "5c94268d0ead3f5c",
  5026: "3f88ece4b347ebbf",
  5052: "18ac13872d8ccb17",
  5215: "cab4f2d0615090f4",
  5384: "7eb39fd9e08e50d9",
  5430: "6781e3e37f1a2708",
  5609: "5f06478872530980",
  5885: "c6f1864ecc72a93f",
  5973: "6ffec8b8d9c16cb1",
  6020: "8e0c0ef209c1c173",
  6048: "f5f38193869f9580",
  6223: "6b5846f3a461edb1",
  6256: "720c25edd44969e4",
  6268: "47c4c90fde790500",
  6388: "9de77d2dc8f56bbc",
  6401: "906865b99537614d",
  6443: "0c36b07b8601443b",
  6517: "45e651527378f1eb",
  6651: "1294473048b447db",
  6658: "4e02d9372def5d94",
  6988: "483d17376fa48fb4",
  7021: "88b0ff179720fac3",
  7035: "cd5c601626e6f63b",
  7037: "57258556718ebb63",
  7099: "4c3a71dd0671ac1c",
  7222: "86fde6e3c54a70ed",
  7492: "502c841f98df4c4c",
  7765: "0eac452d3db08564",
  7866: "e9b68f19f8b3677d",
  7872: "afbe516f736fcf7a",
  7981: "5e55be7cc96c0b95",
  8061: "363170e3d19c35ae",
  8316: "aa4140c9f62fa8f7",
  8410: "d4c6a26e3c693566",
  8618: "f8f7e38667e992c4",
  8717: "8953862cea611b5e",
  8826: "565f1c4502deb443",
  8896: "6f6734d20d12366e",
  9103: "33a6cbf2397ab9ff",
  9197: "d56af770f14e5840",
  9268: "22078ac5f59cffca",
  9420: "377eca9ca65e3d94",
  9731: "fedbc508268043e0",
  9756: "4d24b0dbc22c0ad5",
  9864: "ea58be5808211a8c",
  9993: "c8505e064377cfdf"
})[e] + ".min.js.br"

    const link = 'https://www.figma.com'
    const p1 = '/webpack-artifacts/assets/'

    function downloadFile() {
        for (let i = 0; i < 10000; i++) {
            let url = u(i);

            
            if (url.indexOf('undefined') > -1) {

            } else {

                url = `${link}${p1}${url}`
                
                const b = path.basename(url)

                const name = b.replace('.min.js.br', '.js')
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/javascript'
                    }
                })
                    .then(response => response.text()).then(buffer => {
                       
                        fs.writeFileSync(`ou/${name}`, buffer, 'utf8');
                       
                    })
                    .catch(err => {
                        console.error(`Error downloading file ${name}:`, err);
                    });
            }

        }
    }

    downloadFile()
