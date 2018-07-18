<template>
  <div>
    <p>我是管理   哈哈</p>
    <p>store里的数据：{{count}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
     
    }
  },
  methods:{
    
  },
  computed: {
    count() {
      let count = this.$store.state.count;
      return count
    }
  },
  created() {
    
  }
}  
</script>
<style lang="scss" scoped>
  
</style>