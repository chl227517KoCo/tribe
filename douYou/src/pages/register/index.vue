<template>
  <div class="register_bg">
    <v-header></v-header>
    <div class="mg10">
      <div class="header-img">
        <img src="static/img/register_img.png"/>
      </div>
      <van-cell-group>
        <van-field
          v-model="phone"
          left-icon="contact"
          placeholder="请输入手机号"
        />
        <van-field
          v-model="username"
          clearable
          left-icon="contact"
          placeholder="请输入用户名"
        />

        <van-field
          v-model="password"
          type="password"
          left-icon="contact"
          placeholder="请输入密码"
        />
      </van-cell-group>
      <van-button size="large" type="primary" class="mg10 btn">立即注册</van-button>
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
  .van-field, .van-cell__left-icon {
    line-height: 30px;
  }

  .mg10 {
    margin-top: 10px;
  }

  .btn {
    width: 80%;
    margin: 40px 10%;
    background-color: #000;
    border: 1px solid #000;
    border-radius: 3rem
  }

  .register_bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('../../../static/img/register_bg.png') 100% 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;

  .header-img {
    text-align: center;
    margin: 2rem 0;

  img {
    width: 7rem;
  }

  }
  }

</style>
