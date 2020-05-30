<template>
  <div class="food-select-btn-wrap">
      <div class="food-select-btn" @click="openModal">
        <div class="plus-mark" v-if="btnState"></div>
        <img class="btn-img" :src="imgPath" v-else>
        <p class="btn-text">{{foodName}}</p>
      </div>
    <Modal v-show="modalState" @update-btn="updateBtn" @close="closeModal"/>
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
  border: 1px dotted black;
  .food-select-btn{
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
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
    .btn-img{
      display: block;
      width: 60%;
      height: 83%;
      object-fit: contain;
      margin: auto;
    }
    .btn-text{
      font-size: clamp(0px, 3.4vw, 3.4px*6);
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      height: 17%;
      margin: 0;
    }
  }
}


</style>