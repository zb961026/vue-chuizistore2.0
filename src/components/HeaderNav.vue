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
					<li><a href="javascript:;">手机</a></li>
					<li><a href="javascript:;">声学</a></li>
					<li><a href="javascript:;">配件</a></li>
					<li><a href="javascript:;">生活</a></li>
					<li><a href="javascript:;">Flyme</a></li>
					<li><a href="javascript:;">服务</a></li>
					<li><a href="javascript:;">专卖店</a></li>
					<li><a href="javascript:;">社区</a></li>
					<li><a href="javascript:;">APP下载</a></li>
					<li><a href="javascript:;">
							<input type="text" placeholder="魅族16s" class="search">
							<img src="../assets/img/search.png" alt="" class="search_icon">
						</a></li>
				</ul>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
	import carPanel from '@/components/car-panel'//导入购物车组件
	export default{
		components:{
			carPanel  //注册购物车组件到页面中
		}
	}
</script>
<style>
</style>