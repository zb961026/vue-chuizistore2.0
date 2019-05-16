<template>
	<div class="item">
		<div>
			<!-- 根据索引获取对应的图片数据 -->
			<div class="item-img"><img :alt="item.name" :src="item.sku_info[itemIndex].ali_image+'?x-oss-process=image/resize,w_206/quality,Q_80/format,webp'" style="opacity: 1;">
								</div>
								<!-- 根据索引获取对应的商品名称 -->
								<h6>{{item.name}}</h6>
								<!-- 根据索引获取对应的商品标题-->
								<h3 >{{item.name_title}}</h3>
								<div class="params-colors">
									<ul class="colors-list">
										<!-- 根据索引获取对应的商品颜色分类信息-->
										<li v-for="(sku,index) in item.sku_info" :key="index">
											<!-- 根据索引获取对应颜色的选中状态和对应的颜色文字-->
											<a href="javascript:;" @click="tableIndex(index)" :class="{'active':index==itemIndex}" :title="sku.spec_json.show_name">
												<!-- 根据索引获取到选中的对应颜色的缩略图片-->
												<img :src="'http://img01.smartisanos.cn/'+sku.spec_json.image+'20X20.jpg'"></a></li>
									</ul>
								</div>
								<div class="item-btns clearfix">
									<span class="item-gray-btn">
										<!--路由页面跳转，传递参数过来-->
										<router-link :to="{name:'Item',query:{itemId:item.sku_info[itemIndex].sku_id}}">查看详情</router-link>
										</span>
										<span class="item-blue-btn">加入购物车</span>
								</div>
								<div class="item-price clearfix">
									<i>¥</i>
									<!-- 获取对应的商品价格 -->
									<span>{{item.price}}</span>
								</div>
								<div class="discount-icon">false</div>
								<div class="item-cover">
									<!--路由页面跳转，传递参数过来匹配对应的商品id-->
									<router-link :to="{name:'Item',query:{itemId:item.sku_info[itemIndex].sku_id}}"></router-link>
								</div>
							</div>
						</div>
</template>

<script>
import "@/assets/css/goodsList.css";
export default {
  data() {
    return {
      itemIndex: 0 // 初始索引/顺序
    };
  },
  props: { //接收shop的item传值
    item: {
      type: Object // 类型是一个对象
    }
  },
  methods: {
    tableIndex(index) {
      this.itemIndex = index; // 点击的index值为当前index值
		},
  }
};
</script>

<style>
</style>