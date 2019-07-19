<template>
	<div id="top">
		<div id="aa">
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
			
		
		
		
		<div id="bb">
			
			
			<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
				<van-search
				  v-model="value"
				  placeholder="请输入搜索关键词"
				  show-action
				  shape="round"
			>
			
				  <div slot="action" @click="onSearch">搜索</div>
				<!--  模糊查询-->
				<!--  <ul>
				  	<li v-for="item in list1"><p>{{item}}</p></li>
				  </ul>-->
				</van-search>
				
				<van-tabs>
				  <van-tab title="酒品">
					<van-card
						v-for="item in list"
						  :pid="item.pid"
						  :price="item.pprice"
						  :desc="item.pdesc"  
						  :title="item.pname"
						  :thumb="item.pimg"
						/>
				</van-tab>
				  
				  
				  
				  <van-tab title="蔬菜">
				  		<van-card
						v-for="item in list"
						  :pid="item.pid"
						  :price="item.pprice"
						  :desc="item.pdesc"  
						  :title="item.pname"
						  :thumb="item.pimg"
						/>
				  </van-tab>
				  <van-tab title="肉类">
				  		<van-card
						v-for="item in list"
						  :pid="item.pid"
						  :price="item.pprice"
						  :desc="item.pdesc"  
						  :title="item.pname"
						  :thumb="item.pimg"
						/>
				  </van-tab>
				  <van-tab title="水产">
				  		<van-card
						v-for="item in list"
						  :pid="item.pid"
						  :price="item.pprice"
						  :desc="item.pdesc"  
						  :title="item.pname"
						  :thumb="item.pimg"
						/>
				  </van-tab>
				  <van-tab title="鱼类">
				  	<van-card
						v-for="item in list"
						  :pid="item.pid"
						  :price="item.pprice"
						  :desc="item.pdesc"  
						  :title="item.pname"
						  :thumb="item.pimg"
						/>
				  </van-tab>
				  <van-tab title="水果" @click='jiu()'>
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
			 	 <router-view>9999999999</router-view>
			</van-pull-refresh>
		</div>
		
		
			
		<div id="dd">
			<van-tabbar v-model="active" :fixed="true">
			  <van-tabbar-item icon="home-o">首页</van-tabbar-item>
			  <van-tabbar-item icon="search" dot>全部菜品</van-tabbar-item>
			  <van-tabbar-item icon="friends-o" info="5">常用清单</van-tabbar-item>
			  <van-tabbar-item icon="setting-o" info="20">购物车</van-tabbar-item>
			  <van-tabbar-item icon="home-o" info="20">我的</van-tabbar-item>
			</van-tabbar>
		</div>
		
		
	
		
		
		
		
		
	</div>
	
	
	
</template>

<script>
	import axios from "axios"
	export default{
		name:"quanbucaipin",
		data(){
			return{
				value:'',
				active:"",
				isLoading: false,
				active: 2,
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
		methods: {
		    onClickLeft() {
		      this.$router.push("/kefu")
		    },
		    onClickRight() {
		       this.$router.push("/youhui")
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
  	},
}
/*	var vm = new Vue({
    el : '#top',  //确定根元素
    data : {
        keyword : '',
        list1 : []
    },
    computed : {  //设置计算属性
       /* fSearch(){
            if(this.keyword){
                return this.list1.filter((value)=>{  //过滤数组元素
                    return value.includes(this.keyword); //如果包含字符返回true
                });
            }
        }
    }
});*/
</script>

<style>
	*{
		margin: 0;padding:0
	}
	#bb{
		margin-top:46px;
		margin-bottom:50px;
		overflow: auto;
		
	}
	#aa{	
	}
	
</style>