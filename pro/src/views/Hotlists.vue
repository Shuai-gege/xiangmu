<template>

<div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <van-tabs v-model="active">
        <van-tab title="为我推荐">
            <van-card class="AA"
                v-for='item in list'
                :price="item.suijifanwei+'元/斤'"
                :desc="item.paragraph"  
                :title="item.name"
                :thumb="item.images"
                @click="tap(item.pid)"
            />
           
        </van-tab>
        <van-tab title="常用清单">
            <van-card
                v-for='item in list'
                :price="item.suijifanwei+'元/斤'"
                :desc="item.paragraph"  
                :title="item.name"
                :thumb="item.images"
                @click="tap1(item.pid)"
            />
        </van-tab>
    </van-tabs>
    </van-pull-refresh>
</div>


</template>

<script>
import axios from 'axios'
export default {
    name:'Hotlists',
    data(){
        return{
            list:[],
            active: 2,
            count: 0,
            isLoading: false
        }
    },
    mounted(){
        axios({
            url:'http://jingdong.com/api',
        }).then((data)=>{
            this.list = data.data.list
        })
    },
   methods:{
        onRefresh() {
            setTimeout(() => {
                this.$toast('刷新成功');
                this.isLoading = false;
            }, 500);
        },
        tap(pid){
            this.$router.push("/Detail/"+pid)
        }
   }
    
}
</script>

<style>

</style>
