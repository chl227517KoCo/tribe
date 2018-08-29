<template>
  <div>
    <v-header></v-header>
    <div class="video-content">
      <van-search placeholder="请输入搜索关键词" v-model="searchValue"/>
      <div class="tag">
        <span class="tag-title">标签：</span>
        <van-tag plain type="primary" v-for="tagItem of tag">{{tagItem.name}}</van-tag>
      </div>
      <div class="img-list">
        <van-list
          v-model="loading"
          :finished="finished"
          @load="onLoad"
        >
          <van-row gutter="10">
            <van-col span="12" v-for="item in list" class="video-list">
              <video controls="controls" :src="item.src"></video>
              <div class="title">{{item.title}}</div>
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
    name: "page-video",
    components: {
      'v-header': Header
    },
    data(){
      return {
        searchValue: '',
        loading: false,
        finished: false,
        tag: [
          {
            id: 0,
            name: '搞笑'
          },
          {
            id: 2,
            name: '可爱'
          },
          {
            id: 3,
            name: '教程'
          },
          {
            id: 4,
            name: '高清'
          },
          {
            id: 0,
            name: '搞笑'
          }, {
            id: 5,
            name: 'hd'
          },
          {
            id: 6,
            name: '电视剧'
          },
          {
            id: 7,
            name: '电影'
          },
          {
            id: 8,
            name: '周杰伦'
          },
          {
            id: 9,
            name: '音乐视频'
          },
          {
            id: 10,
            name: '张国荣演唱会'
          },

        ],
        list: [
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
            src: 'https://gslb.miaopai.com/stream/ER2relVRgndDY9yX~arFFUaZUxjzyHgWQK-Aaw__.mp4?ssig=82a29035ead7c314874f3f2c4ec1f61e&time_stamp=1535356819096&cookie_id=&vend=1&os=3&partner=1&platform=2&cookie_id=&refer=miaopai&scid=ER2relVRgndDY9yX%7EarFFUaZUxjzyHgWQK-Aaw__',
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
        ],
      }
    },
    methods: {
      onLoad(){
        setTimeout(() => {
          this.list.push({
            title: "孙杨再次夺冠，呼啦啦。。。",
            src: 'https://gslb.miaopai.com/stream/ER2relVRgndDY9yX~arFFUaZUxjzyHgWQK-Aaw__.mp4?ssig=82a29035ead7c314874f3f2c4ec1f61e&time_stamp=1535356819096&cookie_id=&vend=1&os=3&partner=1&platform=2&cookie_id=&refer=miaopai&scid=ER2relVRgndDY9yX%7EarFFUaZUxjzyHgWQK-Aaw__',
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
  .tag {
    margin: 0 7px 7px;

  .tag-title {
    font-size: smaller;
  }

  span {
    margin: 0 1px;
  }

  }
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
    display: -webkit-box !important;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
  }
  .user-info{
    margin-top:20px;
    .header-img{
      width:0.7rem;
      height:0.7rem;
      border-radius: 50%;
    }
  }

  }


</style>
