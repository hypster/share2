<template>
<div class='sidebar'>
    <h1>相关视频</h1>
    <div class='video-wrapper'>
        <embed src='http://player.youku.com/player.php/sid/XMjcyNTc3MjUyNA==/v.swf' allowFullScreen='true' quality='high' width='480' height='400' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash'></embed>
    </div>
    <div class="video-wrapper">
        <embed src='http://player.youku.com/player.php/sid/XMjcyNTc3MjUyNA==/v.swf' allowFullScreen='true' quality='high' width='480' height='400' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash'></embed>
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
<style lang="stylus" scoped>
.sidebar
  background-color: #fff
  padding: 20px
  h1
    font-size: (33/2)px
    color: #666
    margin-bottom: 20px
  div.video-wrapper
    position: relative
    width: (480/2)px
    height: (400/2)px
    margin-bottom: 20px
    embed
      position: absolute
      top: 0
      left: 0 
      width: 100%
      height: 100%
</style>