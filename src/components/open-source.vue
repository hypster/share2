<template>
<div class="pub-event">
    <header class="section-header">
        <h1>开源项目社区</h1>
    </header>
    <div>
        <ul>
            <li class="project" v-for='i in 5'>
                <h2 class="project-title">.gitignore</h2>
                <p>a collection of usefule gitignore templates</p>
                <label for="" class="tag">git</label>
                <label for="" class="tag">linguistic</label>
                <label for="" class="tag">linguistic</label>
            </li>
        </ul>
    </div>
    <a href="" class="button">浏览更多</a>
</div>
</template>

<script>

export default {
  name: 'open-source',
  components: {
  },
  data () {
      return {
      }
  }
}
</script>

<style>

</style>
