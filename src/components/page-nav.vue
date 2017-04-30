<template>
<div class="wrap">
<span class="decor"></span>
<nav>
  <ul class="primary">
    <li>
      <a @click.prevent href="">联盟</a>
      <ul class="sub">
        <router-link :to="{name: 'union page'}" tag='li'><a @click.prevent href="">联盟介绍</a></router-link>
        <router-link :to="{name: 'union page'}" tag='li'><a @click.prevent href="">联盟服务</a></router-link>
        <router-link :to="{name: 'union page'}" tag='li'><a @click.prevent href="">联盟活动</a></router-link>
        <router-link :to="{name: 'union page'}" tag='li'><a @click.prevent href="">联盟会员</a></router-link>
      </ul>
    </li>
    <li>
      <a @click.prevent href="">工作组</a>
      <ul class="sub">
        <router-link :to="{name: 'admin center page'}" tag='li'><a href="" @click.prevent>管理中心</a></router-link>
        <router-link :to="{name: 'admin center page'}" tag='li'><a href="" @click.prevent>技术中心</a></router-link>
      </ul>
    </li>
    <router-link :to="{name: 'app market page'}" tag='li'>
      <a @click.prevent href="">应用市场</a>
    </router-link>
    <router-link tag='li' :to="{name: 'distribution flow page'}"><a @click.prevent href="">标准发布</a></router-link>
    <li>
      <a @click.prevent href="">标准化社区</a>
      <ul class="sub">
        <router-link tag='li' :to="{name: 'iso community page'}"><a @click.prevent href="">开源项目</a></router-link>
        <router-link tag='li' :to="{name: 'iso community page'}"><a @click.prevent href="">问题讨论</a></router-link>
      </ul>  
    </li>
    <router-link tag='li' :to="{name: 'document distribution page'}">
      <a @click.prevent href="">应用文档发布</a>
    </router-link>
    <router-link tag='li' :to="{name: 'video page'}">
      <a @click.prevent href="">宣贯栏目</a>      
    </router-link>
  </ul>
</nav>
</div>
</template>
<script>
    export default {
        name: 'navigation',
        data () {
            return {

            }
        }
    }
</script>
