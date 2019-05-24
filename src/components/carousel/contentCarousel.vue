<template>
  <div>
    <p class="demonstration">{{ title }}</p>
    <div class="content">
      <el-carousel :loop='false'
                   indicator-position="outside">
        <el-carousel-item v-for="item in imgDataList"
                          :key="item.code">
          <img ref="imgHeight"
               :src="item.img"
               :alt="item.name">
          <div class="content-product">
            <p class="textBrand"
               v-for="(item,index) in item.textBrand"
               :key="index">{{ item }}</p>
               <div>

            <p class="textDescribe" v-for="(item,index) in item.textDescribe" :key="index">{{ item }}</p>
               </div>
            <div class="btns">
              <div v-for="(item,index) in item.textButton"
                   :key="index"
                   @click="toprodetail(item.name,item.routeLink,item.routeName)"
                   class="textButton">{{item.name}}
                <i></i>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  name: 'carousel',
  props: {
    imgDataList: {
      default: []
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    toprodetail (type, routeLink, routeName) {
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
<style lang="scss" >
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__container .el-carousel__indicators {
  top: 0 !important;
}
.carousel {
  width: 1556px;
}
.demonstration {
  font-size: 50px;
  color: #4e5056;
  font-family: GothamBold;
  font-weight: 400;
  margin-bottom: 100px;
  margin-top: 100px;
}

.content {
  .el-carousel__indicators {
    position: absolute;
  }
  .el-carousel__indicators.el-carousel__indicators--outside {
    position: absolute;
  }
  .content-product {
    text-align: left;
    position: absolute;
    left: 128px;
    top: 218px;
    .textBrand {
      font-size: 60px;
      line-height: 58px;
      color: #fff;
    }
    .textDescribe {
      color: #fff;
      // width: 300px;
      font-size: 16px;
      // margin-top: 30px;
      font-family: GothamBook;
      font-weight: 400;
      &:first-child{
          margin-top: 30px;
      }
    }
    .btns {
      .textButton {
        margin-top: 115px;
        margin-right: 15px;
        float: left;
        text-align: center;
        border-radius: 30px;
        font-size: 14px;
        color: #fff;
        border: 1px solid #fff;
        padding: 15px 42px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  .el-carousel {
    position: static;
    height: 720px;
    img {
      width: 100%;
      height: 100%;
    }
    .el-carousel__container {
      height: 100%;
    }
  }
}
.carousel.center {
  position: relative !important;
}
.content
  .el-carousel
  .el-carousel__indicators.el-carousel__indicators--outside {
  position: absolute !important;
  left: 50%;
  transform: translate(-50%, 0);
}
.content .el-carousel__indicators--outside {
  top: 100px;
}
.content .el-carousel__button {
  width: 70px;
}
.content .el-carousel__indicator.is-active button {
  background-color: #001f94;
}
</style>
