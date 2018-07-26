<template>
<div class="latest-news">
    <header class="section-header">
        <h1>最新消息</h1>
        
        <router-link href="" class='more' :to="{name: 'video page'}" @click.prevent>更多<i class="more icon-keyboard_arrow_right"></i></router-link>
    </header>
    <div class='news'>
      <div class="video-container">
        <video controls src="https://s3.cn-north-1.amazonaws.com.cn/eac.edu.sh.cn/%E5%9B%BE%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91/%E8%A7%86%E9%A2%91/%E8%B7%A8%E6%A0%A1%E8%AE%A4%E8%AF%81%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86%E5%8F%8A%E5%85%B6%E6%8E%A5%E5%85%A5%E6%96%B9%E6%B3%95(%E4%B8%8A%E5%8D%88)-1.mp4"></video>
      </div>
    <!-- <embed height="415" width="544" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="//static.hdslb.com/miniloader.swf" flashvars="aid=4337023&page=1" pluginspage="//www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed> -->
        <ul>
            <li><span>2017-04-06</span>
            <span>认证体系标准规范专家会议在上海开放大学顺利召开</span></li>
            <li><span>2017-07-05</span>
            <span>认证体系标准规范讲座在上海开放大学顺利举行</span></li>
            <li><span>2017-07-12</span>
            <span>各高职院校参加认证体系标准规范研讨会</span></li>
            <li><span>2017-12-21</span>
            <span>认证体系标准规范培训讲座</span></li>
        </ul>
    </div>
</div>
</template>

<script>

export default {
  name: 'latest-news',
  components: {
    
  }
}
</script>

<style lang="stylus">
.news
  width 100%
  display flex
  .video-container
    flex 3
    video 
      width 100%
  ul
    flex 2
    li
      width 100%
      position relative
      margin-bottom 1.1em
      span
        display block
        margin-bottom -.7em

</style>

