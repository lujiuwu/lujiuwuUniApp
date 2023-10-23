<template>
	<!-- 按需显示 -- 有商品则显示列表/无商品则显示图片 -->
	<view class="cart-container" v-if="cart.length!==0">
		<!-- 收货地址区域 -->
		<miku-address></miku-address>
	    <!-- 购物车商品列表的标题区域 -->
	    <view class="cart-title">
		<!-- 左侧的图标 -->
		<uni-icons type="shop" size="19" class="shop"></uni-icons>
		<text>我是购物车</text>
	    </view>
	    <!-- 设置滑动删除的效果 -->
	    <uni-swipe-action>
		  <!-- 循环渲染商品信息 -->
		  <block v-for="(goods,index) in cart" :key="index">
			<uni-swipe-action-item :right-options="options" @click="swiperActionHandler(goods)">
				<miku-goods-choice :goods = "goods" @radio-change="radioChangeHandler" @change-number="changeNumber"></miku-goods-choice>
			</uni-swipe-action-item>
		  </block>
	    </uni-swipe-action>
	    <!-- 使用自定义的结算组件 -->
	    <my-settle></my-settle>
	</view>
	<view class="none-container" v-else>
		<view class="image">
			<image src="../../static/404.jpg" ></image>
		</view>
		这里什么商品也没有，只有miku
	</view>
</template>

<script>
	// 引入tabbar-badge
	import tabbarMix from '../../mixins/tabbar-badge.js'
	// 按需导入 mapState 和 mapMutations 辅助函数
	import {mapState,mapMutations} from 'vuex'
	export default {
		// 直接放在mixins数组里面
		mixins:[tabbarMix],
		computed:{
			// 将m_cart模块中的 cart数组 映射到当前页面中使用
			...mapState('m_cart',['cart'])
		},
		data() {	
			return {
			  // 定义操作按钮的配置信息options
			  options:[
				  {
					  text:'删除',
					  style:{
						  backgroundColor:'#20bbbd'
					  }
				  }
			  ]
			};
		},
		methods:{
			// 映射所需方法
			...mapMutations('m_cart',['updateChoice','updateNumber','deleteGoods']),
			// 修改选择框的状态
			// 调用映射的方法
			radioChangeHandler(e){
				// console.log(e)
				this.updateChoice(e)
			},
			// 修改商品数量的方法
			changeNumber(e){
				this.updateNumber(e)
				// console.log(e)
			},
			// 删除商品的方法
			swiperActionHandler(e){
				this.deleteGoods(e)
			}
		}
		
	}
</script>

<style lang="scss">
// 整体页面设置一个padding值 -- 给结算组件区域腾位置
.cart-container{
	padding-bottom: 50px;
}
// 标题区域的样式优化
.cart-title{
	height: 42px;
	// background-color: pink;
	border-bottom: 1px solid #b0b0b0;
	line-height: 42px;
	padding-left: 10px;
	.shop{
		margin-right: 10px;
	}
}
.none-container{
	background-color: #fff;
	text-align: center;
	.image{
		margin: 0 auto;
		padding: 0 35px;
	}
}

</style>
