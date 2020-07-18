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
        <div v-inview:class="['fade-in-bottom']" class="cross-wrap">
          <div class="cross"/>
        </div>
        <FoodSelectButton :btn-name="'selectFood2'" @update-food="updateSelectFood"/>
      </div>
      <a @click="showResult" class="result-btn" v-inview:class="['fade-in-bottom']">
        食べ合わせをチェック！
      </a>
      <TabContainer ref="tab" :select-food-list="selectFoodList" v-inview:class="['fade-in-bottom']"/>
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
.top{
  height: clampVal($top-header-h);
  position: relative;
  background-color: $main-color;
  &:after{
    content: '';
    width: 100%;
    height: clampVal($top-bg-h, 16);
    position: absolute;
    bottom: 0;
    background-size: 100%;
    transform: translateX(-50%);
    @function url-friendly-colour($colour) {
      @return '%23' + str-slice('#{$colour}', 2, -1)
    }
    background-color: $accent-color;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='#{url-friendly-colour($main-color)}' viewBox='0 0 1185 248'><circle cx='76' cy='121.1' r='20' class='a'/><circle cx='870' cy='201.1' r='11' class='a'/><circle cx='814.5' cy='165.6' r='24.5' class='a'/><path d='M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z' class='a'/></svg>");
  }
  .top-title{
    position: absolute;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: clampVal($top-title-fs, 6);
    font-weight: bold;
    line-height: clampVal($top-title-line-h, 5.5);
    color: black;
    white-space: nowrap;
    text-align: left;
    margin-top: clampVal($top-title-top-m);
    left: 50%;
    transform: translateX(clampVal($top-title-posx, 0, 7.5));
    z-index: 1;
  }
}
.main-content{
  max-width: $max-w-multiplier * 100px;
  margin: auto;
  .food-select-wrap{
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    height: clampVal($food-select-h);
    margin: 5% 0 5% 0;
    .cross-wrap{
      height: $cross-size/$food-select-h * 100%;
      width: $cross-size/1vw * 1%;
      padding: $cross-padding 4% $cross-padding 4%;
      .cross{
        height: 100%;
        width: 100%;
        position: relative;
        &:before, &:after{
          content: '';
          height: 15%;
          width: 100%;
          display: block;
          background: $cross-color;
          border-radius: 10px;
          position: absolute;
          top: 43%;
          transform: rotate(-45deg);
        }
        &:after{
          transform: rotate(45deg);
        }
      }
    }
  }
  .result-btn{
    display: block;
    font-size: clampVal($rslt-fs, 5);
    font-weight: bold;
    width: 50%;
    margin: auto;
    padding: clampVal($rslt-btn-m, 5) clampVal($rslt-btn-m*2, 5);
    text-align: center;
    text-decoration: none;
    color: black;
    background: $main-color;
    border-radius: 50px;
    transition: background-color .3s;
    @include click-effect();
    @include hover_active($accent-color);
  }
}

@keyframes fade-in-right {
  0% {transform: translateX(-6vw); opacity: 0;}
  100% {transform: translateX(clampVal($top-title-posx, 0, 7.5)); opacity: 1;}
}
@keyframes fade-in-bottom {
  0% {transform: translateY(5vw); opacity: 0;}
  100% {transform: translateY(0); opacity: 1;}
}
.fade-in-right{
  @include fade-in-anime(fade-in-right);
}
.fade-in-bottom{
  @include fade-in-anime(fade-in-bottom);
}
</style>