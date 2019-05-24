<template>
  <div>
    <div class="contents">
      <el-carousel trigger="click"
                   :loop='false'
                   :height="carouselImgHeight">
        <el-carousel-item v-for="item in imgDataList"
                          :key="item.code">
          <el-row>
            <div class="img-content">
              <img ref="imgHeight"
                   :src="item.img"
                   :alt="item.name">
              <div :class="item.code == 1? 'img-textLeft': 'img-textCenter'">
                <div>
                  <p class="textTop"
                     v-for="(items,index) in (item.textTop)"
                     :key="index">{{items}}</p>
                </div>
                  <!-- <img class="textImg"
                     :src="item.textImg"
                     alt="裂图"> -->
                  <p :class="item.code == 3? 'textNC3':'textNC'"
                     v-for="(items,index) in (item.textNC)"
                     :key="index">{{items}}</p>
                <!-- </div> -->
              </div>
              <div :class="item.code == 1?'textButton1': 'textButton'"
                   @click="routelink(item.textButton,item.routeLink,item.routeName)">
                {{item.textButton}}
              </div>
            </div>
          </el-row>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imgDataList: { default: '' }
  },
  data () {
    return {
      carouselImgHeight: ''
    }
  },
  mounted () {
    if (this.ishome) {
      window.onresize = () => {
        return (() => {
          this.handleLableWidth()
        })()
      }
      this.handleLableWidth()
    }
  },
  methods: {
    handleLableWidth () {
      this.$nextTick(() => {
        this.carouselImgHeight = this.$refs.imgHeight['0'].width * 44 / 100 + 'px'
      })
    },
    routelink (type, routeLink, routeName) {
      // 跳转到详情页面
      if (type === 'EXPLORE') {
        // 跳到外链
        if (routeLink) {
          window.location.href = routeLink
          return
        }
        if (routeName) {
          this.$router.push({ name: routeName })
          return
        }
      }
      // 跳转到视频页面
      if (type === 'VIDEO') {

      }
    }
  }
}
</script>
<style lang="scss" scoped>
.contents {
  height: 922px;
  .img-content {
    height: 922px;
    position: relative;
    .el-carousel {
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      vertical-align: middle;
    }
    .img-textLeft {
      position: absolute;
      top: 37%;
      left: 30%;
      transform: translate(-50%, -50%);
      width: 30%;
      text-align: left;
      .textTop {
        // margin-bottom: 25px;
        font-size: 80px;
        font-family: GothamBold;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        line-height: 90px;
      }
      > .textImg {
        margin-bottom: 20px;
      }
      .textNC {
        padding-top: 30px;
        font-size: 18px;
        width: 325px;
        font-family: GothamBook;
        color: #666666;
        line-height: 22px;
        height: 39px;
      }
    }
    .img-textCenter {
      position: absolute;
      top: 450px;
      left: 50%;
      transform: translate(-50%, -50%);
      // width: 30%;
      text-align: center;
      .textTop {
        font-size: 80px;
        font-family: GothamBold;
        font-weight: 600;
        line-height: 90px;
        color: rgba(255, 255, 255, 1);
      }
      > .textImg {
        margin-bottom: 20px;
      }
      .textNC {
        padding-top: 30px;
        font-size: 18px;
        // width: 325px;
        font-family: GothamBook;
        color: #666666;
        line-height: 22px;
        height: 39px;
        letter-spacing: 5px;
      }
      .textNC3 {
        position: absolute;
        top: -30px;
        left: 28%;
        font-size: 18px;
        font-family: GothamBook;
        color: #666666;
        line-height: 22px;
        height: 39px;
        letter-spacing: 3px;
      }
    }
    .textButton,
    .textButton1 {
      cursor: pointer;
      position: absolute;
      text-align: center;
      border-radius: 30px;
      bottom: 120px;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 1px solid #fff;
      box-shadow: 0px 13px 20px 1px rgba(36, 64, 178, 0.2);
      font-size: 14px;
      font-family: SourceHanSansCN-Regular;
      color: rgba(255, 255, 255, 1);
      padding: 15px 55px;
    }
    .textButton1 {
      left: 20%;
      bottom: 25%;
    }
  }
}
</style>
<style lang="scss">
.contents .el-carousel__container {
  height: 922px !important;
}
</style>
