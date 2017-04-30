<template>
<div class="latest-news">
    <header class="section-header">
        <h1>最新消息</h1>
        <a href="" class='more' @click.prevent>更多<i class="more icon-keyboard_arrow_right"></i></a>
    </header>
    <div class='news'>
    <embed height="415" width="544" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="//static.hdslb.com/miniloader.swf" flashvars="aid=4337023&page=1" pluginspage="//www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>
        <ul>
            <li v-for='i in 8'>大事记{{i}}</li>
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

<style>

</style>
