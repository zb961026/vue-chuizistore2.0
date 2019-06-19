<template>
	<div id="main">
		<div class="store-content item">
			<div class="item-box">
					<div class="gallery-wrapper">
						<div class="gallery">
							<div class="thumbnail">
								<ul>
									<!-- 循环图片，当索引匹配到，就显示对应颜色图片顺序 -->
									<li :class="{'on':index==imgIndex}" @click="tableImg(index)" v-for="(img,index) in itemInfo.ali_images" :key="index">
										<!-- 循环图片和拼接图片大小-->
										<img :src="img" width="54px" height="54px">
									</li>
								</ul>
							</div>
							<div class="thumb">
								<ul>
									<!-- 循环图片，当索引匹配到，就显示对应手机状态图片-->
									<li :class="{'on':index==imgIndex}" v-for="(img,index) in itemInfo.ali_images" :key="index">
										<!-- 循环图片和拼接图片大小-->
										<img :src="img" width="440px" height="440px"></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="banner">
						<div class="sku-custom-title">
							<div class="params-price">
								<!-- 套用获取到的匹配对应商品id的数据 -->
								<span><em>¥</em><i>{{itemInfo.price}}</i></span>
							</div>
							<div class="params-info">
								<!-- 套用获取到的匹配对应商品id的数据 -->
								<h4>{{itemInfo.title}}</h4>
								<!-- 套用获取到的匹配对应商品id的数据 -->
								<h6>{{itemInfo.sub_title}}</h6>
							</div>
						</div>
						<div class="sku-dynamic-params-panel">
							<div class="sku-dynamic-params clear">
								<span class="params-name">颜色</span>
								<ul class="params-colors">
									<!-- 循环图片，判断当前传过来的id是否等于点击的颜色id，当id匹配到，就显示对应颜色图片 -->
									<li :class="{'cur':color.id==$route.query.itemId}" v-for="(color,index) in itemInfo.sku_list" :key="index">
										<!--提示点击到的颜色信息-->
										<router-link :title="color.color" :to="{name:'Item',query:{itemId:color.id}}">
											<!-- 匹配到对应的图片，从后台拼接图片大小 -->
										<img :src="color.image">
										</router-link>
									</li>
								</ul>
							</div>
							<div class="sku-dynamic-params clear">
								<div class="params-name">数量</div>
								<div class="params-detail clear">
									<div class="item-num js-select-quantity">
										<!-- 判断数量小于等于1，禁止点击 -->
										<span class="down" :class="{'down-disabled':count<=1}" @click="subCount">-</span>
										<!-- 套用获取到的匹配对应商品id的数据 -->
										<span class="num">{{count}}</span>
										<!-- 数量大于可购买的最大数量时，禁止点击 -->
										<span class="up" :class="{'up-disabled':count>=itemInfo.limit_num}" @click="addCount">+</span>
									</div>
								</div>
							</div>
						</div>
						<div class="sku-status">
							<div class="cart-operation-wrapper clearfix">
								<!--点击加入购物车，执行方法 -->
								<span class="blue-title-btn js-add-cart" @click="addCarPanelHandle"><a>加入购物车</a></span>
								<!-- 点击加入购物车，执行方法 -->
								<span class="gray-title-btn" @click="addCarPanelHandle"><a>现在购买</a></span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<prompt></prompt>
		</div>
</template>

<script>
import itemsData from '@/lib/newItemsData'
import prompt from '@/components/prompt'
import axios from 'axios'
export default{
	data(){
		return{
			itemsData,
			//获取组件传递过来的id ，匹配id
			itemId:this.$route.query.itemId,
			imgIndex:0,// 初始选中的值为0
			count:1 // 数量初始为1
		}
	},
	components:{
		prompt
	},
	watch:{
		'$route.query.itemId'(){ // 随着路由query变化
			this.itemId=this.$route.query.itemId
			this.imgIndex=0 // 索引默认是0
		}
	},
	computed:{
		itemInfo(){
			let itemInfo=this.itemsData.filter((item)=>{ // 循环所有数据
				return Number(item.sku_id)===Number(this.itemId) // 匹配传过来的id和后台id匹配
			})[0]
			return itemInfo // 把数据返回出来
		} 
	},
	methods:{
		tableImg(index){
			this.imgIndex=index; // 图片的index等于传进来的图片index
		},
		addCarPanelHandle()
		{
			let itemData={info:this.itemInfo,count:this.count} // 声明一个对象存储
			this.$store.commit('addCarPanelData',itemData) // 把数据传给方法使用
		},
		addCount(){
			this.count++
			if(this.count>this.itemInfo.limit_num){ // 判断最大数量方法
				this.count=this.itemInfo.limit_num
			}
		},
		subCount(){
			this.count-- // 判断最小数量方法
			if(this.count<1){
				this.count=1
			}
		}
	}
}
</script>

<style>
    
</style>