<template>
<div id="root">
	<el-header class="header">
		<home-head></home-head>
	</el-header>
	<el-container class="layout_main">
		<el-aside class="layout_left">
			<menu-tree
				@change="handleMenuChange"
			></menu-tree>
		</el-aside>
		<el-main class="layout_right">
			<router-view></router-view>
		</el-main>
	</el-container>
</div>
</template>

<script>
import menuTree from './components/menuTree'
import homeHead from './components/Head'
export default {
  name: 'Home',
  data () {
    return {}
  },
  components: {
    menuTree,
    homeHead
  },
  methods: {
    handleMenuChange (url) {
      this.$router.push(url)
    },
    firstLoad () {
      this.$router.push('/variableManage')
    }
  },
  mounted () {
    this.firstLoad()
  }
}
</script>

<style lang="stylus" scoped="scoped">
.header
	height: 40px
	overflow: hidden
	background-color: #32323a
.layout_main
	position: absolute
	top: 40px
	left: 0
	right: 0
	bottom: 0
	background-color: #ffffff
	.layout_left
		width: 199px
		overflow: scroll
		background-color: #efefef
		border-right:1px solid #ededed
</style>
