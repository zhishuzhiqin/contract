<template>
	<div>
    <form-list
      :contractListData = "contractListData"
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
      contractListData: [],
      timeCost: 0,
      loading: true
    }
  },
  components: {
    FormList
  },
  methods: {
    getListInfo () {
      const urlString = '/api/template/list.do'
      let postData = qs.stringify({
        groupId: 7,
        type: 0,
        name: ''
      })
      axios.post(urlString, postData,
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded'
        }
      }).then(successData => {
        this.loading = false
        this.contractListData = successData.data
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
