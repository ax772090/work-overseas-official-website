<template>
  <div>
    <!-- <headers></headers> -->
    <div id="btnTop"
         @click="returnTop()"><i class="iconfont substanbo-iconhuidaodingbu2"></i></div>
    <app-main></app-main>
    <Footers></Footers>
    <switcher ref="switcher"></switcher>
  </div>
</template>

<script>
import AppMain from './components/AppMain'
import Footers from '@/components/Footers'
import switcher from '@/components/switcher'
// import { IPlocation } from '@/api/index.js'

window.onscroll = function () {
  scrollFun()
}

function scrollFun () {
  var btnTop = document.getElementById('btnTop')
  var oTop = document.body.scrollTop || document.documentElement.scrollTop
  if (oTop > 0) {
    btnTop.style.display = 'block'
  } else {
    btnTop.style.display = 'none'
  }
}
export default {
  name: 'layout',
  components: {
    AppMain,
    Footers,
    switcher
  },
  data () {
    return {
      ip: '',
      re: /^[\u0391-\uFFE5A-Za-z]+$/
    }
  },
  created () {
    this.isChinaHander()
  },
  methods: {
    isChinaHander () {
      // IPlocation({ ip: localStorage.getItem('Ip') }).then((data) => {
      // })
      if (this.re.test(localStorage.getItem('cname'))) {
        this.$nextTick(() => {
          this.$refs.switcher.init()
        })
        // this.$confirm('是否切换到中文?', '提示', {
        //   confirmButtonText: '确定',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {
        //   window.location.href = 'http://www.substanbo.cn'
        // })
      } else {

      }
    },
    returnTop () {
      let timer = null
      cancelAnimationFrame(timer)
      timer = requestAnimationFrame(function fn () {
        var oTop = document.body.scrollTop || document.documentElement.scrollTop
        if (oTop > 0) {
          document.body.scrollTop = document.documentElement.scrollTop = oTop - 150// 150：每次向上的距离，可修改
          timer = requestAnimationFrame(fn)
        } else {
          cancelAnimationFrame(timer)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
#btnTop {
  display: none;
  width: 60px;
  font-size: 50px;
  line-height: 50px;
  position: fixed;
  bottom: 50px;
  right: 50px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  text-align: center;
  color: rgba(204, 204, 204, 0.5);
  background: #333;
  z-index: 999;
  &:hover {
    cursor: pointer;
    color: #333;
    background: #b5b5b5;
  }
}
</style>
