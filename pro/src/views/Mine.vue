<template>
<<<<<<< HEAD
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
	.tubiao{
		height:46px;
		border-bottom: 1px solid #f1f1f1;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
</style>
=======
    <div>
       <van-row>
        <van-col span="4">
            <div class="photo">
            <van-uploader v-model="fileList"  upload-text='点击上传头像' capture='camera'/>
        </div>  
        </van-col>
        <van-col span="10" offset="4">
             <h4 class="name" >{{name}}</h4>
        </van-col>
        </van-row>
            
        <div class="person">
            <figure>
                <aside@click='tap()'>
                    <p >0.00</p>
                    <p>余额(元)</p>
                </aside>
                <aside @click='tap()'>
                    <p>0.00</p>
                    <p>欠款(元)</p>
                </aside>
                <aside @click='tap()'>
                    <p class="money">0.00</p>
                    <p>优惠券</p>
                </aside>
            </figure>
        </div>
           <van-divider :style="{ borderColor: '#BBB',position:'relative',top:'-15px'}">
            
           </van-divider>
           <div class="message">
               <p class="title">我的订单</p>
               <van-divider :style="{ borderColor: '#BBB',padding: '0 15px'}">
               </van-divider>
               <van-grid>
                <van-grid-item
                    v-for="value in 1"
                    :key="value"
                    icon="vip-card-o"
                    text="待收款"
                    @click='tap()'
                
                />
                 <van-grid-item
                    v-for="value in 1"
                    :key="value"
                    icon="logistics"
                    text="待发货"
                />
                <van-grid-item
                    v-for="value in 1"
                    :key="value"
                    icon="gift-o"
                    text="待收货"
                />
                 <van-grid-item
                    v-for="value in 1"
                    :key="value"
                    icon="passed"
                    text="已收货"
                />
            </van-grid>
           </div>
           
            <div class="chongzhi">
                    <p class="title">在线充值</p>
                     <van-divider :style="{ borderColor: '#BBB',padding: '0 15px'}">
                     </van-divider>
                     <div class="zheng">￥ 500元</div>
                     <div class="liji" @click='tap()'>立即充值</div>
            </div>
            
    </div>
</template>

<script>
export default {
    data(){
        return{
             fileList: [],
             name:'CJQ'
           
        }
    },
    methods: {
        afterRead(file) {
           
            console.log(file);
        },
        tap(){
            //console.log("a")
            this.$notify('功能暂未开启,敬请期待');
        }
    },
   
}
</script>

<style>
.photo{
    width:80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    margin-top:50px;
    margin-left: 15px;
}
.name{
    margin-top: 70px
   
}
.person{
    display: flex;
    justify-content: space-around
}
.person figure{
left: 23px;
top: 180px;
width: 309px;
height: 60px;
line-height: 20px;
text-align: center;
border: 1px solid rgba(187, 187, 187, 1);
display: flex;

}
aside{
    width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around
}
aside p{
    margin: 0;
    padding: 0;
}
.money{
    color: rgb(229,28,35)
}
.message{
left: 0px;
top: 250px;
font-size: 14px;
height: 150px;
line-height: 20px;
border-bottom: 1px solid rgba(187, 187, 187, 1);
display: flex;

flex-direction: column
}
.title{
    width: 326px;
    height: 0px;
    margin-left:15px; 
}
.line{
    width: 326px;
}
.chongzhi{
left: 0px;
top: 250px;
font-size: 14px;
height: 200px;
line-height: 20px;
border-bottom: 1px solid rgba(187, 187, 187, 1);
display: flex;
flex-direction: column;

}
.zheng{
left: 18px;
top: 420px;
width: 126px;
height: 80px;
line-height: 80px;
color: rgba(16, 16, 16, 1);
font-size: 14px;
text-align: center;
font-family: Roboto;
border: 1px solid rgba(187, 187, 187, 1);
margin-left: 15px
}
.liji{
margin-top: 15px;
top: 510px;
width: 200px;
height: 30px;
border-radius: 4px;
color: rgba(16, 16, 16, 1);
font-size: 14px;
text-align: center;
font-family: Microsoft Yahei;
border: 1px solid rgba(187, 187, 187, 1);
align-self: center;
line-height:30px
}
</style>
>>>>>>> 8aa92db63e24980590733986b5b95ecb28389b07
