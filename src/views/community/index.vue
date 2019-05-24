<template>
  <div id="audio-video">
    <headers></headers>
    <headerImg :headerData='headerData'
               :styleType='headerData.styleType'></headerImg>
  </div>
</template>
<script>
import Headers from '@/components/Headers'
import headerImg from '@/components/Headers/headerImg'
export default {
  name: 'audioVideo',
  components: {
    Headers,
    headerImg
  },
  data () {
    return {
      headerData: [{
        img: require('@/images/audio-video/audiobg@1x.jpg'),
        textTop: ['AUDIO&VIDEO'],
        textBottom: ['premium audiovisual experience'],
        styleType: 'imgcenter',
        textTopfz: '',
        textToplh: ''
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
