<template>
  <div class="sale-wrapper">
    <h2>样例</h2>
    <p :id="demoId">我是小样，我就这样</p>
    <div>
      <p v-if="show.showFir">
        <span v-if="show.showSec"> 真中真</span>
        <span v-else> 真中假</span>
      </p>
      <p v-else>你能看见我，是假的</p>
    </div>
    <div>
      <ul>
        <li v-for="(item,index) in list" :id="item.id">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div>
      <button @click="testClick">123</button>
      <input type="text" @keyup.enter="submit"/>
    </div>
    <div style="margin-top: 20px;">
      <p><input type="text" v-model="message"/></p>
      <p>text is: {{message}}</p>
    </div>
    <h2>父子组件传递</h2>
    <div>
      <button @click="showModal">点我调用子组件</button>
      <p>{{text}}</p>
    </div>
    <modal @has-close="close" ref="modal"></modal>
    <div>
      <p>list的长度{{lengths}}</p>
    </div>
  </div>
</template>
<script>
  import modal from './components/group.vue'
  export default {
    data(){
      return {
        demoId: 'temp-id',
        show: {
          showFir: true,
          showSec: true
        },
        list:[
          {
            name: '123',
            id: '1'
          },
          {
            name: '234',
            id: '2'
          },
          {
            name: '345',
            id: '3'
          },
          {
            name: '345',
            id: '3'
          }
        ],
        message: '',
        shows: false,
        text: ''
      }
    },
    methods:{
      testClick() {
        alert('1234');
      },
      submit() {
        alert('提交')
      },
      showModal() {
        // this.shows = true
        this.$refs.modal.openModal();
      },
      close(num) {
        // this.shows = false;
        this.text = num;
        console.log('hh',num)
      },
      length() {
        return this.list.length
      }
    },
    components: {
      modal
    },
    created() {

    },
    computed: {
      lengths(){
        return this.list.length
      }
    },
    watch: {
      // $route(to){
      //   alert('你怎么走了。。')
      // }
    }
  }
</script>
<style lang="scss" scoped>
.sale-wrapper {

}  
</style>