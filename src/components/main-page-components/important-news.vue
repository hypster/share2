<template>
<div class="important-news">
    <header class="section-header">
        <router-link  tag='h1' :to='{name: "open document"}'><a href='' @click.prevent>文档开放</a></router-link>
        <router-link tag='h1' :to='{name: "app market"}'><a href='' @click.prevent>应用市场</a></router-link>
        <router-link href='' @click.prevent class="more" :to="{name: 'document distribution page'}">更多</router-link>
    </header>
    <transition name='fade' mode='out-in'>
      <router-view></router-view>
    </transition>
</div>
</template>

<script>
export default {
  name: 'important-news',
  components: {
  },
  data () {
      return {
      }
  }
}
</script>
<style lang='stylus'>
header.section-header h1.router-link-active 
    border-bottom: 6px solid #0366d6
</style>

