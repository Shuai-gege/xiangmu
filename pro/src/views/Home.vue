<template>
	<div>
		<!--头部输入框-->
		<van-nav-bar
		  left-text="客服"
		  right-text="信息"
		  :fixed="true"
		  @click-left="tap()"
		  @click-right="onClickRight"
		/>
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
			<div id="zhongjian">
				<van-search placeholder="请输入搜索关键词"/>
				<router-view></router-view>
				<!--轮播图-->
				<van-swipe :autoplay="3000" indicator-color="white" id="lun">
				  <van-swipe-item id="tu">1</van-swipe-item>
				  <van-swipe-item id="tu">2</van-swipe-item>
				  <van-swipe-item id="tu">3</van-swipe-item>
				  <van-swipe-item id="tu">4</van-swipe-item>
				</van-swipe>
				
				<!--小方块-->
				  <van-grid :border="false" :column-num="3">
					  <van-grid-item  v-for="item in list">
					    <van-image :src="item.pimg" />
					  </van-grid-item>
					</van-grid>
					<van-grid :border="false" :column-num="3">
					  <van-grid-item  v-for="item in list">
					    <van-image :src="item.pimg" />
					  </van-grid-item>
					</van-grid>
					<hr />
				<!--秒杀-->
				<span>特价秒杀</span> <van-count-down :time="time"/>
				<div>
					<van-grid :border="false" :column-num="3">
					  <van-grid-item  v-for="item in list">
					    <van-image :src="item.pimg" />
					  </van-grid-item>
					</van-grid>
				</div>
				<hr />
				<!--生鲜直降-->
				&nbsp;
				<van-image
				  width="100"
				  height="100"
				  src="https://img.yzcdn.cn/vant/cat.jpeg"
				/>
				&nbsp;
				<van-image
				  width="50"
				  height="50"
				  src="https://img.yzcdn.cn/vant/cat.jpeg"
				/>
				&nbsp;
				<van-image
				  width="50"
				  height="50"
				  src="https://img.yzcdn.cn/vant/cat.jpeg"
				/>
				&nbsp;
				<van-image
				  width="50"
				  height="50"
				  src="https://img.yzcdn.cn/vant/cat.jpeg"
				/>
				<!--tap标签-->
				<van-tabs v-model="active">
				  <van-tab title="为你推荐">
				  	<van-card
				  		v-for="item in list"
						:pid="item.pid"
						:price="item.pprice"
						:desc="item.pdesc"  
						:title="item.pname"
						:thumb="item.pimg"
					>
					  <div slot="tags">
					    <van-tag plain type="danger">标签</van-tag>
					    <van-tag plain type="danger">标签</van-tag>
					  </div>
					  <div slot="footer">
					    <van-icon name="add" size="20"/>
					  </div>
					</van-card>
				  </van-tab>
				  <van-tab title="我的清单">
				  	<van-card
				  		v-for="item in list"
						:pid="item.pid"
						:price="item.pprice"
						:desc="item.pdesc"  
						:title="item.pname"
						:thumb="item.pimg"
					>
					  <div slot="tags">
					    <van-tag plain type="danger">标签</van-tag>
					    <van-tag plain type="danger">标签</van-tag>
					  </div>
					  <div slot="footer">
					    <van-icon name="add" size="20"/>
					  </div>
					</van-card>
				  </van-tab>
				  
				</van-tabs>
			</div>
		</van-pull-refresh>
			<!--底部-->
			<van-tabbar v-model="active">
			  <van-tabbar-item name="home" icon="home-o" to="/home">首页</van-tabbar-item>
			  <van-tabbar-item name="search" icon="search" to="/Adishes">全部菜品</van-tabbar-item>
			  <van-tabbar-item name="friends" icon="wap-nav" to="/Cart">常用清单</van-tabbar-item>
			  <van-tabbar-item name="setting" icon="shopping-cart" to="/Comlist">购物车</van-tabbar-item>
			  <van-tabbar-item name="setting" icon="friends-o" to="/Mine">我的</van-tabbar-item>
			</van-tabbar>
		
		</div>
</template>

<script>
	import axios from "axios"
	export default {
		data() {
		    return {
		    	active: 0,
		      	time: 30 * 60 * 60 * 1000,
		      	active: 0,
		      	list:[],
		      	count: 0,
      			isLoading: false
		    }
		},
	  methods: {
	  	onClickLeft() {
	      Toast('返回');
	    },
	    onClickRight() {
	      Toast('按钮');
	    },
	    onRefresh() {
	      setTimeout(() => {
	        this.$toast('刷新成功');
	        this.isLoading = false;
	        this.count++;
	      }, 500);
	    }
	  },
	  mounted(){
	    	console.log('a')
	    	axios({
		    	url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
		    }).then((data)=>{
		    	console.log(data.data.data)
		    	this.list = data.data.data
		    })
	    },
	    
	}
</script>

<style>
	*{
		margin-top:0;
		padding-top:0;
	}
	#zhongjian{
		margin-top:46px;
		margin-bottom:50px;
	}
	.box{
		position: absolute;
		top: 0;
		left:57px;
	}
	#lun{
		width:100%;
		height:100px;
	}
	#tu{
		background:#f00;
	}
	.shijian{
		float: right;
	}
</style>