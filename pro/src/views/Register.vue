<template>
	<div>
		<van-nav-bar
		  title="注册"
		/>
		<van-cell-group>
		  <van-field
		    required
		    clearable
		    label-width="120"
		    label="用户名(手机号):"
		    right-icon="question-o"
		    placeholder="请输入用户名/手机号"
		    @click-right-icon="$toast('question')"
		  />
		
		  <van-field
		    type="password"
		    label="密码:"
		    placeholder="请输入密码"
		    required
		  />
		</van-cell-group>
		
		
		<van-field
		    center
		    clearable
		    label="随机验证码"
		    placeholder="请输入验证码"
		  >
		 </van-field>
		 
		
		<van-button type="primary">点击获取验证码</van-button>
		<span id="txt"></span>
		
		<div class="anniu">
			<van-button type="primary" size="large" @click="tap()">注册</van-button>
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
	    tap(){
	    	this.$router.push("/login")
	    }
	  }
	}
</script>

<style>
	.anniu{
		margin-top:50px;
	}
	#txt{
		display: block;
		width:100px;
		height:50px;
		background: #42B983;
		float: right;
	}
	
</style>