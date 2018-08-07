<template>
 <div>
   <p>首页</p>
   <p><span>sale 里的store数据</span>:{{num}}</p>
   <el-row>
    <el-button type="primary" size="small" @click="testDemo">点我改store</el-button>
   </el-row>
 </div> 
</template>
<script>
import { mapMutations,mapGetters, mapState} from 'vuex'
 export default {
  data() {
    return {
      num: 0
    }
  },
  methods:{
    // ...mapMutations({
    //     add:'add',
    //     reduce: 'reduce'
    // }),
    ...mapMutations('sale',{
        addCounts:'add'
    }),
    testDemo() {
      this.addCounts(10);
      this.num = this.list;
    }
  },
  computed: {
    ...mapState('sale',[
      'list',
    ])
  },
  created() {
    this.num = this.list
  }
 } 
</script>
<style lang="scss" scoped>
  
</style>