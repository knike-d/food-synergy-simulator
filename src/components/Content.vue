<template>
  <div>
    <div class="top">
      <div class="top-title fade-in-right">
        食べ合わせ<br>シミュレーター
      </div>
    </div>
    <div class="main-content">
      <div class="food-select-wrap">
        <FoodSelectButton :btn-name="'selectFood1'" @update-food="updateSelectFood"/>
        <div v-inview:class="['fade-in-bottom']" class="multiply-wrap">
          <div class="multiply"></div>
        </div>
        <FoodSelectButton :btn-name="'selectFood2'" @update-food="updateSelectFood"/>
      </div>
      <a @click="showResult" class="result-btn" v-inview:class="['fade-in-bottom']">
        食べ合わせをチェック！
      </a>
      <TabContainer ref="tab" :select-food-list="selectFoodList" v-inview:class="['fade-in-bottom']"></TabContainer>
    </div>
  </div>
</template>

<script>
import FoodSelectButton from './FoodSelectButton.vue'
import TabContainer from './TabContainer.vue'

export default {
  components: {
    FoodSelectButton,
    TabContainer
  },
  data(){
    return{
      selectFoodList:[{},{}],
      selectFood1:{}, 
      selectFood2:{},
      visible1: false,
      visible2: false
    }
  },
  methods :{
    showResult(){
      this.selectFoodList[0] = this.selectFood1
      this.selectFoodList[1] = this.selectFood2
      if(Object.keys(this.selectFood1).length && Object.keys(this.selectFood2).length) this.$refs.tab.calcResult()
    },
    updateSelectFood(foodItem, btnName){
      this[btnName] = foodItem
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap');
$top-bg-h: clamp(1px, 20vw, 320px);
$top-bg-color: #ffcf4a;
$top-bubble-color: #FFBB00;
$top-title-posx: clamp(-45px*7.5, -45vw, 1px);
$food-select-h: 35vw;
//0.225を調節する
$multiply-size: $food-select-h * 0.225;
$multiply-padding: ($food-select-h - $multiply-size)/2vw * 1%;

@mixin fade-in-anime($direction) {animation: $direction 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;}
@mixin hover($hover-color) {
  @media (hover: hover) {
    &:hover {
      background-color: $hover-color;
    }
  }
}

.top{
  height: 66vw;
  max-height: 66px*7.5;
  position: relative;
  background-color: $top-bg-color;
  &:after{
    content: '';
    width: 100%;
    height: $top-bg-h;
    position: absolute;
    bottom: 0;
    background-size: 100%;
    transform: translateX(-50%);
    @function url-friendly-colour($colour) {
      @return '%23' + str-slice('#{$colour}', 2, -1)
    }
    background-color: $top-bubble-color;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='#{url-friendly-colour($top-bg-color)}' viewBox='0 0 1185 248'><circle cx='76' cy='121.1' r='20' class='a'/><circle cx='870' cy='201.1' r='11' class='a'/><circle cx='814.5' cy='165.6' r='24.5' class='a'/><path d='M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z' class='a'/></svg>");
  }
  .top-title{
    position: absolute;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: clamp(1px, 8vw, 8px*6);
    font-weight: bold;
    line-height: clamp(1px, 12vw, 12px*5.5);
    color: #1C1C1C;
    white-space: nowrap;
    text-align: left;
    margin-top: clamp(1px, 8vw, 8px*7.5);
    left: 50%;
    transform: translateX($top-title-posx);
    z-index: 1;
  }
}
.main-content{
  max-width: 750px;
  margin: auto;
  .food-select-wrap{
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    height: $food-select-h;
    max-height: $food-select-h/1vw * 7.5 * 1px;
    margin: 5% 0 5% 0;
    .multiply-wrap{
      height: $multiply-size/$food-select-h * 100%;
      width: $multiply-size/1vw * 1%;
      padding: $multiply-padding 4% $multiply-padding 4%;
      .multiply{
        height:100%;
        width:100%;
        position:relative;
        &:before, &:after{
          content:'';
          height:15%;
          width:100%;
          display:block;
          background:#333;
          border-radius:10px;
          position:absolute;
          top:43%;
          transform:rotate(-45deg);
        }
        &:after{
          transform:rotate(45deg);
        }
      }
    }
  }
  .result-btn{
    display: block;
    font-size: clamp(1px, 3.8vw, 3.8px*5);
    font-weight: bold;
    width: 50%;
    margin: auto;
    padding: clamp(1px, 3vw, 3px*5) clamp(1px, 6vw, 6px*5);
    text-align: center;
    text-decoration: none;
    color: #000;
    background: #ffcf4a;
    border-radius: 50px;
    cursor: pointer;
    transition: background-color .3s;
    @include hover(#FFBB00);
  }
}

@keyframes fade-in-right {
  0% {transform:translateX(-6vw); opacity: 0;}
  100% {transform:translateX($top-title-posx); opacity: 1;}
}
@keyframes fade-in-bottom {
  0% {transform:translateY(5vw); opacity: 0;}
  100% {transform:translateY(0); opacity: 1;}
}
.fade-in-right{
  @include fade-in-anime(fade-in-right);
}
.fade-in-bottom{
  @include fade-in-anime(fade-in-bottom);
}
</style>