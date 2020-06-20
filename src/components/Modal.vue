<template>
<div id="modal">
  <div id="modal-overlay" @click="closeFoodList" />
  <div id="modal-content">
    <div id="top-bar">
      <transition>
        <div id="back-btn" v-if="foodListState" @click="backFoodList"/>
      </transition>
      <div/>
      <div id="close-btn" @click="closeFoodList"/>
    </div>

    <div id="content">
      <transition>
        <ul id="food-list" v-if="foodListState">
          <li class="food-item" v-for="item in foodList" :key="item.id" @click="returnFoodId(item)">
            {{ item.name }}
          </li>
        </ul>
      </transition>
      <div id="food-cat-wrap" v-if="!foodListState">
        <div class="food-cat" v-for="item in category" :key="item.name" @click="goFoodList(item)">
          <img class="cat-img" :src="item.imgPath">
          <div class="cat-name">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import allFoodList from '../assets/food-list.json'

export default {
  data(){
    return{
      foodListState: false,
      foodList: [],
      category:[
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
        if(item.category == curCategory.name){
          return true
        }
      })
    },
    backFoodList(){
      this.foodListState = false
    },
    closeFoodList(){
      //this.foodListState = false
      this.$emit("close")
    },
    returnFoodId(item){      
      for(let i=0;i<this.category.length;i++){
        if(item.category == this.category[i].name){
          this.foodListState = false
          this.$emit("update-btn", item, this.category[i].imgPath)
        }
      }
    }
  }
}
</script>

<style lang="scss">
$icon-height: 10vw;
$row-height: 20vw;
@mixin hover($hover-color) {
  @media (hover: hover) {
    &:hover {
      background-color: $hover-color;
    }
  }
}

#modal{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index:100;
  #modal-overlay{
    position:fixed;
    width:100%;
    height:100%;
    background-color:rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  #modal-content{
    position:fixed;
    width:80vw;
    max-width:80px * 7.5;
    padding-top: 2%;
    padding-bottom: 5%;
    background-color: white;
    #top-bar{
      display: flex;
      justify-content: space-between;
      width: 90%;
      height: $icon-height;
      max-height: $icon-height/1vw * 6px;
      margin: 0 auto 4% auto;
      #back-btn{
        width: $icon-height;
        max-width: $icon-height/1vw * 6px;
        height: 100%;
        position: relative;
        display: inline-block;
        cursor: pointer;
        &::before{
          content: '';
          width: 40%;
          height: 40%;
          border-bottom: solid clamp(1px,1vw,1px*7.5) #FFCF4A;
          border-left: solid clamp(1px,1vw,1px*7.5) #FFCF4A;
          transform: rotate(45deg);
          position: absolute;
          top: 28%;
          left: 10%;
        }
      }
      #close-btn{
        position: relative;
        width: $icon-height/10;
        max-width: $icon-height/10vw * 7.5px;
        height: 100%;
        background-color: #FFCF4A;
        border-radius:20px;
        margin: 0 clamp(1px,3vw,3px*7.5) 0 0;
        transform:rotate(-45deg);
        cursor: pointer;
        &:before{
          position: absolute;
          content: "";
          background-color: #FFCF4A;
          border-radius:20px;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform:rotate(90deg);
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
          padding: 2% 3%;
          border-top: 1px dotted orange;
          border-bottom:1px dotted #FFCF4A;
          cursor: pointer;
          transition: background-color .3s;
          @include hover(#e8e8e8);
        }
      }
      #food-cat-wrap{
        display: grid;
        width: 90%;
        height: auto;
        gap: 2% 5%;
        grid-auto-rows: clamp(1px, $row-height, $row-height/1vw*7.5px);
        grid-template-columns: 1fr 1fr 1fr;
        margin: 0 auto 20% auto;
        .food-cat{
          width: 100%;
          height: 100%;
          border: 1px dotted black;
          cursor: pointer;
          transition: background-color .3s;
          @include hover(#e8e8e8);
          .cat-img{
            display: block;
            width: 60%;
            height: 81%;
            object-fit: contain;
            margin: auto;
          }
          .cat-name{
            display: block;
            font-size: clamp(1px, 3vw, 3px*6);
            width: 100%;
            height: 19%;
            margin: auto;
          }
        }
      }
    }
  }
}

.v-enter-active, .v-leave-active {
  transition: opacity .3s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}
</style>