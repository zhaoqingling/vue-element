<template>
  <div>
    <p>我是sale  啦啦</p>
    <p><span>sale 里的store数据</span>:{{num}}</p>
    <el-row>
      <el-button type="primary" size="small" @click="test">点击请求</el-button>
    </el-row>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex"
export default {
  data() {
    return {
      num: 0
    }
  },
  methods: {
    ...mapActions("sale", {
      testDemo: "testDemo"
    }),
    async test() {
      let data = {'name':'xiaoming'};
      let result = await this.testDemo(data)
      console.log('haha',result)
    },
    tests(){
      // this.$http.get('/user?Id=12345').then(res=>{

      // }).catch(res=>{

      // })
    }
  },
  computed: {
    ...mapState('sale',[
      'list',
    ])
  },
  created() {
    this.num = this.list;
  }
}  
</script>
<style lang="scss" scoped>
  
</style>