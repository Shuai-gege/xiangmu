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
	</div>
</template>

<script>
	export default {
		
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