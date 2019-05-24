<template>
  <div id="home">
    <headers :ishome='ishome'></headers>
    <headerCarousel :ishome='true'
                    :imgDataList='imgDataList'></headerCarousel>
    <div class="home-content">
      <div v-for="(item,index) in contentData"
           class="img-content"
           :key="index">
        <img :src="item.img"
             alt="图片请求失败">
        <div :class="item.code === '2' ? 'textBoxLeft': 'textBoxRight'">
          <div class="textLogo">
            <img :src="item.textLogo"
                 alt="">
          </div>
          <p class="textTop"
             v-for="(items,index) in (item.textTop)"
             :key="index">{{items}}</p>
          <p class="textBottom">{{item.textBottom}}</p>
          <div class="textButton"
               @click="routeLink(item.link)">
            {{item.textButton}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Headers from '@/components/Headers'
import headerCarousel from '@/components/carousel/headerCarousel'
export default {
  name: 'home',
  components: {
    Headers,
    headerCarousel
  },
  data () {
    return {
      ishome: true,
      imgDataList: [{
        code: '1',
        name: 'banner1@1x',
        img: require('@/images/home/home-banner1@1x.jpg'),
        textTop: ['HOME', 'THEATER'],
        textImg: '',
        textNC: ['Higher Image Resolution 1280*720P', 'True 720P,Support 1080P'],
        textButton: 'EXPLORE',
        routeLink: 'https://www.bomaker.com/products/lcd-projector-gc555'
      }, {
        code: '2',
        name: 'banner2@1x',
        img: require('@/images/home/home-banner2@1x.jpg'),
        textTop: ['DASH', 'CAM'],
        textImg: '',
        textNC: ['Further Your Way'],
        textButton: 'EXPLORE',
        routeLink: 'https://www.trekpow.com/products/trekpow-dash-cam'
      }, {
        code: '3',
        name: 'banner3@1x',
        img: require('@/images/home/home-banner3@1x.jpg'),
        textTop: ['WATER FLOSSER'],
        textImg: '',
        textNC: ['Your Portable Oral Cleaner'],
        textButton: 'EXPLORE',
        routeName: 'prodetail2'
      }],
      contentData: [
        {
          code: '1',
          textLogo: require('@/assets/images/bomaker-logo@1x.png'),
          img: require('@/images/home/bomaker-banner@1x.jpg'),
          textButton: 'EXPLORE',
          textTop: ['AWESOME', 'AUDIO, ', 'VIVID VISUAL'],
          link: 'https://www.bomaker.com',
          textBottom: 'Bomaker focuses on the field of audiovisual entertainment. It establishes a theater-level home entertainment ecosystem through high-quality audiovisual products. Bomaker strives to bring the finest audiovisual enjoyment and most authentic interactive experience to our customers on a global basis.'
        },
        {
          code: '2',
          textLogo: require('@/assets/images/ABOX-logo@1x.png'),
          img: require('@/images/home/abox-banner@1x.jpg'),
          textButton: 'EXPLORE',
          textTop: ['A BELIEF', 'OF X-LIFE'],
          link: 'https://www.aboxtek.com',
          textBottom: 'The four ABOX focused product fields including Home Appliances, Personal Care, Home Therapy Electronics and Office Electronics, which covered almost every scene of life. ABOX is devoted to creating a more convenient, healthy, diverse and comfortable life experience for our customers across the world.'
        }, {
          code: '3',
          textLogo: require('@/assets/images/ttekpow-logo@1x.png'),
          img: require('@/images/home/trekpow-banner@1x.jpg'),
          textButton: 'EXPLORE',
          link: 'https://www.trekpow.com',
          textTop: ['BE', 'YOUR', 'TREK', 'PAL'],
          textBottom: 'TrekPow focuses on safety, achieves in efficiency, serves for the vast global automotive market. TrekPow is committed to providing the most comprehensive service on automotive electronics technology and becoming the best companion on the road for our customers across the globe.'
        }]
    }
  },
  methods: {
    routeLink (link) {
      if (link) {
        window.location.href = link
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.home-content {
  width: 100%;
  margin-top: 10px;
  .img-content {
    position: relative;
    margin-top: 10px;
    img {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
      vertical-align: middle;
    }
    .textBoxRight,
    .textBoxLeft {
      text-align: left;
      position: absolute;
      left: 1270px;
      top: 200px;
      .textLogo {
        font-size: 24px;
        color: #fff;
        margin-bottom: 50px;
      }
      .textTop {
        font-size: 60px;
        color: #fff;
        font-family: GothamBold;
        font-weight: Regular;
        color: rgba(255, 255, 255, 1);
        line-height: 58px;
      }
      .textBottom {
        cursor: pointer;
        margin-top: 20px;
        width: 385px;
        font-size: 14px;
        color: #fffefe;
        opacity: 0.8;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
    .textBoxLeft {
      left: 10%;
    }
  }
}
.textButton {
  cursor: pointer;
  position: absolute;
  text-align: center;
  margin-top: 32px;
  border-radius: 30px;
  border: 1px solid #fff;
  cursor: pointer;
  padding: 16px 44px;
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
  font-family: GothamBold;
}
</style>
