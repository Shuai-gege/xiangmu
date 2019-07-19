<template>
<<<<<<< HEAD
	<div>
		<!--头部输入框-->
		<van-nav-bar
		  left-text="返回"
		  right-text="按钮"
		  :fixed="true"
		  @click-left="tap()"
		  @click-right="onClickRight"
		/>
		<div class="box">
			<van-search placeholder="请输入搜索关键词"/>
		</div>
		
		
		<h2>常用清单</h2>
		
		
		
		
		
		
		
		
		
		<!--底部-->
		<van-tabbar v-model="active">
		  <van-tabbar-item name="home" icon="home-o" to="/index">首页</van-tabbar-item>
		  <van-tabbar-item name="search" icon="search" to="/Adishes">全部菜品</van-tabbar-item>
		  <van-tabbar-item name="friends" icon="wap-nav" to="/Cart">常用清单</van-tabbar-item>
		  <van-tabbar-item name="setting" icon="shopping-cart" to="/Comlist">购物车</van-tabbar-item>
		  <van-tabbar-item name="setting" icon="friends-o" to="/Mine">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	export default{
		data() {
		    return {
		    	active: 0,
		      	time: 30 * 60 * 60 * 1000,
		      	active: 1,
		      	list:[]
		    }
		},
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
=======
<div>
    <div class="cartshow">
        
        <van-card
        v-for="item in list"
        :num="nums"
        :price="item.price"
        :desc="item.pdesc"  
        :title="item.ptitle"
        :thumb="item.pimg" 
        :key='item'
        @click='enter(item.pid)'
        >
        <div slot="footer">
          
        </div>
      </van-card>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
      name:'cart',
      data(){
        return{
          value: 1,
          list:[],
          nums:'1'
        }
      },
      mounted(){
          axios({
             url:'http://www.baidu.com/api',
             //data:{token:token}
          }).then((data)=>{
            //console.log(data.data.list)
            this.list = data.data.list
          })
      },
      methods: {
        num(){
          //  console.log(this.value)
           this.nums = this.value 
        },
        enter(pid){
             //this.$route.push('/Detail/'+pid)
             //console.log(pid)
        }
      },
}
</script>

<style>
.cartshow{
  margin: 54px 0 50px 0;
}
</style>
>>>>>>> 8aa92db63e24980590733986b5b95ecb28389b07
