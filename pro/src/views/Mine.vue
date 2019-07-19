<template>
	<div>
		<!--头部输入框-->
		<div class="tubiao">
			<van-icon name="setting" size="24"/>
			&nbsp;&nbsp;&nbsp;
			<van-icon name="chat" size="24" />
		</div>
		
		<div class="box">
			<h2>我的</h2>
		</div>
		
		
		
		
		
		
		
		
		<!--底部-->
		<van-tabbar v-model="active">
		  <van-tabbar-item name="home" icon="home-o" to="/index">首页</van-tabbar-item>
		  <van-tabbar-item name="search" icon="search" to="/Adishes">全部菜品</van-tabbar-item>
		  <van-tabbar-item name="friends" icon="wap-nav" to="/Cart">常用清单</van-tabbar-item>
		  <van-tabbar-item name="setting" icon="shopping-cart" to="/Comlist">购物车</van-tabbar-item>
		  <van-tabbar-item name="setting" icon="friends-o" to="/Mine">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	export default{
		data() {
		    return {
		    	active: 0,
		      	time: 30 * 60 * 60 * 1000,
		      	active: 1,
		      	list:[]
		    }
		},
	  methods: {
	  	onClickLeft() {
	      Toast('返回');
	    },
	    onClickRight() {
	      Toast('按钮');
	    },
	  },
	}
</script>

<style>
	.box{
		margin-top:46px;
	}
	.tubiao{
		height:46px;
		border-bottom: 1px solid #f1f1f1;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
</style>