<template>
	<div>
		<van-nav-bar
		  title="搜索"
		  left-text="返回"
		  left-arrow
		  @click-left="onClickLeft"
		 />
		
		<form action="/">
		  <van-search
		    v-model="value"
		    placeholder="请输入搜索关键词"
		    show-action
		    @search="onSearch"
		    @cancel="onCancel"
		    @input="tap()"
		  />
		</form>
		<ul>
			<a href="#">
				<li v-for='item in sousuo'
					v-text="item.name"
					v-if="kongzhi"
					>
				
				</li>
			</a>
		</ul>
	</div>
</template>

<script>
	import axios from "axios"
	export default {
		data(){
			return {
				list:[],
				a:this.$store.state.id,
				value:'',
				kongzhi:false
			}
		},
		computed:{
			sousuo(){
				var _this = this;
				var sousuo = [];
				this.list.map(function(item){
					if(item.name.search(_this.value) != -1){
						sousuo.push(item);
					}
				});
				return sousuo;
			}
			
				
		},
		methods:{
			onSearch(){
				
			},
			onCancel(){
				
			},
			onClickLeft() {
		      this.$router.go(-1)
		 	},
		 	tap(){
				this.kongzhi = !this.kongzhi//qufan
				if(this.value == ''){
					this.kongzhi = false
				}
			}
		},
		mounted(){
			axios({
				method:'post',
				url:"http://106.12.52.107:8081/MeledMall/menu/selectChild"
			}).then((data)=>{
				console.log(data.data.info)
				console.log(this.a)
				this.list = data.data.info
			})
		}
	}
</script>

<style >
	li{
		border: 1px solid #F1F1F1;
		width:278px;
		margin-left: 17px;
	}
</style>