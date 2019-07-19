<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
<template>
	
		<router-view></router-view>
		
		
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
	
</style>