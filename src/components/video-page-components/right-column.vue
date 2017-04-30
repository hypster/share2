<template>
<div class='right-column'>
    <h2>视频名称</h2>
    <div class='video-wrapper'>
    <embed src='http://player.youku.com/player.php/sid/XMjcyNTc3MjUyNA==/v.swf' allowFullScreen='true' quality='high' width='480' height='400' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash'></embed>
    </div>
    <div class='pub-event'>
      <a class='button'>关键词1</a>
      <a class='button'>关键词2</a>
    </div>
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