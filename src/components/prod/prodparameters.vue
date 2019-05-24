<template>
  <div class="prodparameters">
    <headers></headers>
    <nav-buy :navData='navData'
             id="1"></nav-buy>
    <headerImg :headerData='headerData'
               :styleType='headerData.styleType'></headerImg>
    <div class="prodparameters-conten">
      <div class="title">{{parametersData.title}}</div>
      <div class="dimensions">
        <div class="dimensions-left">
          <div>
            <span>
              Dimensions
            </span>
          </div>
        </div>
        <div class="dimensions-right">
          <img :src="parametersData.dimensions.img"
               alt="图片不见啦">
          <div v-for="(item, index) in parametersData.dimensions.keyValue"
               :key="index"
               class="key-value">
            <span class="data-key">{{item.key}}：</span>
            <span class="data-value">{{item.value}}</span>
          </div>
        </div>
      </div>
      <!-- 参数2 -->
      <div class="specification">
        <div class="specification-left">
          <div>
            <span>
              Specifications
            </span>
          </div>
        </div>
        <div class="specification-right">
          <div v-for="(item, index) in parametersData.specification"
               :key="index"
               class="key-value">
            <span class="data-key">{{item.key}}：</span>
            <span class="data-value">{{item.value}}</span>
          </div>
        </div>
      </div>
      <!-- 参数3 -->
      <div class="packageincludes">
        <div class="packageincludes-left">
          <div>
            <span>
              {{ parametersData.desc }}
            </span>
          </div>
        </div>
        <div class="packageincludes-right">
          <img :src="parametersData.packageIncludes.img"
               alt="图片不见啦">
          <!-- <div v-for="(item, index) in parametersData.packageIncludes"
             :key="index"
             class="key-value">
          <span class="data-key">{{item.key}}</span>
          <span class="data-value">{{item.value}}</span>
        </div> -->
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Headers from '@/components/Headers'
import navBuy from '@/components/nav-buy'
import headerImg from '@/components/Headers/headerImg'
export default {
  components: {
    Headers,
    navBuy,
    headerImg
  },
  data () {
    return {
      navData: {
        navdec: '',
        navFeatures: 'Features',
        navSpecifications: 'Specifications',
        externalLink: '',
        featuresLink: ''
      },
      headerData: [{
      }],
      soundheaderData: [{
        img: require('@/images/prodetail1/sound-banner@1x.jpg'),
        textTop: ['ENHANCED', 'AUDIO', 'EFFECT'],
        textBottom: ['Fill any room, large or small,', 'with epic audio.'],
        styleType: 'imgLeft',
        price: '98.99',
        textTopfz: '',
        textToplh: 'textToplh22',
        textTopPosition: '',
        textButton: [{
          name: 'BUY NOW'
        }, {
          name: 'VIDEO'
        }]
      }],
      waterheaderData: [{
        img: require('@/images/prodetail2/banner@1x.jpg'),
        textTop: ['PORTABLE', 'WATER', 'FLOSSER'],
        textBottom: ['7 Tips Included and Dual', 'Waterproof Design'],
        styleType: 'imgcenter',
        textTopfz: 'textTopfz80',
        textToplh: 'textToplh70',
        textTopPosition: 'textTopPosition117',
        textTopColor: 'textTopColor333',
        textButton: [{
          name: 'BUY NOW'
        }
          // , {
          //   name: 'VIDEO'
          // }
        ]
      }],
      jumpheaderData: [{
        img: require('@/images/prodetail3/banner@1x.jpg'),
        textTop: ['JUMP', 'STARTER'],
        textBottom: ['800A Peak Current &', 'Powerful Battery'],
        styleType: 'imgLeft',
        price: '36.99',
        textTopfz: '',
        textToplh: 'textToplh22',
        textTopColor: 'textTopColorfff',
        textTopPosition: 'textTopPosition113',
        textButton: [{
          name: 'BUY NOW'
        }
          // , {
          //   name: 'VIDEO'
          // }
        ]
      }],
      parametersData: {
        title: 'SPECIFICATIONS',
        dimensions: {
          img: '',
          keyValue: []
        },
        specification: [{
          key: '',
          value: ''
        }]
        // packageIncludes: {}
      },
      parametersData1: {
        title: 'TECHNICAL DETAILS',
        dimensions: {
          img: require('@/images/prodParameters/prodParametersImg-1-1@1x.png'),
          keyValue: [{
            key: 'Sound bar Dimensions',
            value: '86cm*6.2cm*6.5cm'
          }, {
            key: 'Subwoofer Dimensions',
            value: '11.5cm*24.7cm*42cm'
          }]
        },
        specification: [{
          key: 'Power Supply',
          value: 'AC 110V-240V 50Hz/60Hz'
        }, {
          key: 'Sound bar',
          value: '860mm*62mm*65mm'
        }, {
          key: 'Subwoofer',
          value: '115mm*247mm*420mm'
        }, {
          key: 'Power output',
          value: '15W*4+60W=120W R.M.S.'
        }, {
          key: 'Driver Unit',
          value: '2.25"*4 SB + 5.25 inch SW'
        }, {
          key: 'Input impedance',
          value: ' 8 Ω *2+4 Ω'
        }, {
          key: 'Frequency Response',
          value: '55Hz-20KHz'
        }, {
          key: 'Distortion',
          value: '</=1%(1K/1W)'
        }, {
          key: 'Input Sensitivity',
          value: 'SB:  800mV ± 50mV; SW: 400mV ± 50mV'
        }, {
          key: 'Bluetooth Version',
          value: 'Version: 4.2+EDR'
        }],
        packageIncludes: {
          img: require('@/images/prodParameters/prodParametersImg-1-2@1x.png')
        },
        desc: 'What’s in the Box '
      },
      parametersData2: {
        title: 'TECHNICAL DETAILS',
        dimensions: {
          img: require('@/images/prodParameters/watertooth-argument@1x.jpg'),
          keyValue: [{
            key: 'Size',
            value: '2.8 x 3.1 x 11.3 inches'
          }, {
            key: 'Net Weight',
            value: '1.1 pounds'
          }]
        },
        specification: [{
          key: 'Water Pressure',
          value: '30 to 100 PSI with 1400-1800 pulses per minute'
        }, {
          key: 'Tank Capacity',
          value: '200ml'
        }, {
          key: 'Battery Capacity',
          value: '1400mAh'
        }, {
          key: 'Voltage',
          value: '100-240V, 50 / 60Hz'
        }, {
          key: 'Charging Time',
          value: '4 hours'
        }, {
          key: 'Power Adapter',
          value: '5V, 1A'
        }, {
          key: 'Modes',
          value: 'Standard, Soft, Massage'
        }, {
          key: 'IP Rating',
          value: 'IPX 7'
        }, {
          key: 'Noise Standard',
          value: 'less than 72 db'
        }],
        packageIncludes: {
          img: require('@/images/prodParameters/watertooth-picture@1x.jpg')
        },
        desc: 'Package Includes'
      },
      parametersData3: {
        title: 'TECHNICAL DETAILS',
        dimensions: {
          img: require('@/images/prodParameters/A18-argument@1x.jpg'),
          keyValue: [{
            key: 'Dimensions',
            value: '5.8x3.6x1.3 in/14.5x9.0x3.5cm'
          }, {
            key: 'Net Weight',
            value: '13.0 oz/370g'
          }]
        },
        specification: [{
          key: 'Peak Current',
          value: '800A'
        }, {
          key: 'USB Port Output',
          value: '5V/2.1A,QC3.0'
        }, {
          key: 'Output',
          value: '12V/10A for other car electronics'
        }, {
          key: 'LED Flashlight',
          value: 'lighting, strobe and SOS modes'
        }, {
          key: 'Production Dimensions',
          value: '14.5*9.0*3.5cm'
        }, {
          key: 'Pickup Truck',
          value: '6.0L of gasoline & 5.0L of diesel'
        }, {
          key: 'Motorcycle',
          value: 'all the 12V motorcycles'
        }, {
          key: 'Boat',
          value: 'all the 12V boats'
        }, {
          key: 'Diesel Engine',
          value: '5.0L'
        }, {
          key: 'Gasoline Engine',
          value: '≤6.0L'
        }],
        packageIncludes: {
          img: require('@/images/prodParameters/A18-picture@1x.jpg')
        },
        desc: 'What’s in the Box'
      }
    }
  },
  created () {
    // 获取路径上的id
    let id = this.$route.params.id
    if (id === '1') {
      this.parametersData = this.parametersData1
      this.headerData = this.soundheaderData
      this.navData.navdec = 'Enhanced Audio Effect'
      this.navData.externalLink = 'https://www.aboxtek.com/products/abox-sound-bar'
      this.navData.featuresLink = 'prodetail1'
    }
    if (id === '2') {
      this.parametersData = this.parametersData2
      this.headerData = this.waterheaderData
      this.navData.navdec = 'Water Flosser'
      this.navData.externalLink = 'https://www.aboxtek.com/products/travel-electric-toothbrush'
      this.navData.featuresLink = 'prodetail2'
    }
    if (id === '3') {
      this.parametersData = this.parametersData3
      this.headerData = this.jumpheaderData
      this.navData.navdec = 'Jump Starter A18'
      this.navData.externalLink = 'https://www.trekpow.com/products/trekpow-jump-starter-a18'
      this.navData.featuresLink = 'prodetail3'
    }
  }
}
</script>

