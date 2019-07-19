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
			<van-button type="info" to="/register">注册</van-button>
		</div>
		<hr />
		<h2>{{this.$store.state.count}}</h2>
		<van-button type="info" @click="tap()">jiajia</van-button>
		
		
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
	    	this.$router.push("/index")
	    },
	    tap(){
	    	this.$store.commit("add")
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