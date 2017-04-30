<template>
<div class='right-column pub-event'>
    <div>
        <ul>
            <li class="project icon-play3" v-for='i in 5'>
                <h2 class="project-title">.gitignore</h2>
                <p>a collection of usefule gitignore templates</p>
                <label for="" class="tag">git</label>
                <label for="" class="tag">linguistic</label>
                <label for="" class="tag">linguistic</label>
            </li>
        </ul>
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
  padding-top: 30px
  background-color: #fff
  li.project    
    padding-left: 0
    position: relative
    padding-left: 1em
    &.icon-play3:before
      position: absolute
      left: 0
      top: 1px
      font-size: 8px
      color: #5486ec
</style>