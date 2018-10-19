<template>
  <div id="root">
	  <el-collapse v-model="activeNames">
		  <el-collapse-item
			class="menu-title"
			v-for="item of list"
			:key="item.id"
		  >
			  <template slot="title">
				  <span class="iconfont menu-icon" v-html="item.iconfont"></span>
				  {{item.title}}
			  </template>
			  <ul class="child-list">
				  <li
					class="child"
					v-for="(child, index) of item.children"
					:key="index"
					@click="handleMenuClick(index, child.url)"
					v-bind:class="{'child-current': index == currentIndex}"
				  >
					  {{child.title}}
				  </li>
			  </ul>
		  </el-collapse-item>
	  </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'menuTree',
  data () {
    return {
      activeNames: ['1'],
      currentIndex: 0,
      currentClass: 'child-current',
      list: [
        {
          title: '合同管理',
          id: '1',
          iconfont: '&#xe6a2;',
          children: [
            {
              title: '合同变量管理',
              url: '/variableManage'
            },
            {
              title: '合同模板管理',
              url: '/templateManage'
            },
            {
              title: '规则设置',
              url: '/ruleSetting'
            },
            {
              title: '规则设置',
              url: ''
            }
          ]
        },
        {
          title: '合同查询',
          id: '2',
          iconfont: '&#xe6ac;',
          children: [{ title: '合同调用记录查询', url: '' }]
        },
        {
          title: '账户管理',
          id: '3',
          iconfont: '&#xe6b8;',
          children: [{ title: '用户管理', url: '' }, { title: '变量管理', url: '' }]
        }
      ]
    }
  },
  methods: {
    handleMenuClick (index, url) {
      this.currentIndex = index
      this.$emit('change', url)
    }
  }
}
</script>

<style lang="stylus" scoped="scoped">
.menu-title
	position: relative
	line-height: 1.2rem

	.menu-icon
		text-align: center
		font-size: 0.4rem
		background: transparent
		margin: 0.2rem

	.menu-icon-right
		text-align: center
		position: absolute
		right: 0.2rem
		top: 0
		cursor: pointer

.list-hidden
	color: #93939b

.list-show
	color: #ffffff

.child-list
	line-height: 1rem
	color: #606060
	background: #ffffff

	.child
		padding-left: 1rem
		height: 1rem
		display: block;
		border-top: 1px solid #e4e4e4

		&:hover
			background-color: #46464e
			color: #fff

	.child-current
		background-color: #46464e
		color: #fff
</style>
