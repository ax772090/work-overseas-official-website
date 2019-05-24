<template>
  <div class="footers">
    <div class="footer-icon">
      <div class="footer-icon-content clearfix">
        <dl>
          <div class="bg-img"></div>
          <!-- <img-all :imgSrc='aboximg'></img-all> -->
          <!-- <img src="../../assets/images/substanbo@1x.png"
               alt='图片加载失败' /> -->
        </dl>
        <dl>
          <div class="bg-img"
               @click="bomaker"></div>
        </dl>
        <dl>
          <div class="bg-img"
               @click="aboxtek"></div>
        </dl>
        <dl>
          <div class="bg-img"
               @click="trekpow"></div>
        </dl>
      </div>
    </div>
    <div class="footer-info">
      <div class="footer-info-content clearfix">
        <dl>
          <dt>ABOUT US</dt>
          <dd><a target="_blank"
               href="">Our Company</a> </dd>
          <dd><a target="_blank"
               href="">Contack Us</a> </dd>
          <dd><a target="_blank"
               href="">Why Choose Us?</a> </dd>
        </dl>
        <dl>
          <dt>SUPPORT</dt>
          <dd><a target="_blank"
               href="">Manuals & Drivers</a> </dd>
          <dd><a target="_blank"
               href="">Product Registration</a> </dd>
          <dd><a target="_blank"
               href="">Warranty Info</a> </dd>
          <dd><a target="_blank"
               href="">Process a Warranty</a> </dd>
          <dd><a target="_blank"
               href="">Privacy Policy</a> </dd>
          <dd><a target="_blank"
               href="">Terms of Use</a> </dd>
        </dl>
        <dl>
          <dt>CONTACT US</dt>
          <dd>
            <div class="contactus-info">
              <i class="iconfont substanbo-icondingwei"></i>
              <span>381 Elliot St. Suite 110LNewton</span>
            </div>
          </dd>
          <dd>
            <div class="contactus-info">
              <i class="ml-20"></i>
              <span>Upper Falls,MA 02464</span>
            </div>
          </dd>
          <dd>
            <div class="contactus-info">
              <i class="iconfont substanbo-icondianhua"></i>
              <span>+1 (617) 309-0528</span>
            </div>
          </dd>
          <dd>
            <div class="contactus-info">
              <i class="iconfont substanbo-iconyouxiang"></i>
              <span>bd@substanbo.com</span>
            </div>
          </dd>
        </dl>
        <dl>
          <dt>FOLLOW US</dt>
          <dd>
            <!-- <el-input placeholder="Enter email address..." v-model="input"></el-input> -->
            <input placeholder="Enter email address..." type="text">
          </dd>
          <dd>
            <div class="followus-icon clearfix">
              <div class="share-icon-left">
                <a class="share-icon"
                   href=""
                   target="_blank"><i class="iconfont substanbo-iconfacebook1"></i></a>
                <a class="share-icon"
                   href=""
                   target="_blank"><i class="iconfont substanbo-iconttww"></i></a>
                <a class="share-icon"
                   href=""
                   target="_blank"><i class="iconfont substanbo-iconaa"></i></a>
                <a class="share-icon"
                   href=""
                   target="_blank"><i class="iconfont substanbo-iconfacebook1"></i></a>
              </div>
              <div class="share-icon-right">
                <img src="@/assets/images/language@1x.png"
                     alt="">
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
          </dd>
          <dd><span class="copyright">©2019 Substanbo Inc. All rights reserved.</span></dd>

        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { analyze } from '@/mixins/analyze.js'
import imgAll from '../img'
export default {
  mixins: [
    analyze
  ],
  name: 'footers',
  props: {
    imgAll
  },
  data () {
    return {
      input: '',
      language: 'EN'
    }
  },
  methods: {
    selectLanguage (command) {
      this.language = command
    },
    bomaker () {
      window.location.href = 'https://www.bomaker.com'
    },
    aboxtek () {
      window.location.href = 'https://www.aboxtek.com'
    },
    trekpow () {
      window.location.href = 'https://www.trekpow.com'
    }
  }
}
</script>

