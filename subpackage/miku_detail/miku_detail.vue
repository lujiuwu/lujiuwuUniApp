<template>
	<view>
		<view class="detail">
			<!-- 价格 -->
			<view class="price">
				￥{{info.price}}
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
	// 按需导入辅助方法
	// 帮助将所需方法映射到指定页面
	import {mapMutations} from 'vuex'
	// 帮助导入 mapGetters 辅助方法
	import {mapGetters} from 'vuex'
	export default {
		// 侦听器 -- 监听数据的变化
	    watch:{
			// * 这种定义方法 在页面第一次加载完毕后不会触发
			// // 监听total值的变化
			// total(newVal){
			// 	// 通过find方法找出购物车按钮的配置对象
			// 	const findResult = this.options.find((x)=>x.text==='购物车')
			// 	if(findResult){
			// 		// 为购物车徽标的info重新赋值
			// 		findResult.info = newVal
			// 	}
			// }
			// 为了使页面初次加载后就渲染出购物车徽标数据
			// 采用以下定义方法
				
			total:{
				// handler属性用来定义侦听器的 function 处理函数
				handler(newVal){
					const findResult = this.options.find((x)=>x.text==='购物车')
					if(findResult){
						findResult.info = newVal
					}
				},
				// immediate 属性用来声明此侦听器--是否在页面初次加载后立即调用
				immediate:true
			}
		},
		// 计算属性 -- 动态更新购物车数据的变化
		computed:{
			...mapGetters('m_cart',['total'])
		},
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
							info: 0
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
						price:"13",
						text:"初音未来（はつね みく，Hatsune Miku），是2007年8月31日由Crypton Future Media以雅马哈的 Vocaloid 系列语音合成程序为基础开发的音源库",
						isStar:1,
						id:1
					},
						
					{
						img_url:"../../static/swiper_images/swiper2.jpg",
						price:"46",
						text:"初音未来（はつね みく，Hatsune Miku），是2007年8月31日由Crypton Future Media以雅马哈的 Vocaloid 系列语音合成程序为基础开发的音源库",
						isStar:0,
						id:2
					},
					
					{
						img_url:"../../static/swiper_images/swiper3.jpg",
						price:"89",
						text:"初音未来（はつね みく，Hatsune Miku），是2007年8月31日由Crypton Future Media以雅马哈的 Vocaloid 系列语音合成程序为基础开发的音源库",
						isStar:0,
						id:3
					},
					{
						img_url:"../../static/floor_images/floor23.jpg",
						price:"66",
						text:"初音未来（はつね みく，Hatsune Miku），是2007年8月31日由Crypton Future Media以雅马哈的 Vocaloid 系列语音合成程序为基础开发的音源库",
						isStar:0,
						id:4
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
			// 借助mapMutations组件将 m_cart模块中的 addToCart方法 映射到当前页面使用
			...mapMutations('m_cart',['addToCart']),
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
				  // 按钮点击事件 -- 实现加入购物车的效果
				  buttonClick (e) {
				   // 判断点击的是否为 “加入购物车”按钮
				   if(e.content.text==='加入购物车'){
					   // console.log(e.content.text)
					   // 新建一个商品对象
					   const goods  = {
						   goods_id:this.info.id, // 商品编号
						   goods_name:this.info.text, // 商品描述
						   goods_price:this.info.price, // 商品价格
						   goods_count:1, // 商品数量 -- 初始化为1
						   goods_status:true, // 商品状态 -- 添加即勾选
						   goods_image:this.info.img_url // 商品图片
					   }
					   // 通过映射过来的方法将商品信息对象添加到数组里面
					   this.addToCart(goods)
				   }
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
