<template>
<div class='document-distribution-page'>
<div class='wrapper open-source-wrap'>
     <div v-for='i in 5' class="open-source">
                <h2>上海市教育软件有限公司XX文档</h2>
                <p class="report-info">
                    <label class="icon-bookmark">发布时间</label><label class="category">12小时前</label>
                </p>
                <a href="">下载Word格式</a>
                <a href="">下载PDF格式</a>
            </div>
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
.document-distribution-page
  padding-top: 20px
  .wrapper
    box-sizing: border-box
    display: block
    padding: 20px
    background-color: #fff
</style>