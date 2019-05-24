<template>
  <div id="prodetail3">
    <headers></headers>
    <nav-buy :navData='navData' id="3"></nav-buy>
    <headerImg :headerData='headerData'
               :styleType='headerData.styleType'></headerImg>
    <div class="detailPic">
      <div class="icon"
           v-for="(item,index) in iconList"
           :key="index">
        <img :src="item.iconImg"
             alt="裂图"
             class="iconImg">

      </div>
    </div>
    <headerImg :headerData='contentImgData'
               :styleType='contentImgData.styleType'
               :iconList='iconList'></headerImg>
    <div class="detailPic">
      <div class="icon border"
           v-for="(item,index) in iconList1"
           :key="index">
        <img :src="item.iconImg"
             alt="裂图"
             class="iconImg">

      </div>
    </div>
    <headerImg :headerData='bottomImgData'
               :styleType='bottomImgData.styleType'></headerImg>
    <div class="detailBox">
      <p class="detailBoxTitle">Related Products</p>
      <prod-block :prodList='prodList'></prod-block>
    </div>
  </div>
</template>
<script>
import Headers from '@/components/Headers'
import navBuy from '@/components/nav-buy'
import headerImg from '@/components/Headers/headerImg'
import prodBlock from '@/components/prodListBlock'
export default {
  name: 'prodetail3',
  components: {
    Headers,
    navBuy,
    headerImg,
    prodBlock
  },
  data () {
    return {
      navData: {
        navdec: 'Jump Starter A18',
        navFeatures: 'Features',
        navSpecifications: 'Specifications',
        externalLink: 'https://www.trekpow.com/products/trekpow-jump-starter-a18'
      },
      headerData: [{
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
          name: 'BUY NOW',
          routeLink: 'https://www.trekpow.com/products/trekpow-jump-starter-a18'
        }
        // , {
        //   name: 'VIDEO'
        // }
        ]
      }],
      iconList: [
        {
          iconImg: require('@/images/prodetail3/pic2@1x.png')
        },
        {
          iconImg: require('@/images/prodetail3/pic4@1x.png')
        },
        {
          iconImg: require('@/images/prodetail3/pic6@1x.png')
        },
        {
          iconImg: require('@/images/prodetail3/pic8@1x.png')
        }, {
          iconImg: require('@/images/prodetail3/pic10@1x.png')
        }
      ],
      iconList1: [
        {
          iconImg: require('@/images/prodetail3/pic1@1x.png')
        },
        {
          iconImg: require('@/images/prodetail3/pic3@1x.png')
        },
        {
          iconImg: require('@/images/prodetail3/pic5@1x.png')
        },
        {
          iconImg: require('@/images/prodetail3/pic7@1x.png')
        }, {
          iconImg: require('@/images/prodetail3/pic9@1x.png')
        }
      ],
      contentImgData: [{
        img: require('@/images/prodetail3/picture1@1x.jpg'),
        textTop: ['BE  YOUR TREK PAL'],
        styleType: 'imgcenter',
        textTopfz: '',
        textToplh: 'textToplh22',
        textTopColor: 'textTopColorE65935',
        textTopPosition: ''
      }, {
        img: require('@/images/prodetail3/picture2@1x.jpg'),
        textTop: ['800A Peak Current'],
        textBottom: ['Up to 6.0L gas 5.0L diesel'],
        styleType: 'imgcenter',
        textTopfz: '',
        textToplh: 'textToplh22',
        textTopColor: 'textTopColorfff',
        textTopPosition: 'textTopPosition265'
      }, {
        img: require('@/images/prodetail3/picture3@1x.jpg'),
        textTop: ['Ultra-safe Intelligent', 'Jamper Clamps'],
        textBottom: ['The LED screen will automatacilly warn you', 'falut status with beeping.'],
        styleType: 'imgcenter',
        textTopfz: 'textTopfz60',
        textToplh: 'textToplh58',
        textTopColor: 'textTopColor333',
        textTopPosition: 'textTopPosition208'
      }, {
        img: require('@/images/prodetail3/picture4@1x.jpg'),
        textTop: ['Eight Advanced', 'Protection'],
        textBottom: ['To ensure the safe use and prevent', 'from possible damages.'],
        styleType: 'imgLeft',
        textTopfz: 'textTopfz60',
        textToplh: 'textToplh58',
        textTopColor: 'textTopColorfff',
        textTopPosition: 'textTopPosition250',
        iconList: [{
          icon: require('@/images/prodetail3/icon1@1x.png'),
          icontext: ['reverse charge', 'protection']
        },
        {
          icon: require('@/images/prodetail3/icon2@1x.png'),
          icontext: ['over current', 'protection']
        }, {
          icon: require('@/images/prodetail3/icon3@1x.png'),
          icontext: ['short circuit', 'protection']
        }, {
          icon: require('@/images/prodetail3/icon4@1x.png'),
          icontext: ['over discharge', 'protection']
        }, {
          icon: require('@/images/prodetail3/icon5@1x.png'),
          icontext: ['over temperature', 'protection']
        }, {
          icon: require('@/images/prodetail3/icon6@1x.png'),
          icontext: ['reverse connection', 'protection']
        }, {
          icon: require('@/images/prodetail3/icon7@1x.png'),
          icontext: ['over charge', 'protection']
        }, {
          icon: require('@/images/prodetail3/icon8@1x.png'),
          icontext: ['reverse polarity', 'protection']
        }]
      }, {
        img: require('@/images/prodetail3/picture5@1x.jpg'),
        textTop: ['Faster Charging', 'Speed'],
        textBottom: ['Type-C Output and USB 3.0 Port'],
        styleType: 'imgRight',
        textTopfz: 'textTopfz60',
        textToplh: 'textToplh58',
        textTopColor: 'textTopColorfff',
        textTopPosition: 'textTopPosition250'
      }],
      bottomImgData: [
        {
          img: require('@/images/prodetail3/picture6@1x.jpg'),
          textTop: ['Emergency', 'LED Flashlight'],
          textBottom: ['3 Modes Flashlight'],
          styleType: 'imgLeft',
          textTopfz: 'textTopfz60',
          textToplh: 'textToplh64',
          textTopColor: 'textTopColorfff',
          textTopPosition: 'textTopPosition283'
        }, {
          img: require('@/images/prodetail3/picture7@1x.jpg'),
          textTop: ['A Great Driving', 'Company for All Seasons'],
          textBottom: ['Never Get Stranded While', 'Driving'],
          styleType: 'imgcenter',
          textTopfz: 'textTopfz60',
          textToplh: 'textToplh64',
          textTopColor: 'textTopColorfff',
          textTopPosition: 'textTopPosition310'
        }
      ],
      prodList: [
        {
          prodName: 'Jump Starter G39',
          desc: '1200 Amps of Peak Current with Fast Charging Function',
          pic: require('@/images/prodetail3/G39-picture@1x.jpg'),
          btnName: 'EXPLORE'
        },
        {
          prodName: 'Jump Starter G22',
          desc: '1500 Amps of Peak Current with Fast Charging Function',
          pic: require('@/images/prodetail3/G22-picture@1x.jpg'),
          btnName: 'EXPLORE'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.detailPic {
  width: 100%;
  height: 273px;
  background-color: #fff;
  padding: 0 327px;
  position: relative;
  .icon {
    width: 20%;
    float: left;
    text-align: center;
    height: 87px;
    margin-top: 93px;
    color: #383838;
    img {
      height: 100%;
      vertical-align: top;
    }
  }
  .border {
    border-right: 1px solid #141414;
    &:last-child {
      border: none;
    }
  }
  .iconText {
    font-size: 18px;
  }
}
.detailBox {
  background-color: #efefef;
  padding-top: 125px;
  .detailBoxTitle {
    color: #333333;
    font-size: 60px;
    line-height: 58px;
    margin-bottom: 103px;
  }
}
</style>
