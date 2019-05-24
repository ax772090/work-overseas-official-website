<template>
  <div>
    <div :class="'header-content ' + `${bgco}`"
         id="nav"
         ref="headerContent">
      <div class="logo"
           @click="gohome"></div>
      <div class="header-left">
        <router-link :to="{name: 'audioVideo'}">AUDIO&VIDEO</router-link>
        <router-link :to="{name: 'homeOffice'}">HOME&PERSONAL</router-link>
        <router-link :to="{name: 'auto'}">AUTO</router-link>
        <router-link :to="{name: 'community'}">COMMUNITY</router-link>
        <router-link :to="{name: 'aboutUs'}">ABOUT US</router-link>

        <!-- <span v-for="(item,index) in btList"
              :key="index"
              :class="'routeLink ' + `${selctIndex === index ? 'borderBto' : ''}`"
              @click="routeLink(item.routeLink,index)">{{ item.text }}</span> -->
      </div>
      <div class="header-right">
        <div class="langImg"></div>
        <span class="lang">{{language}}</span>
        <el-dropdown @command="selectLanguage">
          <span class="el-dropdown-link">
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="CN">中文</el-dropdown-item>
            <el-dropdown-item command="EN">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { analyze } from '@/mixins/analyze.js'
export default {
  mixins: [
    analyze
  ],
  name: 'headers',
  props: {
    ishome: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      language: 'EN',
      logo: '',
      selctIndex: '',
      isshow: this.ishome,
      bgco: '',
      btList: [{
        text: 'AUDIO&VIDEO',
        routeLink: 'audioVideo'
      }, {
        text: 'HOME&PERSONAL',
        routeLink: 'homeOffice'
      }, {
        text: 'AUTO',
        routeLink: 'auto'
      }, {
        text: 'COMMUNITY',
        routeLink: 'community'
      }, {
        text: 'ABOUT US',
        routeLink: 'aboutUs'
      }]
    }
  },
  methods: {
    selectLanguage (command) {
      this.language = command
      if (this.language === 'CN') {
        window.location.href = 'http://www.substanbo.cn'
      }
    },
    handleScroll () { // 改变元素#searchBar的top值
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // var offsetTop = document.querySelector('.header-content').offsetTop
      if (scrollTop > 0 && this.isshow) {
        document.querySelector('.header-content').classList.add('isFixed')
      } else {
        document.querySelector('.header-content').classList.remove('isFixed')
      }
    },
    // 点击回首页
    gohome () {
      this.$router.push({ name: 'home' })
    }
    // routeLink (name, index) {

    // }
  },
  mounted () {
    // 非首页时，头部导航的背景色为白色，首页时背景色为#000，当滚动后，首页头部导航固定，背景色为白色
    if (!this.isshow) {
      this.bgco = 'bgcofff'
    }
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () { // 离开该页面需要移除这个监听的事件
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
.header-content {
  padding: 0 102px 0 102px;
  height: 70px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 999;
  .logo {
    cursor: pointer;
    width: 36px;
    height: 36px;
    margin-top: 17px;
    float: left;
    background: url("../../../src/assets/images/logo.png") no-repeat center
      center;
    background-size: 100% 100%;
    color: #fff;
  }

  > .header-left {
    float: left;
    // height: 36px;
    line-height: 70px;
    margin-left: 32px;
    > a {
      float: left;
      position: relative;
      font-size: 14px;
      font-weight: 400;
      margin-right: 40px;
      font-family: GothamBold;
      text-decoration: none;
      color: #fff;
      transition: 0.2s all linear;
      cursor: pointer;
      &::after {
        content: "";
        display: block;
        /*开始时候下划线的宽度为100%*/
        width: 100%;
        height: 2px;
        position: absolute;
        background: #fff;
        transition: all 0.3s ease-in-out;
        /*通过transform的缩放scale来让初始时x轴为0*/
        transform: scale3d(0, 1, 1);
        /*将坐标原点移到元素的中间，以原点为中心进行缩放*/
        transform-origin: 50% 0;
      }
      &:hover::after {
        /*鼠标经过时还原到正常比例*/
        transform: scale3d(1, 1, 1);
      }
    }
  }
  // 点击后的边框
  .router-link-active {
    border-bottom: 2px solid #333;
  }
  > .header-right {
    float: right;
    height: 36px;
    margin-top: 17px;
    padding: 6.5px 0;
    .langImg {
      width: 26px;
      height: 26px;
      float: left;
      background: url("../../../src/assets/images/language1@1x.png") no-repeat
        center center;
      background-size: 100% 100%;
    }

    .lang {
      font-size: 12px;
      color: #fff;
      float: left;
      line-height: 25px;
      padding-left: 8px;
      font-family: GothamBold;
    }
    > .el-dropdown {
      float: right;
      line-height: 28px;
    }
  }
}
.header-content.isFixed,
.header-content.bgcofff {
  position: fixed;
  background-color: #fff;
  top: 0;
  z-index: 999;
  width: 100%;
  .logo {
    float: left;
    background: url("../../../src/assets/images/logo@1x.png") no-repeat center
      center;
    background-size: 100% 100%;
  }
  .header-left > a {
    color: #333;
    &::after{
        background: #333;
    }
  }
  .langImg {
    width: 26px;
    height: 26px;
    float: left;
    background: url("../../../src/assets/images/language@1x.png") no-repeat
      center center;
    background-size: 100% 100%;
  }
  .lang {
    color: #666666;
  }
}
.header-content.bgcofff {
  position: relative;
}
</style>
