<template>
  <div id="audio-video">
    <headers></headers>
    <headerImg :headerData='headerData'
               :styleType='headerData.styleType'></headerImg>
    <div class="conentBox">
      <contentCarousel class="carousel"
                       :title='carouselTitle'
                       :imgDataList='imgDataList'></contentCarousel>
    </div>
    <div class="navbar">
      <nav-bar :nav-list='navList'></nav-bar>
    </div>
    <div class="detailBox">
      <prod-block :prodList='prodList'></prod-block>
    </div>
  </div>
</template>
<script>
import Headers from '@/components/Headers'
import contentCarousel from '@/components/carousel/contentCarousel'
import headerImg from '@/components/Headers/headerImg'
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
      navList: [{ navName: 'ALL' }, { navName: 'Jump Starters' }, { navName: 'Car Audio' }],
      headerData: [{
        img: require('@/images/auto/auto-banner@1x.jpg'),
        textTop: ['AUTO'],
        textBottom: ['Further Your Way'],
        styleType: 'imgcenter',
        textTopfz: '',
        textToplh: ''
      }],
      imgDataList: [{
        code: '1',
        name: 'banner1@1x',
        img: require('@/images/auto/JumpStarterA18-pic@1x.jpg'),
        textBrand: ['A18 Jump Starter'],
        textDescribe: ['800A Peak Current', 'Long-lasting Battery with Fast', 'Charging Feature'],
        textButton: [
          {
            name: 'EXPLORE',
            icon: '',
            routeName: 'prodetail3'
          }
          // , {
          //   name: 'VIDEO',
          //   icon: ''
          // }
        ]
      }, {
        code: '2',
        name: 'banner2@1x',
        img: require('@/images/auto/dashboardCamera-pic@1x.jpg'),
        textBrand: ['T1 Dashboard', 'Camera'],
        textDescribe: ['1080 HD Resolution and 30 Frames', 'Every Second'],
        textButton: [
          {
            name: 'EXPLORE',
            icon: '',
            routeLink: 'https://www.trekpow.com/products/trekpow-dash-cam'
          }
          // , {
          //   name: 'VIDEO',
          //   icon: ''
          // }
        ]
      }],
      prodList: [
        {
          prodName: 'G39 Jump Starter',
          desc: '1200A Peak Current with High Capacity of 10400mAh',
          pic: require('@/images/auto/JumpStarterG39-picture@1x.jpg'),
          btnName: 'EXPLORE',
          externalLink: 'https://www.trekpow.com/products/jump-starter-g39'
        },
        {
          prodName: 'A18 Jump Starter',
          desc: '800A Peak Current, Long-lasting Battery with Fast Charging Feature',
          pic: require('@/images/auto/JumpStarterA18-pic1@1x.jpg'),
          btnName: 'EXPLORE',
          routerName: 'prodetail3'

        },
        {
          prodName: 'G22 Jump Starter',
          desc: '1500A Peak Current with Multiple-safety Protection',
          pic: require('@/images/auto/JumpStarterG22-pic@1x.jpg'),
          btnName: 'EXPLORE',
          externalLink: 'https://www.trekpow.com/products/jump-starter-g22'
        },
        {
          prodName: 'T1 Dashboard  Camera',
          desc: '1080 HD Resolution and 30 Frames Every Second',
          pic: require('@/images/auto/dashCam-pic@1x.jpg'),
          btnName: 'EXPLORE',
          externalLink: 'https://www.trekpow.com/products/trekpow-dash-cam'
        }
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
  // padding-top: 400px;
}
</style>
