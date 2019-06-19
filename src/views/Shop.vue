<template>
    <div>
				<div id="banner">
		<div class="pic">
			<ul>
				<li style="display:block;"><img src="../assets/img/1.jpg"></li>
				<li><img src="../assets/img/2.jpg"/></li>
				<li><img src="../assets/img/3.jpg"/></li>
				<li><img src="../assets/img/4.jpg"/></li>
			</ul>	
		</div>
		<div class="tab">
			<ul>
				<li class="on"></li><li></li><li></li><li></li><li></li><li></li>
			</ul>
		</div>
		<div class="btn">
			<div id="leftBtn">&lt;</div>
			<div id="rightBtn">&gt;</div>
		</div>
	</div>
        		<div id="main">
			<div class="sku-box store-content">
					<div class="sort-option">
						<ul class="line clear left">
							<li><a href="javascript:;" class="left">手机</a></li>
						</ul>
						<ul class="line clear right">
							<li><a href="javascript:;" class="right active">默认</a></li>
							<li><a href="javascript:;" class="right arrow"><span class="right arrow before" v-on:mouseenter="sxu"></span>价格<span class="right arrow after" v-on:mouseenter="jxu"></span></a></li>
							<li><a href="javascript:;" class="right arrow">销量</a></li>
						</ul>
					</div>
				<div class="gray-box">
					<div class="item-box">
						<!-- 循环获取到的数据，key为指定的索引，通过item传递信息给组件shop-item -->
					<shop-item :key="index" v-for="(item,index) in goodsData" :item="item"></shop-item>
					</div>
				</div>
			</div>
		</div>
		<prompt></prompt>
		<div id="top">
		<i class="iconfont">&#xe600;</i>
	    </div>
    </div>
</template>

<script>
import goodsData from "@/lib/newGoodsData"; //引入虚拟数据，获取虚拟数据
import shopItem from '@/components/shop-item';
import prompt from '@/components/prompt';
import axios from 'axios'
export default {
    data() {
        return {
            goodsData:goodsData
        };
    },
	components:{
		shopItem,prompt
	},
	methods:{
	},
};


$(function(){
			var $banner = $("#banner");
			var $tabLi = $("#banner .tab ul li");
			var $picLi = $("#banner .pic ul li");
			var $btnDiv = $("#banner .btn div");
			var index = 0;
			var timer = null;
			var nowTime = 0;
			$banner.hover(function(){
				$btnDiv.show();
				clearInterval(timer);
			},function(){
				$btnDiv.hide();
				auto();
			});

			$btnDiv.click(function(){
				if(new Date() - nowTime > 1000){
					nowTime = new Date();
					var i = $(this).index();
					if(i){
						index++;
						index %= $tabLi.length;//0-5 
					}else{
						index--;
						if(index<0) index = $tabLi.length-1;
					}
					fn();
				};
			}).mousedown(function(){
				return false;
			});
			$tabLi.hover(function(){
				index = $(this).index();
				fn();
			});
			function fn(){
				$tabLi.eq(index).addClass("on").siblings().removeClass("on");
				$picLi.eq(index).stop(true).fadeIn("slow").siblings().stop(true).fadeOut("slow");
			};
			
			function auto(){
				timer = setInterval(function(){
					index++;
					index %= $tabLi.length;
					$tabLi.eq(index).addClass("on").siblings().removeClass("on");
					$picLi.eq(index).stop(true).fadeIn("slow").siblings().stop(true).fadeOut("slow");
				},1500);
			};
			auto();
		});
</script>
<style>
			/*banner start*/
#banner{
	width:100%;
	height:449px;
	box-shadow:0 0 2em pink;
	margin:0px auto;
	position:relative;
	}
#banner .pic ul li{
	position:absolute;
	display:none;
	}
#banner .pic img{
	width: 100%;
	height: 449px;
	}
#banner .tab{
	width:162px;
	height:22px;
	position:absolute;
	bottom:10px;
	left:50%;
	margin-left:-66px;
	}
#banner .tab ul li{
	width:8px;
	height:8px;
	background:transparent;
	border: 1px solid #fff;
	border-radius:50%;
	margin:5px 8px;
	text-align:center;
	line-height:18px;
	float:left;
	color:#e5e5e5;
	font-weight:bold;
	cursor:pointer;
	}
#banner .tab ul li.on{
	background:#fff;
	}
#banner .btn div{
	width:28px;
	height:62px;
	background:rgba(0,0,0,0.3);
	text-align:center;
	line-height:62px;
	position:absolute;
	top:50%;
	margin-top:-31px;
	font-size:26px;
	color:#fff;
	cursor:pointer;
	display:none;
	}
#leftBtn{
	left:10px;
	}
#rightBtn{
	right:10px;
	}
#top{width:60px;height:60px;background:#000;position:fixed;right:10px;bottom:10px;font-size:32px;text-align:center;line-height:60px;color:#fff;cursor:pointer;transition:all .5s ease;display:none;}
#top:hover{background:pink;transition:all .5s ease;}
</style>