<template>
<div>
  <div class="hello-word">

    <div class="ipt">
      <div class="ipt1">
        充值账号：<input type="text" name="text">
      </div>
      
      <span class="b" title="请选择大区">
        请选择大区
        <select name="fuwuqi" id="a" value="请输入">
        <option value="电1">艾欧尼亚</option>
        <option value="电1">2</option>
        <option value="电1">3</option>
        <option value="电1">4</option>
        <option value="电1">5</option>
        <option value="电1">6</option>
        <option value="电1">7</option>
        <option value="电1">8</option>
        <option value="电1">9</option>
      </select>
      </span>
    </div>
    <div class="c">
      <!-- active是activeIndex为0的时候 -->
      <div @click="selectActive(0)" :class="{ item,active:activeIndex==0 }">
        <div>
            <img src="//midas.gtimg.cn/midas/images/logo/lol/24.png" class="img1">
            <span class="service_num">5000</span>
        </div>
        <div>
          <span>50元</span>
        </div>
        <div :class="{icon}"><i class="hhh">ok</i></div>
        
        <!-- {{activeIndex}} -->
      </div>
     


      <div @click="selectActive(1)"  v-bind:class="{item,active:activeIndex==1 }">
        <div>
            <img src="//midas.gtimg.cn/midas/images/logo/lol/24.png" class="img1">
            <span class="service_num">10000</span>
        </div>
        <div>
          <span>100元</span>
        </div>
          <!-- {{activeIndex}} -->
      </div>





      <div @click="selectActive(2)" :class="{item,active:activeIndex==2 }">
        <div>
            <img src="//midas.gtimg.cn/midas/images/logo/lol/24.png" class="img1">
            <span class="service_num">20000</span>
        </div>
        <div>
          <span>200元</span>
        </div>
                <!-- {{activeIndex}} -->
      </div>



       <div @click="selectActive(3)" :class="{item,active:activeIndex==3 }">
        <div class="service_num">
            
            <el-input v-model="input" placeholder="其他数量"></el-input>
        </div>
        <div>
          <span>元</span>
        </div>
      </div>
        <!-- {{activeIndex}} -->
   </div>


   <br>
   <hr style="height:1px;border:none;border-top:1px dashed">


    <div class="bottom">
      <br>
      <div class="d">
        <p>
          支付方式:
        </p>
      </div>
      <br>
      <div class="test">
        <div @click="dianji(1)" :class="{yangshi,active:actIndex==1}">
        <div>
            <span  class="num"> Q币支付</span>
        </div>
        <!-- {{actIndex}} -->
      </div>

      <div @click="dianji(2)" :class="{yangshi,active:actIndex==2}">
        <div>
            <span class="num">QQ钱包<span class="color">95折</span></span>
        </div>
      </div>
      <div @click="dianji(3)" :class="{yangshi,active:actIndex==3}">
        <div>
            <span class="num">微信支付<span class="color">95折</span></span>
        </div>
      </div>
      <div @click="dianji(4)" :class="{yangshi,active:actIndex==4}">
        <el-col :span="12">
          <!-- <span class="demonstration">hover 激活</span> -->
          <el-dropdown>
          <span class="el-dropdown-link">
          <div class="num">更多方式<i class="el-icon-arrow-down el-icon--center"></i></div>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>网银支付</el-dropdown-item>
            <el-dropdown-item>QQ卡</el-dropdown-item>
          </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </div>
      </div>
    </div>
  </div>
</div>


</template>

<script>
export default {
  name: 'HelloWorld', 
  data(){
    return{
        activeIndex:null,
        item:true,
        active:true,

        actIndex:null,
        yangshi:true,
        // ceshi:true,
        // act:true,
        icon:false
    }
    
  },
  methods:{
    selectActive(index){
      this.activeIndex =index;
      
    },
    dianji(index){
      this.actIndex=index;
      
     }
    // methods:{
    //   dianji(index){
    //     this.actIndex=index;
    //   }
    // }


    // qweqr(){
    //   return {
    //     item:true,
    //     active:true
    //   }

    // }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less"  scoped> 
  .hello-word{
    background-color:whitesmoke;
    margin-left: 300px;
    width: 900px;
    height: 600px;




    .item {
      width: 150px;
      height: 150px;
      margin-top: 60px;
      margin-left: 20px; 
      border: 1px solid grey;
      &:hover{
        border-color:blue;

      }
      
    }
    
    .active {
      border-color:cadetblue;

    }

    .act{
      background: red;
    }
  }
  .ipt{
    padding-top: 20px;
  }
  .ipt1{
    float: left;
    padding-left: 150px;
  }
  .c{
    display: flex;
    flex-direction: row;
    margin-top: 80px;
    margin-left: 50px;
    font-family: "宋体";
    font-size: 20px;
  }

  
  .service_num{
    line-height: 80px;
  }
  .test{
    display: flex;
    flex-direction: row;
    
  }
  .d{
    display: flex;
    flex-direction: row;
    margin-left: 47px;
    
  }
  .yangshi{
     width: 150px;
    height: 40px;
    border: 1px solid grey;
    margin-left: 49px;
    &:hover{
        border-color:blue;

      }
  }
  
  .num{
    text-align: center;
    line-height: 40px;
  }
   
  .color{
    background-color: orangered;
  }
  .icon{
   
    padding-left: 100px;
    padding-bottom: 200px
  }
 
  
 

</style>
