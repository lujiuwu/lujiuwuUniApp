<template>
	<view>
		<view class="search_box">
			<uni-search-bar placeholder="搜索" bgColor="#EEEEEE" @confirm="search" :radius="100" cancelButton="none" @input="input"/>
		</view>
		<!-- 搜索建议列表 -->
		<!-- 搜索历史和搜索建议列表必须按需渲染 -->
		<!-- 选择 -- v-if -->
		<view class="sugg_list" v-if="searchOrder.length!==0">
			<view v-for="(item,index) in searchOrder" :key="index" class="sugg_items" @click="gotoDetail(item.text)">
				<view class="miku_name">
					{{item.text}}
					
				</view>
				<uni-icons type="right" size = "20" class="right"></uni-icons>
				
			</view>
		</view>
		<!-- 搜索历史 -->
		<view class="history_list" v-if="searchOrder.length===0">
			<!-- 标题区域 -->
			<view class="title">
				<text>搜索历史</text>
				<uni-icons type="closeempty" size="20" class="closeempty" @click="clearHistory"></uni-icons>
			</view>
			<!-- 主体区域 -->
			<view class="history_body">
				<!-- 新增功能 -- 点击标签进入对应的商品页面 -->
                 <!-- 点击事件 -- 传参跳转 -->
				<uni-tag :text="item" v-for="(item,index) in historys" :key="index" custom-style="background-color: #eee; color: #000;border:none;" @click="gotoDetail(item)"></uni-tag>
			</view>
		</view>
	
	</view>
</template>

