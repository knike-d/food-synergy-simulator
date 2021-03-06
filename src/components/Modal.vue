<template>
<transition name="modal">
  <div id="modal">
    <div id="modal-overlay" @click="closeFoodList" />
    <div id="modal-content">
      <div id="top-bar">
        <transition name="back-btn">
          <div id="back-btn" v-show="foodListState" @click="backFoodList"/>
        </transition>
        <div/>
        <div id="close-btn" @click="closeFoodList"/>
      </div>
      <div id="content">
        <transition name="food-list">
          <ul id="food-list" v-show="foodListState">
            <li class="food-item" v-for="item in foodList" :key="item.id" @click="returnFoodId(item)">
              {{ item.name }}
            </li>
          </ul>
        </transition>
        <div id="food-cat-wrap" v-show="!foodListState">
          <div class="food-cat" v-for="item in category" :key="item.name" @click="goFoodList(item)">
            <img class="cat-img" :src="item.imgPath">
            <div class="cat-name">{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
import allFoodList from '../assets/food-list.json'

export default {
  data(){
    return{
      foodListState: false,
      foodList: [],
      category:[
        {name:"サプリメント", imgPath:require('../assets/foodicons/19.png')},
        {name:"穀類", imgPath:require('../assets/foodicons/01.png')},
        {name:"いも・でん粉類", imgPath:require('../assets/foodicons/02.png')},
        {name:"砂糖・甘味類", imgPath:require('../assets/foodicons/03.png')},
        {name:"豆類", imgPath:require('../assets/foodicons/04.png')},
        {name:"種実類", imgPath:require('../assets/foodicons/05.png')},
        {name:"野菜類", imgPath:require('../assets/foodicons/06.png')},
        {name:"果実類", imgPath:require('../assets/foodicons/07.png')},
        {name:"きのこ類", imgPath:require('../assets/foodicons/08.png')},
        {name:"藻類", imgPath:require('../assets/foodicons/09.png')},
        {name:"魚介類", imgPath:require('../assets/foodicons/10.png')},
        {name:"肉類", imgPath:require('../assets/foodicons/11.png')},
        {name:"卵類", imgPath:require('../assets/foodicons/12.png')},
        {name:"乳類", imgPath:require('../assets/foodicons/13.png')},
        {name:"油脂類", imgPath:require('../assets/foodicons/14.png')},
        {name:"菓子類", imgPath:require('../assets/foodicons/15.png')},
        {name:"嗜好飲料類", imgPath:require('../assets/foodicons/16.png')},
        {name:"調味料類", imgPath:require('../assets/foodicons/17.png')},
        {name:"調理加工食品類", imgPath:require('../assets/foodicons/18.png')}
      ]
    }
  },
  methods :{
    goFoodList(curCategory){
      this.foodListState = true
      this.foodList = allFoodList.filter(item => {
        if(item.category === curCategory.name) return true
      })
    },
    backFoodList(){
      this.foodListState = false
    },
    closeFoodList(){
      this.backFoodList()
      this.$emit("close")
    },
    returnFoodId(foodData){
      const selectCat = this.category.find((item) => item.name === foodData.category)
      this.backFoodList()
      this.$emit("update-btn", foodData, selectCat.imgPath)
    }
  }
}
</script>

<style lang="scss">
#modal{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: z-index(modal);
  #modal-overlay{
    position:fixed;
    width:100%;
    height:100%;
    background-color:rgba(0, 0, 0, 0.2);
    @include click-effect();
  }
  #modal-content{
    position: fixed;
    width: clampVal($modal-w, 6.5);
    padding-top: 1%;
    padding-bottom: 5%;
    background-color: white;
    #top-bar{
      display: flex;
      justify-content: space-between;
      width: 90%;
      height: clampVal($modal-top-bar-h, 6);
      margin: 0 auto 2% auto;
      #back-btn{
        width: clampVal($modal-top-bar-h, 6);
        height: 100%;
        position: relative;
        display: inline-block;
        @include click-effect();
        &::before{
          content: '';
          width: 45%;
          height: 45%;
          border: solid $main-color;
          border-width: 0 0 clampVal($back-btn-size) clampVal($back-btn-size);
          transform: rotate(45deg);
          position: absolute;
          top: 24%;
          left: 10%;
        }
      }
      #close-btn{
        position: relative;
        width: clampVal($modal-top-bar-h/10);
        height: 100%;
        background-color: $main-color;
        border-radius:20px;
        margin: 0 clampVal($close-btn-size) 0 0;
        transform:rotate(-45deg);
        @include click-effect();
        &:before{
          position: absolute;
          content: "";
          background-color: $main-color;
          border-radius:20px;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform: rotate(90deg);
        }
      }
    }
    #content{
      height: 70vh;
      overflow-y: scroll;
      #food-list{
        padding: 0 7%;
        .food-item{
          list-style: none;
          text-align: left;
          font-size: clampVal($modal-fs, 6);
          padding: 2% 3%;
          border-top: 1px dotted $accent-color;
          border-bottom:1px dotted $main-color;
          transition: background-color .3s;
          @include click-effect();
          @include hover_active($hover-color);
        }
      }
      #food-cat-wrap{
        display: grid;
        width: 90%;
        height: auto;
        gap: 2% 5%;
        grid-auto-rows: clampVal($cat-row-h);
        grid-template-columns: 1fr 1fr 1fr;
        margin: 0 auto 20% auto;
        .food-cat{
          width: 100%;
          height: 100%;
          border: 1px dotted black;
          transition: background-color .3s;
          @include click-effect();
          @include hover_active($hover-color);
          .cat-img{
            display: block;
            width: 60%;
            height: 81%;
            object-fit: contain;
            margin: auto;
          }
          .cat-name{
            display: block;
            font-size: clampVal($modal-fs, 6);
            width: 100%;
            height: 19%;
            margin: auto;
          }
        }
      }
    }
  }
}
.modal-enter-active, .modal-leave-active, 
.food-list-enter-active, .food-list-leave-active, 
.back-btn-enter-active, .back-btn-leave-active {
  transition: opacity .4s;
}
.modal-enter, .modal-leave-to, 
.food-list-enter, .food-list-leave-to, 
.back-btn-enter, .back-btn-leave-to {
  opacity: 0;
}
</style>