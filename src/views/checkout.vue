<template>
    <div>
        <div id="main">
			<div class="content page-order-checkout checkout">
				<div class="js-checkout-address-box">
					<div class="gray-box clear">
						<div class="title columns-title pre-title">
							<h2>收货信息</h2>
						</div>
						<div class="box-inner js-checkout-address-panel ">
							<div class="address-common-table js-multiple-address-panel">
								<ul class="address-item-list clear js-address-item-list">
									<li class="js-choose-address" :class="{'selected-address-item':receiveIndex==index}" v-for="(receive,index) in receiveInfo" :key="index">
										<div class="address-item">
											<div class="name-section">  {{receive.name}}  </div>
											<div class="mobile-section">{{receive.phone}}</div>
											<div class="detail-section"> {{receive.provice}}{{receive.city}}{{receive.county}}<br> {{receive.add}} </div>
										</div>
										<div class="operation-section">
											<span class="update-btn js-edit-address">修改</span>
											<span class="delete-btn js-delete-address">删除</span>
										</div>
									</li>
									<li class="add-address-item js-add-address">
										<p>添加新地址</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="gray-box">
					<div class="title">
						<h2>发票信息</h2>
					</div>
					<div class="box-inner invoice-box js-invoice-box"> 
						<p class="invoice-detail"> 发票类型：电子发票 </p> 
						<div class="invoice-detail"> 发票抬头： 
							<div class="radio-box"> 
								<label> 
									<input type="radio" class="hide"> 
									<span class="blue-radio blue-radio-on"><a></a></span>  个人
								</label> 
								<label> 
									<input type="radio" class="hide"> 
									<span class="blue-radio"><a></a></span>  单位
								</label> 
							</div> 
							<div class="module-form-row form-item fn-hide js-invoice-title"> 
								<div class="module-form-item-wrapper no-icon small-item"> 
									<i>请填写公司发票抬头</i> 
									<input type="text" class="js-verify"> 
								</div> 
							</div> 
						</div> 
						<p class="invoice-detail">发票内容：购买商品明细</p> <p class="invoice-label"> 电子发票是税务局认可的有效收付款凭证，可作为售后服务凭据。电子发票打印后可以用于企业报销。 </p>
					</div>
				</div>
				<div class="gray-box">
					<div class="title pre-title">
						<h2>购物清单</h2> 
					</div>
					<div class="box-inner ui-goods-cart">
						<div class="gray-sub-title cart-table-title"> 
							<span class="name">商品名称</span> 
							<span class="subtotal">小计</span> 
							<span class="num">数量</span> 
							<span class="price">单价</span> 
						</div>
						<div class="cart-table">
							<div class="cart-group js-cart-group">
								<!-- 循环商品 -->
								<div class="cart-items" v-for="(item,index) in checkedGoods" :key="index">
									<div class="items-thumb">  
										<!-- 循环图片 -->
										<a href="javascript:;" target="_blank"><img :src="item.ali_image+'?x-oss-process=image/resize,w_80/quality,Q_100/format,webp'"></a>  
									</div>
									<div class="name hide-row">
										<div class="name-cell"> 
											<!-- 循环标题信息 -->
											<a href="javascript:;" :title="item.title+'('+item.spec_json.show_name+')'" target="_blank">{{item.title}}{{item.spec_json.show_name}}</a>
										</div>
									</div>
									<div class="subtotal">
										<!-- 循环总价格 -->
										<div class="subtotal-cell">¥ {{item.count*item.price}}.00</div> 
									</div>
									<!-- 计算数量 -->
									<div class="goods-num">{{item.count}}</div>
									<!-- 计算价格 -->
									<div class="price">¥ {{item.price}}.00</div>
								</div>
							</div>
						</div>
						
					</div>
					<div class="box-inner"> 
						<div class="order-discount-line"> 
							<p> 商品总计： <span>¥ {{checkedPrice}}</span> </p> 
							<p> 运费： <span>+ ¥ {{freight}}</span> </p>  
							<p class="discount-line js-discount-cash"> <em>现金券</em>： <span> - 0 </span> </p>  
						</div> 
					</div>
					<div class="box-inner"> 
						<div class="last-payment clear"> 
							<span class="jianguo-blue-main-btn big-main-btn payment-blue-bt fn-right js-checkout"> <a>提交订单</a> </span> <span class="prices fn-right">应付金额： <em>¥ {{checkedPrice+freight}}</em></span> 
						</div> 
					</div>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
export default{
	data(){
		return{
			receiveIndex:0
		}
	},
	created(){
		this.$store.state.receiveInfo.forEach((receive,index)=>{
			if(receive.default)
			{
				this.receiveIndex=index
				return
			}
		})
	},
	computed:{
		checkedGoods(){ // 选中的商品
			return this.$store.getters.checkedGoods
		},
		checkedPrice(){ // 计算总价
			return this.$store.getters.checkedPrice
		},
		freight(){ // 运费
			let freight=8 // 运费默认8元
			if(this.checkedPrice>=88) // 满88包邮
			{
				freight=0 
			}
			return freight
		},
		receiveInfo(){
			return this.$store.state.receiveInfo
		}

	}
}
</script>

<style>

</style>