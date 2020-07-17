<template>
  <div class="food-select-btn-wrap">
    <div v-inview:class="['fade-in-bottom']" class="food-select-btn" @click="openModal">
      <div class="plus-mark" v-if="btnState"/>
      <img class="btn-img" :src="imgPath" v-else>
      <p class="btn-text">{{foodName}}</p>
    </div>
    <transition name="modal">
      <Modal v-if="modalState" @update-btn="updateBtn" @close="closeModal" />
    </transition>
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
      btnState: true,
      foodName: "食材を選択しよう！",
      imgPath:""
    }
  },
  props:{
    btnName:{
      type: String
    }
  },
  methods :{
    openModal(){
      this.modalState = true
    },
    closeModal(){
      this.modalState = false
    },
    updateBtn(foodItem, imgPath){
      this.foodName = foodItem.name
      this.imgPath = imgPath
      this.btnState = false
      this.closeModal()
      this.$emit("update-food", foodItem, this.btnName)
    }
  }
}
</script>

<style lang="scss">
.food-select-btn-wrap{
  position: relative;
  height: 100%;
  width: 35%;
  .food-select-btn{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    border: 1px dotted black;
    transition: background-color .3s;
    @include click-effect();
    @include hover_active($hover-color);
    .plus-mark{
      position: relative;
      width: 3%;
      height: 26%;
      margin: 37% auto 20% auto;
      border-radius:20px;
      background-color: $main-color;
      &:before{
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $main-color;
        border-radius:20px;
        transform:rotate(90deg);
      }
    }
    .btn-img{
      display: block;
      width: 60%;
      height: 83%;
      object-fit: contain;
      margin: auto;
    }
    .btn-text{
      font-size: clamp(1px, 3.4vw, 3.4px*6);
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      height: 17%;
      margin: 0;
    }
  }
}

@keyframes fade-in-bottom {
  0% {transform:translateY(5vw); opacity: 0;}
  100% {transform:translateY(0); opacity: 1;}
}
.fade-in-bottom{
  @include fade-in-anime(fade-in-bottom);
}

.modal-enter-active, .modal-leave-active {
  transition: opacity .5s;
}
.modal-enter, .modal-leave-to {
  opacity: 0;
}
</style>