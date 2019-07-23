<template>
	<div id="top">
		<div>
			<van-nav-bar
			  title="全部菜品 "
			  left-text="客服"
			  right-text="优惠卷"
			  left-arrow
			  @click-left="onClickLeft"
			  @click-right="onClickRight"
			  :fixed="true"
			/>
		</div>
			
				<van-tabs id='shui'>
				  <van-tab title="水果" >
					<van-card
							v-for="item in list"
						  :pid="item.name"
						  :desc="item.desc"
						  :price="item.price"
						  :thumb="item.photo"
                         @click="tap(item.id)"
						/>
					</van-tab>
					<van-tab title="蔬菜" >
					<van-card
							v-for="item in list"
						  :pid="item.name"
						  :desc="item.desc"
						  :price="item.price"
						  :thumb="item.photo"
						  @click="tap(item.id)"
						/>
					</van-tab>
					<van-tab title="肉类" >
					<van-card
							v-for="item in list"
						  :pid="item.name"
						  :desc="item.desc"
						  :price="item.price"
						  :thumb="item.photo"
						  @click="tap(item.id)"
						  />
					</van-tab>
					<van-tab title="冷鲜">
					<van-card
							v-for="item in list"
						  :pid="item.name"
						  :desc="item.desc"
						  :price="item.price"
						  :thumb="item.photo"
						  @click="tap(item.id)"
						  />
					</van-tab>
					<van-tab title="鱼类">
					<van-card
						v-for="item in list"
						  :pid="item.name"
						  :desc="item.desc"
						  :price="item.price"
						  :thumb="item.photo"
						  @click="tap(item.id)"
						/>
					</van-tab>
				 
				</van-tabs>
			</van-pull-refresh>
		
	</div>
	
	
	
</template>

<script>
	import axios from "axios"
	export default{
		name:"apengcaipin",
		data(){
			return{
				value:'',
				active:"",
				isLoading: false,
				active: 2,
				 list:[],
				
			}
		},
		mounted(){
				axios({
				method:'post',
				url:'http://106.12.52.107:8081/MeledMall/menu/childMenu',
				params:{id:1}
			}).then((data)=>{
				//console.log(data.data.info)
				this.list = data.data.info
			})
		},
		methods: {
		    onClickLeft() {
		      this.$router.push("/apengkefu")
		    },
		    onClickRight() {
		       this.$router.push("/apengyouhui")
		    },
		    onRefresh() {
		      setTimeout(() => {
		        this.$toast('刷新成功');
		        this.isLoading = false;
		        this.count++;
		      }, 500);
		    },
		    onSearch(){
		    	
			},
			tap(id){
				this.$router.push('/dfhDetail/'+id)
			}
			
  	},
}

</script>

<style>
	*{
		margin: 0;padding:0
	}
	#shui{
		margin-bottom:50px;
	}
	
</style>