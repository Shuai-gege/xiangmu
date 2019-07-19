<template>
	<div id="top">
		<div id="aa">
			<van-nav-bar
			  title="聊天"
			  left-text=""
			  left-arrow
			  @click-left="onClickLeft"
			  :fixed="true"
			/>
		</div>
		
		<div id="bb">
			<div id="yi">
				季帅帅
			</div>
			<div id="er">
				helloworld
			</div>
			<div id="san">
				阿鹏
			</div>
			<div id="si">
				helloworld
			</div>
			
		</div>
		
		
		
		<div id="cc">
			<van-tabbar>
				<van-icon name="friends" class="dnf"/>
				<van-icon name="volume" class="dnf"/>
			 	<input type="text" id="text" placeholder="单行输入"/>
			 	<van-icon name="add-o" class="dnf"/>
			 	<button id="btn">发送</button>
			</van-tabbar>
		</div>
	</div>
</template>


<script>
	import axios from "axios"
	
	export default{
		name:'kefu',
		data(){
			return{
				
			}
		},
		methods:{
			 onClickLeft() {
		      this.$router.go(-1)
		    },
		}
	}
	
	
	
</script>

<style>
	#aa{
		height:46px;
		border-bottom:1px solid #ccc;
	}
	.dnf{
		font-size:25px;
		margin:10px 5px 0 5px
	}
	#text{
		width: 200px;
		height:25px;
		border-radius:20px ;
		border:1px solid #ccc;
		margin:10px 10px 0 10px;
		font-size:12px
	}
	#bb{
		position: relative;
	}
	#yi{
		width:50px;height:50px;
		border:1px solid #ccc;
		position: absolute;
		top:30px;
		left:30px;
		border-radius:10px ;
		text-align: center;
	}
	#san{
		width:50px;height:50px;
		border:1px solid #ccc;
		position: absolute;
		top:250px;
		right:30px;
		border-radius:10px ;
		text-align: center;
	}
	#er{
		width:140px;height:140px;
		border:1px solid #ccc;
		position: absolute;
		top:50px;left:150px;
		border-radius:10px ;
		text-align: center;
	}
	#si{
		width:140px;height:140px;
		border:1px solid #ccc;
		border-radius:10px ;
		position: absolute;
		top:300px;right:150px;
		text-align: center;
	}
</style>