<template>
<!-- 鼠标进入，离开显示购物车状态 -->
        						<li class="nav-cart" @mouseenter="showCarHandle" @mouseleave="hideCarHandle" >
							<a href="javascript:;">购物车</a>
							<!--根据class改变颜色-->
							<!-- 判断数量大于0，显示购物车 -->
							<span class="cart-empty-num" :class="{'cart-num':count>0}">
								<!-- 商品数量 -->
								<i>{{count}}</i>
							</span>
							<div class="nav-cart-wrapper" v-if="carShow">
								<div class="nav-cart-list">
									<!-- 当数量小于0，购物车为空 -->
									<div class="empty" v-if="count<=0">
										<h3>购物车为空</h3>
										<p>您还没有选购任何商品，现在前往商城选购吧!</p>
									</div>
									<div class="full" v-else>
										<div class="nav-cart-items">
											<ul>
												<!-- 循环显示购物车中的信息，key为索引 -->
												<li class="clear" v-for="(item,index) in carPanelData" :key="index">
													<div class="cart-item js-cart-item cart-item-sell">
														<div class="cart-item-inner">
															<div class="item-thumb">
																<!-- 循环图片信息 -->
																<img :src="item.ali_image+'?x-oss-process=image/resize,w_80/quality,Q_100/format,webp'">
															</div>
															<div class="item-desc">
																<div class="cart-cell">
																	<h4> 
																		<!-- 循环商品的名称 -->
																		<a href="#/item/100027401">{{item.title}}</a>
																	</h4>
																	<p class="attrs">
																		<!-- 循环颜色的名称 -->
																		<span>{{item.spec_json.show_name}}</span>
																	</p>
																	<h6>
																		<span class="price-icon">¥</span>
																		<!-- 循环商品价格 -->
																		<span class="price-num">{{item.price}}</span>
																		<!-- 循环商品数量 -->
																		<span class="item-num">x {{item.count}}</span>
																	</h6>
																</div>
															</div>
															<!-- 点击删除购物车中对应的商品信息 -->
															<div class="del-btn" @click="delCarPanelHandle(item.sku_id)">删除</div>
														</div>
													</div>
												</li>
											</ul>
										</div>
										<div class="nav-cart-total">
											<!-- 计算商品的总数量 -->
											<p>共 <strong class="ng-binding">{{count}}</strong> 件商品</p>
											<!-- 计算商品的总价格 -->
											<h5>合计：<span class="price-icon">¥</span><span class="price-num ng-binding" ng-bind="cartMenu.totalPrice">{{totle}}</span></h5>
											<h6>
												<!-- 跳转购物车页面 -->
												<router-link class="nav-cart-btn" to="/cart" >去购物车结算</router-link>
											</h6>
										</div>
									</div>
								</div>
							</div>
						</li>
</template>

<script>
export default {
  computed: {
    // 计算属性
    carPanelData() {
      //购物车数据
      return this.$store.state.carPanelData; // 拿到购物车数据
    },
    count() {
      //数量
      return this.$store.getters.totleCount; // 拿到购物车数量
    },
    totle() {
      //总价格
      return this.$store.getters.totlePrice; // 拿到购物车价格
    },
    carShow() {
      //显示购物车
      return this.$store.state.carShow; //是否显示购物车
    }
  },
  methods: {
    delCarPanelHandle(id) {
      //删除购物车数量
      this.$store.commit("delCarPanelData", id);
    },
    showCarHandle() {
      //显示购物车状态
      this.$store.commit("showCar");
    },
    hideCarHandle() {
      //隐藏购物车状态
      this.$store.commit("hideCar");
    }
  }
};
</script>

<style>
</style>