<style lang="scss" scoped>
input[type='text']{
  width: 280px;
  opacity: 0.3;
  border-bottom: 1px solid $fontColor666;
  height: 40;
  line-height: 40px;
}
input[type="text"]:focus{
  opacity: 1;
}
.footers {
  width: 100%;
  height: 192px;
  .footer-icon {
    width: 100%;
    height: 192px;
    background: #efefef;
    vertical-align: middle;
    position: relative;
    .footer-icon-content {
      max-width: 1200px;
      width: 100%;
      height: 42px;
      margin: 0 auto;
      vertical-align: top;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      dl {
        float: left;
        margin: 0 auto;
        width: 25%;
        &:nth-child(1) {
          .bg-img {
            height: 42px;
            width: 158px;
            cursor: pointer;
            background: url("../../assets/images/substanbo@1x.png") no-repeat
              center center;
            background-size: 100% 100%;
            &:hover {
              background: url("../../assets/images/substanbo@1x.png") no-repeat
                center center;
              background-size: 100% 100%;
            }
          }
        }
        &:nth-child(2) {
          .bg-img {
            height: 32px;
            width: 128px;
            margin: 5px auto;
            cursor: pointer;
            background: url("../../assets/images/bomaker@1x.png") no-repeat
              center center;
            background-size: 100% 100%;
            &:hover {
              background: url("../../assets/images/bomaker-hover@1x.png")
                no-repeat center center;
              background-size: 100% 100%;
            }
          }
        }
        &:nth-child(3) {
          .bg-img {
            height: 20px;
            width: 98px;
            margin: 11px auto;
            cursor: pointer;
            background: url("../../assets/images/abox@1x.png") no-repeat center
              center;
            background-size: 100% 100%;
            &:hover {
              background: url("../../assets/images/abox-hover@1x.png") no-repeat
                center center;
              background-size: 100% 100%;
            }
          }
        }
        &:nth-child(4) {
          .bg-img {
            height: 24px;
            width: 125px;
            margin: 9px auto;
            cursor: pointer;
            background: url("../../assets/images/trekpow@1x.png") no-repeat
              center center;
            background-size: 100% 100%;
            &:hover {
              background: url("../../assets/images/trekpow-hover@1x.png")
                no-repeat center center;
              background-size: 100% 100%;
            }
          }
        }
      }
    }
  }
  .footer-info {
    width: 100%;
    margin-bottom: 20px;
    .footer-info-content {
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      dl {
        float: left;
        margin: 0;
        width: 25%;
        text-align: left;
        dt {
          display: inline-block;
          font-size: 14px;
          font-family: GothamBold;
          font-weight: 600;
          margin-bottom: 10px;
          color: rgba(51, 51, 51, 1);
        }
        dd {
          font-size: 12px;
          font-family: GothamBook;
          font-weight: 400;
          margin: 0;
          text-decoration: none;
          color: #666;
          line-height: 30px;
          .contactus-info {
            i {
              margin-right: 20px;
              color: #666;
              font-size: 12px;
            }
            .ml-20 {
              margin-left: 15px;
            }
          }
          .followus-icon {
            margin-top: 10px;
            margin-bottom: 5px;
            width: 285px;
          }
          .share-icon-left {
            float: left;
            a {
              display: inline-block;
              vertical-align: middle;
              border-radius: 50%;
              margin-right: 15px;
              &:hover {
                background-color: #001f94;
                i {
                  color: #fff;
                }
              }
              i {
                width: 30px;
                height: 30px;
                text-align: center;
                line-height: 30px;
                border-radius: 50%;
                font-size: 10px;
                color: #666;
              }
            }
          }
          .share-icon-right {
            float: right;
            img {
              width: 23px;
              height: 23px;
              margin-right: 7px;
            }
            .lang {
              width: 16px;
              height: 9px;
            }
          }
        }
        dd > a:hover {
          color: #1a45e9;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
