<template>
	<div>
		<van-nav-bar
		  title="登陆"
		/>
		<van-cell-group>
		   <van-field
		    v-model="phone"
		    label="用户名："
		    placeholder="请输入手机号"
		    error-message
		  />
		  <van-field
		    v-model="password"
		    label="密码："
		    placeholder="请输入用户名"
		    error-message
		  />
		</van-cell-group>
		<div id="anniu">
			<van-button type="primary" @click="deng">登陆</van-button>
			<van-button type="info" to="/jssRegister">注册</van-button>
		</div>
		
	</div>
</template>

<script>
	import axios from "axios"
	import {mapState,mapGetters,mapActions} from 'vuex';
	export default{
		data(){
			return{
				phone:"",
				password:"",
				id:0
			}
		},
		methods:{
			
			deng(){
				axios({
					method:"post",
					url:"http://106.12.52.107:8081/MeledMall/user/login",
					params:{phonenum:this.phone,password:this.password}
				}).then((data)=>{
					console.log(data.data)
					this.id = data.data.info.id
					if(data.data.code == 1){
						this.$router.push("/jssHome")
						this.$store.commit("huoqu",this.id)
						window.localStorage.setItem("id",this.id)
					}
					if(this.phone == ''){
						this.$router.push("/")
					}
				})
			}
		}
	}
</script>

<style scoped="">
	#anniu{
		margin-left:100px;
		margin-top: 40px;
	}
</style>