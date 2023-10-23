<template>
	<view class="address">
		<!-- 选择收货地址的按钮 -->
		<!-- 选择显示与隐藏 -- 根据infoData判断 -->
		<view class="address-box"  v-if="JSON.stringify(dataInfo)==='{}'" >
			<button type="primary" size="mini" class="button" @click="chooseAddress">请选择收货地址+</button>
		</view>
		<!-- 渲染收货信息的盒子 -->
		<view class="info-box" v-else @click="chooseAddress">
			<view class="row1">
					<view class="username">
						收货人：<text>{{dataInfo.userName}}</text>
					</view>
					<view class="phone">
						电话：<text>{{dataInfo.telNumber}}</text>
						<uni-icons type="arrowright" size="18"></uni-icons>
					</view>
				
			</view>
			<view class="row2">
				<view class="row2-left">
					收货地址：
				</view>
				<view class="row2-right">
				  {{addStr}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// 根据需求导入所需的辅助函数
	import {mapState,mapMutations,mapGetters} from 'vuex'
	export default {
		name:"miku-address",
		data() {
			return {
				dataInfo:JSON.parse(uni.getStorageSync('address')||'{}')
			};
		},
		methods:{
			// 把 m_user 模块中的 updateAddress函数 映射到当前组件
			...mapMutations('m_user',['updateAddress']),
			// 定义获取收货信息的函数
			 async chooseAddress(){
				// 使用微信小程序提供的 chooseAddress 方法
				const [err,succ] = await uni.chooseAddress().catch(err=>err)
				if(err === null&&succ.errMsg === 'chooseAddress:ok'){
					// 调用映射的函数 -- 更新收货地址
					this.updateAddress(succ)
					this.dataInfo = succ
					console.log(this.dataInfo)
					
				}
			}
		},
		// 计算器 -- 拼接完整的收货地址
		computed:{
	       // 好好好 -- 返回值还是undefined 未解之谜了属于是
			addStr(){
				// 判断地址是否为空
				if(!this.dataInfo) return ''
				else return this.dataInfo.provinceName+this.dataInfo.cityName+this.dataInfo.countyName+this.dataInfo.detailInfo
			}
		}
	}
</script>

<style lang="scss">
.address{
	
	border-bottom: 5px dashed #20bbbd;
}
.address-box{
	display: flex;
   height: 100px;
	align-items: center;
	justify-content: center;
}
// 美化收货信息的样式
.info-box{
	padding: 10px 15px;
	view{
		margin-bottom: 5px;
	}
	.row1{
		display: flex;
		view{
			flex: 1;
		}
		
		.phone{
			text-align: right;
		}
	}
}
</style>