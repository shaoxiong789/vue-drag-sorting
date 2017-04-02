<template>
  <div class="dragbox" @drop="drop($event)"
  @dragleave="dragleave($event,$el)"
  @dragover="allowDrop($event)"
  @dragenter="dragenter()"
  @mouseout="mouseout()">
    <drag :item="item">
      <slot></slot>
    </drag>
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
  import drag from './drag.vue'
  export default {
    components:{drag},
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
      drop(){
        this.removeAllDragging();
        this.$parent.currentItem = null;
        // if(this.$parent.currentItem[this.indicate]!=this.item[this.indicate]){
        //   let index = this.$parent.list.getIndexByObject(this.item,'name')
        //   this.$parent.list = this.$parent.list.
        //   removeByObject(this.$parent.currentItem,'name');
        //   this.$parent.list.insert(index
        //   ,this.$parent.currentItem)
        // }
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
        // this.$parent.currentItem = null;
        // this.removeAllDragging()
        console.log('离开目标作用域范围',this.$el);
      },
      dragenter(){
        // console.log('进入作用域范围',this.$el);
        if(this.$parent.currentItem&&this.$parent.currentItem[this.indicate]!=this.item[this.indicate]){
          let index = this.$parent.list.getIndexByObject(this.item,'name')
          this.$parent.list = this.$parent.list.
          removeByObject(this.$parent.currentItem,'name');
          this.$parent.list.insert(index
          ,this.$parent.currentItem)
        }
      },
      allowDrop(event){
        event.preventDefault();
        this.removeOtherDragging();
        if(this.$parent.currentItem&&this.$parent.currentItem[this.indicate]!=this.item[this.indicate]){
          this.$parent.targetItem = this.item;
          this.$el.classList.add('dragging')
        }
      }
    }
  }
</script>
