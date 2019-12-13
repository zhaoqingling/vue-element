<template>
  <div class="layout-wrapper">
  <div class="layout-tit clear">
    <div class="design-flex" v-if="seen" @click="designFlex"><i class="iconfont">&#xe627;</i><span>设计布局</span></div>
   <div class="design-flex-btn" v-else>
     <el-button size="mini" icon="el-icon-plus">添加卡片</el-button>
     <div class="top-bar-divide-line"></div>
     <el-button size="mini" @click="cancelFlex">取消</el-button>
     <el-button size="mini" type="primary" @click="saveCard">保存</el-button>
   </div>
  </div>  

      <grid-layout
            :layout.sync="layout"
            :col-num="12"
            :row-height="85"
            :is-draggable="true"
            :is-resizable="true"
            :is-mirrored="false"
            :vertical-compact="true"
            :margin="[10, 10]"
            :use-css-transforms="true"
    >

        <grid-item v-for="item in layout"
                   :x="item.x"
                   :y="item.y"
                   :w="item.w"
                   :h="item.h"
                   :i="item.i"
                   :key="item.i" :minW=4 :minH=2 :static="item.static">
            {{item.i}}
        </grid-item>
    </grid-layout>
  </div>
</template>
<script>
  import VueGridLayout from 'vue-grid-layout';
  var testLayout = [
      {"x":0,"y":0,"w":4,"h":2,"i":"0",static:true},
      {"x":4,"y":0,"w":4,"h":2,"i":"1",static:true},
      {"x":8,"y":0,"w":4,"h":2,"i":"2",static:true}
  ];
  export default {
    data(){
      return {
      layout:[{"x":0,"y":0,"w":4,"h":2,"i":"0",static:true},
      {"x":4,"y":0,"w":4,"h":2,"i":"1",static:true},
      {"x":8,"y":0,"w":4,"h":2,"i":"2",static:true}],
        seen:true
      }
    },
    methods:{
      designFlex(){
        this.seen = !this.seen;
        // 可编辑
        _.forEach(this.layout,function(item,index){
          item.static = false;
        })
      },
      cancelFlex(){
        this.$confirm('离开当前界面,此界面的布局信息会被丢弃，是否继续?', '确认退出', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.seen = !this.seen
           //不可编辑
          _.forEach(this.layout,function(item,index){
            item.static = true;
          })
        }).catch(() => {
            
        });
      },
      saveCard(){
        this.$message({
          message: '保存成功！',
          type: 'success',
          duration:1000
        });
        this.seen = !this.seen;
        //不可编辑
        _.forEach(this.layout,function(item,index){
          item.static = true;
        })
        //保存需要传入的参数
        console.log('save',this.layout);
      }
    },
    components: {
      GridLayout: VueGridLayout.GridLayout,
      GridItem: VueGridLayout.GridItem
    },
    created() {
      
    },
    computed: {
     
    }
  }
</script>
<style lang="scss" >
@import '../../style/primary.scss';
.layout-wrapper {
  .vue-grid-item {
    padding:20px;
    background:#fff;
    border-radius:4px;
    border:1px solid #ebeef5;
    box-shadow:0 2px 12px 0 rgba(0,0,0,.1);
    transition:box-shadow 0.2s ease;
  }
  .layout-tit{
    padding-right:10px;
    height:45px;
    line-height:45px;
    border-bottom:1px solid #ebeef5;
  }
  .design-flex {
    color:#303030;
    display:inline-block;
    cursor:pointer;
    padding:0 5px;
    float:right;
    i{
      font-size:20px;
      vertical-align:middle;
    }
    span{
      display:inline-block;
      height:22px;
      line-height:22px;
      margin-left:5px
    }
    &:hover {
      color:$color;
    }
  }
  .design-flex-btn{
    display:flex;
    flex-direction:row;
    align-items:center;
    padding-top:8px;
    float:right;
  }
  .top-bar-divide-line{
    width:1px;
    height:20px;
    background:#dedede;
    margin:0 20px;
    display:inline-block;
  }
}  
</style>