<template>
	<div>
    <contract-list :contractList = 'contractList'></contract-list>
  </div>
</template>

<script>
import ContractList from './components/ContractList'
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'TemplateManage',
  data () {
    return {
      contractList: []
    }
  },
  components: {
    ContractList
  },
  methods: {
    getListInfo () {
      axios({
        method: 'POST',
        url: '/api/template/list.do',
        data: qs.stringify({
          groupId: 7,
          type: 0,
          name: ''
        }),
        headers: {
          'Content-type': 'application/x-www-form-urlencoded'
        }
      }).then(({ data }) => {
        this.contractList = data
      })
    }
  },
  created () {
    this.getListInfo()
  }
}
</script>

<style lang="stylus" scoped="scoped">
</style>
