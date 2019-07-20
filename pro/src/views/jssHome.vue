<template>
	<div>
	<van-nav-bar
		  left-text="客服"
		  right-text="信息"
		  :fixed="true"
		  @click-left="tap()"
		  @click-right="onClickRight"
		/>
	<div>
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
				  id="mao1"
				  width="130"
				  height="140"
				  src="https://img.yzcdn.cn/vant/cat.jpeg"
				/>
				&nbsp;
				<div id='mao'>
					<van-image
					  width="120"
					  height="50"
					  src="https://img.yzcdn.cn/vant/cat.jpeg"
					/>
					&nbsp;
					<van-image
					  
					  width="120"
					  height="50"
					  src="https://img.yzcdn.cn/vant/cat.jpeg"
					/>
					&nbsp;
				</div>
			
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
	</div>
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
      			isLoading: false,
      			
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
		}
  
}
</script>

<style>
	#mao{
		display: flex;
		flex-direction: column;
		padding-left:20px;
	}
	#mao1{
		float:left
	}
</style>