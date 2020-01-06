<template>
  <div>
    <p>我是sale  啦啦</p>
    <p><span>sale 里的store数据</span>:{{num}}</p>
    <el-row>
      <el-button type="primary" size="small" @click="onload">点击请求</el-button>
    </el-row>
    <ul>
      <li v-for="item in data">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 0,
      data:[]
    }
  },
  methods: {
    onload(){
      this.$http.article.testAxios().then(res=> {
            // 执行某些操作      
            console.log('12',res)
        })  
    }

  },
  computed: {
  
  },
  created() {
    this.num = this.list;
  }
}  
</script>
<style lang="scss" scoped>
  
</style>