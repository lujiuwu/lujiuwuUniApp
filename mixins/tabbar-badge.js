// 将购物车封装为 mixins 方便其他页面使用

// 按需导入mapGetters方法 -- 动态更新购物车徽标
import {mapGetters} from 'vuex'
export default{
	// 计算
	computed:{
		...mapGetters('m_cart',['total'])
	},
	// 为了解决数字徽标同步的问题 -- 添加watch侦听器
	watch:{
		total(){
			this.setBadge()
		}
	},
	// 页面初次刷新完毕就渲染
	onShow() {
		// 调用自定义函数
		// 只使用onShow -- 数字徽标不会在修改商品数量后自动变化
		this.setBadge()
		
	},
	methods:{
		setBadge(){
			// 设置徽标值
			uni.setTabBarBadge({
				index:2, // 索引
				text:this.total+'' // text的值必须是字符串，不是数字
			})
		}
	}
}