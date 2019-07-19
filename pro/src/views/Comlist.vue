<template>
	<div>
		<!--头部输入框-->
		<van-nav-bar
			title="购物车"
			:fixed="true"
		  	right-text="编辑"
		 />
		<div class="box">
			<h2>购物车</h2>
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
</style>