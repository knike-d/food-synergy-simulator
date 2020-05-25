<template>
<div id="modal">
  <div id="modal-content">
    <div>説明</div>
    <a @click="$emit('close')">閉じる</a>
  </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
#modal{
  z-index:100;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

#modal-content{
  z-index:1000;
  width:80vw;
  max-width:80px * 7.5;
  padding-top: 10%;
  padding-bottom: 10%;
  text-align: center;
  background-color: white;
}
</style>