<template>
	<div>
		<van-nav-bar
		  title="登陆"
		/>
		<van-cell-group>
		  <van-field
		    v-model="username"
		    required
		    clearable
		    label="用户名"
		    right-icon="question-o"
		    placeholder="请输入用户名/手机号"
		    @click-right-icon="$toast('输入账号')"
		  />
		
		  <van-field
		    v-model="password"
		    type="password"
		    label="密码"
		    placeholder="请输入密码"
		    required
		  />
		</van-cell-group>
		
		<div class="anniu">
			<van-button type="primary" @click="index()">登陆</van-button>
			<van-button type="info" to="/jssregister">注册</van-button>
		</div>
		
		
	</div>
</template>

<script>
	export default{
		name:"Login",
		data(){
			return{
				username:"",
				password:""
			}
		},
	methods: {
		
	    onClickLeft() {
	      Toast('返回');
	    },
	    onClickRight() {
	      Toast('按钮');
	    },
	    index(){
	    	this.$router.push("/jssindex")
	    },
	    
	  }
	}
</script>

<style>
	.anniu{
		margin-top:50px;
		margin-left:100px;
	}
</style>