// 新建一个与用户相关的vuex模块
export default {
	// 第一步 -- 开启命名空间
	namespaced:true,
	
	// 第二步 -- state数据
	state:()=>{
		// 收货地址对象
		// 先判断本地是否已经存有数据
		address:JSON.parse(uni.getStorageSync('address')||'{}')
	},
	 
	// 方法
	mutations:{
		// 更改收货地址
		updateAddress(state,newAddress){
			state.address = newAddress
			this.commit('m_user/saveAddressToStorage')
		},
		// 存储到本地
		saveAddressToStorage(state){
			uni.setStorageSync('address',JSON.stringify(state.address))
		}
	},
	// 数据包装器、
	getters:{
		// 为了提高代码的复用性 -- 将收货的详情地址抽离为 getter -- 方便在多个页面和组件之间复用
		addStr(state){
			if(!state.address.provinceName) return ''
			else return state.address.provinceName+state.address.cityName+state.address.countyName+state.address.detailInfo
		}
	},
}