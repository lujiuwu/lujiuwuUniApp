<template>

	<view>
		<!-- 搜索框组件 -->
		<view class="search_input">
			<my-search></my-search>
		</view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="500" :circular="true">
			<swiper-item v-for="(item,index) in swipers" :key="index">
				<!-- 改造 -- 满足需求 -> 点击轮播图，跳转到商品详情页 -->
				<!-- 进阶 --在跳转的同时要传递轮播图索引 -->
				<navigator class="swiper-item" :url="'/subpackage/miku_detail/miku_detail?id='+item.miku_id">
					<image :src="item.img_url"></image>
				</navigator>
			</swiper-item>
		
		</swiper>
		<view class="nav_list">
			<view  v-for="(item,index) in navigation" :key="index">
				<image :src="item.img_url" class="nav_item" @click="navigateHandler(item.nav_url)"></image>
				<view>{{item.text}}</view>
			</view>
		</view>
		<view class="floors">
			<view v-for="(item,index) in floors" :key="index" class="floor">
				<view class="title">
					{{item.title}}
					
				</view>
				<view class="body">
					<navigator class="left" :url="item.url">
						<image :src="item.mainImg"></image>
					</navigator>
					<navigator class="right" :url="item.url">
						<image :src="item.img1"></image>
						<image :src="item.img2"></image>
						<image :src="item.img3"></image>
						<image :src="item.img4"></image>
					</navigator>
				</view>
				
			</view>
		</view>
		
	</view>
	
</template>

<script>
	// 引入tabbar-badge
	import tabbarMix from '../../mixins/tabbar-badge.js'
	export default {
		mixins:[tabbarMix],
		data() {
			return {
				// 轮播图数据数组
				swipers:[
					{
						img_url:"../../static/swiper_images/swiper1.jpg",
						miku_id:123
					},
						
					{
						img_url:"../../static/swiper_images/swiper2.jpg",
						miku_id:456
					},
					
					{
						img_url:"../../static/swiper_images/swiper3.jpg",
						miku_id:789
					}
					
					
					
				],
				// 分类导航数据
				navigation:[
					{
						img_url:"../../static/navigation_images/book.png",
						text:"阅读",
						// 跳转路径
						nav_url:"/pages/mikucate/mikucate"
					
					},
					{
						img_url:"../../static/navigation_images/cate.png",
						text:"分类"
					
					},
					{
						img_url:"../../static/navigation_images/find.png",
					text:"查询"
					},
					{
						img_url:"../../static/navigation_images/dayli.png",
						text:"日程"
					
					}
				],
				floors:[
					{
						title:"我推天下第一",
						mainImg:"../../static/floor_images/floor11.jpg",
						url:"/subpackage/miku_list/miku_list?floor=1",
						img1:"../../static/floor_images/floor12.jpg",
						img2:"../../static/floor_images/floor13.jpg",
						img3:"../../static/floor_images/floor4.jpg",
						img4:"../../static/floor_images/floor15.jpg"
					},
					{
						title:"欣赏miku美貌",
						mainImg:"../../static/floor_images/floor21.jpg",
						url:"/subpackage/miku_list/miku_list?floor=2",
						img1:"../../static/floor_images/floor22.jpg",
						img2:"../../static/floor_images/floor23.png",
						img3:"../../static/floor_images/floor24.jpg",
						img4:"../../static/floor_images/floor25.jpg"
					}
				]
			};
		},
			
		methods:{
			// 点击导航栏跳转到对应页面
			navigateHandler(url){
				uni.switchTab({
					url:url
				})
			}
		}
	}
</script>

<style lang="scss">
	// 给搜索框设置吸睛效果 保证页面滚动时搜索框固定在顶部
	.search_input{
		position: sticky;
		top: 0;
		// 防止轮播图的覆盖
		z-index: 999;
	}
swiper{
	height: 220px;
	image,.swiper-item{
		height: 100%;
		width: 100%;
	}
}
.nav_list{
	text-align: center;
	font-size: 25rpx;
	padding: 0 15rpx;
	display: flex;
	justify-content: space-around;
	margin: 10px 0;
	.nav_item{
		width: 80rpx;
		height: 80rpx;
	}
}
.floors{
	padding: 0 10rpx 0 14rpx;
	
	display: flex;
	flex-direction: column;
	.floor{
		.title{
			font-size: 36rpx;
			color: #158181;
			font-weight: bold;
			margin-bottom: 3px;
		}
		margin-bottom: 22rpx;
		flex: 1;
		display: flex;
		flex-direction: column;
		image{
			height: 100%;
			width: 100%;
		}
		.title{
			flex: 1;
		}
		.body{
			padding: 0;
			flex:9;
			display: flex;
			
			.right{
				padding: 0;
				flex: 5;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
				image{
					box-sizing: border-box;
					
					width: 215rpx;
					height: 215rpx;
				}
				
			}
			.left{
				margin-right: 4px;
				flex:3;
			}
		}
		
	}
}
</style>
