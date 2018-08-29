<template>
  <div class="login-header">
    <span @click="register()">注册</span>
  </div>
</template>


<script>

  export default {
    name: "login-header",
    methods: {
      register(){
        this.$router.push('/register');
      }

    }
  }
</script>
<style lang="scss">
  .login-header {
    height: 46px;
    line-height: 46px;
    text-align: right;
    padding: 5px;
  span {
    color: #fff;
    padding: 5px 15px;
    border: 1px solid #fff;
    border-radius: 23px;
  }

  }
</style>
