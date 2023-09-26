<template>
	<view>
		this is a list
	</view>
</template>

<script>
	export default {
		data() {
			return {
				params:""
			};
		},
		// 获取跳转页面时传递的参数
		onLoad:function(options){
			this.params = options.id
		}
	}
</script>

<style lang="scss">

</style>
