<template>
    <div>
         <van-nav-bar
            title="购物车"
            left-text="返回"
            :fixed= 'true'
            left-arrow
            @click-left="onClickLeft"
            
        />
        <div id="cartpay">
        <div class="cartpay" >
        <van-card
            v-for="(item,index) in list"
            :num="item.nums"
            :price="item.price"
            :desc="item.pdesc"  
            :title="item.ptitle"
            :thumb="item.pimg" 
            tag='新鲜'
            :key='item'
           
        >
            
            
            <div slot="footer" class="checkbox" >
            <van-stepper v-model="item.bujin" :disable-input='true' @change='change(index,item.danxuan,item.bujin)' :step='step'/>
               <van-checkbox  v-model="item.danxuan" class="checkedBox" @click='tao(item.danxuan,index)'></van-checkbox>
            </div>
        </van-card>
        
       </div>
            <van-submit-bar
            :price="sum"
            button-text="提交订单"
            @submit="onSubmit"
            >
            <van-checkbox v-model="checked" @click='chioceall'>全选</van-checkbox>
            <span slot="tip">
                <van-notice-bar
                text="注意：你的收获地址不支持同城配送，详情咨询官网"
                left-icon="volume-o"
                />

            </span>
            </van-submit-bar>

        </div>
      
    </div>
</template>

<script>
import axios from 'axios'

export default {
        data(){
            return{
                list:[],
                checked:false,
                isLoading: false,
                value:1,
                step:1,
                djiage:'',
                sum : 0,
                pri:[]
               
            }
        },
        methods: {
            onClickButton(){
                this.$router.push('/addMessage')
            },
            onClickLeft(){
                this.$router.go(-1)
            },
            onClickIcon(){

            },
            onSubmit(){
                if(this.sum == 0){
                    //alert('请选择购买的商品')
                    this.$toast('不好意思，您未购选商品，请选择商品重新购买');
                }else{
                    const toast =this.$toast.loading({
                    duration: 0,       // 持续展示 toast
                    forbidClick: true, // 禁用背景点击
                    loadingType: 'spinner',
                    message: '购买成功，跳转中...'
                    });

                    let second = 3;
                    const timer = setInterval(() => {
                    second--;
                    if (second) {
                        this.$toast.message = `购买成功，跳转中...`;
                    } else {
                        clearInterval(timer);
                        this.$toast.clear();
                        this.$router.push('/addMessage')
                    }
                    }, 1000);
                    
                }
                 
            },
            chioceall(){
                this.sum = 0*0
                if(!this.checked){
                    for(let val of this.list){
                     val.danxuan = true;
                    //  this.sum += val.price * val.bujin*100
                    this.jine()
                    }
                }else{
                    for(let val of this.list){  
                     val.danxuan = false;
                     this.sum = 0*0
                    }
                }
                
            },
            tao(danxuan,index,a){
                let p =parseFloat(this.list[index].price)*parseFloat(this.list[index].bujin).toFixed(2)
                if(!danxuan){
                    this.sum +=p*100

                }else{
                    this.sum -=p*100
                    if(this.sum == 0){
                        this.checked = false
                    }
                }
                
            },
            change(index,danxuan,bujin){
                  //let num = bujin+1;
                  this.jine()//每次改变时，都对list进行遍历，调用金额计算函数
            },
            jine(){
                this.sum = 0*0 //遍历之前先将金额清零
                this.list.forEach((item,index) => {
                    if(item.danxuan){//判断商品是否选中
                        this.sum += item.price*item.bujin*100 //金额计算
                    }
                });
                
            }
        },
        mounted() {
            axios({
                url:'http://www.baidu.com/api',
                // data:{token:token}
            }).then((data)=>{
                //console.log(data.data.list.length)
                this.list =data.data.list 
            })
            
           
        },
       
}   
</script>
<style>
.cartpay{
    margin:46px 0 120px 0;
}
.check{
    position: absolute;
    left: 30px;
    bottom:0;
}

input[type='checkbox']{
    width: 16px;
    height: 16px;
    background-color: #fff;
    -webkit-appearance:none;
    border: 1px solid #c9c9c9;
    border-radius: 2px;
    outline: none;
}
 
.checkbox input[type=checkbox]:checked{
   background: url("https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=964899143,2534335338&fm=15&gp=0.jpg") 0 0/16px 16px no-repeat;

}
</style>