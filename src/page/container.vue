<template>
 <div>
  <div class="container-header">
      <div class="header">
          <!-- logo 图标 -->
          <div class="logo">
            <img src="/static/image/logo-cmdb.png" />
            <span class="logo-text">CMDB</span>
          </div>
          <!-- 添加刷新，折叠按钮 -->
          <div class="menu-oprate">
            <span class="shrink">
              <i class="iconfont icon-caidanyouchu"></i>
            </span>
            <span class="fresh">
              <i class="iconfont icon-fresh" @click="fresh"></i>
            </span>
          </div>
          <!-- 全局搜索 -->
          <div class="input-search">
            <el-input
              placeholder="请输入搜索内容"
              suffix-icon="el-icon-search"
              v-model="searchAll">
            </el-input>
          </div>
          <!-- 右侧 -->
          <div class="list">
            <ul>
              <li><p>CMDB</p></li>
              <li><p>持续交付</p></li>
              <li><p>智能监控</p></li>
              <li><p>IT运营分析</p></li>
            </ul>
          </div>
          <!-- 消息通知 -->
          <div class="bell-notica">
            <i class="el-icon-bell"></i>
          </div>
          <!-- 操作员登录 -->
          <div class="operate-menu">
            <el-dropdown class="down-menu">
              <span class="el-dropdown-link">
                <span style="margin-right:5px;cursor:pointer;">root</span><i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>基本资料</el-dropdown-item>
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item divided>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
      </div>
  </div>
  <div class="container-sidebar" id="container-sidebar">
    <el-menu  
     :default-active="this.$route.path"
      router 
      class="el-menu-vertical-demo" 
      :collapse="isCollapse"
      background-color="#20222a"
      text-color="#fff"
      active-text-color="#fff"
      :unique-opened="unique">
  <div>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航一</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/">选项一</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="/sale">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航五</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/manage">选项1</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </div>  
  </el-menu>
  </div>
    <div class="container-main">
      <keep-alive>
       <router-view></router-view>
      </keep-alive> 
    </div>
 </div> 
</template>
<script>
 export default {
  data(){
    return {
      unique: true,
      searchAll: '',
      isCollapse: false,
      menuData:[
        {
          name:'导航一',
          children:[
            {
              name:'选项1'
            },
            {
              name:'选项2'
            },
            {
              name:'选项3',
              children:[
                {
                  name:'选项1'
                }
              ]
            }
          ]
        },
        {
          name:'导航二'
        },
        {
          name:'导航四'
        },
        {
          name:'导航五',
          children:[
            {
              name:'选项1'
            },
            {
              name:'选项2'
            }
          ]
        }
      ]
    }
  },
  components: {
   
  },
  methods:{
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    selectMenu(index,indexPath) {
       console.log(index, indexPath);
    },
    routeTo(event){
      console.log('event',event)
    },
    fresh() {
      window.location.reload();
    }
  },
  mounted() {
    // 设置sidebar 高度，撑满左侧
    let height = $(window).height()-50;
    $('#container-sidebar').height(height);
  }
 } 
</script>
<style lang="scss" scoped>
a{
  color: #fff;
  text-decoration: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.container-header {
  .header {
    width: 100%;
    height: 50px;
    background-color: #20222a;
    position: relative;
    &:after {
      content: " ";
      height: 0;
      clear: both;
      display: block;
    }
    .logo {
      padding-left: 24px;
      img {
        width: 48px;
      }
      .logo-text {
        color: #fff;
        font-size: 22px;
        margin-left: 20px;
        line-height: 50px;
      }
      display: inline-block;
    }
    .input-search {
      display: inline-block;
      margin-left: 320px;
      vertical-align: top;
      margin-top: 10px;
    }
    .list {
      color: #fff;
      font-size: 14px;
      position: absolute;
      top: 0;
      right:180px;
      ul{
        &:after {
          content: " ";
          height: 0;
          clear: both;
          display: block;
        }
        li {
          float: left;
          p {
            padding:0 20px;
            height:45px;
            line-height:48px;
            cursor: pointer;
            border-bottom: 5px solid #20222a;
            &:hover {
              border-bottom: 5px solid #409eff;
            }
          }
        }
      }
    }
    .bell-notica {
      position: absolute;
      top: 16px;
      right: 110px;
      i{
        color: #fff;
        font-size: 18px;
        cursor: pointer;
        &:hover {
          color: #409eff;
        }
      }
    }
    .operate-menu {
      position: absolute;
      top: 16px;
      right: 20px;
      .el-dropdown-link {
        display: inline-block;
        height: 30px;
      }
      .down-menu {
        color: #fff;
      }
    }
    .menu-oprate {
      position: absolute;
      top: 16px;
      left: 200px;
      i{
        color: #fff;
        font-size: 14px;
        cursor: pointer;
      }
      .shrink {
        margin-right: 16px;
      }
    }
  }
}
.container-sidebar {
  background: #20222a;
  position: fixed;
  top: 50px;
  left: 0;
}
.container-main {
  padding-left:220px;
  margin:15px 15px 0 0;
}
</style>