<style lang="scss" scoped>
$leftWidth: 300px;
$rightWidth: 800px;
$leftpadding: 70px;
$fontSize1: 24px;
$fontSize2: 16px;

// 三块参数,最外层div
%prodparameters-conten-div {
  // padding: $leftpadding 0;
  @include relative;
  font-size: $fontSize2;
}

// 三块参数下的left
%prodparameters-div-left {
  width: $leftWidth;
  height: 100%;
  margin-right: 100px;
  position: absolute;
  top: 0;
  left: 0;
  font-size: $fontSize1;
  border-bottom: 1px solid #dedede;
}
%left-transformed {
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(0%, -50%);
}
// 三块参数下的right
%prodparameters-div-right {
  width: $rightWidth;
  height: 100%;
  float: right;
  border-bottom: 1px solid #dedede;
  padding: $leftpadding 0;
}

// style => start
.prodparameters {
  background-color: #fff;
  font-size: 99px;
  > .prodparameters-conten {
    width: $conterWidth;
    margin: 0 auto;
    text-align: left;
    > .title {
      padding: 130px 0 60px 0;
      text-align: center;
      font-size: 36px;
      font-weight: 600;
    }
    // 参数1
    > .dimensions {
      @extend %prodparameters-conten-div;
      > .dimensions-left {
        @extend %prodparameters-div-left;
        > div {
          height: 100%;
          position: relative;
          > span {
            @extend %left-transformed;
          }
        }
      }
      > .dimensions-right {
        @extend %prodparameters-div-right;
        > img {
          max-width: 600px;
          max-height: 500px;
        }
        > .key-value {
          padding: 15px 0;
          > .data-key {
            display: inline-block;
            width: 300px;
          }
          > .data-value {
          }
        }
      }
    }
    // 参数2
    .specification {
      @extend %prodparameters-conten-div;
      > .specification-left {
        @extend %prodparameters-div-left;
        > div {
          height: 100%;
          position: relative;
          > span {
            @extend %left-transformed;
          }
        }
      }
      > .specification-right {
        @extend %prodparameters-div-right;
        > .key-value {
          padding: 15px 0;
          > .data-key {
            display: inline-block;
            width: 300px;
          }
          > .data-value {
          }
        }
      }
    }
    // 参数3
    .packageincludes {
      @extend %prodparameters-conten-div;
      > .packageincludes-left {
        @extend %prodparameters-div-left;
        border-bottom: 0px;
        > div {
          height: 100%;
          position: relative;
          > span {
            @extend %left-transformed;
          }
        }
      }
      > .packageincludes-right {
        @extend %prodparameters-div-right;
        border-bottom: 0px;
        > img {
          max-width: 750px;
          max-height: 500px;
        }
        // > .key-value {
        //   padding: 15px 0;
        //   > .data-key {
        //     display: inline-block;
        //     width: 300px;
        //   }
        //   > .data-value {
        //   }
        // }
      }
    }
  }
}
</style>
