<template>
	<div>
		<div class="login-wrap" v-show="showLogin">
			<h3>登录</h3>
			<p v-show="showTishi">{{tishi}}</p>
			<input type="text" placeholder="请输入用户名" v-model="username">
			<input type="password" placeholder="请输入密码" v-model="password">
			<button @click="login">登录</button>
			<span @click="toRegister">没有账号？马上注册</span>
		</div>

		<div class="register-wrap" v-show="showRegister">
			<h3>注册</h3>
			<p v-show="showTishi">{{tishi}}</p>
			<input type="text" placeholder="请输入用户名" v-model="newUsername">
			<input type="password" placeholder="请输入密码" v-model="newPassword">
			<button @click="register">注册</button>
			<span @click="toLogin">已有账号？马上登录</span>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import { setCookie, getCookie } from '../../assets/js/cookie.js'
export default {
  name: 'Login',
  data () {
    return {
      showLogin: true,
      showRegister: false,
      showTishi: false,
      tishi: '',
      username: '',
      password: '',
      newUsername: '',
      newPassword: ''
    }
  },
  methods: {
    login () {
      if (this.username == '' || this.password == '') {
        alert("请输入用户名")
      } else {
		    let data = {'username':this.username,'password':this.password}
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
        alert('用户名密码错误')
      }
	  },
    register () {
      alert('注册成功')
    },
    toLogin () {
	  this.showRegister = !this.showRegister
      this.showLogin = !this.showLogin
    },
    toRegister () {
	  this.showLogin = !this.showLogin
	  this.showRegister = !this.showRegister
    }
  },
  mounted () {
    if (getCookie('username')) {
      this.$router.push('/home')
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
