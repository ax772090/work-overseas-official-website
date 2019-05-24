<template>
  <div id="prodetail1">
    <headers></headers>
    <nav-buy :navData='navData' id="1"></nav-buy>
    <headerImg :headerData='headerData'
               :styleType='headerData.styleType'></headerImg>
    <div class="detailPic">
      <div class="icon"
           v-for="(item,index) in iconList"
           :key="index">
        <img :src="item.iconImg"
             alt="裂图"
             class="iconImg">
        <p class="iconText"
           v-for="(item,index) in item.icontext"
           :key="index">{{ item }}</p>
      </div>
    </div>
    <div class="imgPower">
      <img :src="imgPowerData.img"
           alt="裂图">
      <div class="leftBox">
        <p class="textTop">{{ imgPowerData.textTop[0].top }}</p>
        <p class="textTop">{{ imgPowerData.textTop[0].botom }}</p>
        <p class="textBtm">{{ imgPowerData.textBtm[0] }}<span>{{imgPowerData.textBtmUnit[0]}}</span></p>
      </div>
      <div class="rightBox">
        <p class="textTop">{{ imgPowerData.textTop[1].top }}</p>
        <p class="textTop">{{ imgPowerData.textTop[1].botom }}</p>
        <p class="textBtm">{{ imgPowerData.textBtm[1] }}<span>{{imgPowerData.textBtmUnit[1]}}</span></p>
      </div>
    </div>
    <headerImg :headerData='headerDataCenter'
               :styleType='headerDataCenter.styleType'></headerImg>
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
  name: 'prodetail1',
  components: {
    Headers,
    navBuy,
    headerImg,
    prodBlock
  },
  data () {
    return {
      navData: {
        navdec: 'Enhanced Audio Effect',
        navFeatures: 'Features',
        navSpecifications: 'Specifications',
        externalLink: 'https://www.aboxtek.com/products/abox-sound-bar'
      },
      headerData: [{
        img: require('@/images/prodetail1/sound-banner@1x.jpg'),
        textTop: ['ENHANCED', 'AUDIO', 'EFFECT'],
        textBottom: ['Fill any room, large or small,', 'with epic audio.'],
        styleType: 'imgLeft',
        price: '98.99',
        textTopfz: '',
        textToplh: 'textToplh22',
        textTopPosition: '',
        textButton: [{
          name: 'BUY NOW',
          routeLink: 'https://www.aboxtek.com/products/abox-sound-bar'
        }, {
          name: 'VIDEO'
        }]
      }],
      headerDataCenter: [{
        img: require('@/images/prodetail1/sound-picture2@1x.jpg'),
        textTop: ['Advanced Audio', 'Technology'],
        textBottom: ['Fill any room, large or small,', 'with epic audio.'],
        styleType: 'imgcenter',
        textTopfz: 'textTopfz60',
        textToplh: 'textToplh58',
        textTopPosition: ''
      }, {
        img: require('@/images/prodetail1/sound-picture3@1x.jpg'),
        textTop: ['Premium Outlook', ''],
        textBottom: ['Sprayed with long-lasting', 'paint that features', 'anti-scratch,', 'environment-friendly and ', 'fashion.'],
        styleType: 'imgcenter',
        textTopfz: 'textTopfz60',
        textToplh: 'textToplh58',
        textTopPosition: ''
      }, {
        img: require('@/images/prodetail1/sound-picture4@1x.jpg'),
        textTop: ['Best', 'Compatibility'],
        textBottom: ['Perfectly compatible with most', 'branded TVs on the market'],
        styleType: 'imgcenter',
        textTopfz: 'textTopfz60',
        textToplh: 'textToplh58',
        textTopPosition: ''
      },
      {
        img: require('@/images/prodetail1/sound-picture5@1x.jpg'),
        textTop: ['Powerful', 'Bluetooth Signal'],
        textBottom: ['Bluetooth wireless reach a range of about 10 meters,', ' or around 30 feet event  through', 'wall and obstacles.'],
        styleType: 'imgcenter',
        textTopfz: 'textTopfz60',
        textToplh: 'textToplh58',
        textTopColor: 'textTopColor333',
        textTopPosition: 'textTopPosition178'
      },
      {
        img: require('@/images/prodetail1/sound-picture6@1x.jpg'),
        textTop: ['Multiple Inputs', ''],
        textBottom: ['Supports Bluetooth, USB, line in', 'and optical fiber input.'],
        styleType: 'imgcenter',
        textTopfz: 'textTopfz60',
        textToplh: 'textToplh58',
        textTopColor: 'textTopColor333',
        textTopPosition: 'textTopPosition204'
      },
      {
        img: require('@/images/prodetail1/sound-picture7@1x.jpg'),
        textTop: ['True 2.1', 'Sound Effect'],
        textBottom: ['Wirelessly connected subwoofer will reinforce', 'bass to bring you best auditory', 'experience.'],
        styleType: 'imgcenter',
        textTopfz: 'textTopfz60',
        textToplh: 'textToplh58',
        textTopColor: 'textTopColor333',
        textTopPosition: 'textTopPosition330'
      }
      ],
      imgPowerData: {
        img: require('@/images/prodetail1/sound-picture1@1x.jpg'),
        textTop: [{ top: 'Maximum', botom: 'Power' }, { top: 'Sound Pressure', botom: 'Up to' }],
        textBtm: ['80', '90'],
        textBtmUnit: ['w', 'DB'],
        styleType: 'imgSideAlign'
      },
      iconList: [
        {
          iconImg: require('@/images/prodetail1/sound-icon1@1x.png'),
          icontext: ['High-Fidelity', '3D']
        },
        {
          iconImg: require('@/images/prodetail1/sound-icon2@1x.png'),
          icontext: ['Oversized', 'decibel']
        },
        {
          iconImg: require('@/images/prodetail1/sound-icon3@1x.png'),
          icontext: ['Different EQ', 'modes']
        },
        {
          iconImg: require('@/images/prodetail1/sound-icon4@1x.png'),
          icontext: ['Electroacoustic', 'expert']
        }
      ],
      prodList: [
        {
          prodName: 'AS03 Sound Bar',
          desc: 'Built-in Bass and DSP technology, performs perfectly in 60-200KHZ range.',
          pic: require('@/images/prodetail1/ProjectorA6-pictnre@1x.jpg'),
          btnName: 'EXPLORE'
        },
        {
          prodName: 'AS01 Sound Bar',
          desc: 'Bluetooth 4.0 and Amlogic S905W Quad Core with A53 Processor 64 Bits',
          pic: require('@/images/prodetail1/sound-picture8@1x.jpg'),
          btnName: 'EXPLORE'
        }
      ]
    }
  },
  methods: {
    handerBuy () {
      this.$router.push({ name: 'prodparameters' })
    }
  }
}
</script>
<style lang="scss" scoped>
.detailPic {
  width: 100%;
  height: 334px;
  background-color: #fff;
  padding: 0 320px;
  position: relative;
  .icon {
    width: 25%;
    float: left;
    height: 160px;
    margin-top: 87px;
    &:nth-child(1) > img {
      width: 85px;
      height: 80px;
    }
    &:nth-child(2) > img {
      width: 94px;
      height: 82px;
    }
    &:nth-child(3) > img {
      width: 91px;
      height: 94px;
    }
    &:nth-child(4) > img {
      width: 65px;
      height: 85px;
    }
    img {
      margin-bottom: 30px;
      vertical-align: top;
    }
  }
  .iconText {
    font-size: 18px;
  }
}
.imgPower {
  height: 908px;
  width: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
  }
  .leftBox,
  .rightBox {
    position: absolute;
    top: 365px;
    text-align: left;
  }
  .textBtm {
    margin-top: 18px;
    color: #ffffff;
    font-size: 150px;
    font-family: GothamThin;
    line-height: 98px;
    font-weight: 400;
    span {
      color: #909090;
      font-size: 16px;
      margin-left: -8px;
    }
  }
  .textTop {
    color: #909090;
    font-size: 18px;
    padding-left: 10px;
  }
  .leftBox {
    left: 604px;
  }
  .rightBox {
    left: 1109px;
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
