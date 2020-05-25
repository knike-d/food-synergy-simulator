<template>
  <div>
    <div class="top">
      <div style="height:100%">
        <section class="section-bubble1">
          <div class="container">
            <div class="top-title">
              食べ合わせ<br>シミュレーター
            </div>
          </div>
        </section>
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
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap');
.top{
  height: 66vw;
  max-height: 66px*7.5;
  background-color: #ffcf4a;

  .top-title{
    font-family: 'Noto Sans JP', sans-serif;
    font-size: clamp(0px, 9vw, 9px*5);
    font-weight: bold;
    line-height: clamp(0px, 12vw, 12px*5);
    color: #1C1C1C;
    height: 100%;
    max-width: 750px;
    text-align: left;
    padding: 10% 0 0% 5%;
  }
}

$spacer-height: 20vw;
$section1-bg-color: #ffcf4a;
$section2-bg-color: #FFBB00;
@mixin bubbles($bubbles-type, $color)
{
  @if $bubbles-type == a
  {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='#{url-friendly-colour($color)}' viewBox='0 0 1185 248'><circle cx='76' cy='121.1' r='20' class='a'/><circle cx='870' cy='201.1' r='11' class='a'/><circle cx='814.5' cy='165.6' r='24.5' class='a'/><path d='M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z' class='a'/></svg>");
  }

  @else if $bubbles-type == b
  {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1185 248'><path d='M50.5 199.8c112.4 0 87.5-49 188.7-59.3s146.7 38.3 219.5 38.3 107.9-21.9 210.8-69.3c102.8-47.3 274-8.7 424.8 69.3 37.7 19.5 68 36.7 90.7 51.5V0H0v193C15 197.2 31.6 199.8 50.5 199.8zM1109 106.9c11 0 20 9 20 20 0 11-9 20-20 20s-20-9-20-20C1089 115.9 1098 106.9 1109 106.9zM370.5 57.9c13.5 0 24.5 11 24.5 24.5 0 13.5-11 24.5-24.5 24.5S346 95.9 346 82.4C346 68.9 357 57.9 370.5 57.9zM315 35.9c6.1 0 11 4.9 11 11s-4.9 11-11 11 -11-4.9-11-11S308.9 35.9 315 35.9z' fill='#{url-friendly-colour($color)}'/></svg>");
  }
}

@mixin section-bubble-with-colors($bubble-type, $currentcolor, $nextcolor)
{
  @extend .section-bubble;
  background-color: $currentcolor;
  
  &:after
  {
    background-color: $nextcolor;
    
    @include bubbles($bubble-type, $currentcolor);
  }
}

@function url-friendly-colour($colour) {
    @return '%23' + str-slice('#{$colour}', 2, -1)
}

.section-bubble
{
  margin-bottom: $spacer-height;
  position: relative;
  
  &:after
  {
    content: '';
    position: absolute;
    top: 120px;
    bottom: 0;
    
    width: 100%;
    height: $spacer-height;
    background: url('') green; // needs to be next sections background
    background-size: 100%;
    
    transform: translate(-50%, 100%);
  }
}
.section-bubble1
{
  @include section-bubble-with-colors(a, $section1-bg-color, $section2-bg-color);
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