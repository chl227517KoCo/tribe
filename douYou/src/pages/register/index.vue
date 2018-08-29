<template>
  <div>
    <v-header></v-header>
    <div class="mg10">
      <van-cell-group >
        <van-field
          v-model="phone"
          required
          label="手机号"
          placeholder="请输入手机号"
        />
        <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          placeholder="请输入用户名"
        />

        <van-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
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
  .mg10{
    margin-top:10px;
  }
  .btn{
    width:90%;
    margin: 40px 5%;
  }

</style>
