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
      const urlString = '/template/list.do'
      let postData = qs.stringify({
        groupId: 7,
        type: 0,
        name: ''
      })
      this.instance.post(
        urlString,
        postData,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      ).then(responseData => {
        this.contractListData = responseData.data
        this.loading = false
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
