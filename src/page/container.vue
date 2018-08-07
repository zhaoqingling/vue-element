<template>
 <div>
  <div class="container-header">
    <div class="header">
      <!-- logo 图标 -->
      <div :class="['logo',{'isLogo': isCollapse}]">
        <img src="/static/image/logo-cmdb.png" />
        <span class="logo-text">CMDB</span>
      </div>
      <!-- 添加刷新，折叠按钮 -->
      <div :class="['menu-oprate',{'isMenu':isCollapse}]">
        <span class="shrink" @click="panelCollapse">
          <i class="iconfont icon-caidanyouchu" v-if="!isCollapse"></i>
          <i class="iconfont icon-caidanzuochu" v-else></i>
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
  <!-- 菜单 -->
  <div class="container-sidebar" id="container-sidebar">
    <el-menu :default-active="this.$route.path" class="el-menu-vertical-demo"
      router 
      :collapse="isCollapse"
      background-color="#20222a"
      text-color="#fff"
      active-text-color="#409EFF"
      :unique-opened="unique">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/">选项1</el-menu-item>

        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/sale">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="/manage">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
  <!-- 路由跳转 -->
  <div class="container-main" :class="{isActive:isCollapse}">
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
    /*刷新*/
    fresh() {
      window.location.reload();
    },
    /*折叠效果*/
    panelCollapse() {
      this.isCollapse = !this.isCollapse;
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

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  border:2px solid #C0C1C6;
  background-color: #C0C1C6;
  box-sizing: content-box;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  border:2px solid #E8E9EB;
  width: 10px;
  /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
  background: #E8E9EB;
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3); */
  background-color: #C0C1C6;
}
::-webkit-scrollbar-thumb:hover {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: #7d7d7d;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
a{
  color: #fff;
  text-decoration: none;
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
      &.isLogo {
        padding-left: 16px;
        .logo-text {
          display: none;
        }
        img {
          width: 30px;
          padding-top: 12px;
        }
      }
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
      &.isMenu {
        left: 66px;
      }
    }
  }
}
.container-sidebar {
  background: #20222a;
  position: fixed;
  top: 50px;
  left: 0;
  overflow-y: auto;
  overflow-x: hidden;
}

.container-sidebar>ul {
  padding-top: 5px;
  overflow-y: auto;
  overflow-x: hidden;
}
.container-main {
  padding-left:220px;
  margin:15px 15px 0 0;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
}

.container-main.isActive {
  padding-left: 84px;
}
</style>