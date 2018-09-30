<template>
	<div id="root">
		<div class="layout_head"></div>
		<div class="layout_main">
		  <div class="layout_left">
			  <menu-tree></menu-tree>
		  </div>
		  <div class="layout_right"></div>
		</div>
	</div>
</template>

<script>
import menuTree from './components/menuTree'
export default {
  name: 'Home',
  components: {
    menuTree
  }
}
</script>

<style scoped="scoped">
/*.border-bottom{*/
	/*&:before*/
	/*border-color: #ccc*/
/*}*/
.layout_head{
	height: 29px;
	overflow: hidden;
	background-color: #dcedff;
	border-bottom: 1px solid #87b9e8;
}
.layout_main{
	position: absolute;
	top: 30px;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #0000f6;
}
.layout_left{
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 199px;
	overflow: scroll;
	border-right: 1px solid #87b9e8;
	background-color: #fff;

}
</style>
