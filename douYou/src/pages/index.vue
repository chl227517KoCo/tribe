<template>
  <div class="home">
    <div class="top">
      <!--渲染子路由在router文件夹里面配置的子路由，父路由是home，子路由是index，need，source，mine-->
      <router-view></router-view>
    </div>
    <van-tabbar v-model="active" style="z-index: 1999">
      <van-tabbar-item
        v-for="(tab, index) in tabBar"
        :icon="tab.icon"
        :to="tab.path"
        :dot="tab.dot"
        :info="tab.info"
        :key="index">
        {{tab.name}}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
  import { Tabbar, TabbarItem } from 'vant';
  export default {
    data() {
      return {
        active: 0,
        tabBar: [{
          name: "广场",
          path: "/home",
          pathName: "square",
          icon: "wap-home",
          dot: false,
          info: ""
        },
          {
            name: "视频",
            path: "/video",
            pathName: "video",
            icon: "play",
            dot: false,
            info: ""
          },
          {
            name: "小说",
            path: "/novel",
            pathName: "novel",
            icon: "idcard",
            dot: false,
            info: ""
          },
          {
            name: "约会",
            path: "/date",
            pathName: "date",
            icon: "like-o",
            dot: false,
            info: ""
          },
          {
            name: "我的",
            path: "/user",
            pathName: "user",
            icon: "contact",
            dot: false,
            info: ""
          }
        ]
      }
    },

    watch:{
      '$route': 'changeActive'
    },
    created: function(){
      const toName = this.$route.name;
      //通过在子路由配置对应的active的数值，在meta对象里面的index
      this.active = this.$route.meta.index;
      this.setActive(toName)
    },
    methods: {
      changeActive({ name }){
        this.setActive(name);
        this.$router.push('/'+name);
      },
      setActive(name){
        this.tabBar.forEach((tab, i) => {
          if(tab.pathName == name){
            this.active = i;
            return false;
          }
        })
      }
    },
    components:{
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem,
    }
  }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .top {
    position: relative;
    padding-bottom:50px;
  }
</style>
