<template>
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
