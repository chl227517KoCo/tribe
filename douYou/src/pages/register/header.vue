<template>
  <van-nav-bar title="立即注册"
               left-text="登录"
               @click-left="toLogin"
  ></van-nav-bar>
</template>


<script>

  export default {
    name: "header",
    methods: {
      toLogin(){
        console.log('toLogin');
        this.$router.push('/login');
      }

    }
  }
</script>
