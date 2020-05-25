<template>
  <div class="food-select-btn-wrap">
      <div class="plus-mark" @click="openModal"></div>
      <p class="btn-text" @click="openModal">食材を選択しよう！</p>
    <Modal v-show="modalState" @close="closeModal"/>
  </div>
</template>

<script>
import Modal from './Modal.vue'

export default {
  components: {
    Modal
  },
  data(){
    return{
      modalState: false,
    }
  },
  methods :{
    openModal(){
      this.modalState = true
    },
    closeModal(){
      this.modalState = false
    }
  }
}
</script>

<style lang="scss">
.food-select-btn-wrap{
  height: 100%;
  width: 39%;
  border: 1px dotted black;


    .plus-mark{
      position: relative;
      width: 3%;
      height: 26%;
      margin: 37% auto 20% auto;
      border-radius:20px;
      background-color: #FFCF4A;

      &:before{
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #FFCF4A;
        border-radius:20px;
        transform:rotate(90deg);
      }
    }
  

  .btn-text{
    font-size: clamp(0px, 3.8vw, 3.8px*5);
    height: 17%;
    margin: 0;
  }
}


</style>