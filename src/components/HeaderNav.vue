<template>
    <div>
        	<div id="header">
			<div class="nav-global">
				<div class="container">
					<h1 class="nav-logo">
						<a href="javascript:;"></a>
					</h1>
					<ul class="nav-aside">
						<li class="nav-user">
							<a href="javascript:;">个人中心</a>
							<!--active-->
							<div class="nav-user-wrapper">
								<div class="nav-user-list">
									<ul>
										<li class="order"><a href="javascript:;">我的订单</a></li>
										<li class="support"><a href="javascript:;">售后服务</a></li>
										<li class="coupon"><a href="javascript:;">我的优惠</a></li>
										<li class="information"><a href="javascript:;">账户资料</a></li>
										<li class="address"><a href="javascript:;">收货地址</a></li>
										<li class="logout"><a href="javascript:;">退出</a></li>
									</ul>
								</div>
							</div>
						</li>
						<!--active-->
						<!-- 引入购物车组件 -->
						<car-panel></car-panel>   
					</ul>
					<ul class="nav-list">
					<a href="javascript:;"><li>手机</li></a>
					<a href="javascript:;"><li>声学</li></a>
					<a href="javascript:;"><li>配件</li></a>
					<a href="javascript:;"><li>生活</li></a>
					<a href="javascript:;"><li>Flyme</li></a>
					<a href="javascript:;"><li>服务</li></a>
					<a href="javascript:;"><li>专卖店</li></a>
					<a href="javascript:;"><li>社区</li></a>
					<a href="javascript:;"><li>APP下载</li></a>
					<a href="javascript:;" ><li><input type="text" placeholder="魅族16s" class="search">
					<img src="../assets/img/search.png" alt="" class="search_icon">
					</li></a>
				</ul>
				</div>
			</div>
		</div>
			    <div id="content">
			    <div class="ct-box" style="width:100%;height:100%;background:rgba(255,255,255);">
					<ul class="product">
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">荣耀10</p>
						<p class="pt_price">￥1950</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">荣耀9</p>
						<p class="pt_price">￥1900</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">荣耀8</p>
						<p class="pt_price">￥1850</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">荣耀7</p>
						<p class="pt_price">￥1650</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">荣耀6</p>
						<p class="pt_price">￥1550</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">荣耀5</p>
						<p class="pt_price">￥1050</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">荣耀5s</p>
						<p class="pt_price">￥950</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">荣耀20</p>
						<p class="pt_price">￥3950</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">荣耀7s</p>
						<p class="pt_price">￥1450</p></li>
					</ul>
				</div>
			    <div class="ct-box" style="width:100%;height:100%;background:rgba(255,255,255);">
					<ul class="product">
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">魅族10</p>
						<p class="pt_price">￥1950</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">魅族9</p>
						<p class="pt_price">￥1900</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">魅族8</p>
						<p class="pt_price">￥1850</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">魅族7</p>
						<p class="pt_price">￥1650</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">魅族6</p>
						<p class="pt_price">￥1550</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">魅族5</p>
						<p class="pt_price">￥1050</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">魅族5s</p>
						<p class="pt_price">￥950</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">魅族20</p>
						<p class="pt_price">￥3950</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">魅族7s</p>
						<p class="pt_price">￥1450</p></li>
					</ul>
				</div>
			     <div class="ct-box" style="width:100%;height:100%;background:rgba(255, 255, 255);">
					<ul class="product">
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">oppo 10</p>
						<p class="pt_price">￥1950</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">oppo 9</p>
						<p class="pt_price">￥1900</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">oppo 8</p>
						<p class="pt_price">￥1850</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">oppo 7</p>
						<p class="pt_price">￥1650</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">oppo 6</p>
						<p class="pt_price">￥1550</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">oppo 5</p>
						<p class="pt_price">￥1050</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">oppo 5s</p>
						<p class="pt_price">￥950</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">oppo 20</p>
						<p class="pt_price">￥3950</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">oppo 7s</p>
						<p class="pt_price">￥1450</p></li>
					</ul>
				</div>
			    <div class="ct-box" style="width:100%;height:100%;background:rgba(255,255,255);">
					<ul class="product">
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">小米10</p>
						<p class="pt_price">￥1950</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">小米9</p>
						<p class="pt_price">￥1900</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">小米8</p>
						<p class="pt_price">￥1850</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">小米7</p>
						<p class="pt_price">￥1650</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">小米6</p>
						<p class="pt_price">￥1550</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">小米5</p>
						<p class="pt_price">￥1050</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">小米5s</p>
						<p class="pt_price">￥950</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">小米20</p>
						<p class="pt_price">￥3950</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">小米7s</p>
						<p class="pt_price">￥1450</p></li>
					</ul>
				</div>
				 <div class="ct-box" style="width:100%;height:100%;background:rgba(255,255,255);">
					<ul class="product">
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">红米10</p>
						<p class="pt_price">￥1950</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">红米9</p>
						<p class="pt_price">￥1900</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">红米8</p>
						<p class="pt_price">￥1850</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">红米7</p>
						<p class="pt_price">￥1650</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">红米6</p>
						<p class="pt_price">￥1550</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">红米5</p>
						<p class="pt_price">￥1050</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">红米5s</p>
						<p class="pt_price">￥950</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">红米20</p>
						<p class="pt_price">￥3950</p></li>
						<li class="pt_item">
						<img src="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" alt="" width="110px" height="130px">
						<p class="pt_desc">红米7s</p>
						<p class="pt_price">￥1450</p></li>
					</ul>
				</div>
				<div class="ct-box" style="width:100%;height:100%;"></div>
				<div class="ct-box" style="width:100%;height:100%;"></div>
				<div class="ct-box" style="width:100%;height:100%;"></div>
			    <div class="ct-box" style="width:100%;height:150%;background:rgba(255,255,255);">
					<div class="ad_box"><img src="https://fms.res.meizu.com/dms/2019/01/18/935524fa-9d0b-420b-a485-105974823f40.jpg" width="1060px" height="260px" alt=""></div>
				</div>
			    </div>
    </div>
