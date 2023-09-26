<template>
	<view>
		
	    <view class="search_container" :style="{'background-color':bgColor}">
	    	<view class="search_box" :style="{'border-radius':redius+'px'}" @click="searchHandler">
	    		<uni-icons type="search" size="28"></uni-icons>
	    		<text class="placeholder" >搜索</text>
	    	</view>
	    </view>
		
	</view>
</template>

<script>
	
	export default {
	  props:{
		  // 自定义搜索框背景颜色和圆角幅度
		  bgColor:{
			  type:String,
			  default:"#20bbbd"
		  },
		  radius:{
			  type:Number,
			  default:18
		  }
	  },
	  // 自定义事件
	  methods:{
		  searchHandler(){
			  console.log("cyy")
			  this.$emit('click')
		  }
	  },
	  
	
	}
</script>

<style lang="scss">

.search_container{
	height:40px;

	
	padding: 0 20px;
	.search_box{
		height: 30px;
		width: 100%;
		border-radius: 18px;
		border: 1px solid #666;
		background-color: #fff;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
		.placeholder{
			margin-left: 3px;
		}
	}

}
</style>