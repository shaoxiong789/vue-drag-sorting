<style>
.md-theme-blue.md-toolbar {
  background-color: #2196f3;
  color: rgba(255, 255, 255, .87);
}
.md-toolbar {
    min-height: 64px;
    padding: 0 8px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    position: relative;
    transition: all .4s cubic-bezier(.25,.8,.25,1);
    transform: translate3D(0,0,0);
}
.container {
    width: 75em;
    margin: 0 auto;
}
.md-title {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: .005em;
    line-height: 26px;
}
.md-toolbar .md-title {
    margin: 0;
    font-size: 20px;
    font-weight: 400;
}
.md-toolbar .md-title:first-child {
    margin-left: 8px;
}
.md-ink-ripple {
    pointer-events: none;
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-mask-image: radial-gradient(circle,#fff 100%,#000 0);
    mask-image: radial-gradient(circle,#fff 100%,#000 0);
    transition: all .3s cubic-bezier(.55,0,.55,.2);
}
.md-ripple.md-active {
    animation: ripple 1s cubic-bezier(.25,.8,.25,1);
}
main{
  margin-top: 50px;
}
.dragboot{
  width: 200px;
  margin-left: 10px;
  /*float: left;*/
}
</style>
<template>
  <div>
    <header class="header">
      <div class="md-toolbar md-theme-blue">
        <div class="container">
          <div class="md-title">Vue-Drag</div>
        </div>
        <div class="md-ink-ripple">
          <div class="md-ripple md-active" style="width: 1234px; height: 1234px; top: -575px; left: -147px;"></div>
        </div>
      </div>
    </header>
    <main>
      <dragboot :list="lists" indicate="name">
        <template scope="props">
          <div :style="{background:props.item.color}">
            {{props.item.name}}
          </div>
          
        </template>
      </dragboot>
    </main>
  </div>
</template>
<script>
import dragboot from '../src/dragboot.vue'

export default {
  components:{dragboot},
  data() {
      return {
        lists:[
          {name:'鸿钧老祖',color:'red',children:[
            {name:'太上老君',color:'orange'},{name:'元始天尊',color:'yellow'},
            {name:'通天教主',color:'yellow'}
          ]},
          {name:'混鲲祖师',color:'orange',children:[
            {name:'接引道人',color:'blue'},{name:'准提道人',color:'yellow'}
          ]},
          {name:'女娲娘娘',color:'yellow'},
          {name:'陆压道君',color:'green'}
        ]
      }
  }
}
</script>
