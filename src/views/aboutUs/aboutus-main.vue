<template>
  <div class="content">
    <div class="content-title">BRAND PRESENTATION</div>
    <div class="content-main clearfix"
         v-for="(item,index) in aboutDataList"
         :key="index">
      <div :class="[item.borderColorClass,item.contentMainClass]">
        <div class="content-block-title">{{item.textTitle}}</div>
        <div class="content-block-main">
          <div class="block-main">
            <div class="block-main-head">
              <div class="block-main-banner">
                <img :src="item.banner"
                     alt="图片加载失败" />
              </div>
              <div class="block-main-title">{{item.textTopic}}</div>
            </div>
            <div class="block-main-desc">{{item.textDesc}}</div>
            <div class="block-main-btn">
              <button class="btn" @click="routeLink(item.routelink)">{{item.btnName}}</button>
            </div>
          </div>
        </div>
      </div>
      <div :class="item.imgClassName">
        <img :src="item.img"
             alt="图片加载失败" />
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
    aboutDataList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
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
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.content {
  background-color: $bodyBg;
  margin: 0 auto;
}
.content-title {
  margin: 77px auto;
  width: 584px;
  font-size: $fontSize48;
  color: $fontColor333;
}
.content-main {
  width: 1264px;
  margin: 0 auto;
  margin-bottom: 70px;
  height: 506px;
  .content-main-left {
    float: left; //这里不同
    width: 471px;
    border-left: 25px solid $borderLeftColor; //这里不同
    .content-block-title {
      float: left;
      font-size: $fontSize16;
      color: $fontColorFFF;
      transform: rotate(90deg);
      width: 0px;
      margin-left: -12px;
      margin-top: 48%;
    }
    .content-block-main {
      width: 447px;
      height: 506px;
      padding-left: 85px;
      text-align: left;
      background-color: $fontColorFFF;
      position: relative;
      display: flex;
      align-items: center;
      .block-main {
        width: 100%;
        &:hover {
          .block-main-head {
            padding-top: 0px;
          }
          .block-main-desc {
            visibility: visible;
            animation: fade-in 1s;
          }
          .block-main-btn {
            bottom: -20px;
          }
        }
        .block-main-head {
          transition: padding-top 1s;
          padding-top: 80px;
        }
        .block-main-banner {
          position: relative;
          width: 100px;
          height: 50px;
          img {
            position: absolute;
          }
        }
        .block-main-title {
          width: 300px;
          height: 68px;
          line-height: 23px;
          font-size: $fontSize24;
          color: $fontColor30;
        }
        .block-main-desc {
          visibility: hidden;
          width: 270px;
          height: 99px;
          font-size: $fontSize16;
          color: $fontColor666;
          overflow-y: auto;
          overflow-x: hidden;
          // 这里继承mixin
          @include scrollBar;
        }
        .block-main-btn {
          transition: bottom 1s;
          position: relative;
          bottom: 100px;
          .btn {
            outline: none;
            cursor: pointer;
            display: block;
            font-size: 14px;
            width: 152px;
            height: 44px;
            background: $fontColorFFF;
            border: 3px solid $borderColorDF;
            border-radius: 22px;
            &:hover {
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
            }
          }
        }
      }
    }
  }
  .content-main-right {
    float: right;
    width: 792px;
    height: 506px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .content-main-left2 {
    float: right;
    width: 471px;
    border-right: 25px solid $borderLeftColor;
    .content-block-title {
      float: right; //这里会变
      font-size: $fontSize16;
      color: $fontColorFFF;
      transform: rotate(90deg);
      width: 0px;
      margin-right: -12px; //这里会变
      margin-top: 48%;
    }
    .content-block-main {
      width: 447px;
      height: 506px;
      padding-left: 85px;
      text-align: left;
      background-color: $fontColorFFF;
      position: relative;
      display: flex;
      align-items: center;
      .block-main {
        width: 100%;
        &:hover {
          .block-main-head {
            padding-top: 0px;
          }
          .block-main-desc {
            visibility: visible;
            animation: fade-in 1s;
          }
          .block-main-btn {
            bottom: -20px;
          }
        }
        .block-main-head {
          transition: padding-top 1s;
          padding-top: 80px;
        }
        .block-main-banner {
          position: relative;
          width: 100px;
          height: 50px;
          img {
            position: absolute;
          }
        }
        .block-main-title {
          width: 300px;
          height: 68px;
          line-height: 23px;
          font-size: $fontSize24;
          color: $fontColor30;
        }
        .block-main-desc {
          visibility: hidden;
          width: 270px;
          height: 99px;
          font-size: $fontSize16;
          color: $fontColor666;
          overflow-y: auto;
          @include scrollBar;
        }
        .block-main-btn {
          transition: bottom 1s;
          position: relative;
          bottom: 100px;
          .btn {
            outline: none;
            cursor: pointer;
            display: block;
            font-size: 14px;
            width: 152px;
            height: 44px;
            background: $fontColorFFF;
            border: 3px solid $borderColorDF;
            border-radius: 22px;
            &:hover {
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
            }
          }
        }
      }
    }
  }
  .content-main-right2 {
    float: left;
    width: 792px;
    height: 506px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .border-color-right1 {
    border-right-color: #a2e0df;
  }
  .border-color-left2 {
    border-left-color: #FB7F67;
  }
}
</style>
