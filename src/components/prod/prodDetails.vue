<template>
  <div class="proddetails">
    <div class="title"></div>
    <div class="dimensions">
      <div class="dimensions-left">
        居中模块
      </div>
      <div class="dimensions-right"></div>
    </div>
    <div class="specification">
      <div class="specification-left"></div>
      <div class="specification-right"></div>
    </div>
    <div class="packageincludes">
      <div class="packageincludes-left"></div>
      <div class="packageincludes-right"></div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.proddetails {
  .title {
  }
  .dimensions {
    .dimensions-left {
      @include transformed;
    }
    .dimensions-right {
    }
  }
  .specification {
    .specification-left {
    }
    .specification-right {
    }
  }
  .packageincludes {
    .packageincludes-left {
    }
    .packageincludes-right {
    }
  }
}
</style>
