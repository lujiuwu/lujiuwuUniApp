<template>
	<view class="my-settle-container">
		<!-- 全选的选择框-->
		<label class="radio" @click="changeStatus">
			<radio  color="#20bbbd" :checked="getIsAll"/><text>全选</text>
		</label>
		<!-- 显示总金额的区域 -->
		<view class="text">
			合计：<text>￥{{getAllPrice}}</text>
		</view>
		
		<!-- 结算按钮 -->
		<view class="button">
			 <button size="default" class="button">结算({{checkedGoods}})</button>
		</view>
		
	</view>
</template>

<script>
	import {mapGetters,mapMutations} from 'vuex'
	export default {
		name:"my-settle",
		data() {
			return {
				
			};
		},
		
		computed:{
			// 动态更新商品数量
			// 动态更新结算总价
			...mapGetters('m_cart',['checkedGoods','getAllPrice','total']),
			// 获取“全选”的状态 -- 是否勾选
			getIsAll(){
			  return this.checkedGoods===this.total
			}
			
		},
		methods:{
			...mapMutations('m_cart',['updateAllGoodsStatus']),
			changeStatus(){
				// console.log(!this.getIsAll)
				this.updateAllGoodsStatus(!this.getIsAll)
			}
		}
	}
</script>

<style lang="scss">
.my-settle-container{
	position: fixed;
	bottom: 0;
	left: 0;
	height: 50px;
	width: 100%;
	border-top: 1px solid #ccc;
	display: flex;
	align-items: center;
	.radio{
		padding-left: 15px;
		flex: 1;
	}
	.text{
		flex:3;
		text-align: center;
		text{
			font-size: 18px;
			font-weight: bold;
			color: #168686;
		}
	}
	.button{
		flex: 2;
		background-color: #20bbbd;
		color: #fff;
		button{
			background-color: #20bbbd;
		}
	}
}
</style>