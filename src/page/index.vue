<template>
 <div>
   <p>首页</p>
   <p><span>sale 里的store数据</span>:{{num}}</p>
   <el-row>
    <el-button type="primary" size="small" @click="testDemo">点我改store</el-button>
   </el-row>

   <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
   <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
 </div> 
</template>
<script>
import { mapMutations,mapGetters, mapState} from 'vuex'
 export default {
  data() {
    return {
      num: 0,
      dialogVisible: false
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
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
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