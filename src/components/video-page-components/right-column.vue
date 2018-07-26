<template>
<div class='right-column'>
    <h2>视频名称</h2>
    <div class="video-container">
        <video controls src="https://s3.cn-north-1.amazonaws.com.cn/eac.edu.sh.cn/%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91/%E8%A7%86%E9%A2%91/%E8%B7%A8%E6%A0%A1%E8%AE%A4%E8%AF%81%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86%E5%8F%8A%E5%85%B6%E6%8E%A5%E5%85%A5%E6%96%B9%E6%B3%95(%E4%B8%8A%E5%8D%88)-1.mp4"></video>
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