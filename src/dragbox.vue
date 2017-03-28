<template>
  <div class="dragbox" @drop="drop($event)"
  @dragleave="dragleave($event,$el)"
  @dragover="allowDrop($event)"
  @dragenter="dragenter()"
  @mouseout="mouseout()">
    <div class="dragperch">
      <slot name="dragperch"></slot>
    </div>
    <slot name="drag"></slot>
  </div>
</template>
<script>
  Array.prototype.removeByObject = function(obj,indicate) {
    for(var i=0; i<this.length; i++) {
      if(this[i][indicate] == obj[indicate]) {
        this.splice(i, 1);
        break;
      }
    }
    return this;
  }
  Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
    return this;
  };
  Array.prototype.getIndexByObject = function (item,indicate) {
    for(var i=0;i<this.length;i++){
      if(this[i][indicate] == item[indicate]) {
        return i;
      }
    }
  };
  export default {
    props:{
      item:{
        type: Object,
        required:true
      },
      indicate:{
        type: String,
        required:true
      }
    },
    methods:{
      drop(event){
        this.removeAllDragging();
        if(this.$parent.currentItem[this.indicate]!=this.item[this.indicate]){
          this.$parent.list = this.$parent.list.
          removeByObject(this.$parent.currentItem,'name');
          this.$parent.list.insert(
            this.$parent.list.getIndexByObject(this.item,'name')
          ,this.$parent.currentItem)
        }
      },
      removeAllDragging(){
        for(var i=0;i<this.$parent.$children.length;i++){
          this.$parent.$children[i].$el.classList.remove('dragging');
        }
      },
      removeOtherDragging(){
        for(var i=0;i<this.$parent.$children.length;i++){
          if(this.$parent.targetItem&&this.$parent.targetItem[this.indicate]!=this.$parent.$children[i].item[this.indicate]){
            this.$parent.$children[i].$el.classList.remove('dragging')
          }
        }
      },
      mouseout(){
        this.removeAllDragging();
      },
      dragleave(){
        // this.removeAllDragging()
        console.log('离开目标作用域范围',this.$el);
      },
      dragenter(){
        console.log('进入作用域范围',this.$el);
      },
      allowDrop(event){
        event.preventDefault();
        this.removeOtherDragging();
        if(this.$parent.currentItem[this.indicate]!=this.item[this.indicate]){
          this.$parent.targetItem = this.item;
          this.$el.classList.add('dragging')
        }
      }
    }
  }
</script>
<style>
  .active{
    height: 10px;
    background: #000;
  }
  .dragperch{
    display: none;
  }
  .dragging .dragperch{
    display: block;
  }
  .dragbox:active{
    opacity: 0;
    height: 0px;
    /*color:red;*/
  }
</style>
