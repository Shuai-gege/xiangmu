<template>
	<div id="top">
		
		<div id="aa">
			<van-nav-bar
			  title="我的优惠卷 "
			  left-text=""
			  right-text="失效优惠卷"
			  left-arrow
			  @click-left="onClickLeft"
			  @click-right="onClickRight"
			  :fixed="true"
			/>
		</div>
		
		<div id="bb">
			
			<van-card
				v-for="item in list"
				:pid="item.pid"
				:price="item.pprice"
				:desc="item.pdesc"  
				:title="item.pname"
				:thumb="item.pimg"
			/>
			
		</div>
		
	</div>
</template>

<script>
	import axios from "axios"
	
	export default{
		name:'apengyouhui',
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
		    onClickRight() {
		       this.$router.push("/apengshixiao")
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