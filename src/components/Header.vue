<template>
     <header class="header">
           <slot name="search"></slot>
           <a class="header_title">
               <span class="header_title_text ellipsis">{{title}}</span>
           </a>
           <slot name="login"></slot>
       </header>
</template>
<script>
export default {
  props: {
    title: String
  }
}
</script>
<style lang="scss" scoped>
.header {
  background-color: #987fdd;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;
   .header_title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 40%;
        color: #fff;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 20px;
        text-align: center;
        font-family: Georgia, 'Times New Roman', Times, serif;
    }
}
</style>
