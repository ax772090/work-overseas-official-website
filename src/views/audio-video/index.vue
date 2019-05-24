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
    <div class="detailBox">
      <prod-block :prodList='prodList'></prod-block>
    </div>
  </div>
</template>
<script>
import Headers from '@/components/Headers'
import headerImg from '@/components/Headers/headerImg'
import contentCarousel from '@/components/carousel/contentCarousel'
import prodBlock from '@/components/prodListBlock'
export default {
  name: 'audioVideo',
  components: {
    Headers,
    contentCarousel,
    prodBlock,
    headerImg
  },
  data () {
    return {
      imgDataList: [{
        code: '1',
        name: 'banner1@1x',
        img: require('@/images/audio-video/GC555-banner@1x.jpg'),
        textBrand: ['GC 555 PROJECTOR'],
        textDescribe: ['High Brightness of 150 ANSI Lumens', 'with Crisp Image Quality'],
        textButton: [
          {
            name: 'EXPLORE',
            icon: '',
            routeLink: 'https://www.bomaker.com/products/lcd-projector-gc555'
          }
          // , {
          //   name: 'VIDEO',
          //   icon: ''
          // }
        ]
      }, {
        code: '2',
        name: 'banner2@1x',
        img: require('@/images/audio-video/sound-banner@1x.jpg'),
        textBrand: ['NJORD I Soundbar'],
        textDescribe: ['2.1 SoundBar System with Wireless', 'Subwoofer for Home Theater', 'Experience'],
        textButton: [
          {
            name: 'EXPLORE',
            icon: '',
            routeLink: ''
          }
          // , {
          //   name: 'VIDEO',
          //   icon: ''
          // }
        ]
      }, {
        code: '3',
        name: 'banner3@1x',
        img: require('@/images/audio-video/AS01soundbar-banner1@1x.jpg'),
        textBrand: ['ODINE I Soudbar'],
        textDescribe: ['Built-in Bass and DSP Technology', 'Performs Perfectly in 80-180KHZ', 'Range'],
        textButton: [
          {
            name: 'EXPLORE',
            icon: '',
            routeLink: ''
          }
          // , {
          //   name: 'VIDEO',
          //   icon: ''
          // }
        ]
      }
        // , {
        //   code: '4',
        //   name: 'banner2@1x',
        //   img: require('@/images/audio-video/box-banner@1x.jpg'),
        //   textBrand: ['TV BOX'],
        //   textDescribe: 'Bluetooth 4.0 and Amlogic S905W Quad Core with A53 Processor 64 Bits',
        //   textButton: [
        //     {
        //       name: 'EXPLORE',
        //       icon: ''
        //     }
        //     // , {
        //     //   name: 'VIDEO',
        //     //   icon: ''
        //     // }
        //   ]
        // }
      ],
      headerData: [{
        img: require('@/images/audio-video/audiobg@1x.jpg'),
        textTop: ['AUDIO&VIDEO'],
        textBottom: ['Premium Audiovisual Experience'],
        styleType: 'imgcenter',
        textTopfz: '',
        textToplh: ''
      }],
      prodList: [
        {
          prodName: 'ODINE I Soundbar',
          desc: 'Built-in Bass and DSP Technology Performs Perfectly in 80-180KHZ Range',
          pic: require('@/images/audio-video/LCDProjector-picture@1x.jpg'),
          btnName: 'EXPLORE'
        },
        {
          prodName: 'NJORD I Soudbar',
          desc: '2.1 SoundBar System with Wireless Subwoofer for Home Theater Experience',
          pic: require('@/images/audio-video/ProjectorA6-pictnre@1x.jpg'),
          btnName: 'EXPLORE'
        },
        {
          prodName: 'GC555 Projector',
          desc: 'High Brightness of 150 ANSI Lumens with Crisp Image Quality',
          pic: require('@/images/audio-video/GC555-picture@1x.jpg'),
          btnName: 'EXPLORE',
          externalLink: 'https://www.bomaker.com/products/lcd-projector-gc555'
        },
        {
          prodName: 'A6 Projector',
          desc: 'FULL HD 1920*1080P Picture Quality with Dual HDMI Inputs and High-Definition Sources',
          pic: require('@/images/audio-video/projectorA6-pic@1x.jpg'),
          btnName: 'EXPLORE',
          externalLink: 'https://www.aboxtek.com/products/abox-a6-projector'
        },
        {
          prodName: 'A2 Projector',
          desc: 'Native 1280*720 Image Quality with 100 ANSI Lumens Color/White Brightness',
          pic: require('@/images/audio-video/projectorA2-pic@1x.jpg'),
          btnName: 'BUY NOW',
          externalLink: 'https://www.aboxtek.com/products/abox-a2-lcd-projector'
        }, {
          prodName: 'FS22CS Sound Bar',
          desc: '110 dB and 120 Watts Powerful Stereo Audio with 4 EQ Audio Modes',
          pic: require('@/images/audio-video/audiosound-pic@1x.jpg'),
          btnName: 'EXPLORE',
          routerName: 'prodetail1'
          // externalLink: 'https://www.aboxtek.com/products/abox-sound-bar'
        }, {
          prodName: 'T22 Projector',
          desc: 'Supreme Lamp Lifetime Up to 50000 Hours',
          pic: require('@/images/audio-video/projectorT22-pic@1x.jpg'),
          btnName: 'BUY NOW',
          externalLink: 'https://www.aboxtek.com/products/abox-t22-lcd-video-projector'
        },
        {
          prodName: 'A1 MAX TV BOX',
          desc: 'Bluetooth 4.0 and Amlogic S905W Quad Core with A53 Processor 64 Bits',
          pic: require('@/images/audio-video/box-pic@1x.jpg'),
          btnName: 'BUY NOW',
          externalLink: 'https://www.aboxtek.com/products/abox-a1-max-tv-box'
        }
        // {
        //   prodName: 'TV Box A4',
        //   desc: 'Innovative Voice Remote Technology',
        //   pic: require('@/images/audio-video/boxA4-pic@1x.jpg'),
        //   btnName: 'BUY NOW'
        // },
        // {
        //   prodName: 'TV Box XB-3',
        //   desc: 'Comes with I10 Mini Keyboard',
        //   pic: require('@/images/audio-video/boxXB-pic@1x.jpg'),
        //   btnName: 'BUY NOW',
        //   externalLink: 'https://www.aboxtek.com/products/abox-backlit-mini-keyboard'
        // }
        // },
        // {
        //   prodName: 'TV Box X4',
        //   desc: 'Latest Android 7.1.2 OS with 2GB RAM & 16GB eMMC Flash',
        //   pic: require('@/images/audio-video/boxX4-pic@1x.jpg'),
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
.detailBox {
  background-color: #efefef;
  padding-top: 400px;
}
</style>
