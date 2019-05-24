<template>
  <div id="audio-video">
    <headers></headers>
    <headerImg :headerData='headerData'
               :styleType='headerData.styleType'></headerImg>
    <aboutus-main :aboutDataList='aboutDataList'></aboutus-main>
    <contactinfo-footer></contactinfo-footer>
  </div>
</template>
<script>
import Headers from '@/components/Headers'
import headerImg from '@/components/Headers/headerImg'
import aboutusMain from './aboutus-main'
import contactinfoFooter from './contactinfo-footer'
export default {
  name: 'audioVideo',
  components: {
    headerImg,
    aboutusMain,
    contactinfoFooter,
    Headers
  },
  data () {
    return {
      headerData: [{
        img: require('@/images/about/aboutus-bg@1x.jpg'),
        textTop: ['ABOUT', 'US'],
        textBottom: [],
        styleType: 'imgcenter',
        textTopfz: 'textTopfz105',
        textToplh: 'textToplh89',
        textTopColor: 'textTopColorfff',
        textTopPosition: 'textTopPosition330'
      }],
      aboutDataList: [
        {
          contentMainClass: 'content-main-left',
          textTitle: 'BOMAKER',
          banner: require('@/images/about/bomaker@1x.png'),
          textTopic: 'Awesome Audio, Vivid Visual',
          textDesc: 'Bomaker focused on the field of audiovisual entertainment. It establishes a theater-lever home entertainment ecosystem through high-quality audiovisuals products. Bomaker strives to bring the finest audiovisual enjoyment and most authentic interactive experience to our customers on a global basis.',
          btnName: 'EXPLORE',
          imgFloat: 'right',
          imgClassName: 'content-main-right',
          img: require('@/images/about/bomaker-picture@1x.jpg'),
          routelink: 'https://www.bomaker.com'
        },
        {
          contentMainClass: 'content-main-left2',
          borderColorClass: 'border-color-right1',
          textTitle: 'ABOX',
          banner: require('@/images/about/abox@1x.png'),
          textTopic: 'A Belief of Xlife',
          textDesc: 'The four ABOX focused product fields including Home Appliances, Personal Care, Home Therapy Electronics and Office Electronics, which covered almost every scene of life. ABOX is devoted to creating a more convenient, healthy, diverse and comfortable life experience for our customers across the world.',
          btnName: 'EXPLORE',
          imgClassName: 'content-main-right2',
          img: require('@/images/about/ABOX-picture@1x.jpg'),
          routelink: 'https://www.aboxtek.com'
        },
        {
          contentMainClass: 'content-main-left',
          borderColorClass: 'border-color-left2',
          textTitle: 'TREKPOW',
          banner: require('@/images/about/trepow@1x.png'),
          textTopic: 'Be Your Trek Pal',
          textDesc: 'TrakPow focuses on safety, achieves in efficiency, serves for the vast global automotive market. TrekPow is committed to providing the most comprehensive service on auto motive electronics technology and becoming the best companion on the road for our customers across the globe.',
          btnName: 'EXPLORE',
          imgClassName: 'content-main-right',
          img: require('@/images/about/Trekpow-picture@1x.jpg'),
          routelink: 'https://www.trekpow.com'
        }]
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