<script>
	export default {
		// 新增计算属性 -- 将搜索历史数组倒置
		computed:{
			historys(){
				return [...this.historyList].reverse()
			}
			
		},
		data() {
			return {
				// 自定义搜索历史数组
				historyList:[],
				// 防抖操作
				timer:null,
				// 搜索关键字
				keyWord:'',
				// 搜索建议菜单初始化
				searchOrder:[],
				// 搜索建议自定义 --- love miku
				searchforLOVEMIKU:[
					{img:"../../static/right_images/pic1.png",
					text:"love miku1-1"},
					{img:"../../static/right_images/pic2.png",
					text:"love miku1-2"},
					{img:"../../static/right_images/pic3.png",
					text:"love miku1-3"},
					{img:"../../static/right_images/pic4.png",
					text:"love miku1-4"},
					{img:"../../static/right_images/pic5.png",
					text:"love miku1-5"},
					{img:"../../static/right_images/pic6.png",
					text:"love miku1-6"},
					{img:"../../static/right_images/pic7.png",
					text:"love miku2-1"},
					{img:"../../static/right_images/pic8.png",
					text:"love miku2-2"},
					{img:"../../static/right_images/pic9.png",
					text:"love miku2-3"},
					{img:"../../static/right_images/pic10.png",
					text:"love miku2-4"},
					{img:"../../static/right_images/pic11.png",
					text:"love miku2-5"},
					{img:"../../static/right_images/pic12.png",
					text:"love miku2-6"},
					{img:"../../static/right_images/pic13.png",
					text:"love miku3-1"},
					{img:"../../static/right_images/pic14.png",
					text:"love miku3-2"},
					{img:"../../static/right_images/pic15.png",
					text:"love miku3-3"},
					{img:"../../static/right_images/pic16.png",
					text:"love miku3-4"},
					{img:"../../static/right_images/pic17.png",
					text:"love miku3-5"},
					{img:"../../static/right_images/pic18.png",
					text:"love miku3-6"}
					
				],
				// love muku1-
				searchfor1:[
					{img:"../../static/right_images/pic1.png",
					text:"love miku1-1"},
					{img:"../../static/right_images/pic2.png",
					text:"love miku1-2"},
					{img:"../../static/right_images/pic3.png",
					text:"love miku1-3"},
					{img:"../../static/right_images/pic4.png",
					text:"love miku1-4"},
					{img:"../../static/right_images/pic5.png",
					text:"love miku1-5"},
					{img:"../../static/right_images/pic6.png",
					text:"love miku1-6"}
				],
				// love miku2
				searchfor2:[
					{img:"../../static/right_images/pic7.png",
					text:"love miku2-1"},
					{img:"../../static/right_images/pic8.png",
					text:"love miku2-2"},
					{img:"../../static/right_images/pic9.png",
					text:"love miku2-3"},
					{img:"../../static/right_images/pic10.png",
					text:"love miku2-4"},
					{img:"../../static/right_images/pic11.png",
					text:"love miku2-5"},
					{img:"../../static/right_images/pic12.png",
					text:"love miku2-6"}
				],
				// love miku3
				searchfor3:[
					{img:"../../static/right_images/pic13.png",
					text:"love miku3-1"},
					{img:"../../static/right_images/pic14.png",
					text:"love miku3-2"},
					{img:"../../static/right_images/pic15.png",
					text:"love miku3-3"},
					{img:"../../static/right_images/pic16.png",
					text:"love miku3-4"},
					{img:"../../static/right_images/pic17.png",
					text:"love miku3-5"},
					{img:"../../static/right_images/pic18.png",
					text:"love miku3-6"}
				]
			};
		},
		methods:{
			// 清空搜索历史
			clearHistory(){
				// 清空当前 historyList 的值
				this.historyList = []
				// 清空本地存储的值
				uni.setStorageSync('keyWord','[]')
			},
			// 输入触发事件
			input(e){
				// 测试 - console.log(e)
				// 清除延时器
				clearTimeout(this.timer);
				// 重新启动一个延时器，并把 timerId 赋值给 timer
				this.timer = setTimeout(()=>{
					// 500ms内的改变 -- 为关键字重新赋值
					this.keyWord = e
					// 为搜索历史数组赋值
					this.updateSearch(this.keyWord)
					// 测试
					// console.log(this.keyWord);
					// 根据输入框的内容进行查询
					// 以下是没有接口导致的屎山代码 呵呵
					if(this.keyWord==="l"||this.keyWord==="lo"||this.keyWord==="lov"||this.keyWord==="love"||this.keyWord==="love "||this.keyWord==="love m"||this.keyWord==="love mi"||this.keyWord==="love mik"||this.keyWord==="love miku"){
						// 真的被笑到了
						this.searchOrder = this.searchforLOVEMIKU
					}else if(this.keyWord==="love miku1"||this.keyWord==="love miku1-"){
						this.searchOrder = this.searchfor1
					}else if(this.keyWord==="love miku2"||this.keyWord==="love miku2-"){
						this.searchOrder = this.searchfor2
					}else if(this.keyWord==="love miku3"||this.keyWord==="love miku3-"){
						this.searchOrder = this.searchfor3
					}else if(this.keyWord==="love miku1-1"){
						this.searchOrder = [this.searchfor1[0]]
					}else{
						this.searchOrder = []
					}
				},500)
			},
			// 点击搜索建议进入商品详情页
			gotoDetail(id){
				uni.navigateTo({
					url:"/subpackage/miku_detail/miku_detail?id="+id
				})
			},
			// 更新搜索栏的方法
			updateSearch(title){
				// 加入数组的同时 要保留搜索历史这项功能的特点
				// 最近搜索的名字要放在前面
				this.historyList.push(title)
				// 解决关键字重复的问题
				// 1.第一步 将数组转换为set类型
				const set = new Set(this.historyList)
				// 2.第二步 删除与title同名的元素
				set.delete(title)
				// 3.添加title元素
				set.add(title)
				// 最后转换为数组
				this.historyList = Array.from(set)
				// 将搜索历史数组持久化到本地
				uni.setStorageSync('keyWord',JSON.stringify(this.historyList))
			}
		},
		onLoad() {
			// 一加载页面就将本地存储的数据赋值到搜索历史数组
			// 如果本地没有搜素历史就返回空数组
			this.historyList = JSON.parse(uni.getStorageSync('keyWord')||'[]')
		}
	}
</script>

<style lang="scss">
// 吸睛效果
.search_box{
	position: sticky;
	top: 0;
}
.sugg_list{
	padding: 2px 8px;
	.sugg_items{
		padding-left: 20px;
		height: 30px;
		line-height: 30px;
		display: flex;
		border-bottom: 1px solid #ccc;
		.miku_name{
			flex: 10;
		}
		.right{
			flex:1;
		}
	}
	
}
.history_list{
	.title{
		padding: 5px;
		display: flex;
		height: 25px;
		line-height: 25px;
		border-bottom: 1px solid #ccc;
		margin-bottom: 10px;
		text{
			flex: 18;
		}
		.closeempty{
			flex: 1;
		}
		
	}
	.history_body{
		padding: 0 5px;
		display: flex;
		flex-wrap: wrap;
		// 测试 - background-color: pink;
		.uni-tag{
			margin-right: 5px;
		}
	}
}
</style>
