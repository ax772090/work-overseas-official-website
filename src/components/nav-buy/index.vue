<template>
  <div>
    <div class="nav">
      <div class="navLeft">{{ navData.navdec }}</div>
      <div class="navRight">
        <div class="navType"
             @click="features(navData.featuresLink)">{{ navData.navFeatures}}</div>
        <div class="navType"
             @click="specifications(id)">{{ navData.navSpecifications }}</div>
        <div class="navbtn"
             @click="buy(navData.externalLink)">BUY</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'nav-buy',
  props: {
    navData: {
    },
    id: {
      type: String,
      default: ''
    }
  },
  methods: {
    buy (externalLink) {
      if (externalLink) {
        window.location.href = externalLink
      }
    },
    features (featuresLink) {
      if (featuresLink) {
        this.$router.push({ name: featuresLink })
      }
    },
    specifications (id) {
      this.$router.push({
        name: 'prodparameters',
        params: {
          id: id
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.nav {
  overflow: hidden;
  height: 75px;
  width: 100%;
  line-height: 75px;
  background: #f4f2f2;
  padding: 0 98px 0 113px;
  .navLeft {
    font-size: 22px;
    color: #333;
    float: left;
  }
  .navRight {
    float: right;
    line-height: 75px;
    .navType {
      cursor: pointer;
      font-size: 14px;
      line-height: 75px;
      float: left;
      color: #666;
      margin-right: 20px;
    }
    .navbtn {
      height: 30px;
      margin-top: 22.5px;
      border-radius: 20px;
      padding: 0 20px;
      line-height: 30px;
      background-color: #fb7c00;
      cursor: pointer;
      color: #fff;
      font-size: 12px;
      float: right;
    }
  }
}
</style>
