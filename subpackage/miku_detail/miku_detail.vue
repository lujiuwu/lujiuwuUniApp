<template>
	<view>
		this is detail page for goods{{id}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:""
			};
		},
		// 获取页面参数
		onLoad(options) {
			this.id = options.id
		}
	}
</script>

<style lang="scss">

</style>
