<template>
  <div>
    <div class="top">
      <div class="top-title">
        食べ合わせ<br>シミュレーター
      </div>
    </div>
    <div class="main-content">
      <div class="food-select-container">
        <div class="food-select-btn">
          <FoodSelectButton/>
        </div>
        <div class="multiply-container">
          <div class="multiply"></div>
        </div>
        <div class="food-select-btn">
          <FoodSelectButton/>
        </div>
      </div>

      <a class="result-btn">
        食べ合わせをチェック！
      </a>

      <TabContainer/>


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
  }
}
</script>

<style lang="scss">
.top{
  height: 66vw;
  max-height: 66px*7.5;
  background-color: #FFCF4A;

  .top-title{
    font-size: clamp(0px, 9vw, 9px*5);
    font-weight: bold;
    line-height: clamp(0px, 12vw, 12px*5);
    color: black;
    height: 100%;
    max-width: 750px;
    text-align: left;
    padding: 10% 0 0% 5%;
  }
}

.main-content{
  max-width: 750px;
  margin: auto;

  .food-select-container{
    $container-height: 39;

    height: $container-height * 1vw;
    max-height: $container-height * 7.5 * 1px;
    margin: 5% 0 5% 0;

    .food-select-btn{
      display: inline-block;
      height: 100%;
      width: $container-height * 1%;
    }
    .multiply-container{
      //0.225を調節する
      $multiply-size: $container-height * 0.225;
      $multiply-padding: ($container-height - $multiply-size)/2 * 1%;

      display: inline-block;
      height: $multiply-size/$container-height * 100%;
      width: $multiply-size * 1%;
      padding: $multiply-padding 2% $multiply-padding 2%;
      
      .multiply{
        height:100%;
        width:100%;
        display:block;
        position:relative;
      } 
      .multiply:before, .multiply:after{
        content:'';
        height:15%;
        width:100%;
        display:block;
        background:#333;
        border-radius:10px;
        position:absolute;
        top:43%;
        left:0;
        transform:rotate(-45deg);
      }
      .multiply:after{
        transform:rotate(45deg);
      }
    }
  }

  .result-btn{
    display: block;
    font-size: clamp(0px, 3.8vw, 3.8px*5);
    font-weight: bold;
    width: 50%;
    margin: auto;
    padding: clamp(0px, 3vw, 3px*5) clamp(0px, 6vw, 6px*5);
    text-align: center;
    text-decoration: none;
    color: #000;
    background: #FFCF4A;
    border-radius: 50px;
  }
}
</style>