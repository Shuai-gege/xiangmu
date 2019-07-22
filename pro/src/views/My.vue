<template>
    <div>
        <div class="head">
            <van-uploader :after-read='read'  :max-count='1'>
              <img :src="url" alt="" class="img" >
            </van-uploader>  
            <h3>{{name}}</h3>
        </div>

        
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" @click="tap"/>
        待付款
      </van-col>
      <van-col span="6">
        <van-icon name="records" />
        待发货
      </van-col>
      <van-col span="6">
        <van-icon name="tosend" :info='info'/>
        待收货
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" />
        已发货
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="points" title="我的积分" is-link  @click="tap"/>
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link @click="tap"/>
      <van-cell icon="gift-o" title="我收到的礼物" is-link  @click="tap"/>
    </van-cell-group>
   
    </div>
</template>
<script>
import { Row, Col, Icon, Cell, CellGroup } from 'vant';
export default {
  
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data(){
      return{
         url: 'https://img.yzcdn.cn/vant/cat.jpeg',
         name:'CJQ',
         info:this.$store.state.num
      }
     
  },
  methods: {
      read(file){
         
        this.url = file.content
      },
      tap(){
          this.$notify('功能正在开发中，敬请期待');
      }
  },
  mounted() {
      console.log(this.$store.state.num)
  },
 

}
</script>
<style>

.user-poster {
    width: 100%;
    height: 53vw;
    display: block;
}
.user-group {
    margin-bottom: 15px;
  } 
.user-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
}
.van-icon {
      display: block;
      font-size: 24px;
}
.head{
    height:230px;
    background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563599389484&di=4b9456fb11451658e778b9a751e1a20d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201605%2F12%2F20160512100952_isaTm.gif');
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center

}
.head img{
    width:80px;
    height:80px;
    border-radius: 50%
}
.head h3{
    color: #fff
}
.van-info{
    right:30px
}
</style>