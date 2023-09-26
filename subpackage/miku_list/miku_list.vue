<template>
	   
		<view  class="goods_list">
			<view v-for="(item,index) in mikuList" :key="index" @click="gotoDetail(index)">
				<miku-goods-list :goods="item"></miku-goods-list>
			</view>
		</view>
		
</template>

<script>
	export default {
		data() {
			return {
				params:"",
				// 渲染到页面的数据
				// 页数
				pages:1,
				// 初始化数据数组
				mikuList:[],
				//第一页
				mikuList1:[
					{
						// 图片
						img:"../../static/floor_images/floor4.jpg",
						// 典藏价
						price:"￥200",
						// 描述
						des:"初音未来是世界上第一个使用全息投影技术举办演唱会的虚拟偶像",
						// 标签
						tags:[
							"miku","初音未来"
						]
						
					},
					{
						// 图片
						img:"../../static/floor_images/floor4.jpg",
						// 典藏价
						price:"￥100",
						// 描述
						des:"初音未来是世界上第一个使用全息投影技术举办演唱会的虚拟偶像",
						// 标签
						tags:[
							"miku","初音未来"
						]
						
					},
					{
						// 图片
						img:"../../static/floor_images/floor4.jpg",
						// 典藏价
						price:"￥100",
						// 描述
						des:"初音未来是世界上第一个使用全息投影技术举办演唱会的虚拟偶像",
						// 标签
						tags:[
							"miku","初音未来"
						]
						
					},
					{
						// 图片
						img:"../../static/floor_images/floor4.jpg",
						// 典藏价
						price:"￥100",
						// 描述
						des:"初音未来是世界上第一个使用全息投影技术举办演唱会的虚拟偶像",
						// 标签
						tags:[
							"miku","初音未来"
						]
						
					},
					{
						// 图片
						img:"../../static/floor_images/floor4.jpg",
						// 典藏价
						price:"￥100",
						// 描述
						des:"初音未来是世界上第一个使用全息投影技术举办演唱会的虚拟偶像",
						// 标签
						tags:[
							"miku","初音未来"
						]
						
					},
					
					{
						// 图片
						img:"../../static/floor_images/floor4.jpg",
						// 典藏价
						price:"￥100",
						// 描述
						des:"初音未来是世界上第一个使用全息投影技术举办演唱会的虚拟偶像",
						// 标签
						tags:[
							"miku","初音未来"
						]
						
					},
					{
						// 图片
						img:"../../static/floor_images/floor4.jpg",
						// 典藏价
						price:"￥100",
						// 描述
						des:"初音未来是世界上第一个使用全息投影技术举办演唱会的虚拟偶像",
						// 标签
						tags:[
							"miku","初音未来"
						]
						
					},
					{
						// 图片
						img:"../../static/floor_images/floor13.jpg",
						// 典藏价
						price:"￥200",
						// 描述
						des:"初音未来是世界上第一个使用全息投影技术举办演唱会的虚拟偶像",
						// 标签
						tags:[
							"miku","初音未来"
						]
						
					}
				],
				//第二页
				mikuList2:[
					{
						// 图片
						img:"../../static/floor_images/floor23.jpg",
						// 典藏价
						price:"￥200",
						// 描述
						des:"初音未来是世界上第一个使用全息投影技术举办演唱会的虚拟偶像",
						// 标签
						tags:[
							"miku","初音未来"
						]
						
					},
					{
						// 图片
						img:"../../static/floor_images/floor23.jpg",
						// 典藏价
						price:"￥200",
						// 描述
						des:"初音未来是世界上第一个使用全息投影技术举办演唱会的虚拟偶像",
						// 标签
						tags:[
							"miku","初音未来"
						]
						
					},
					{
						// 图片
						img:"../../static/floor_images/floor23.jpg",
						// 典藏价
						price:"￥200",
						// 描述
						des:"初音未来是世界上第一个使用全息投影技术举办演唱会的虚拟偶像",
						// 标签
						tags:[
							"miku","初音未来"
						]
						
					}
				]
			};
		},
		// 获取跳转页面时传递的参数
		onLoad:function(options){
			// 获取传入的id
			this.params = options.id
			// 初始化为第一页的数据
			this.mikuList = this.mikuList1
		},
		methods:{
			// 获取页数对应数据
			getList(){
				// 拼接上第二页的数据
				if(this.pages==2){
					this.mikuList = [...this.mikuList,...this.mikuList2]
				}
				
			},
			gotoDetail(id){
				//跳转到商品详情页
				uni.navigateTo({
					url:"/subpackage/miku_detail/miku_detail?id="+id
				})
			}
		},
		
		// 下拉触底事件
		onReachBottom() {
			// 有一个loading效果
			if(this.pages===1){
				uni.showLoading({
					title: '玩命加载中'
				});
				setTimeout(function(){
					uni.hideLoading()
				},600)
			}else{
				// 如果所有数据都渲染出来 -- 弹出提示
				uni.showToast({
					title:"刷新完啦~"
				})
			}
		
			this.pages++;
			this.getList();
		},
		// 上拉刷新事件
		onPullDownRefresh() {
		
			// 重置关键数据
			this.pages = 1
			this.mikuList = this.mikuList1
			// 关闭上拉刷新的效果
			setTimeout(function(){
				uni.stopPullDownRefresh()
			},500)
			
		}
		
	}
</script>

<style lang="scss">

</style>
