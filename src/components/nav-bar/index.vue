<template>
  <div class="nav">
    <ul id="nava">
      <li v-for="(item,index) in navList"
          :key="index"
          :class="selectNav === index ?'navClicked':''"
          @click="navClick(index)">{{item.navName}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'navbar',
  components: {

  },
  props: {
    navList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      selectNav: 0
    }
  },
  methods: {
    navClick (index) {
      this.selectNav = index
    }
  }
}
</script>
<style lang="scss" scoped>
.nav {
  width: 1556px;
  margin: 0 auto;
  & ul > li {
    display: inline;
    list-style: none;
    font-size: 16px;
    color: $fontColor333;
    margin: 14px;
    padding-bottom: 8px;
  }
  & ul > li:hover {
    border-bottom: 2px solid $borderbottomColor;
    cursor: pointer;
  }
}
.navClicked {
  cursor: pointer;
  border-bottom: 2px solid $borderbottomColor;
}
</style>
