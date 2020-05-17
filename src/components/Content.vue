<template>
  <div>
    <div class="top">
      あああ
    </div>
    <div class="main-content">
      <div class="food-select-container">
        <div class="food-select-button">
          <FoodSelectButton/>
        </div>
        <div class="multiply-container">
          <div class="multiply"></div>
        </div>
        <div class="food-select-button">
          <FoodSelectButton/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import FoodSelectButton from './FoodSelectButton.vue'

export default {
  components: {
    FoodSelectButton
  }
}
</script>

<style lang="scss">
.top{
    height: 66vw;
    max-height: 66px*7.5;
    background-color: #FFCF4A;
}

.main-content{
  max-width: 750px;
  margin: auto;

  .food-select-container{
    $container-height: 39;

    height: $container-height * 1vw;
    max-height: $container-height * 7.5 * 1px;
    margin: 5% 0 5% 0;

    .food-select-button{
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
}
</style>