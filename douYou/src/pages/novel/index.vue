<template>
  <div>
    <v-header></v-header>
    <div class="novel-list">
      <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad"
        v-for="item of list"
      >
        <van-panel :title="item.title"  status="阅读" class="list-body">
          <div>{{item.desc}}</div>
        </van-panel>
      </van-list>
    </div>
  </div>
</template>
<script>
  import Header from "./header.vue"
  export default{
    name: "page-novel",
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
            title: "午后红茶",
            desc: '有这么多个理想，有些根本不到我想，也有些得到会变样，久不久隔靴搔痒，闷热当乘凉，吻你假使将会中枪，宁愿运用自由想像',

          },
          {
            title: "春夏秋冬",
            desc: '秋天该很好，你若尚在场，秋风即使带凉 亦漂亮，深秋中的你填密我梦想，就像落叶飞，轻敲我窗'
          },
        ],
      }
    },
    methods: {
      onLoad(){
        setTimeout(() => {
          this.list.push({
            title: "Dear Leslie",
            desc: 'Dear Leslie，我想知道你好吗，心仍然牵挂，情难自控，那绝代和永远芳华。念着当年情，每首歌再细心倾听，多年来苦拼，沉默是天性，你就是永恒明星。'
          });
          this.loading = false;

          if (this.list.length >= 10) {
            this.finished = true;
          }
        }, 500);
      }
    }
  }
</script>
<style scoped lang="scss">
  .list-body{
    margin:10px 0;
    padding:5px 10px;
  }

</style>
