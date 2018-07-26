<template>
<div class='sidebar'>
    <ul>
        <li><router-link :to='{name: "repos"}' @click.prevent href=''>开源项目社区</router-link></li>
        <li><router-link href='' :to='{name: "discussion"}' @click.prevent>问题讨论</router-link></li>
    </ul>
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

</style>