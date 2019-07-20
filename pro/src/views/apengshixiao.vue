<template>
	<div id="top">
		
		<div id="aa">
			<van-nav-bar
			  title="失效优惠卷 "
			  left-text=""
			  left-arrow
			  @click-left="onClickLeft"
			  :fixed="true"
			/>
		</div>
		
		<div id="bb">
			
			<van-tabs v-model="active">
			  <van-tab title="已使用">
			  	<van-card
				v-for="item in list"
				:pid="item.pid"
				:price="item.pprice"
				:desc="item.pdesc"  
				:title="item.pname"
				:thumb="item.pimg"
			/>
			</van-tab>
			  <van-tab title="已过期">
			  	<van-card
				v-for="item in list"
				:pid="item.pid"
				:price="item.pprice"
				:desc="item.pdesc"  
				:title="item.pname"
				:thumb="item.pimg"
			/>
			</van-tab>
			 
			</van-tabs>
			
			
			
		</div>
		
	</div>
</template>

<script>
	import axios from "axios"
	
	export default{
		name:'apengshixiao',
		data(){
			return{
				list:[]
			}
		},
		mounted(){
			axios({
				url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
				/*params:{uid:1017}*/
			}).then((data)=>{
				console.log(data.data.data)
				this.list = data.data.data
			})
		},
		methods:{
			 onClickLeft() {
		      this.$router.go(-1)
		    },
		    
		}
	}
	
	
</script>

<style>
#bb{
		margin-top:46px;
	}
	#aa{
		height:46px;
		border-bottom:1px solid #ccc;
	}
</style>