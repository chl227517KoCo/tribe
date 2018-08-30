<template>
  <van-nav-bar title="立即注册"
               left-text="<"
               @click-left="toLogin"
  ></van-nav-bar>
</template>


<script>

  export default {
    name: "header",
    methods: {
      toLogin(){
        this.$router.push('/login');
      }

    }
  }
</script>
<style lang="scss">
  .van-nav-bar__text{
    color:#000;
  }
</style>
