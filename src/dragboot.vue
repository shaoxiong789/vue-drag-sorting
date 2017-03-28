<template>
  <div class="dragboot">
    <slot></slot>
  </div>
</template>
<script>
export default {
    components:{},
    props:{
      list:{
        type: Array,
        required:true
      }
    },
    data() {
        return {
          currentItem:null,
          targetItem:null,
          dragging:false
        };
    },
    methods:{

    }
}
</script>
<style scoped>
</style>
