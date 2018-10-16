<template>
	<div>
		<div class="login-wrap">
			<h1>登录</h1>
			<p v-show="showTishi">{{tishi}}</p>
			<input type="text" placeholder="请输入用户名" v-model="username">
			<input type="password" placeholder="请输入密码" v-model="password">
			<button @click="login">登录</button>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'Login',
  data () {
    return {
      showTishi: false,
      tishi: '',
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.username === '') {
        this.tishi = '请输入用户名'
        this.showTishi = true
      } else if (this.password === '') {
        this.tishi = '请输入密码'
        this.showTishi = true
      } else {
        this.showTishi = false
        axios({
          method: 'POST',
          url: '/api/user/login.do',
          data: qs.stringify({
            userCode: this.username,
            password: this.password,
            status: 0
          }),
          headers: {
            'Content-type': 'application/x-www-form-urlencoded'
          }
        }).then(this.infoCheck)
      }
    },
    infoCheck (res) {
      console.log(res)
      if (res.data.success) {
        this.$router.push('/home')
      } else {
        this.$message.error('用户名或密码错误！')
      }
	  }
  }
}
</script>

<style lang="stylus" scoped="scoped">
.login-wrap, .register-wrap{ text-align:center; }
input{display:block; width:250px; height:40px; line-height:40px; margin:0 auto; margin-bottom: 10px; outline:none; border:1px solid #888; padding:10px; box-sizing:border-box;}
p{color:red;}
button{display:block; width:250px; height:40px; line-height: 40px; margin:0 auto; border:none; background-color:#41b883; color:#fff; font-size:16px; margin-bottom:5px;}
span{cursor:pointer;}
span:hover{color:#41b883;}
</style>
