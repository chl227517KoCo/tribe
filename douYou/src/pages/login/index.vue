<template>
  <div class="bg-img">
    <v-header></v-header>
    <div class="login-body">
      <div class="header-img">
        <img src="static/img/user.png"/>
      </div>
      <van-cell-group>
        <van-field
          v-model="username"
          left-icon="contact"
          clearable
          placeholder="请输入账号/手机号"
        />

        <van-field
          v-model="password"
          left-icon="password-view"
          type="password"
          placeholder="请输入密码"
          icon="password-view"
        />
      </van-cell-group>
      <van-button size="large" type="primary" class="mg10 btn">立即登录</van-button>
      <div class="forget">忘记密码？</div>
      <div style="margin:20px;">
        <img style="width:100%;" src="static/img/or.png"/>
        <van-row type="flex" justify="space-around" class="other mg10">
          <van-col span="8">
            <img src="static/img/wechat.png"/>
          </van-col>
          <van-col span="8">  <img src="static/img/weibo.png"/></van-col>
          <van-col span="8"><img src="static/img/qq.png"/></van-col>
        </van-row>
      </div>
    </div>

    </van-field>

  </div>
</template>
<script>
  import header from "./header.vue"
  export default{
    name: "date",
    components: {
      'v-header': header
    },
    data(){
      return {
        username: '',
        password: '',
      }
    },
    methods: {}
  }
</script>
<style scoped lang="scss">
  .van-cell-group:after{
    border-top:0px #fff;
  }
  .bg-img {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('../../../static/img/login_bg.png') 100% 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  .login-body {
    margin-top: 7rem;

  .header-img {
    text-align: center;

  img {
    width: 6rem;
    height: 6rem;
  }

  }

  }
  }
  .mg10 {
    margin-top: 10px;
  }

  .btn {
    width: 80%;
    margin: 40px 10%;
    background-color: #000;
    border:1px solid #000;
    border-radius:3rem
  }
.forget{
  text-align: right;
  margin:0 10px;
}
.other{
  .van-col{
    text-align: center;
  img{
    height:1.5rem;
  }

  }
}

</style>
