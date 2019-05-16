<template>
    		<div id="main" class="hander-car">
			<div class="store-content">
				<div class="cart-box">
					<div class="title">
						<h2>购物清单</h2>
					</div>
					<div class="cart-inner">
						<!-- 判断数量显示控制类的显示 -->
						<div class="empty-label" v-if="count<=0">
							<h3>您的购物车中还没有商品</h3>
							<!-- 跳转到指定页面 -->
								<router-link class="link" to="/">现在选购</router-link>			
						</div>
						<div v-else>
							<div class="cart-table-title">
								<span class="name">商品信息</span>
								<span class="operation">操作</span>
								<span class="subtotal">小计</span>
								<span class="num">数量</span>
								<span class="price">单价</span>
							</div>
							<div class="cart-table">
								<div class="cart-group">
									<!--循环购物列表-->
									<div class="cart-top-items" v-for="(item,index) in carPanelData" :key="index">
										<div class="cart-items">
											<div class="items-choose">
												<!-- 判断选中状态和点击事件 -->
												<span class="blue-checkbox-new" :class="{'checkbox-on':item.checked}" @click="checkGoodsHandle(item.sku_id)"><a></a></span>
											</div>
											<div class="items-thumb">
												<!-- 循环图片连接 -->
												<img :src="item.ali_image+'?x-oss-process=image/resize,w_80/quality,Q_100/format,webp'">
												<a href="javascript:;" target="_blank"></a>
											</div>
											<div class="name hide-row" >
												<div class="name-table">
													<a href="javascript:;" target="_blank">{{item.title}}</a>
													<ul class="attribute">
														<!-- 循环图片 -->
														<li>{{item.spec_json.show_name}}</li>
													</ul>
												</div>
											</div>
											<div class="operation">
												<!-- 点击删除指定id商品 -->
												<a class="items-delete-btn" @click="delCarPanelHandle(item.sku_id)" ></a>
											</div>
											<!-- 动态计算价格 -->
											<div class="subtotal">￥{{item.count*item.price}}.00</div>
											<div class="item-cols-num">
												<div class="select js-select-quantity">
													<!-- 判断数量决定类 -->
													<span class="down" :class="{'down-disabled':item.count<=1}" @click="subCarPanelDataHandle(item.sku_id)" >-</span>
													<span class="num">
														<!-- 动态显示数量 -->
														{{item.count}}
													</span>
													<!-- 判断是否超出最大购买数量 -->
													<span class="up" :class="{'up-disabled':item.count>=item.limit_num}" @click="plusCarPanelDataHandle(item.sku_id)">+</span>
													
												</div>
											</div>
											<!-- 动态价格 -->
											<div class="price">¥ {{item.price}}.00</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- 判断数量控制div的显示 -->
					<div class="cart-bottom-bg fix-bottom" v-if="count>0">
						<div class="cart-bar-operation">
							<div>
								<div class="choose-all js-choose-all">
									<!-- 判断状态，决定是否参与计算 -->
									<span class="blue-checkbox-new" :class="{'checkbox-on':allChecked}" @click="allCheckGoodsHandle(allChecked)"><a></a></span>
									全选
								</div>
								<div class="delete-choose-goods" @click="delCheckGoodsHandle">删除选中的商品</div>
							</div>
						</div>
						<div class="shipping">
							<div class="shipping-box">
								<div class="shipping-total shipping-num">
									<h4 class="">
										<!-- 动态选中数量 -->
										已选择 <i>{{checkedCount}}</i> 件商品
									</h4>
									<h5>
										<!-- 动态总计算数量 -->
										共计 <i >{{count}}</i> 件商品
									</h5>
								</div>
								<div class="shipping-total shipping-price">
									<h4 class="">
										<!-- 动态总金额 -->
										应付总额：<span>￥</span><i >{{checkedPrice+freight}}</i> 
									</h4>
									<h5 class="shipping-tips">
										应付运费:<span>￥</span>{{freight}}
									</h5>
									
								</div>
							</div>
							<router-link tag="span" class="jianguo-blue-main-btn big-main-btn js-checkout" :class="{'disabled-btn':checkedCount<=0}" to="/checkout"><a>现在结算</a></router-link>
							<!-- <span class="jianguo-blue-main-btn big-main-btn js-checkout disabled-btn"><a>现在结算</a></span> -->
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<style>
</style>

<script>
export default {
  computed: {
    carPanelData() {
      // 拿到store里面购物车数据
      return this.$store.state.carPanelData;
    },
    count() {
      // 总计数量
      return this.$store.getters.totleCount;
    },
    allChecked() {
      //全选状态
      return this.$store.getters.allChecked;
    },
    checkedCount() {
      // 选中的商品金额
      return this.$store.getters.checkedCount;
    },
    checkedPrice() {
      // 校正金额
      return this.$store.getters.checkedPrice;
    },
    freight() {
      // 运费
      let freight = 8; // 运费默认8元
      if (this.checkedPrice >= 88) {
        // 满88包邮
        freight = 0;
      }
      return freight;
    }
  },
  methods: {
    delCarPanelHandle(id) {
      // 删除商品
      this.$store.commit("delCarPanelData", id);
    },
    plusCarPanelDataHandle(id) {
      // 增加商品数量
      this.$store.commit("plusCarPanelData", id);
    },
    subCarPanelDataHandle(id) {
      // 减少商品数量
      this.$store.commit("subCarPanelData", id);
    },
    checkGoodsHandle(id) {
      // 选中
      this.$store.commit("checkGoods", id);
    },
    allCheckGoodsHandle(allChecked) {
      // 全选
      this.$store.commit("allCheckGoods", allChecked);
    },
    delCheckGoodsHandle() {
      this.$store.commit("delCheckGoods");
    }
  }
};
</script>