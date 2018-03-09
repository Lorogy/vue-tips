<template>
<div class="tips-container">
  <div class="tips">
    <div class="tip" v-for="(item,index) in messages" v-if="curIndex!=index">
      <div class="h">
        <span class="l" @click="createTip(index)">+</span>
        <span class="r" @click="closeTip(index)">x</span>
      </div>
      <textarea rows="10" cols="20" placeholder="小贴士"></textarea>
      <p class="time">{{item}}</p>
    </div>
  </div>
</div>
</template>
<style lang='scss'>
div,p,textarea{
  margin:0;
  padding:0;
}
textarea{
  resize:none;
}
@keyframe fade-in{
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframe fade-out{
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.7);
  }
}
.l{
  float: left;
}
.r{
  float: right;
}
.tips-container{
  position: absolute;
  left:0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tips{
  width: 50%;
  .tip{
    box-sizing: border-box;
    width: 180px;
    border: 1px solid #EEDC82;
    background: #EEE685;
    border-radius: 5px;
    float: left;
    margin: 5px;
    .h{
      margin: 5px 0;
      padding: 0 10px;
      span{
        display: block;
        cursor: pointer;
      }
    }
    textarea{
      box-sizing: border-box;
      width: 180px;
      background: #EEE685;
      border-style: none;
      font-size: 14px;
      line-height: 14px;
      padding: 5px;
    }
    .time{
      padding: 5px;
    }
  }
}
.fade-in{
  animation-name: fade-in;
  animation-duration: 0.3s;
  animation-fill-mode: both;
}
.fade-out{
  animation-name: fade-out;
  animation-duration: 0.3s;
  animation-fill-mode: both;
}
</style>
<script>
require('./formatTime.js')

export default{
  data(){
    return {
      messages:[],
      inputTip:'',
      curIndex:'-1'
    }
  },
  mounted(){
    this.messages.push(new Date().Format('yyyy-MM-dd hh:mm:ss'))
  },
  methods:{
    createTip(index){
     //this.messages.splice(index,1,this.inputTip)
     //this.$set(this.messages,index,this.inputTip)
     //this.messages.push('小贴士')
     this.messages.push(new Date().Format('yyyy-MM-dd hh:mm:ss'))
    },
    closeTip(index){
      //this.messages.splice(index,1)
      this.curIndex=index;
    }
  }
}
</script>