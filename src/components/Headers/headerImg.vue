<template>
  <div class="headerBox">
    <div class="headerimg"
         v-for="(item,index) in headerData"
         :key="index">
      <img :src="item.img"
           alt="图片请求失败">
      <div :class="item.styleType + ` ${item.textTopPosition}`">
        <div class="topBox">
          <p :class="'headerimg-textTop '+ item.textTopfz +  ` ${item.textToplh}` + ` ${item.textTopColor}`"
             v-for="(item1,index) in item.textTop"
             :key="index">{{item1}}</p>
        </div>
        <p :class="'headerimg-textBot '+ item.textTopfz + ` ${item.textTopColor}`"
           v-for="(item1,index) in item.textBottom"
           :key="index">{{ item1 }}</p>
        <p class="price"
           v-if="item.styleType === 'imgLeft' && item.price "><span>$</span>{{ item.price }}</p>
        <p class="day"
           v-if="item.styleType === 'imgLeft'  && item.day">{{ item.day }}</p>
        <p class="dayUinit"
           v-if="item.styleType === 'imgLeft'  && item.day">DAYS</p>
        <div class="btns">
          <div v-for="(item,index) in item.textButton"
               :key="index"
               class="textButton"
               @click="routeLink(item.routeLink)">{{item.name}}
            <i></i>
          </div>
        </div>
      </div>
      <div class="iconList">
        <div v-for="(item,index) in item.iconList"
             :key="index"
             class="iconItem">
          <img :src="item.icon"
               alt="裂图">
          <div class="text">
            <p v-for="(item,index) in item.icontext"
               :key="index">{{ item }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    headerData: {
      type: Array,
      default () {
        return []
      }
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
.headerBox {
  .headerimg {
    position: relative;
    img {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
      vertical-align: middle;
    }
    .iconList {
      position: absolute;
      top: 450px;
      left: 335px;
      width: 650px;
      height: 246px;
      .iconItem {
        float: left;
        width: 25%;
        margin-top: -10px;
        > img {
          width: 85px;
          height: 70px;
          vertical-align: middle;
        }
        .text {
          margin-top: -10px;
          p {
            font-size: 18px;
            color: #fff;
          }
        }
      }
    }
    .headerimg-textTop {
      color: #fff;
      font-weight: 600;
      margin: 0;
    }
    .textTopfz60 {
      font-size: 60px;
    }
    .textTopfz105 {
      font-size: 105px;
    }
    .textTopfz80 {
      font-size: 80px;
    }
    .textToplh58 {
      line-height: 58px;
    }
    .textToplh64 {
      line-height: 64px !important;
    }
    .textToplh70 {
      line-height: 70px;
    }
    .headerimg-textTop.textTopfz60.textTopColorfff {
      color: #fff;
      font-size: 60px;
      line-height: 58px;
    }
    .headerimg-textTop.textTopfz80.textToplh70.textTopColor333 {
      &:nth-child(1) {
        font-size: 18px;
        line-height: 30px;
      }
    }
    .imgcenter.textTopPosition117 {
      .topBox {
        margin-bottom: 37px;
      }
      .btns {
        margin-top: 60px;
      }
    }

    .textTopfz60.textToplh58 {
      &:nth-child(2) {
        margin-bottom: 20px;
      }
    }
    .textTopfz60.textToplh58.textTopColor2D2B2B {
      &:nth-child(2) {
        margin-bottom: 27px;
      }
    }
    .headerimg-textTop.textToplh22 {
      &:nth-child(3) {
        margin-bottom: 20px;
      }
    }
    .headerimg-textBot {
      color: #fff;
      margin: 0;
      font-size: 26px;
    }
    .headerimg-textBot.textTopfz60,
    .headerimg-textBot.textTopfz80 {
      font-size: 18px;
    }
    .headerimg-textBot.textTopfz60.textTopColorfff {
      color: #fff;
      font-size: 18px;
    }
    .textTopColor333 {
      color: #333;
    }
    .textTopColorE65935 {
      color: #e65935;
      font-size: 118px;
      line-height: 122px;
      font-family: FjallaOne-Regular;
      letter-spacing: -6px;
    }
    .headerimg-textTop.textTopfz60.textToplh58.textTopColor2D2B2B {
      color: #2d2b2b;
      line-height: 58px;
    }
    .headerimg-textBot.textTopfz60.textTopColor2D2B2B {
      color: #4a4c50;
      font-size: 18px;
    }
    .imgLeft.textTopPosition230 .day {
      font-size: 148px;
      color: #ffffff;
      margin-top: 125px;
      font-family: MyriadPro-Regular;
    }
    .imgLeft.textTopPosition230 .dayUinit {
      color: #fff;
      font-size: 16px;
      margin: -25px 0 0 18px;
    }
    .btns {
      z-index: 999;
      .textButton {
        width: 176px;
        margin-top: 15px;
        margin-right: 13px;
        float: left;
        text-align: center;
        border-radius: 30px;
        font-size: 14px;
        color: #333;
        border: 1px solid #333;
        padding: 15px 0;
        &:hover {
          cursor: pointer;
        }
      }
    }
    //居中对齐
    .imgcenter {
      z-index: 999;
      position: absolute;
      top: 48%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .imgcenter.textTopPosition330 {
      position: absolute;
      top: 330px;
      left: 50%;
      transform: translate(-50%, 0);
      .headerimg-textTop.textTopfz105.textToplh89 {
        line-height: 89px;
      }
    }
    .imgcenter.textTopPosition204 {
      position: absolute;
      top: 204px;
      left: 50%;
      transform: translate(-50%, 0);
    }
    .imgcenter.textTopPosition178 {
      position: absolute;
      top: 178px;
      left: 50%;
      transform: translate(-50%, 0);
    }
    .imgcenter.textTopPosition330 {
      position: absolute;
      top: 330px;
      left: 50%;
      transform: translate(-50%, 0);
    }
    .imgcenter.textTopPosition208 {
      position: absolute;
      top: 208px;
      left: 50%;
      transform: translate(-50%, 0);
      .headerimg-textBot.textTopfz60.textTopColor333 {
        color: #666666;
      }
    }
    .imgcenter.textTopPosition117 {
      position: absolute;
      top: 117px;
      left: 50%;
      transform: translate(-50%, 0);
    }

    .imgcenter.textTopPosition265 {
      position: absolute;
      top: 260px;
      left: 50%;
      transform: translate(-50%, 0);
      .headerimg-textTop.textToplh22.textTopColorfff {
        font-size: 60px;
      }
      .headerimg-textBot.textTopColorfff {
        font-size: 18px;
      }
    }
    //向右对齐
    .imgRight {
      z-index: 999;
      position: absolute;
      top: 380px;
      left: 1088px;
      text-align: left;
    }
    .imgLeft.textTopPosition230 {
      position: absolute;
      top: 230px;
      left: 325px;
    }
    .imgLeft.textTopPosition283 {
      position: absolute;
      top: 283px;
      left: 347px;
      .headerimg-textBot.textTopfz60.textTopColorfff {
        margin-top: 30px;
      }
    }
    .imgLeft.textTopPosition250 {
      position: absolute;
      top: 250px;
      left: 350px;
    }
    .imgLeft.textTopPosition442 {
      position: absolute;
      top: 442px;
      left: 325px;
    }
    .imgLeft.textTopPosition113 {
      position: absolute;
      top: 113px;
      left: 306px;
      .price {
        margin-top: 167px;
        font-family: GothamBold;
      }
      p,
      .textButton {
        color: #fff;
      }
      .textButton {
        cursor: pointer;

        border: 1px solid #fff;
      }
      .headerimg-textTop {
        &:nth-child(2) {
          margin-bottom: 22px;
        }
      }
    }
    .imgcenter.textTopPosition210 {
      position: absolute;
      top: 210px;
      left: 50%;
      transform: translate(-50%, 0);
    }
    .imgcenter.textTopPosition310 {
      position: absolute;
      top: 310px;
      left: 50%;
      transform: translate(-50%, 0);
      .topBox {
        margin-bottom: 40px;
      }
    }
    //靠左对齐
    .imgLeft {
      z-index: 999;
      position: absolute;
      left: 305px;
      text-align: left;
      top: 95px;
      .headerimg-textTop {
        color: #333;
        line-height: 90px;
      }
      .headerimg-textBot {
        font-size: 18px;
        color: #333333;
      }
      .price {
        font-size: 30px;
        color: #333;
        margin-top: 70px;
        font-weight: 600;
        span {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
