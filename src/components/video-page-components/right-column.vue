<template>
<div class='right-column'>
    <h2>视频名称</h2>
    <div class="video-container">
        <video controls src="https://s3.cn-north-1.amazonaws.com.cn/eac.edu.sh.cn/%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91/%E8%A7%86%E9%A2%91/%E2%80%9C%E6%95%99%E8%82%B2%E8%BA%AB%E4%BB%BD%E8%AE%A4%E8%AF%81%E4%BD%93%E7%B3%BB%E6%A0%87%E5%87%86%E8%A7%84%E8%8C%83%E2%80%9C%E6%8A%80%E6%9C%AF%E7%A0%94%E8%AE%A8%E4%BC%9A.mp4"></video>
      </div>
    <!-- <div class='pub-event'>
      <a class='button'>关键词1</a>
      <a class='button'>关键词2</a>
    </div> -->
</div>
</template>
<script>

export default {
    data () {
        return {}
    },
    components: {
    }
}
</script>
<style lang='stylus' scoped>
video 
  width 100%
.right-column
  padding: 20px
  h2
    font-size: (33/2)px
    color: #666
    margin-bottom: 20px
  .video-wrapper
    position: relative
    width: 480px
    height: 400px
    embed
      position: absolute
      width: 100%
      height: 100%
      top: 0
      left: 0
  .pub-event
    text-align: left
    margin-top: 20px
    
</style>