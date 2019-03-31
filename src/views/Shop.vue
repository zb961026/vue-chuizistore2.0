<template>
    <div>
        		<div id="main">
			<div class="sku-box store-content">
				<div class="sort-option">
					<ul class="line clear">
						<li><a href="javascript:;" class="active">综合排序</a></li>
						<li><a href="javascript:;" class="">销量排序</a></li>
						<li><a href="javascript:;" class="">价格低到高</a></li>
						<li><a href="javascript:;" class="">价格高到低</a></li>
					</ul>
				</div>
				<div class="gray-box">
					<div class="item-box">
						<div class="item" v-for=" (item,index) in goodsData" :key="item.id">
							<div>
								<div class="item-img"><img :alt="item.name" :src="item.sku_info[0].ali_image+'?x-oss-process=image/resize,w_206/quality,Q_80/format,webp'" style="opacity: 1;">
								</div>
								<h6>{{item.name}}</h6>
								<h3 >{{item.name_title}}</h3>
								<div class="params-colors">
									<ul class="colors-list">
										<li v-for="(sku,index) in item.sku_info" :key="item.id"><a href="javascript:;" class="active" :title="sku.spec_json.show_name"><img src="http://img01.smartisanos.cn/attr/v2/1000299/B37F37544921114CEF1EC01ED4DF44E4/20X20.jpg"></a></li>
									</ul>
								</div>
								<div class="item-btns clearfix">
									<span class="item-gray-btn"><a href="javascript:;" target="_blank">查看详情</a> </span><span class="item-blue-btn">加入购物车 </span>
								</div>
								<div class="item-price clearfix">
									<i>¥</i><span>199.00</span>
								</div>
								<div class="discount-icon">false</div>
								<div class="item-cover">
									<a href="javascript:;" target="_blank"></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div> 
    </div>
</template>

<script>
import goodsData from '@/lib/goods.js'
export default{
    data(){
        return{
            goodsData:goodsData
        }
    }
}
</script>
<style>
    
</style>