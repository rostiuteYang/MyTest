<template>
<div class="main">
    <div class="topbar">
        <div class="container">
            <div class="topbar-nav">
                小米商城|MIUI|IoT|云服务|金融|有品|小爱开放平台|政企服务|下载app|Select Region
            </div>
            <div class="topbar-info">
                登录|注册|消息通知
            </div>
            <div class="topbar-cart">
                购物车(0)
            </div>
        </div>
        
    </div>
   
</div>


</template>

<script>
export default {
  name: 'HelloWorld',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main{
        padding: 0;
        margin: 0;
    }
    .topbar{
        border: 1px solid black;
        /* background-color: black; */
        height: 20px;
    }
    .container{
        margin: 0 auto;
        width: 1226px;
    }
    .topbar-nav{
        float: left;
    }
    .topbar-info{
        float:right;
    }
    .topbar-cart{
        float: right;
    }



</style>
