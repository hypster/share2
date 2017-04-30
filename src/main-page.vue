<template>
<div>
<latest-news></latest-news>
    <div class="section-wrapper">
      <important-news></important-news>
      <open-source></open-source>
    </div>
</div>
</template>
<script>
import latestNews from '@/components/latest-news'
import importantNews from '@/components/important-news'
import openSource from '@/components/open-source'
export default {
    data () {
        return {}
    },
    components: {
        latestNews,
        importantNews,
        openSource
    }
}
</script>