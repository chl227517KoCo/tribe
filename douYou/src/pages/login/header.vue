<template>
  <van-nav-bar title="登录"
               right-text="注册"
               @click-right="register"
  ></van-nav-bar>
</template>


<script>

  export default {
    name: "header",
    methods: {
      register(){
        console.log('register');
        this.$router.push('/register');
      }

    }
  }
</script>
