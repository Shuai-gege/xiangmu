<template>
	<div>
		
		<div>
			<!--头部输入框-->
			<van-nav-bar
			  left-text="返回"
			  right-text="按钮"
			  :fixed="true"
			  @click-left="tap()"
			  @click-right="onClickRight"
			/>
		</div>
		<div class="box">
			<van-search placeholder="请输入搜索关键词"/>
		</div>
		
		
		<h2>常用清单</h2>
	</div>
</template>

<script>
	export default {
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