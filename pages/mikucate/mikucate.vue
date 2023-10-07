<template>
	<view>
		<!-- 自定义和默认 -->
		<!-- <my-search :bgColor="'#ccc'"></my-search> -->
		<my-search @click = "gotoSearch"></my-search>
		<view class="scroll_view">
			<scroll-view scroll-y="true" class="leftArea" :style="{height:wh+'px'}">
				<!-- 左侧的滚动视图区域 -->
				<view v-for="(item,index) in list" :key="index" :class = "['left_view_item index',index===active?'active':'']" @click="activeHandler(index)">
					{{item.text}}
				</view>
			</scroll-view>
			<!-- 右侧的菜单区域 -->
			<scroll-view scroll-y="true" class="rightArea" :style="{height:wh+'px'}" :scroll-top="scrollTop">
				<view>
					<!-- 菜单标题 -->
				<view class="title">
					{{dataList.title}}
				</view>
				<!-- 副标题一 -->
				<view class="header">
					{{dataList.header1}}
				</view>
				<!-- 菜单内部 -->
			<view class="body">
				<view v-for="(item,index) in dataList.pictures1" :key="index" class="picture" @click="gotoList(index)">
					<image :src="item.img" ></image>
					<text>{{item.text}}</text>
				</view>
			</view>
			<!-- 副标题二 -->
			<view class="header">
				{{dataList.header2}}
			</view>
			<view class="body">
				<view v-for="(item,index) in dataList.pictures2" :key="index" class="picture" @click="gotoList(index)">
					<image :src="item.img" ></image>
					<text>{{item.text}}</text>
				</view>
			</view>
			<view class="header">
				{{dataList.header2}}
			</view>
			<view class="body">
				<view v-for="(item,index) in dataList.pictures3" :key="index" class="picture" @click="gotoList(index)">
					<image :src="item.img" ></image>
					<text>{{item.text}}</text>
				</view>
			</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import { ssrContextKey } from "vue";
	export default {
	
		data() {
			return {
				// 窗口高度
				wh:0,
				// 选中效果
				active:0,
				// 菜单栏数据
				list:[
					{
						text:"123专区" 
					},
					{
						text:"专辑专区"
					},
					{
						text:"服饰专区"
					},
					{
						text:"术力口专区"
					},
					{
						text:"fufu专区"
					}
					
				],
				// 耳机菜单渲染数据
				order:[
					{
						// 大标题
				        title:"/好听爱听/",
						// 副标题一
						header1:"-一些音乐-",
						header2:"-一些音乐-",
						pictures1:[
							{img:"../../static/floor_images/floor12.jpg",
							text:"love miku1-1"},
							{img:"../../static/floor_images/floor13.jpg",
							text:"love miku1-2"},
							{img:"../../static/floor_images/floor4.jpg",
							text:"love miku1-1"},
							{img:"../../static/floor_images/floor15.jpg",
							text:"love miku1-2"},
							{img:"../../static/right_images/pic1.png",
							text:"love miku1-1"},
							{img:"../../static/right_images/pic2.png",
							text:"love miku1-2"}
						],
						pictures2:[
							{img:"../../static/floor_images/floor12.jpg",
							text:"love miku1-1"},
							{img:"../../static/floor_images/floor13.jpg",
							text:"love miku1-2"},
							{img:"../../static/floor_images/floor4.jpg",
							text:"love miku1-1"},
							{img:"../../static/floor_images/floor15.jpg",
							text:"love miku1-2"},
							{img:"../../static/right_images/pic1.png",
							text:"love miku1-1"},
							{img:"../../static/right_images/pic2.png",
							text:"love miku1-2"}
						],
						pictures3:[
							{img:"../../static/floor_images/floor12.jpg",
							text:"love miku1-1"},
							{img:"../../static/floor_images/floor13.jpg",
							text:"love miku1-2"},
							{img:"../../static/floor_images/floor4.jpg",
							text:"love miku1-1"},
							{img:"../../static/floor_images/floor15.jpg",
							text:"love miku1-2"},
							{img:"../../static/right_images/pic1.png",
							text:"love miku1-1"},
							{img:"../../static/right_images/pic2.png",
							text:"love miku1-2"}
						]
					},
					{
						// 大标题
					    title:"/我的收藏/",
						// 副标题一
						header1:"-一些专辑-",
						header2:"-一些专辑-",
						
					},
					{
						// 大标题
					    title:"/奇迹初音/",
						// 副标题一
						header1:"-一些服饰-",
						header2:"-一些服饰-",
						
					},
					{
						// 大标题
					    title:"/经典术曲/",
						// 副标题一
						header1:"-一些术曲-",
						header2:"-一些术曲-",
					
					},
				{
					// 大标题
				    title:"/fufu好rua/",
					// 副标题一
					header1:"-一些fufu-",
					header2:"-一些fufu-",
					
				}
				],
				// 更新数据
				dataList:{},
		        // 切换页面时，滚动条自动置顶
				scrollTop:0,
				
			};
		},
		onLoad() {
			// 一开始就设置可用窗口的高度
			const sysInfo = uni.getSystemInfoSync()
			// 为了防止搜索框出现bug 可用的窗口高度还应该减去搜索框的高度
			this.wh = sysInfo.windowHeight - 40
			this.dataList = this.order[0]
		},
		methods:{
			// 点击切换菜单栏
			activeHandler(index){
				// 根据索引修改
				this.active = index
				// console.log(index)
				// 更新右侧渲染的数据
				this.dataList = this.order[index]
				// 滚动条位置
				// 如果一直为0,滚动条位置不会改变 加上判断 位置在0和1之间切换
				this.scrollTop = this.scrollTop===0?1:0
			},
			gotoList(id){
				// 跳转到商品详情页面
				uni.navigateTo({
					url:'/subpackage/miku_detail/miku_detail?id='+id
				})
			},
			// 传入到搜索组件的事件
			gotoSearch(){
				//  作为测试 - console.log("go to search")
				// 跳转到指定页面
				uni.navigateTo({
					url:"/subpackage/miku_search/miku_search"
				})
			}
		}
	}
</script>

<style lang="scss">
.scroll_view{
  display: flex;
  .rightArea{
  	flex:19;
	// background-color: #ccc;
	.title{
		padding-top: 8px;
		text-align: center;
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 10px;
	}
	.header{
		padding-left: 10px;
		color: #000;
		font-size: 16px;
		font-weight: bold;
	}
	.body{
		margin-top: 10px;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		margin-bottom: 30px;
		.picture{
			margin-top: 5px;
			margin-bottom: 16px;
			width: 80px;
			height: 110px;
			image{
				width: 100%;
				height: 86%;
			}
			text{
				font-size: 12px;
			}
		}
	}
  }
  .leftArea{
	  border-right: 1px solid #b5dcde;
	  flex:8;
	  .left_view_item{
		  line-height: 60px;
		  text-align: center;
		  &.active{
			background-color: #eee;
			position: relative;
			// 增加一个前部红色的标识
			&::before{
				content: '';
				width: 3px;
				height: 35px;
				background-color: #00aa7f;
				position: absolute;
				top: 50%;
				left: 0;
				transform: translateY(-50%);
			}
		  }
	  }
  }
}

</style>