</template>
<script>
import carPanel from "@/components/car-panel"; //导入购物车组件
export default {
  components: {
    carPanel //注册购物车组件到页面中
  }
};

$(function(){
			var $a=$(".nav-list>a");
			var $cont=$("#content");
			$a.mouseover(function(){
			//获取当前点击的li对象
			var $aa = $(this);
			//获取当前点击的索引
			var index = $aa.index();
			$aa.addClass("on").siblings().removeClass("on");
			$cont.css("height","250px").css("opacity","1");
			$cont.children().eq(index).css("opacity","1");
			$cont.children().eq(index).show().siblings().hide();
		});

		$(".product li").mouseover(function(){
			$(this).css("opacity","1").siblings().css("opacity","0.5");
		})




		$("#content").mouseleave(function(){
			$a.removeClass("on");
			$("#content").children().css("opacity","0");
			$("#content").css("height","0");
		});
});


</script>
<style>
/* #tab_l{
	width: 1080px;
	height: 480px;
} */
#header{
	position: relative;
	z-index: 2;
}
#content{
	width:100%;
	height: 0;
	position: absolute;
	top: 0px;
	opacity: 0;
	z-index: 1;
	transition: all .2s;
	padding: 50px auto;
}
#content .ct-box{
	display: none;
	opacity: 0;
	height: 260px;
	margin-top: 0px;
}
.nav-global .nav-list .on{
	color: #00c3f5;
	transition: all .2s;
	}
.product{
	margin: 50px 280px 50px 350px;
}
.pt_item{
	width: 100px;
	height: 100%;
	padding: 50px 10px;
	color: red;
	float: left;
	cursor: pointer;
	}
.pt_desc{
	color: #666;
	text-align: center;
	font-size: 14px;
	font-weight: bold;
}
.pt_price{
	text-align: center;
	color: #ff6700;
}
.ad_box{
	margin: 50px 150px;
	padding: 80px 180px 20px 180px;
}
</style>