<template>
<div id="prompt" v-if="maxOff">
	    <div class="module-dialog-layer" style="display: block;"></div>
	    <div class="clear module-dialog module-dialog-confirm module-dialog-show" style="display: block; opacity: 1;">
	      <div class="dialog-panel">
	        <div class="topbar">
	          <div class="dialog-tit clear">
	            <h4 class="js-dialog-title">提示</h4>
	          </div>
	          <span @clcik="closePrompt()" class="dialog-close png"></span>
	        </div>
	        <div class="dialog-con js-dialog-container">
	          <div class="confirm-msg">商品已达到最大可购买数量，无法继续添加</div>
	        </div>
	        <div class="dialog-btn-wrap clear">
	          <div class="blue-main-btn normal-main-btn js-dialog-done">
	            <a @click="closePrompt()">确定</a>
	          </div>
	        </div>
	      </div>
	    </div>
	  </div>
</template>
<script>
  export default{
      computed:{
          maxOff(){
              return this.$store.state.maxOff // 使用store中的方法
          }
      },
      methods:{
          closePrompt(){
              this.$store.commit('closePrompt') // 关闭弹出框
          }
      }
  }  
</script>

<style>
    
</style>