<template>
	<view>
		<view class="detail">
			<!-- 价格 -->
			<view class="price">
				{{info.price}}
			</view>
			<!-- 描述+收藏 -->
			<view class="textArea">
				<view class="text">
					<text>{{info.text}}</text>
				</view>
				<view class="coll" @click="changeStar()">
					<uni-icons type="star" size="24" ></uni-icons>
					<text>{{info.isStar?"取消收藏":"收藏"}}</text>
				</view>
			</view>
			
			<image :src="info.img_url" ></image>
			</view>
			<!-- 导航组件 -->
			<!-- 为导航组件新增click方法 点击跳转到购物车页面 -->
			<view class="goods-nav">
				<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
			</view>
	</view>
	
		
		
	
</template>

<script>
	export default {
		data() {
			return {
				// 导航组件的配置对象
				// 左侧按钮
				  options: [{
							icon: 'shop',
							text: '葱委会',
							infoBackgroundColor:'#007aff',
						}, {
							icon: 'cart',
							text: '购物车',
							infoBackgroundColor:'#007aff',
							info: 2
						}],
					    buttonGroup: [{
					      text: '加入购物车',
					      backgroundColor: '#46d8c7',
					      color: '#fff'
					    },
					    {
					      text: '立即购买',
					      backgroundColor: '#1e78ff',
					      color: '#fff'
					    }
					    ],
				// 传入参数 -- 视作商品标签号
				id:"",
				// 商品信息数据
				info:{},
				// 预设的数据数组
				info_data:[
					{
						img_url:"../../static/swiper_images/swiper1.jpg",
						price:"￥123",
						text:"初音未来（はつね みく，Hatsune Miku），是2007年8月31日由Crypton Future Media以雅马哈的 Vocaloid 系列语音合成程序为基础开发的音源库",
						isStar:1
					},
						
					{
						img_url:"../../static/swiper_images/swiper2.jpg",
						price:"￥456",
						text:"初音未来（はつね みく，Hatsune Miku），是2007年8月31日由Crypton Future Media以雅马哈的 Vocaloid 系列语音合成程序为基础开发的音源库",
						isStar:0
					},
					
					{
						img_url:"../../static/swiper_images/swiper3.jpg",
						price:"￥789",
						text:"初音未来（はつね みく，Hatsune Miku），是2007年8月31日由Crypton Future Media以雅马哈的 Vocaloid 系列语音合成程序为基础开发的音源库",
						isStar:0
					},
					{
						img_url:"../../static/floor_images/floor23.jpg",
						price:"￥666",
						text:"初音未来（はつね みく，Hatsune Miku），是2007年8月31日由Crypton Future Media以雅马哈的 Vocaloid 系列语音合成程序为基础开发的音源库",
						isStar:0
					}
					
				]
			};
		},
		// 获取页面参数
		onLoad(options) {
			this.id = options.id
			if(this.id==="123"){
				this.info = this.info_data[0]
			}else if(this.id==="456"){
				this.info = this.info_data[1]
			}else if(this.id==="789"){
				this.info = this.info_data[2]
			}else{
				this.info = this.info_data[3]
			}
		},
		methods:{
			// 导航按钮组件
			 onClick (e) {
				 // 通过判断点击按钮的文本内容 跳转到指定页面
				 if(e.content.text==='购物车'){
					 console.log(123)
					 uni.switchTab({
					 	url:'/pages/mikucart/mikucart'
					 })
				 }
				
				  },
				  buttonClick (e) {
				    console.log(e)
				    this.options[2].info++
				  },
			changeStar(){
				this.info.isStar = !this.info.isStar
			}
		}
	}
</script>

<style lang="scss">
	.detail{
		padding: 10px;
		.price{
			font-size: 20px;
			font-weight: bold;
			color:#3c8777;
			margin-bottom: 10px;
			
		}
			
		.textArea{
			display: flex;
			height: 90px;
			.text{
				flex: 5;
				// border-right: 1px solid #666;
				padding-right: 2px;
				font-size: 14px;
			}
			.coll{
				color: #666;
				flex: 1;
				text-align: center;
				line-height: 25px;
				display: flex;
				flex-direction: column;
				font-size: 12px;
				padding-left: 5px;
			}
		}
	}
		
	.goods-nav{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
	}

</style>
