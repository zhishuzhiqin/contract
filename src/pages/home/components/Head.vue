<template>
	<div>
		<div class="user-info go-right">
			<em class="user-img"><img src="http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png"/></em>
			<el-dropdown>
				<span class="el-dropdown-link">
					John Smith<span class="iconfont">&#xe65c;</span>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>黄金糕</el-dropdown-item>
					<el-dropdown-item>狮子头</el-dropdown-item>
					<el-dropdown-item>螺蛳粉</el-dropdown-item>
					<el-dropdown-item>双皮奶</el-dropdown-item>
					<el-dropdown-item divided>退出</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script>
export default {
  name: 'homeHead'
}
</script>

<style lang="stylus" scoped="scoped">
.go-right
	position: absolute
	right: .8rem
	height: 40px
	line-height: 40px
	.user-img
		display: inline-block
		width: 28px
		height: 28px
		img
			width: 100%
			height:100%
	.el-dropdown-link{
		color: #fff;
	}
</style>

