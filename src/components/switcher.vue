<template>
  <Dialog :dialogData="dialogData"
          @close='closeHandle'
          class="switcher-dialog-class">
    <template slot="dialogbody">
      <div class="switcher-content">
        <p class="text-en">WELCOME&nbsp;TO</p>
        <p class="text-com">substanbo.com</p>
        <p class="text-cn">欢&nbsp;迎&nbsp;来&nbsp;到&nbsp;宏&nbsp;博&nbsp;伟&nbsp;智&nbsp;官&nbsp;网</p>
        <div class="text-button">
          <a href="http://www.substanbo.cn">
            <p class="text-buttom-p1">访&nbsp;问&nbsp;中&nbsp;文&nbsp;网&nbsp;站</p>
            <p class="text-buttom-p2">substanbo.com</p>
          </a>
        </div>
        <div class="text-footer" @click="textFooterHander">
          <span>继续浏览substanbo.com</span>
          <p>continue to visit substanbo international website</p>
        </div>
      </div>
    </template>
    <template slot="dialogfooter">
      <!-- <el-button type="primary"
                 @click="handerYes">确定</el-button> -->
    </template>
  </Dialog>
</template>

<script>
import Dialog from '@/components/dialog/dialog-all'
export default {
  props: {
    type: {
      default: 'textarea'
    },
    autosize: {
      type: [Object, Array],
      default: function () {
        return {
          minRows: 1,
          maxRows: 3
        }
      }
    }
  },
  components: {
    Dialog
  },
  data () {
    return {
      dataList: [],
      topic: '',
      dialogData: {
        visible: false,
        title: '',
        width: '',
        isShowclose: true,
        modalAppendBody: false
      }
    }
  },
  methods: {
    init (data) {
      this.dialogData.visible = true
    },
    handerYes () {
      this.$emit('')
    },
    closeHandle () {
    },
    textFooterHander () {
      this.dialogData.visible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.switcher-content {
  text-align: center;
  padding-top: 80px;
  color: #000;
  .text-en {
    font-size: 48px;
    line-height: 48px;
    color: #002884;
    font-weight: 700;
  }
  .text-com {
    font-size: 16px;
    line-height: 20px;
  }
  .text-cn {
    font-size: 18px;
    line-height: 20px;
    margin-bottom: 80px;
  }
  .text-button {
    height: 70px;
    width: 350px;
    margin: 0 auto;
    padding: 17px 0;
    border-radius: 35px;
    background-color: #002884;
    color: #fff;
    .text-buttom-p1 {
      font-size: 18px;
    }
    .text-buttom-p2 {
      font-size: 14px;
    }
  }
  .text-footer {
    margin-top: 60px;
    font-size: 14px;
    cursor:pointer;
    >span{
      color:#002884;
    }
  }
}
</style>

<style lang="scss">
.switcher-dialog-class .el-dialog {
  width: 860px;
  height: 490px;
  background-color: pink;
  background: url("../assets/images/loader/switcher.jpg");
  background-size: 860px 490px;
  .el-dialog__body {
    padding: 0;
  }
}
</style>
