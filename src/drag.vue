<template>
  <div class="drag-in" draggable="true" @dragend="dragend($event)" @dragstart="drag($event,$el)">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props:{
      item:{
        type: Object,
        required:true
      }
    },
    data(){
      return {

      }
    },
    methods:{
      drag(event,$el){
        console.log('开始拖动');
        this.$parent.$parent.currentItem = this.item;
      },
      dragend(event){
        // this.dragging = false ;
      },
    }
  }
</script>
