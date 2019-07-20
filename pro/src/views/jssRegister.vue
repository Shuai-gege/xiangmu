<template>
	<div>
		<van-nav-bar
		  title="注册"
		/>
		<van-cell-group>
		  <van-field
		    label-width="120"
		    label="用户名(手机号):"
		    right-icon="question-o"
		    placeholder="请输入用户名/手机号"
		    @click-right-icon="$toast('question')"
		  />
		
		  <van-field
		    type="password"
		    label="密码:"
		    placeholder="请输入密码"
		    required
		  />
		</van-cell-group>
		
		
		<van-field
		    label="随机验证码"
		    placeholder="请输入验证码"
		  >
		 </van-field>
		 
		
		<van-button type="primary" id="btn">点击获取验证码</van-button>
		<span id="txt">hs3f34</span>
		
		<div class="anniu">
			<van-button type="primary" size="large" @click="tap()">注册</van-button>
		</div>
		
		
	</div>
</template>

<script>
	export default{
	methods: {
	    onClickLeft() {
	      Toast('返回');
	    },
	    onClickRight() {
	      Toast('按钮');
	    },
	    tap(){
	    	this.$router.push("/jsslogin")
	    }
	  }
	}
	/*$(function(){
		$("#btn").click(function(){
			var num = ["123876452jsdgfkhdggjhdsgf"];
			for(var i = 0;i<5;i++){
				var num1 = parseInt(Math.random()*num)
			}
			$("#txt").html().append(num1)
		})
	})*/
	
	/*var txt = document.getElementById("txt");
	var btn = document.getElementById("btn");
	// 用于盛放随机数码的空数组
    var result = [];
// 长度为62的数码数组
    var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (var i = 0; i < 4; i++) {
        // 用于随机获取arr中的元素，产生[0,62]之间的随机整数
        var num = Math.floor(Math.random() * 62);
        result.push(arr[num]);
    }
    txt.innerHTML = result;*/
</script>

<style>
	.anniu{
		margin-top:50px;
	}
	#txt{
		display: block;
		width:100px;
		height:50px;
		background: #42B983;
		float: right;
		text-align: center;
		font-size:20px;
		line-height: 50px;
	}
	
</style>