<template>
  <!-- 使用方式 -->
  <!-- 引入：import prodBlock from '@/components/prodListBlock' -->
  <!-- <prod-block :prodList='prodList'></prod-block> -->
  <div>
    <div class="main">
      <div class="container">
        <ul class="clearfix">
          <li v-for="(item,index) in prodList"
              :key="index"
              class="brick-item ">
            <div class="prodName">{{ item.prodName }}</div>
            <div class="desc">{{ item.desc }}</div>
            <div class="brick-item-footer">
              <button class="btn"
                      @click="btnClick(item.routerName,item.externalLink)">{{item.btnName}}</button>
              <div class="pic">
                <!-- <img :src="item.pic"
                     alt="图片加载失败" /> -->
                <!-- <img v-lazy='item.pic'
                     alt="图片加载失败" /> -->
                     <lazyload-img :imgUrl='item.pic'></lazyload-img>
              </div>
            </div>
          </li>
          <li class="brick-item"
              v-if="comingsoon">
            <div class="last-li-flex">
              <span>Coming soon</span>
              <span>...</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import lazyloadImg from '@/components/lazyload-img'
export default {
  name: 'news',
  components: {
    lazyloadImg
  },
  props: {
    prodList: {
      type: Array,
      default: () => []
    },
    comingsoon: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    btnClick (routerName, externalLink) {
      this.$router.push({ name: routerName })
      if (externalLink) {
        window.location.href = externalLink
      }
    }
  }
}
</script>
<style scoped lang="scss">
$pt-20: 22px;
.main {
  min-width: 1200px;
  background-color: #efefef;
}

.container {
  width: 1556px;
  margin: 0 auto;
}

.container ul {
  margin: 0 auto;
  text-align: center;
  li {
    &:nth-child(2n) {
      margin-right: 0px;
    }
  }
}
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

.container .brick-item {
  position: relative;
  display: block;
  margin: 0 8px 10px 0;
  overflow: hidden;
  width: 774px;
  height: 707px;
  text-align: center;
  float: left;
  background: #fff;
  cursor: pointer;
  transition: box-shadow 600ms;
  &:nth-child(2n) {
    margin-right: 0px;
  }
  &:hover {
    // @include box-shadow;
    // transform: translateY(-4px);
    // animation-fill-mode: forwards;
    box-shadow: 0 20px 27px 0px $boxshadow000;
    .prodName {
      margin-top: 100px;
    }
    .desc {
      visibility: visible;
      animation: fade-in 1s;
    }
    .brick-item-footer{
      margin-top: 80px;
    }
    .btn {
      box-shadow: 0 13px 13px 0px $boxshadow009;
    }
  }
  .prodName {
    width: 500px;
    transition: margin-top 1s;
    cursor: auto;
    text-align: center;
    font-size: 42px;
    margin: 130px  auto 0;
  }
  .desc {
    cursor: auto;
    margin: 10px auto;
    width: 300px;
    visibility: hidden;
    position:absolute;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 14px;
    font-family: GothamBook;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    text-align: center;
    word-wrap: break-word; //只对英文起作用，以单词作为换行依据
  }
  .brick-item-footer{
    margin: 26px auto 0;
    transition: margin-top 1s;
  }
  .btn {
    cursor: pointer;
    display: block;
    margin: 5px auto;
    font-size: 14px;
    width: 152px;
    height: 44px;
    background: $fontColorFFF;
    border: 2px solid $borderColorDF;
    border-radius: 22px;
  }
  .pic {
    width: 622px;
    height: 410px;
    margin: 50px auto 0;
  }
  .last-li-flex {
    font-size: 42px;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
  }

  img {
    width: 100%;
    height: 100%;
  }
}

</style>
