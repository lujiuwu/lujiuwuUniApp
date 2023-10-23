export default {
	namespaced:true,
	state:()=>({
		// 购物车数组 用来存储购物车中每个商品的信息对象
		// 每个商品的信息对象 都包含如下6个属性
	    // { goods_id,goods_name,goods_price,goods_status,goods_count }
		// 动态初始化数组 -- 判断本地是否有数据 -> 有则使用 无则使用空数组
		cart:JSON.parse(uni.getStorageSync('cart')||'[]')
	}),
	mutations:{
		// 更新商品数量事件
		updateNumber(state,goods){
		  // 先根据goods_id查找对应的商品数量
		  const findResult = state.cart.find((x)=>x.goods_id === goods.goods_id)
		  // 如果存在
		  if(findResult){
			  findResult.goods_count = goods.goods_count
			  // 持久化存储到本地
			  this.commit('m_cart/saveToStorage')
		  }
		},
		// 更改选择状态事件
		updateChoice(state,goods){
			// 先根据goods_id寻找对应的商品信息
			const findResult = state.cart.find((x)=>x.goods_id===goods.goods_id)
			//如果存在 -- 改变
			if(findResult){
				findResult.goods_status = goods.goods_status
				// 持久化存储到本地
				this.commit('m_cart/saveToStorage')
			}
		},
		// 添加购物车事件
		addToCart(state,goods){
		  // 首先判断购物车是否已经存在该商品
		  const findResult = state.cart.find((x)=>x.goods_id===goods.goods_id)
		  if(!findResult){
			  // 如果不存在 --> 新增到购物车
			  state.cart.push(goods)
			  
		  }else{
			  // 如果已经存在 --> 将该商品数量加一
			  findResult.goods_count++
			  
		  }
		  // 验证是否正常添加进去
		  // console.log(state.cart)
		  
		  // 将数据存储在本地
		  this.commit('m_cart/saveToStorage')
		},
		// 删除商品的方法
		deleteGoods(state,goods){
			  // 删除操作
			  state.cart = state.cart.filter(x=>x.goods_id!==goods.goods_id)
		      this.commit('m_cart/saveToStorage')
		},
		// 实现数据持久化
		saveToStorage(state){
			// 将购物车数据持久存储在本地
			uni.setStorageSync('cart',JSON.stringify(state.cart))
		},
		// 全选与反选操作
		updateAllGoodsStatus(state,newStatus){
			for(let i = 0;i<state.cart.length;i++){
				state.cart[i].goods_status = newStatus
			}
			// 本地存储
			this.commit('m_cart/saveToStorage')
		}
	},
	getters:{
	  // 动态获取购物车中商品总数量
	  total(state){
		  let nums = 0
		  // 遍历cart数组 累加到变量nums中
		  state.cart.forEach(goods=>nums+=goods.goods_count)
		  return nums
	  },
	  // 勾选商品的总数量
	  checkedGoods(state){
		  return state.cart.filter(x=>x.goods_status).reduce((total,item)=>total+=item.goods_count,0)
	  },
	  // 获取总价
	  getAllPrice(state){
		  return state.cart.filter(x=>x.goods_status).reduce((total,item)=>total+=item.goods_count*item.goods_price,0)
	  }
	}
}