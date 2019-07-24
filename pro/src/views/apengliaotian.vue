<template>
  <div class="wrapper">
    <header>
      <van-nav-bar title="与客服聊天中" left-text="返回" @click-left="onClickLeft"></van-nav-bar>
    </header>
    <div id="msg">
      <ul id="msgl">
        <li v-for="(item, index) in msglist" :key="index">
          <van-row v-if="index%2 == 0" class="wo" type="flex" justify="end">
           
            <van-col span="16">{{item}}</van-col>
             <van-col span="4">
               <img :src="tou" alt="">
             </van-col>
          </van-row>
          <van-row v-if="index%2 != 0" class="xiaoai">
             <van-col span="4">
               
               <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=69087480,2066576859&fm=26&gp=0.jpg" alt="">
             </van-col>
            <van-col span="16">{{item}}</van-col>
           
          </van-row>
          
        </li>
      </ul>
    </div>
    <footer>
      <van-row>
        <van-col span="3">
          <van-icon name="add-o" />
        </van-col>
        <van-col span="3">
          <van-icon name="smile-o" />
        </van-col>
        <van-col span="13">
          <van-field v-model="value" placeholder @keyup.enter="send" style="background:#fff" />
        </van-col>
        <van-col span="5">
          <van-tag round type="success" size="large" @click="send">发送</van-tag>
        </van-col>
      </van-row>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      value: "",
      msglist: [],
      tou:this.$store.state.fileContent
    };
  },
  watch: {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    send() {
      if(this.value==""){

        this.value=" ";
      }
      this.msglist.push(this.value);
      var tag = this.value; //用tag存this.value的内容
      this.value = ""; //把this.value值清空，清空输入框；
      this.$nextTick(() => {
        let msg = document.getElementById("msg"); //获取dom
        msg.scrollTop = msgl.offsetHeight;
      });

      axios //请求人工智障接口
        .get("http://i.itpk.cn/api.php", {
          params: {
            question: tag,
            api_key: "6d6f6e2ba4d88377b54107e29047994b",
            api_secret: "6w3h17ufope0"
          }
        })
        .then(ret => {
          this.msglist.push(ret.data);
        })
        .then(() => {
          msg.scrollTop = msg.scrollHeight;
        });
    }
  },
  mounted() {}
};
</script>
<style  scoped>
.wrapper {
  height: 100vh;
}
#msg {
  padding-top: 7vh;
  overflow: auto;
  height: 82vh;
}
header {
  position: absolute;
  top: 0;
  width: 100%;
}
footer {
  position: absolute;
  bottom: 0;
  background: white;
  height: 7vh;
  width: 100%;
  line-height: 7vh;
  text-align: center;
  font-size: 4vh;
}
.van-cell__left-icon {
  font-size: 45px;
  border-radius: 50%;
  overflow: hidden;
  height: 45px;
  width: 45px;
}
.xiaoai{
  text-align: left;
}
.wo{
  text-align: right;
}
.xiaoai  .van-col--16{
  border-radius: 0px 10px 10px 10px ;

}
.wo  .van-col--16{
  border-radius: 10px 0px 10px 10px ;

}
.van-col--16{
  background: #07c160;
  line-height: 30px;
  padding: 5px;
}
li{
  margin: 20px 0;
}
img{
  height: 40px;
}
</style>
