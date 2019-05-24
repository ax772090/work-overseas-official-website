<template>
  <img v-lazy='imgUrl'
       alt="图片加载失败" />
</template>
<script>
export default {
  name: 'lazyload-img',
  components: {

  },
  props: {
    imgUrl: {
      type: String,
      default: ''
    }
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
</style>
