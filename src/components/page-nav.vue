<template>
<div class="wrap">
<span class="decor"></span>
<nav>
  <ul class="primary">
    <li>
      <router-link :class= "{active: currentNav == 'union page'}"  :to="{name: 'introduction'}" tag="a" @click.prevent href="">联盟</router-link>
      <ul class="sub">
        <router-link :to="{name: 'introduction'}" tag='li'><a @click.prevent href="">联盟介绍</a></router-link>
        <router-link :to="{name: 'service'}" tag='li'><a @click.prevent href="">联盟服务</a></router-link>
        <router-link :to="{name: 'activity'}" tag='li'><a @click.prevent href="">联盟活动</a></router-link>
        <router-link :to="{name: 'members'}" tag='li'><a @click.prevent href="">联盟会员</a></router-link>
      </ul>
    </li>
    <li>
      <router-link tag="a" :to="{name: 'admin center'}" @click.prevent href="" :class="{active: currentNav == 'admin center page'}">工作组</router-link>
      <ul class="sub">
        <router-link :to="{name: 'admin center'}" tag='li'><a href="" @click.prevent>管理中心</a></router-link>
        <router-link :to="{name: 'tech center'}" tag='li'><a href="" @click.prevent>技术中心</a></router-link>
      </ul>
    </li>
    <li>
      <router-link  :class="{active: currentNav == 'app market page'}" :to="{name: 'app market page'}" tag='a' @click.prevent href=''>应用市场
      </router-link>
    </li>
    <li>
      <router-link :class="{active: currentNav == 'distribution flow page'}" tag='a' :to="{name: 'distribution flow page'}" @click.prevent href="">标准发布</router-link>
    </li>
    <li>
      <router-link :to="{name: 'repos'}" :class="{active: currentNav == 'iso community page'}"  @click.prevent tag="a" href="">标准化社区</router-link>
      <ul class="sub">
        <router-link tag='li' :to="{name: 'repos'}"><a @click.prevent href="">开源项目</a></router-link>
        <router-link tag='li' :to="{name: 'discussion'}"><a @click.prevent href="">问题讨论</a></router-link>
      </ul>  
    </li>
    <li>
      <router-link tag='a' :class="{active: currentNav == 'document distribution page'}" :to="{name: 'document distribution page'}" href='' @click.prevent>
        应用文档发布
      </router-link>
    </li>
    <li>
      <router-link tag='a' :class="{active: currentNav == 'video page'}" :to="{name: 'video page'}" @click.prevent href="">
        宣贯栏目  
      </router-link>
    </li>
  </ul>
</nav>
</div>
</template>
<script>
import $ from 'jquery'
    export default {
        name: 'navigation',
        data () {
            return {

            }
        },
        computed: {
          currentNav() {
            return this.$route.matched.filter(m => {
              if(!m.parent) {
                return m.name
              }
              return false
            })[0].name
            
          }
        },
        mounted() {
          console.log(this.$route)
          this.$route.matched.forEach(m => {
            if (m.name === 'union page') {
              
            }
          })
          let aList = $('.primary a')
          let subList = $('.sub li')
          // console.log(subList)
          // subList.click(function(e) {
          //   console.log('click sub')
          //   $(this).parent().addClass('active')
          // })
          // subList.addEventListener(function(e) {
          //   console.log(e.target.parentNode)
          //   // console.log(e.target.parentNode)
          // })
        //   aList.click(function(e){
        //     console.log(e)
        //     if(e.target)
        //     aList.removeClass('active')
        //     $(this).addClass('active')
        //   })
        }
    }
</script>
<style lang="stylus" scoped>

</style>

