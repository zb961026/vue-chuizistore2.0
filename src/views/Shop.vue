<template>
    <div>
		<div id="banner_one"></div>
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
    </div>
</template>

<script>
import goodsData from "@/lib/newGoodsData"; //引入虚拟数据，获取虚拟数据
import shopItem from '@/components/shop-item';
import prompt from '@/components/prompt';
export default {
    data() {
        return {
            goodsData: goodsData //获取数据
        };
    },
	components:{
		shopItem,prompt
	},
	methods:{
		hover(){
		}
	}
};
</script>
<style>
</style>