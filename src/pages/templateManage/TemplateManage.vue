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
      this.instance.post('/template/list.do',qs.stringify({
                groupId: 7,
                type: 0,
                name: ""
            }), {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            }
           }).then(({responseData})=> {
             debugger
              this.contractListData = responseData
              this.loading = false
            });
    }
  },
  created () {
    this.getListInfo()
  }
}
</script>

<style lang="stylus" scoped="scoped">
</style>
