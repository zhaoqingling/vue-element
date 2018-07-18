<template>
  <div>
    <p>我是sale  啦啦</p>
    <el-row>
      <el-button type="primary" size="small" @click="test">点我</el-button>
    </el-row>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex"
export default {
  data() {
    return {

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
  created() {
  
  }
}  
</script>
<style lang="scss" scoped>
  
</style>