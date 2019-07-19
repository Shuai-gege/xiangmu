<template>
	<div>
		<van-nav-bar
		  title="登陆"
		/>
		<van-cell-group>
		  <van-field
		  	type="username"
		    label-width="120"
		    label="用户名(手机号):"
		    placeholder="请输入用户名/手机号"
		    required
		  />
		
		  <van-field
		    type="password"
		    label="密码:"
		    placeholder="请输入密码"
		    required
		  />
		</van-cell-group>
		
		<div class="anniu">
			<van-button type="primary" @click="index()">登陆</van-button>
			<van-button type="info" to="/register">注册</van-button>
		</div>
		
		
	</div>
</template>

<script>
	export default{
	methods: {
	    onClickLeft() {
	      Toast('返回');
	    },
	    onClickRight() {
	      Toast('按钮');
	    },
	    index(){
	    	this.$router.push("/index")
	    }
	  }
	}
</script>

<style>
	.anniu{
		margin-top:50px;
		margin-left:100px;
	}
</style>