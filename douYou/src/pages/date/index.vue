<template>
  <div>
    <v-header></v-header>
    <div class="video-content">
      <van-search placeholder="请输入搜索关键词" v-model="searchValue"/>
      <div class="img-list">
        <van-list
          v-model="loading"
          :finished="finished"
          @load="onLoad"
        >
          <van-row gutter="10">
            <van-col span="12" v-for="item in list" class="video-list">
              <img v-lazy="item.headerImg">
              <div class="location">
                <van-icon name="location" />
                <span>上海</span>
              </div>
              <div class="title">{{item.userName}}</div>
            </van-col>
          </van-row>
        </van-list>
      </div>
    </div>
  </div>
</template>
<script>
  import Header from "./header.vue"
  export default{
    name: "page-date",
    components: {
      'v-header': Header
    },
    data(){
      return {
        searchValue: '',
        loading: false,
        finished: false,
        list: [
          {
            title: "孙杨再次夺冠，呼啦啦。。。",
            type: 'video',
            userName: 'Leslie',
            headerImg: 'static/1.jpg',
            num: 23
          },
          {
            title: "孙杨再次夺冠，呼啦啦。。。",
            src: 'https://gslb.miaopai.com/stream/ER2relVRgndDY9yX~arFFUaZUxjzyHgWQK-Aaw__.mp4?ssig=82a29035ead7c314874f3f2c4ec1f61e&time_stamp=1535356819096&cookie_id=&vend=1&os=3&partner=1&platform=2&cookie_id=&refer=miaopai&scid=ER2relVRgndDY9yX%7EarFFUaZUxjzyHgWQK-Aaw__',
            type: 'video',
            userName: 'Leslie',
            headerImg: 'static/1.jpg',
            num: 23
          },
          {
            title: "孙杨再次夺冠，呼啦啦。。。",
            type: 'video',
            userName: 'Leslie',
            headerImg: 'static/1.jpg',
            num: 23
          },
        ],
      }
    },
    methods: {
      onLoad(){
        setTimeout(() => {
          this.list.push({
            title: "孙杨再次夺冠，呼啦啦。。。",
            type: 'video',
            userName: 'Leslie',
            headerImg: 'static/1.jpg',
            num: 23
          });
          this.loading = false;

          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 500);
      }
    }
  }
</script>
<style scoped lang="scss">
  .van-search {
    padding: 7px;
  }

  .img-list {
    background: #fff;
    padding: 10px;
    text-align: center;

  .video-list {
    margin: 8px 0;
  video{
    width:100%;
  }
  }

  img {
    width: 95%;
  }

  .title {
    padding: 2px 0;
    text-align: center;
    font-size:0.4rem;
    color:#fea0bb;
  }
  .location{
    position: relative;
    z-index: 2;
    margin-top: -0.15rem;
    width: 95%;
    margin-left: 2.5%;
    background: rgba(0,0,0,.8);
    height: 0.5rem;
    color: #fff;
    text-align: left;
    padding:2px 0 2px 5px;
  }

  }


</style>
