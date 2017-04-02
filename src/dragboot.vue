<template>
  <div class="dragboot">
    <dragbox v-for="(item,$index) in list" :item="item" :indicate="indicate">
      <slot :item="item"></slot>
    </dragbox>
  </div>
</template>
<script>
import dragbox from './dragbox.vue'
export default {
    components:{dragbox},
    props:{
      list:{
        type: Array,
        required:false
      },
      indicate:{
        type: String,
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
