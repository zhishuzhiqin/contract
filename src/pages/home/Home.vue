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
			<el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
				<el-tab-pane
						v-for="(item, index) in editableTabs"
						:key="item.name"
						:label="item.title"
						:name="item.name"
						>
					{{item.content}}
				</el-tab-pane>
			</el-tabs>
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
	return {
		editableTabsValue: '1',
		editableTabs: [{
			title: '欢迎',
			name: '1',
			content: '欢迎使用本系统'
		}],
		tabIndex: 1
	}
  },
  components: {
    menuTree,
    homeHead
  },
  methods: {
	addTab(targetName) {
		let newTabName = ++this.tabIndex + ''
		this.editableTabs.push({
			title: targetName,
			name: newTabName,
			content: 'New Tab content'
		})
		this.editableTabsValue = newTabName
	},
	removeTab(targetName) {
		let tabs = this.editableTabs
		let activeName = this.editableTabsValue
		if (activeName === targetName) {
			tabs.forEach((tab, index) => {
				if (tab.name === targetName) {
				let nextTab = tabs[index + 1] || tabs[index - 1]
				if (nextTab) {
					activeName = nextTab.name
				}
			}
		})
	    }
	this.editableTabsValue = activeName;
	this.editableTabs = tabs.filter(tab => tab.name !== targetName)
    },
    handleMenuChange (menuTitle, pageIndex) {
      this.addTab(menuTitle)
	console.log(pageIndex)
	  this.$router.push('/page' + (pageIndex + 1));
    }
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
