<template>
	<view class="single-goods">
		<view class="choice">
			    <!-- 动态更新勾选状态 -->
				<radio :checked="goods.goods_status" color="#14a1b1" @click="changeRadio"></radio>
		</view>
		<!-- 右侧是商品信息 -->
		<view class="goods-info">
			<!-- 图片 -->
			<view class="img">
				<image :src="goods.goods_image" class="image"></image>
			</view>
			<!-- 详细信息	 -->
			<view class="detail-info">
				<!-- 标题 -->
				<view class="title">
					<text>{{goods.goods_name}}</text>
				</view>
				<!-- 价格 -->
				<view class="price">
					<!-- 价格 -->
					<text class="text">￥{{goods.goods_price}}</text>
					<!-- 计数器 -->
					<uni-number-box :min="1" :value="goods.goods_count" @change="changeNum"></uni-number-box>
				</view>
			</view>
			
			
		</view>
	</view>
</template>

<script>
	export default {
		name:"miku-goods-choice",
		// 根据外界传入的数据渲染
		props:{
			goods:{
				type:Object,
				default:{}
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			changeRadio(){
				// 通过this.$emit()触发外界通过@绑定的radio-change事件
				// 同时把商品的id 和 勾选状态 传递给 radio-change 事件处理函数
				this.$emit('radio-change',{
					goods_id:this.goods.goods_id,
					goods_status:!this.goods.goods_status
				})
			},
			changeNum(val){
				// 通过this.$emit()触发外界通过@绑定的change-number事件
				// 同时把最新商品数量传递过去
				this.$emit('change-number',{
					goods_id:this.goods.goods_id,
					goods_count:val
				})
			}
		}
	}
</script>

<style lang="scss">
.single-goods{
	height: 150px;
	display: flex;
    .choice{
    	flex: 1;
    	display: flex;
    	align-items: center;
    	line-height: 150px;
    	padding-left: 5px;
    }
	
    .goods-info{
    	flex: 17;
    	// background-color: pink;
    	display: flex;
		
    	.img{
    		flex: 1;
    		padding: 15px;
    		.image{
    			width: 100%;
    			height: 100%;
    			
    		}
    	}
    	.detail-info{
    		padding-top: 15px;
    		flex: 2;
    		display: flex;
    		flex-direction: column;
			
    		.title{
    			flex: 1;
    			font-size: 14px;
    			
    		}
    		.price{
    			color: #14a1b1;
    			font-size: 16px;
    			margin-top: 10px;
    			font-weight: bold;
    			flex: 2;
				display: flex;
				padding-right: 18px;
				.text{
					flex: 1;
				}
				.uni-number-box{
					flex: 1;
				}
				
    		}
    	}
    	
    }
	
}

</style>