<template>
<div class="pub-event">
  <!-- <header class="section-header">
      <h1>开源项目社区</h1>
  </header> -->
  <ul class="tech_stack">
    <li :class="{active: currentTechStack === q}" @click="onClickStackItem(q, i)" v-for='(q,i) in queryTerms' :key='q'>{{q}}</li>
  </ul>
  <ul class="repo_list">
    <li class="project" v-if="currentDisplayData" v-for="item in currentDisplayData" :key="item.id">
      <h2 class="project-title"><a :href="item.html_url">{{item.full_name}}</a></h2>
      <label for="" class="tag">
        <i class="fas fa-star"></i>
        {{item.stargazers_count}}
        </label>
        <label for="" class="tag">
          <i class="fas fa-eye"></i>
          {{item.watchers_count}}
        </label>
        <label for="" class="tag">
          <i class="fas fa-code-branch"></i>
          {{item.forks_count}}
        </label>
    </li>
  </ul>
</div>
</template>

<script>
var apiURL = 'https://api.github.com/repos/apereo/cas/commits?per_page=3&sha='
let apiUrlBase= 'https://api.github.com/search/repositories?q='
let queryTerms = ['CAS','oauth','openID', 'saml', 'shibboleth']
let apis = queryTerms.map(q => {
  return apiUrlBase + q 
})
export default {
  name: 'open-source',
  components: {
  },
  data () {
      return {
        currentTechStack: {},
        currentDisplayData: [],
        apiURL,
        queryTerms,
        apis,
        data: []
      }
  },
  created(){
    let data = JSON.parse(sessionStorage.getItem('data'))
    if(data) {
      this.data = data
      this.onClickStackItem('CAS', 0)
    } else {
      Promise.all(this.apis.map(api => {
        return this.fetchData(api)
      })).then(data => {
        this.data = data
        sessionStorage.setItem('data', JSON.stringify(data))
        this.onClickStackItem('CAS', 0)
      })
      .catch(e => {
        console.log(e)
      })
    }
  },
  computed: {
    current_item() {
      if(this.test.items)
        return this.test.items.slice(0, 10)
      else return []
    }
  },
  watch: {
    currentBranch: 'fetchData'
  },
  filters: {
    truncate: function (v) {
      var newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate: function (v) {
      return v.replace(/T|Z/g, ' ')
    }
  },

  methods: {
    fetchData: function (api) {
      var xhr = new XMLHttpRequest()
      var self = this
      return new Promise((resolve, reject) => {
        xhr.open('GET', api)
        xhr.onload = function () {
           resolve(JSON.parse(xhr.responseText))
        }
        xhr.onerror = function(e) {
          reject(e)
        }
        xhr.send()
      })
    },
    onClickStackItem(q, i) {
      this.currentTechStack = q
      this.currentDisplayData = this.data[i].items
    }
  },
}
</script>

<style scoped lang='stylus'>
.tech_stack
  display flex
  line-height 1.5
  justify-content center
  li
    margin-right 1em
    font-size larger
    &:hover
      cursor pointer
    &.active
      border-bottom 6px solid #0366d6
    &:last
      margin-right 0
.repo_list
  // height 500px
  overflow hidden
  display flex
  flex-direction column
  justify-content flex-start
  flex-wrap wrap
  li
    width 100%
    max-width 100%
    a
      width 100%
      display inline-block
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
</style>
