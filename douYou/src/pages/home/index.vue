<template>
  <div>
    <v-header></v-header>
    <div class="square-content">
      <van-notice-bar
        :text="notice"
        left-icon="static/notice.png"
      />
      <div class="img-list">
        <van-list
          v-model="loading"
          :finished="finished"
          @load="onLoad"
        >
          <div v-for="item in list" class="list-content">
            <van-row>
              <van-col span="5">
                <img class="header-img" v-lazy="item.headerImg">
              </van-col>
              <van-col span="19">
                <van-row>
                  <van-col span="18" class="name">
                    {{item.userName}}
                  </van-col>
                  <van-col span="2" offset="4">
                    <van-icon style='font-size:0.4rem' name="like-o"/>
                  </van-col>
                  <van-col span="24" class="date">{{item.date}}</van-col>
                </van-row>
              </van-col>
            </van-row>
            <van-row class="list-body">
              <van-col span="24" class="title">{{item.title}}</van-col>
              <div v-if="item.type=='img'">
                <div v-if="item.src.length ===1">
                  <img v-for="imgItem of item.src" class="video" v-lazy="imgItem.url">
                </div>
                <div v-else>
                  <img v-for="imgItem of item.src" class="img-view" v-lazy="imgItem.url">
                </div>
              </div>
              <div v-else>
                <van-row>
                  <van-col span="24" @click="popPay()">
                    <video class="video" controls="controls" :src="item.src">
                    </video>
                  </van-col>

                  <van-col span="6" offset="18">
                    <van-button type="danger">我要打赏</van-button>
                  </van-col>
                </van-row>
              </div>
              </van-col>
            </van-row>
          </div>
        </van-list>
      </div>
    </div>
  </div>
</template>
<script>
  import Header from "./header.vue"
  export default{
    name: "home",
    components: {
      'v-header': Header
    },
    data(){
      return {
        loading: false,
        finished: false,
        notice: '足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。',
        list: [
          {
            id: 0,
            userName: "李四",
            title: "孙杨再次夺冠，呼啦啦。。。",
            headerImg: 'static/header.jpg',
            date: "2018-08-08 09:09",
            favorite: 0,
            src: [
              {
                id: 0,
                url: 'static/4.jpg',
              },
              {
                id: 2,
                url: 'static/4.jpg',
              },
              {
                id: 3,
                url: 'static/4.jpg',
              },
            ],
            type: 'img'
          },
          {
            id: 1,
            userName: "李四",
            title: "孙杨再次夺冠，呼啦啦。。。",
            headerImg: 'static/header.jpg',
            date: "2018-08-08 09:09",
            src: 'https://gslb.miaopai.com/stream/ER2relVRgndDY9yX~arFFUaZUxjzyHgWQK-Aaw__.mp4?ssig=82a29035ead7c314874f3f2c4ec1f61e&time_stamp=1535356819096&cookie_id=&vend=1&os=3&partner=1&platform=2&cookie_id=&refer=miaopai&scid=ER2relVRgndDY9yX%7EarFFUaZUxjzyHgWQK-Aaw__',
            favorite: 1,
            type: 'video'
          }
        ],
      }
    },
    methods: {
      onLoad(){
        setTimeout(() => {
          this.list.push({
            userName: "李四",
            title: "孙杨再次夺冠，呼啦啦。。。",
            headerImg: 'static/header.jpg',
            date: "2018-08-08 09:09",
            favorite: 1,
            src: [
              {
                id: 0,
                url: 'static/4.jpg',
              },
            ],
            type: 'img'
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
<style lang="scss">
  .van-notice-bar{
    background: #000;
    color:#fff;
    height: 24px;
  }

  .img-list {
    width: 100%;

  .list-content {
    padding: 10px;
    background: #fff;
    margin-top: 10px;

  .header-img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    box-shadow: beige 0 0 3px;
  }

  .name {
    font-size: large;
  }

  .date {
    color: darkgrey;
  }

  .list-body {

  .title {
    padding: 10px 0;
  }

  .img-view {
    width: 31%;
    margin-bottom: 10px;
  }

  .img-view:nth-child(3n-1) {
    padding: 0 3%
  }

  .video {
    width: 100%;
    height: auto;
  }

  }

  }
  }

</style>
