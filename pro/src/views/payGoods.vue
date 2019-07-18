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
            v-for="item in list"
            :num="nums"
            :price="item.price"
            :desc="item.pdesc"  
            :title="item.ptitle"
            :thumb="item.pimg" 
            tag='新鲜'
            :key='item'
            v-bind:style='{paddingLeft:a+"px"}'
            >
            
            
            <div slot="footer">
            <van-stepper v-model="value" :disable-input='true'/>
               <input type="checkbox" class="check" />
            </div>
        </van-card>
       </div>
            <van-goods-action>
                <van-goods-action-icon
                    icon="chat-o"
                    text="客服"
                    @click="onClickIcon"
                />
                <van-goods-action-icon
                    icon="cart-o"
                    text="购物车"
                    @click="onClickIcon"
                />
                <van-goods-action-button
                    type="danger"
                    text="立即购买"
                    @click="onClickButton"
                />
            </van-goods-action>
        </div>
       
    </div>
</template>

<script>
import axios from 'axios'

export default {
        data(){
            return{
                list:[],
                a:25,
                radio: '1',
                checked:false,
                gid:'1',
                isLoading: false
               
            }
        },
        methods: {
            onClickButton(){
                this.$router.push('/addMessage')
            },
            onClickLeft(){
                this.$router.go(-1)
            }
        },
        mounted() {
            axios({
                url:'http://www.baidu.com/api',
                // data:{token:token}
            }).then((data)=>{
                //console.log(data.data.list.length)
                this.list =data.data.list 
               this.vanNum = data.data.list.length;
              this.abc = data.data.list.pid
        
               
            })
            
        },
}   
</script>
<style>
.cartpay{
    margin:46px 0 54px 0;
}
.check{
    position: absolute;
    left: 30px;
    bottom:0;
}
</style>