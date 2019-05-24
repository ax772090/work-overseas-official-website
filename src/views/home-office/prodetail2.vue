<template>
  <div id="prodetail2">
    <headers></headers>
    <nav-buy :navData='navData' id="2"></nav-buy>
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
    <headerImg :headerData='headerDataLeft'
               :styleType='headerDataLeft.styleType'></headerImg>
    <div class="imgPower">
      <img :src="imgPowerData.img"
           alt="裂图">
      <div class="leftBox">
        <p class="textTop"
           v-for="(item,index) in imgPowerData.textTop"
           :key="index">{{ item }}</p>
        <div class="textLine"></div>
        <div>
          <p class="textBottom"
             v-for="(item,index) in imgPowerData.textBottom"
             :key="index">{{ item }}</p>
        </div>
      </div>
      <div class="rightBox">
        <div class="contentBox"
             v-for="(item,index) in rightmodelData"
             :key="index">
          <p class="model">{{ item.model }}</p>
          <p v-for="(item,index) in item.desc"
             :key="index"
             class="desc">{{ item }}</p>
        </div>
      </div>
    </div>
    <headerImg :headerData='headerDataLeft1'
               :styleType='headerDataLeft1.styleType'></headerImg>
    <div class="detailBox">
      <p class="detailBoxTitle">Related Products</p>
      <prod-block :prodList='prodList'></prod-block>
    </div>
  </div>
