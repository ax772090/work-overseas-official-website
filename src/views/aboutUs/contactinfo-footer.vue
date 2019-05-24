<template>
  <div id="contactinfo">
    <div class="contactinfo-main"></div>
    <div class="contact-container "
         v-for="(value,key) in obj"
         :key="key">
      <div class="contactinfo-img">
        <img :src="obj['img']"
             alt="图片加载失败">
      </div>
      <div class="container-right">
        <div class="container-right-title">CONTACT INFORMATON</div>
        <div class="container-right-info">
          <div class="right-info-name">{{obj['name']}}</div>
          <div class="right-info-desc">{{obj['desc']}}</div>
          <div class="right-info-tel">{{obj['tel']}}</div>
          <div class="right-info-btn">
            <button @click.prevent="getData(index)"
                    type="button"
                    v-for="(item,index) in btnList"
                    :key="index"
                    :class="selectIndex === index?'bg-orange':''">{{item}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { analyze } from '@/mixins/analyze.js'
export default {
  mixins: [
    // analyze
  ],
  name: 'contactinfoFooter',
  props: {
  },
  data () {
    return {
      obj: {},
      selectIndex: '',
      btnList: ['USA', 'CAN'
      ],
      countryDataList: [{
        name: 'USA',
        desc: '381 Elliot St, Suite 110L Newton Upper Falls, MA 02464',
        tel: '+1(617)309-0528',
        img: require('@/images/about/USA@1x.jpg')
      }, {
        name: 'CAN',
        desc: '801, Building D, Bantian International Center, Longgang District, Shenzhen',
        tel: '0755-23762801',
        img: require('@/images/about/CAN@1x.jpg')
      }]
    }
  },
  created () {
    this.getData(0)
  },
  methods: {
    getData (index) {
      this.selectIndex = index
      if (index === 0) {
        this.obj = this.countryDataList[0]
      } else {
        this.obj = this.countryDataList[1]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
#contactinfo {
  width: 100%;
  height: 570px;
  position: relative;
  .contact-container {
    width: 1260px;
    height: 570px;
    margin: 0 auto;
  }
  .contactinfo-main {
    position: absolute;
    top: 50%;
    margin-top: -215px;
    width: 100%;
    height: 430px;
    background: url("../../images/about/usa-bg@1x.jpg") no-repeat center center;
  }
  .contactinfo-img {
    position: absolute;
    width: 420px;
    height: 570px;
    img {
      width: 100%;
    }
  }
  .container-right {
    position: absolute;
    margin-left: 470px;
    padding-left: 50px;
    .container-right-title {
      width: 600px;
      font-size: $fontSize48;
      color: $fontColorC4;
    }
    .container-right-info {
      text-align: left;
      margin-top: 100px;
      > div {
        margin-bottom: 20px;
      }
      > div:last-child {
      }
      .right-info-name {
        font-size: $fontSize28;
        color: $fontColorFFF;
        // margin-top: 150px;
      }
      .right-info-desc {
        font-size: $fontSize16;
        width: 300px;
        height: 42px;
        color: $fontColorFFF;
      }
      .right-info-tel {
        font-size: $fontSize16;
        color: $fontColorFFF;
      }
      .right-info-btn {
        .bg-orange {
          background: $btnColorFF85;
        }
        button {
          outline: none;
          color: $fontColorFFF;
          background: #1e438a;
          margin-right: 20px;
          cursor: pointer;
          width: 110px;
          height: 30px;
          border: 1px solid $fontColorFFF;
          border-radius: 15px;
          &:hover {
            // background: $btnColorFF85;
          }
        }
      }
    }
  }
}
</style>
