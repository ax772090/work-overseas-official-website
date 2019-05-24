<template>
  <div id="home-office">
    <headers></headers>
    <headerImg :headerData='headerData'
               :styleType='headerData.carouselTitlestyleType'></headerImg>
    <div class="conentBox">
      <contentCarousel class="carousel"
                       :title='carouselTitle'
                       :imgDataList='imgDataList'></contentCarousel>
    </div>
    <div class="navbar">
      <nav-bar :nav-list='navList'></nav-bar>
    </div>
    <div class="detailBox">
      <prod-block :prodList='prodList'
                  :comingsoon='true'></prod-block>
    </div>
  </div>
</template>
<script>
import Headers from '@/components/Headers'
import headerImg from '@/components/Headers/headerImg'
import contentCarousel from '@/components/carousel/contentCarousel'
import navBar from '@/components/nav-bar'
import prodBlock from '@/components/prodListBlock'
export default {
  name: 'audioVideo',
  components: {
    Headers,
    contentCarousel,
    headerImg,
    navBar,
    prodBlock
  },
  data () {
    return {
      navList: [{ navName: 'ALL' }, { navName: 'Home & Kitchen' }, { navName: 'OFFICE ELECTRONICS' }, { navName: 'BEAUTY & PERSONAL CARE' }, { navName: 'HEALTH & HOUSEHOLD' }],
      headerData: [{
        img: require('@/images/home-office/office-banner@1x.jpg'),
        textTop: ['HOME&PERSONAL CARE'],
        textBottom: ['Ultimate Comfort Zone'],
        styleType: 'imgcenter',
        textTopfz: '',
        textToplh: ''
      }],
      imgDataList: [{
        code: '1',
        name: 'banner1@1x',
        img: require('@/images/home-office/Thermal-banner@1x.jpg'),
        textBrand: ['OL381', 'Thermal Laminator'],
        textDescribe: ['3-in-1 Versatile with Innovative', 'Heating System'],
        textButton: [
          {
            name: 'EXPLORE',
            icon: '',
            routeLink: 'https://www.aboxtek.com/products/abox-thermal-laminator'
          }
          // , {
          //   name: 'VIDEO',
          //   icon: ''
          // }
        ]
      }, {
        code: '2',
        name: 'banner2@1x',
        img: require('@/images/home-office/SonicToothbrush-banner@1x.jpg'),
        textBrand: ['T2056 Sonic Toothbrush'],
        textDescribe: ['Advanced Sonic Motor Technology', 'with Upgraded UV Sanitizing', 'Function'],
        textButton: [
          {
            name: 'EXPLORE',
            icon: '',
            routeLink: 'https://www.aboxtek.com/products/travel-electric-toothbrush'
          }
          // , {
          //   name: 'VIDEO',
          //   icon: ''
          // }
        ]
      }, {
        code: '3',
        name: 'banner3@1x',
        img: require('@/images/home-office/CordlessWaterFlosser-banner@1x.jpg'),
        textBrand: ['FC159 Cordless Water', 'Flosser'],
        textDescribe: ['Upgraded Removable Full-opening', 'Water Tank for', 'Ultimate Cleaning Experience'],
        textButton: [
          {
            name: 'EXPLORE',
            icon: '',
            routeName: 'prodetail2'
          }
          // , {
          //   name: 'VIDEO',
          //   icon: ''
          // }
        ]
      }],
      prodList: [
        {
          prodName: ' FC159 Cordless Water Flosser',
          desc: 'Upgraded Removable Full-opening Water Tank for Ultimate Cleaning Experience',
          pic: require('@/images/home-office/WaterFlosser-pic@1x.jpg'),
          btnName: 'EXPLORE',
          routerName: 'prodetail2'
          // externalLink: 'https://www.aboxtek.com/products/abox-cordless-water-flosser'
        }, {
          prodName: 'T2056 Sonic Toothbrush',
          desc: 'Advanced Sonic Motor Technology with Upgraded UV Sanitizing Function',
          pic: require('@/images/home-office/ElectricToothbrush-pic1@1x.jpg'),
          btnName: 'EXPLORE',
          routerName: '',
          externalLink: 'https://www.aboxtek.com/products/travel-electric-toothbrush'
        }, {
          prodName: 'LS-532A Garment Steamer',
          desc: 'Multi-Functional with Dual Overheating-Protection',
          pic: require('@/images/home-office/GarmentSteamer-pic@1x.jpg'),
          btnName: 'EXPLORE'
        },
        {
          prodName: 'OL381 Thermal Laminator',
          desc: '3-in-1 Versatile with Innovative Heating System',
          pic: require('@/images/home-office/Thermal-pic@1x.jpg'),
          btnName: 'BUY NOW',
          externalLink: 'https://www.aboxtek.com/products/abox-thermal-laminator'
        }, {
          prodName: 'FC156 Water Flosser',
          desc: 'Adjustable 10 Water Pressures with 600ml Reservior and 8 Multi-functional Nozzles',
          pic: require('@/images/home-office/WaterFlosser-pic1@1x.jpg'),
          btnName: 'EXPLORE',
          routerName: '',
          externalLink: 'https://www.aboxtek.com/products/abox-water-flosser'
        }, {
          prodName: 'RLT236 Electric Toothbrush',
          desc: 'Innovative DIY Mode with Unique UV Sanitizing Function',
          pic: require('@/images/home-office/ElectricToothbrush-pic@1x.jpg'),
          btnName: 'BUY NOW',
          routerName: '',
          externalLink: 'https://www.aboxtek.com/products/abox-electronic-toothbrush'
        }, {
          prodName: 'A3 Laminator',
          desc: 'Advanced Two-Roller System with Anti-jam Release Lever',
          pic: require('@/images/home-office/ThermalA3-pic@1x.jpg'),
          btnName: 'BUY NOW',
          externalLink: 'https://www.aboxtek.com/products/abox-a3-thermal-laminator'
        }, {
          prodName: 'A4 Laminator',
          desc: 'Portable Design with Fast Warm Up Technology',
          pic: require('@/images/home-office/ThermalA4-pic@1x.jpg'),
          btnName: 'BUY NOW',
          externalLink: 'https://www.aboxtek.com/products/abox-thermal-laminator-machine-a4'
        },
        // {
        //   prodName: 'EFT-163 Thermometer',
        //   desc: 'Automatic Dual Fever Warning',
        //   pic: require('@/images/home-office/Themometer-pic@1x.jpg'),
        //   btnName: 'BUY NOW'
        // },
        {
          prodName: 'U80H Blood Pressure Monitor',
          desc: 'Intelligent Pressure Automatic Measurement Technology',
          pic: require('@/images/home-office/BloodPressure Monitor-pic@1x.jpg'),
          btnName: 'BUY NOW',
          externalLink: 'https://www.aboxtek.com/products/abox-blood-pressure-monitor'
        },
        {
          prodName: 'VGM01 Blood Glucose Monitor',
          desc: 'Fast Results in 5 seconds',
          pic: require('@/images/home-office/BloodGlucose Meter-pic@1x.jpg'),
          btnName: 'BUY NOW',
          externalLink: 'https://www.aboxtek.com/products/abox-blood-glucose-meter'
        }
        // {
        //   prodName: 'Keyboard I10',
        //   desc: '2.4GHz Multi-Media Portable Handheld Keyboard with Touchpad Mouse',
        //   pic: require('@/images/home-office/Keyboard-pic@1x.jpg'),
        //   btnName: 'BUY NOW'
        // }
      ],
      carouselTitle: 'MAIN PRODUCTS'
    }
  }
}
</script>
<style lang="scss" scoped>
.conentBox {
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 745px;
}
.carousel {
  position: absolute;
  left: 50%;
  top: 65%;
  transform: translate(-50%, -50%);
}
.navbar {
  width: 100%;
  height: 200px;
  margin-top: 250px;
}
.detailBox {
  background-color: #efefef;
}
</style>