</template>
<script>
import Headers from '@/components/Headers'
import headerImg from '@/components/Headers/headerImg'
import navBuy from '@/components/nav-buy'
import prodBlock from '@/components/prodListBlock'
export default {
  name: 'prodetail2',
  components: {
    Headers,
    headerImg,
    navBuy,
    prodBlock
  },
  data () {
    return {
      navData: {
        navdec: 'Water Flosser',
        navFeatures: 'Features',
        navSpecifications: 'Specifications',
        externalLink: 'https://www.aboxtek.com/products/abox-cordless-water-flosser'
      },
      headerData: [{
        img: require('@/images/prodetail2/banner@1x.jpg'),
        textTop: ['PORTABLE', 'WATER', 'FLOSSER'],
        textBottom: ['7 Tips Included and Dual', 'Waterproof Design'],
        styleType: 'imgcenter',
        textTopfz: 'textTopfz80',
        textToplh: 'textToplh70',
        textTopPosition: 'textTopPosition117',
        textTopColor: 'textTopColor333',
        textButton: [{
          name: 'BUY NOW',
          routeLink: 'https://www.aboxtek.com/products/abox-cordless-water-flosser'
        }
        // , {
        //   name: 'VIDEO'
        // }
        ]
      }],
      iconList: [
        {
          iconImg: require('@/images/prodetail2/icon-1@1x.png'),
          icontext: ['IPX7', 'waterproof']
        },
        {
          iconImg: require('@/images/prodetail2/icon-2@1x.png'),
          icontext: ['200ML', 'Reservoir']
        },
        {
          iconImg: require('@/images/prodetail2/icon-3@1x.png'),
          icontext: ['USB Rechargable']
        },
        {
          iconImg: require('@/images/prodetail2/icon-4@1x.png'),
          icontext: ['Deep cleaning']
        }
      ],
      headerDataLeft: [{
        img: require('@/images/prodetail2/picture-2@1x.jpg'),
        textTop: ['Powerful Battery', '& High Efficiency'],
        textBottom: ['One charge for 7-10 days of use.', 'Specifically designed for', 'periodontitis.'],
        styleType: 'imgLeft',
        day: '7-10',
        textTopfz: 'textTopfz60',
        textToplh: 'textToplh58',
        textTopColor: 'textTopColorfff',
        textTopPosition: 'textTopPosition230',
        textButton: []
      }, {
        img: require('@/images/prodetail2/picture-3@1x.jpg'),
        textTop: ['Newly Upgraded', 'Water Tank'],
        textBottom: ['Sprayed with long-lasting', 'paint and featured', 'with anti-scratch,', 'environment-friend and stylish design.'],
        styleType: 'imgcenter',
        day: '',
        textTopfz: 'textTopfz60',
        textToplh: 'textToplh58',
        textTopColor: 'textTopColorfff',
        textTopPosition: 'textTopPosition328',
        textButton: []
      }],
      imgPowerData: {
        img: require('@/images/prodetail2/picture-4@1x.jpg'),
        textTop: ['Flossing', 'Modes'],
        textBottom: ['Normal, soft and pulse', 'modes are selectable for', 'different oral care needs.']
      },
      rightmodelData: [
        {
          model: 'Normal',
          desc: ['(1800 pulses/per minute)', '·Daily Cleanning']
        },
        {
          model: 'Soft',
          desc: ['(1400 pulses/per minute)', '·Gentle Cleanning']
        },
        {
          model: 'Pulse',
          desc: ['(1400/1800 pulses/per minute)', '·Massage Cleaning']
        }
      ],
      headerDataLeft1: [{
        img: require('@/images/prodetail2/picture-5@1x.jpg'),
        textTop: ['Dual Waterproof', 'Design'],
        textBottom: ['Adopted IPX7 waterproof. The', 'flosser can even be used in a shower.'],
        styleType: 'imgLeft',
        textTopfz: 'textTopfz60',
        textToplh: 'textToplh58',
        textTopColor: 'textTopColor2D2B2B',
        textTopPosition: 'textTopPosition442',
        textButton: []
      },
      {
        img: require('@/images/prodetail2/picture-6@1x.jpg'),
        textTop: ['7Pcs - More Choices', 'for Your Teeth'],
        textBottom: ['4Pcs for cleaning acournd braces and orthodontics', '1Pcs for daily cleaning of teeth', '1Pcs for massaging gums', '1Pcs for removing plaque effectively'],
        styleType: 'imgcenter',
        textTopfz: 'textTopfz60',
        textToplh: 'textToplh58',
        textTopColor: 'textTopColorfff',
        textTopPosition: 'textTopPosition210',
        textButton: []
      }],
      prodList: [
        {
          prodName: 'Water Flosser',
          desc: '10 Adjustable Water Pressures with 600ml reservior and 8 Multi-functional Nozzles',
          pic: require('@/images/prodetail2/WaterFlosser-picture@1x.jpg'),
          btnName: 'BUY NOW'
        },
        {
          prodName: 'Electric Toothbrush',
          desc: 'Innovative DIY Mode with Unique UV Sanitizing Function ',
          pic: require('@/images/prodetail2/ElectricToothbrush-picture@1x.jpg'),
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
  height: 334px;
  background-color: #fff;
  padding: 0 320px;
  position: relative;
  .icon {
    width: 25%;
    float: left;
    text-align: center;
    height: 160px;
    margin-top: 87px;
    color: #383838;
    &:nth-child(1) > img {
      width: 63px;
      height: 83px;
    }
    &:nth-child(2) > img {
      width: 63px;
      height: 78px;
    }
    &:nth-child(3) > img {
      width: 59px;
      height: 82px;
    }
    &:nth-child(4) > img {
      width: 80px;
      height: 70px;
    }
    img {
      // margin-bottom: 20px;
      vertical-align: top;
    }
  }
  .iconText {
    font-size: 18px;
  }
}
.imgPower {
  height: 848px;
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
    text-align: left;
  }
  .leftBox {
    left: 396px;
    top: 271px;
    .textTop {
      color: #2d2b2b;
      font-size: 60px;
      line-height: 58px;
    }
    .textLine {
      height: 1px;
      width: 65px;
      background-color: #49b5b6;
      margin: 40px 0 24px 0;
    }
    .textBottom {
      color: #4a4c50;
      font-size: 18px;
    }
  }
  .rightBox {
    top: 248px;
    left: 1228px;
    .contentBox {
      margin-bottom: 36px;
    }
    .model {
      color: #49b5b6;
      font-size: 28px;
      line-height: 40px;
    }
    .desc {
      color: #333333;
      font-size: 18px;
      line-height: 30px;
    }
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
