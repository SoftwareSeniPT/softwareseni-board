import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class SSLogo extends Component {
  render() {
    const { width = 100, fill = '#4F4F4F' } = this.props;
    return (
      <svg width={width} viewBox="0 0 291 59" version="1.1">
        <defs></defs>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g fill={fill}>
            <path d="M11.4725,30.1227 C9.7895,27.8907 7.9795,25.7467 6.5995,23.2977 C5.9665,22.1747 5.4255,21.0097 5.5905,19.6687 C5.9265,16.9407 7.9085,15.2607 10.6795,15.2857 C11.0385,15.2887 11.5635,15.6687 11.7455,14.9467 C12.1955,13.1577 11.7235,12.5147 9.9095,12.5047 C9.5095,12.5027 9.1095,12.4967 8.7105,12.5107 C3.9915,12.6797 0.7375,16.5637 1.3945,21.2417 C1.7735,23.9367 3.0785,26.2167 4.6705,28.3437 C6.2745,30.4887 7.9395,32.5877 9.5915,34.6967 C10.8575,36.3127 11.9195,38.0507 12.5935,39.9897 C14.1475,44.4637 13.6685,48.5847 10.2235,52.0677 C7.4145,54.9077 3.8205,55.6417 0.0005,55.6797 L0.0005,58.7997 C1.5575,58.7867 3.1075,58.7907 4.6625,58.5617 C14.6605,57.0867 19.9955,48.8317 16.9825,39.4697 C15.8455,35.9367 13.6645,33.0307 11.4725,30.1227" id="Fill-1"></path>
            <path d="M123.8433,24.0715 C122.2023,24.0855 122.1383,24.1385 122.1373,25.7375 C122.1363,33.4145 122.1333,41.0925 122.1403,48.7695 C122.1423,50.0405 121.9233,51.2355 121.1323,52.2705 C119.7133,54.1285 117.4283,54.8735 115.2563,54.1895 C113.2693,53.5635 111.8913,51.5475 111.8873,49.1595 C111.8743,41.6425 111.8903,34.1245 111.8773,26.6075 C111.8733,24.0495 112.3103,24.0505 109.3733,24.0725 C107.8023,24.0845 107.7353,24.1425 107.7353,25.6835 C107.7333,32.7615 107.7353,39.8395 107.7333,46.9165 C107.7323,47.8365 107.7783,48.7625 107.6883,49.6735 C107.2863,53.7695 103.1583,55.7915 99.8423,53.5325 C98.0953,52.3435 97.4663,50.6295 97.4713,48.5735 C97.4923,41.2555 97.4873,33.9385 97.4753,26.6205 C97.4713,24.0055 97.9073,24.0525 94.8633,24.0735 C93.4093,24.0845 93.3343,24.1615 93.3333,25.6705 C93.3313,29.7485 93.3323,33.8275 93.3323,37.9065 C93.3333,41.7845 93.3363,45.6635 93.3323,49.5425 C93.3273,53.5905 95.2913,56.4635 98.9003,58.0075 C102.5813,59.5825 106.1133,59.0175 109.1223,56.2325 C109.6393,55.7545 109.8923,55.6025 110.4103,56.2015 C111.0653,56.9605 111.9163,57.5035 112.8393,57.9185 C119.1963,60.7715 126.5333,56.4725 126.4093,49.2255 C126.2803,41.6695 126.3273,34.1115 126.2833,26.5535 C126.2693,24.0915 126.7173,24.0475 123.8433,24.0715" id="Fill-3"></path>
            <path d="M227.3897,33.745 C229.9767,29.982 233.4387,28.263 237.7827,28.245 C242.3287,28.226 245.9577,30.091 248.9387,33.745 L227.3897,33.745 Z M240.0807,24.132 C228.2457,22.606 218.1807,33.74 220.9617,45.346 C222.9207,53.518 229.9027,59.002 238.3167,58.887 C244.1927,58.806 248.8137,56.229 252.3507,51.589 C252.9317,50.827 252.9667,50.247 252.1067,49.717 C251.8357,49.55 251.5897,49.342 251.3347,49.149 C249.9727,48.117 249.9697,48.117 248.9207,49.532 C245.3197,54.389 238.0697,56.259 232.5247,53.76 C226.9747,51.259 223.8797,45.052 225.0837,38.967 C225.2547,38.102 225.6027,37.916 226.4237,37.924 C230.9827,37.964 235.5417,37.943 240.1017,37.943 L240.1017,37.908 C244.5807,37.908 249.0607,37.916 253.5397,37.904 C255.1577,37.9 255.3817,37.599 254.8347,36.053 C252.3587,29.066 247.4767,25.086 240.0807,24.132 L240.0807,24.132 Z" id="Fill-5"></path>
            <path d="M183.0111,28.3147 C188.0331,27.8917 192.1081,29.6897 195.4451,33.7157 L173.9091,33.7157 C176.1981,30.4377 179.1721,28.6377 183.0111,28.3147 M172.9351,37.9227 C177.4931,37.9707 182.0511,37.9447 186.6091,37.9447 L186.6091,37.9107 C191.1271,37.9107 195.6451,37.9177 200.1631,37.9067 C201.6361,37.9037 201.8281,37.6107 201.3831,36.1797 C198.7131,27.5867 190.1961,22.5177 181.2321,24.3517 C174.5351,25.7217 169.9001,29.7607 167.8671,36.2467 C165.8391,42.7197 167.2431,48.6677 172.0231,53.6267 C179.5461,61.4317 192.4001,60.4717 198.7991,51.7027 C199.4911,50.7547 199.4221,50.1557 198.4411,49.5927 C198.2341,49.4747 198.0521,49.3127 197.8611,49.1677 C196.4881,48.1287 196.4771,48.1307 195.4431,49.5317 C191.8951,54.3427 184.6981,56.2347 179.1601,53.8127 C173.5461,51.3567 170.3841,45.1227 171.5951,38.9827 C171.7581,38.1587 172.0871,37.9137 172.9351,37.9227" id="Fill-7"></path>
            <path d="M141.4146,54.5259 C136.4896,54.5169 132.6816,50.8479 132.6876,46.1159 C132.6936,41.4059 136.5446,37.7749 141.5026,37.8059 C146.4696,37.8369 150.2636,41.4829 150.2436,46.2049 C150.2236,50.8799 146.3466,54.5349 141.4146,54.5259 M154.7146,53.7539 C154.7116,46.7569 154.7256,39.7609 154.7076,32.7639 C154.6996,29.2769 153.2846,26.5209 150.0976,24.9679 C147.1866,23.5489 144.2806,23.7529 141.6066,25.6959 C139.2186,27.4319 139.2636,27.8099 141.6376,29.4469 C142.5806,30.0969 143.2096,30.0819 144.1466,29.3479 C146.6386,27.3949 150.0886,28.9079 150.4016,32.0639 C150.5486,33.5489 150.4266,35.0619 150.4266,36.8259 C147.3206,34.1619 143.8866,33.2599 140.1246,33.6259 C136.3026,33.9969 133.2286,35.8019 130.8936,38.8249 C127.2626,43.5279 127.6916,50.1849 131.6896,54.5609 C136.2366,59.5359 144.6176,60.4779 150.4326,55.7749 C150.6396,56.3899 150.8006,57.0029 151.0496,57.5779 C151.3076,58.1709 151.6626,58.7659 152.3936,58.8069 C153.4296,58.8639 154.4736,58.8749 155.5096,58.8139 C156.2966,58.7679 156.5776,58.1139 156.0046,57.5909 C154.8396,56.5259 154.7156,55.1729 154.7146,53.7539" id="Fill-9"></path>
            <path d="M37.7205,54.7226 C30.2515,54.6776 24.2465,48.6986 24.2805,41.3396 C24.3155,33.9616 30.4425,28.0416 37.9905,28.0936 C45.4755,28.1446 51.4275,34.0976 51.3875,41.4896 C51.3465,48.9546 45.3415,54.7686 37.7205,54.7226 M38.0715,23.9486 C28.3605,23.9276 20.5315,31.6126 20.4555,41.2426 C20.3795,50.8616 28.2595,58.7636 37.9635,58.7986 C47.7235,58.8346 55.4925,51.1096 55.5115,41.3516 C55.5295,31.6576 47.8255,23.9696 38.0715,23.9486" id="Fill-11"></path>
            <path d="M275.2932,45.1071 C275.2932,41.1081 275.3252,37.1091 275.2842,33.1111 C275.2402,28.8751 273.3402,25.8221 269.9892,24.6691 C262.7902,22.1921 256.3712,27.0131 256.5922,33.9721 C256.8262,41.3631 256.6912,48.7661 256.7312,56.1631 C256.7472,59.2151 256.3872,58.7571 259.4282,58.8561 C260.6112,58.8941 260.9192,58.4641 260.9132,57.3321 C260.8712,49.7341 260.8902,42.1361 260.8922,34.5381 C260.8932,34.0591 260.8822,33.5761 260.9312,33.1001 C261.1892,30.5791 263.1652,28.6801 265.7722,28.4271 C268.0122,28.2091 270.0962,29.6101 270.8222,31.8351 C271.0982,32.6801 271.1362,33.5591 271.1362,34.4411 C271.1342,41.6391 271.1242,48.8371 271.1402,56.0351 C271.1482,59.2551 270.7292,58.7621 273.9402,58.8511 C274.9982,58.8811 275.3242,58.5051 275.3132,57.4631 C275.2662,53.3451 275.2932,49.2261 275.2932,45.1071" id="Fill-13"></path>
            <path d="M88.5713,53.3236 C86.1783,54.2866 84.5733,53.5266 83.9203,51.0526 C83.6973,50.2096 83.5403,49.3226 83.5343,48.4546 C83.4913,42.4996 83.5123,36.5446 83.4693,30.5896 C83.4633,29.7896 83.7863,29.6766 84.4593,29.6916 C86.0573,29.7276 87.6563,29.7206 89.2553,29.6966 C90.2303,29.6816 90.7593,29.0036 90.6303,27.7676 C90.5433,26.9336 90.7093,25.8136 89.2393,25.8796 C87.8033,25.9426 86.3573,25.8176 84.9253,25.9166 C83.8053,25.9946 83.4033,25.7226 83.4543,24.5106 C83.5603,21.9966 83.4913,19.4756 83.4843,16.9576 C83.4803,15.3916 83.1193,15.0606 81.4483,15.0566 C79.5923,15.0526 79.2483,15.3316 79.2423,16.8976 C79.2343,19.0166 79.2403,21.1346 79.2403,23.2526 C79.2403,25.8916 79.2403,25.8916 76.6613,25.8926 C76.5013,25.8926 76.3413,25.8906 76.1813,25.8936 C74.9793,25.9126 74.6523,26.3396 74.6543,27.8866 C74.6563,29.1596 75.0803,29.6776 76.1633,29.7006 C76.8823,29.7146 77.6063,29.7516 78.3203,29.6906 C79.0793,29.6256 79.2623,29.9246 79.2553,30.6446 C79.2213,34.0016 79.2403,37.3596 79.2403,40.7166 C79.2403,41.0766 79.2363,41.4356 79.2413,41.7956 C79.2873,45.4286 79.0743,49.0686 79.6623,52.6836 C80.4163,57.3286 83.3613,59.5036 87.7373,58.5956 C90.2063,58.0826 90.7283,57.4016 90.6583,54.7836 C90.6003,52.6266 90.4923,52.5506 88.5713,53.3236" id="Fill-15"></path>
            <path d="M71.1598,26.0022 C70.0038,26.0602 68.8418,26.0162 67.6828,26.0162 C65.4608,26.0162 65.4608,26.0162 65.5218,23.8082 C65.6148,20.4552 67.5558,19.2032 70.6438,20.5052 C72.4868,21.2822 72.6478,21.1812 72.6868,19.1552 C72.6958,18.6782 72.6708,18.1952 72.6058,17.7232 C72.5028,16.9782 72.1878,16.3892 71.4368,16.0452 C68.0808,14.5072 63.8348,16.0092 62.2118,19.2922 C61.3268,21.0812 61.2098,22.9802 61.3018,24.9042 C61.3448,25.8202 61.0358,26.0912 60.1498,26.0332 C59.0758,25.9622 57.9918,26.0342 56.9138,26.0112 C56.1758,25.9962 55.8168,26.3892 55.6658,27.0472 C55.5298,27.6432 55.6008,28.2382 55.6918,28.8332 C55.8008,29.5432 56.1748,29.8592 56.9168,29.8282 C57.9148,29.7852 58.9228,29.8922 59.9128,29.7982 C61.0158,29.6922 61.3148,30.0652 61.3088,31.1742 C61.2618,39.7682 61.2788,48.3622 61.2868,56.9562 C61.2878,58.4712 61.7278,58.8142 63.5218,58.7962 C65.0928,58.7812 65.5108,58.4052 65.5128,56.9542 C65.5178,52.6372 65.5138,48.3202 65.5148,44.0032 C65.5148,39.6062 65.5338,35.2092 65.4968,30.8122 C65.4898,30.0232 65.7078,29.7672 66.4998,29.8012 C67.8558,29.8602 69.2168,29.8182 70.5758,29.8182 C72.3668,29.8172 73.0238,28.9932 72.6418,27.2182 C72.4708,26.4232 72.0768,25.9562 71.1598,26.0022" id="Fill-17"></path>
            <path d="M208.6945,24.6269 C207.9165,23.5629 207.2175,22.4429 206.7625,21.1959 C205.5605,17.9029 207.8505,14.5679 211.3395,14.6719 C212.4365,14.7039 212.6295,14.4349 212.6475,13.4049 C212.6685,12.2499 212.4335,11.6949 211.1695,11.8739 C210.4625,11.9739 209.7315,11.8889 209.0165,11.9489 C204.5765,12.3219 201.5505,16.2399 202.2485,20.6649 C202.6855,23.4329 204.0475,25.7599 205.6975,27.9409 C207.3605,30.1399 209.0755,32.2979 210.7605,34.4799 C211.9145,35.9749 212.8205,37.6139 213.4685,39.3859 C215.8845,45.9809 212.7065,52.3929 206.0415,54.3719 C204.6575,54.7829 203.2365,54.9849 201.7895,55.0059 C201.4575,55.0109 201.0895,54.9109 200.9495,55.4359 C200.4275,57.3959 201.0005,58.1689 203.1545,58.1209 C204.4525,58.1699 205.8725,57.9039 207.2665,57.5629 C213.0555,56.1429 217.0705,52.8149 218.3265,46.7859 C219.3495,41.8729 217.8945,37.4399 215.1435,33.4169 C213.0935,30.4189 210.8395,27.5609 208.6945,24.6269" id="Fill-19"></path>
            <path d="M167.0682,25.4459 C167.1642,24.5849 166.7792,24.1679 165.9272,24.1529 C164.3432,24.1259 162.7582,24.0869 161.1742,24.0769 C159.4642,24.0649 159.3932,24.1429 159.3922,25.8039 C159.3912,31.0429 159.3922,36.2819 159.3922,41.5219 L159.3922,56.5199 C159.3922,58.8409 159.3922,58.8409 161.7562,58.8389 C163.5152,58.8369 163.5172,58.8369 163.5172,57.0229 C163.5172,48.1049 163.5152,39.1859 163.5192,30.2669 C163.5192,28.9279 163.9342,28.4719 165.2422,28.3219 C167.0632,28.1129 167.0632,28.1129 167.0632,26.2849 C167.0632,26.0049 167.0372,25.7229 167.0682,25.4459" id="Fill-21"></path>
            <path d="M282.7798,41.5185 C282.7798,36.5205 282.7878,31.5235 282.7768,26.5255 C282.7708,24.0335 283.1658,24.0565 280.3148,24.0745 C278.6748,24.0855 278.6258,24.1275 278.6268,25.7455 C278.6368,35.9005 278.6458,46.0555 278.6588,56.2105 C278.6628,59.1705 278.3978,58.7675 281.2988,58.8565 C282.4618,58.8915 282.8118,58.4985 282.8018,57.3505 C282.7518,52.0735 282.7798,46.7955 282.7798,41.5185" id="Fill-23"></path>
            <path d="M283.7211,12.5615 C283.0421,12.0775 282.3121,11.6655 281.5961,11.2375 C280.2651,10.4425 278.8521,9.7765 277.6271,8.8155 C276.6331,8.0355 275.9131,7.0755 275.7131,5.7665 C275.3911,3.6655 276.4151,2.2135 277.9151,0.9675 C278.1191,0.9695 278.3141,0.9525 278.4021,0.7275 C278.5961,0.7245 278.8001,0.7495 278.9291,0.5525 C280.0311,0.4355 281.1261,0.1865 282.2441,0.4125 C282.5931,0.4825 282.8741,0.4035 282.9601,-0.0005 L279.3601,-0.0005 L278.1601,-0.0005 C278.0531,0.3065 277.7651,0.1925 277.5561,0.2565 C274.5391,1.1805 272.1831,2.8615 271.1641,5.9895 C269.5371,10.9845 272.6971,16.1185 278.2301,17.4405 C278.6541,17.5415 279.1411,18.0445 279.6351,17.5315 C280.6291,17.9845 281.6721,17.8345 282.6691,17.6515 C283.9461,17.4175 284.8231,16.6045 285.0621,15.2935 C285.2801,14.0945 284.6451,13.2205 283.7211,12.5615" id="Fill-25"></path>
            <path d="M288.3731,5.856 C286.6691,4.164 284.5901,3.1 282.2341,2.607 C281.5411,2.462 280.8391,2.284 280.1381,2.592 C279.4521,2.639 278.9371,3.006 278.5251,3.514 C277.6131,4.638 277.7971,6.028 279.1411,6.914 C280.9991,8.139 282.9661,9.197 284.8561,10.375 C286.5181,11.411 287.4631,12.912 287.5401,14.907 C287.3701,15.801 287.2101,16.697 286.5371,17.58 C287.5661,17.204 288.1221,16.685 288.9381,15.456 C291.1611,12.109 290.9771,8.441 288.3731,5.856" id="Fill-28"></path>
          </g>
        </g>
      </svg>
    );
  }
}

SSLogo.propTypes = {
  width: PropTypes.number,
  fill: PropTypes.string,
};

export default SSLogo;
