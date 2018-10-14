<template>
	<el-table
    :data="contractList"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="typeName"
      label="合同类别"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="合同名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="versionNumber"
      label="版本号">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "ContractList",
  props: {
    contractList: Array
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="stylus" scoped="scoped">
</style>
