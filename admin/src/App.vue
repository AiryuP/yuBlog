<!--
 * @Author: your name
 * @Date: 2022-01-11 09:32:57
 * @LastEditTime: 2022-01-17 17:39:32
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Inward\src\App.vue
-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

  html,body{
    // width: 100vw;
    // height: 100vh;
  }
  // 587.86
  #app{
    width: 100vw;
    // min-width: 1920px;
    overflow: hidden;
    height: 100vh;
    background-color: #06142E;
    // color: #000 !important;
  }
  
#app::-webkit-scrollbar {/*滚动条整体样式*/
    width: 8px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 8px;
    scrollbar-arrow-color:red;

}
#app::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 6px;
    -webkit-box-shadow: inset 0 0 6px #06395B;
    background: #3886b9;
    scrollbar-arrow-color:red;
}
#app::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 6px #06395B;
    border-radius: 0;
    background: rgba(0,0,0,0.1);
}

</style>
