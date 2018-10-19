<template>
	<div>
    <form-list
      :contractListDate = "contractListDate"
      v-loading = "loading"
    ></form-list>
  </div>
</template>

<script>
import FormList from './components/FormList'
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'TemplateManage',
  data () {
    return {
      contractListDate: [],
      timeCost: 0,
      loading: true
    }
  },
  components: {
    FormList
  },
  methods: {
    getListInfo () {
      var axiosDate = new Date()
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
        let oDate = new Date()
        let oTimeCost = oDate.getTime() - axiosDate.getTime()
        setTimeout(() => {
          this.loading = false
        }, oTimeCost)
        this.contractListDate = data
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
