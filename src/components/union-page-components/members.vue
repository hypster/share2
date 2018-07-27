<template>
<div>
  <div class='member'>
    <div v-for='img in images' :key='img'>
      <a target="_blank" :href='getLink(img)'><img :src="img" alt=""></a>
      <a target="_blank" :href='getLink(img)'><h2>{{getName(img) }}</h2></a>
    </div>
  </div>
</div>
</template>
<script>
import images from '../../../static/logo'
import map from './map'
let re = /^\/(.+\/)*(.+)\.(.+)$/
export default {
    data () {
        return {
          images
        }
    },
    components: {
    },
    methods: {
      getName(v) {
        let matched = v.match(re)
        if(matched && matched.length > 2) {
          return matched[2].split('.')[0]
        } else {
          return matched
        }
      },
      getLink(v) {
        let name = this.getName(v)
        let link =  map.find(arr => {
          return arr[0] === name
        })
        return link? link[1]: ''
      }
    },
    filters: {
      truncate(v) {
    
        let re = /^\/(.+\/)*(.+)\.(.+)$/
        console.log(v.match(re)[0])
      }
    },
    created() {
      
    }
}
</script>
<style lang='stylus'>
.member
  display: flex
  justify-content: space-between
  align-items: center
  margin-bottom: 20px
  width 100%
  flex-wrap wrap
  div
    margin-right 1em
    text-align center
    margin-bottom 1em
    width 100px
    height 100px
    flex-direction column
    align-items center
    justify-content flex-start
    display flex
    img
      display inline-block
      height 40px
      margin-bottom .5em
  p
    margin-bottom 0
</style>