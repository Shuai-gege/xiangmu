<<template>
    <div>
        <van-nav-bar
            title="注册"
           />
        <van-cell-group>
		   <van-field
		    v-model="phone"
		    label="手机号"
		    placeholder="请输入手机号"
		    error-message="手机号格式错误"
		  />
		  <van-field
		    v-model="password"
		    label="密码"
		    placeholder="请输入密码"
		    error-message
		  />
		</van-cell-group>
		
		<van-button type="primary" size="large" @click="tap">注册</van-button>
		
    </div>
</template>

<script>
import axios from 'axios'
export default {
	data(){
		return{
			phone:"",
			password:""
		}
	},
	methods:{
		tap(){
			
			axios({
				method:"post",
				url:"http://106.12.52.107:8081/MeledMall/user/register",
				params:{phonenum:this.phone,password:this.password}
			}).then((data)=>{
				console.log(data.data)
				if(data.data.code == 1){
					this.$router.push("/jssLogin")
				}
				if(data.data.code){
					this.$router.push("/")
				}
			})
		},
		
	}
}
</script>

<style>

</style>
