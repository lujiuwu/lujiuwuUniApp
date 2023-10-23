<template>
	<view class="goods-items">
		<view class="img">
			<image :src="goods.img" ></image>
		</view>
		
		<view class="body">
			<view class="des">
				{{goods.des}}
			</view>
			<view class="tags">
				<uni-tag :text="tag" v-for="(tag,id) in goods.tags" :key="id" :inverted="true"  type="primary"></uni-tag>
			</view>
			
			<view class="price">
				典藏价 - <text>{{goods.price}}</text>
			</view>
			<!-- 渲染标签 -->
			
		</view>
		
		
	</view>
</template>

<script>
	export default {
		name:"miku-goods-list",
		// 单项商品组件 -- 根据调用者传入的props值渲染
		props:{
			goods:{
				type:Object,
				default:{}
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.goods-items{
		padding: 6px;
		height: 130px;
		display: flex;
		
		.img{
			
			flex: 1;
			padding: 2px 7px;
			image{
				height: 100%;
				width: 100%;
				border: 1px solid #666;
				border-radius: 5px;
			}
		}
		.body{
			padding:0 5px;
			flex:2;
			// 描述
			.des{
				font-size: 14px;
				margin-bottom: 12px;
				font-weight: bold;
			}
			.price{
				
				text{
					font-size: 20px;
					font-weight: bold;
					color:#3c8777;
				}
			}
			.tags{
				margin-bottom: 20px;
				.uni-tag{
					margin-right: 3px;
				}
			}
			
		}
	}
</style>