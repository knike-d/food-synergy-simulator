<template>
  <div class="result-card">
    <div class="judgment-wrap">
      <div v-if="judgment == -999" class="judgment-none"/>
      <div v-if="judgment == 1" class="judgment-good"/>
      <div v-else-if="judgment == -1" class="judgment-bad">
          <div class="bad-mark"/>
      </div>
      <div class="number">相性図鑑No.{{ id }}</div>
    </div>
    <div class="section-column-line"/>
    
    <div class="chara-container">
      <div class="chara-wrap">
        <div class="charaL" :style="CharaLeftStyle">
          <div class="charaL-eye-left"/>
          <div class="charaL-eye-right"/>
          <div :class="[judgment == 1 ? 'charaL-good-mouth' : 'charaL-bad-mouth']"/>
        </div>
        <div class="chara-name">{{ nutrition[0] }}</div>
      </div>

      <div class="chara-multiply-wrap">
        <div class="chara-multiply"/>
      </div>

      <div class="chara-wrap">
        <div class="charaR" :style="CharaRightStyle">
          <div class="charaR-eye-left"/>
          <div class="charaR-eye-right"/>
          <div :class="[judgment == 1 ? 'charaR-good-mouth' : 'charaR-bad-mouth']"/>
        </div>
        <div class="chara-name">{{ nutrition[1] }}</div>
      </div>
    </div>

    <div class="section-row-line"/>
    <div class="explanation-wrap">
      <div class="explanation">
        {{ explanation }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:[
    "id",
    "judgment",
    "nutrition",
    "explanation"
  ],
  data(){
    return{
      CharaLeftStyle:{
        background: "white"
      },
      CharaRightStyle:{
        background: "white"
      },
      CharaStyleList:[
        {nutrition: "カルシウム", background: "linear-gradient(180deg, #C9FFFA 0%, #35C6FF 100%)"},
        {nutrition: "マグネシウム", background: "linear-gradient(180deg, #A9FFCA 37.5%, #00C564 100%)"},
        {nutrition: "鉄", background: "linear-gradient(180deg, #FED3FF 35.94%, #E785FF 100%)"},
        {nutrition: "亜鉛", background: "linear-gradient(180deg, #B2BAD9 37.5%, #6D6F95 100%)"},
        {nutrition: "マンガン", background: "linear-gradient(180deg, #E8CEB1 37.5%, #968766 100%)"},
        {nutrition: "銅", background: "linear-gradient(180deg, #B6E1E3 37.5%, #3D7F9B 100%)"},
        {nutrition: "ナトリウム", background: "linear-gradient(180deg, #FFFFFF 37.5%, #BBF3FF 100%)"},
        {nutrition: "クロム", background: "linear-gradient(180deg, #B9B9B9 0.01%, #613E3E 100%)"},
        {nutrition: "モリブデン", background: "linear-gradient(180deg, #FFEE96 0.01%, #BBC100 100%)"},
        {nutrition: "カリウム", background: "linear-gradient(180deg, #FFFFFF 0.01%, #B1FF9B 100%)"},
        {nutrition: "ヨウ素", background: "linear-gradient(180deg, #FDCDFF 0.01%, #D03CAA 100%)"},
        {nutrition: "リン", background: "linear-gradient(180deg, #FBAFAE 0.01%, #DE000B 100%)"},
        {nutrition: "セレン", background: "linear-gradient(180deg, #C1C1C1 0.01%, #838383 100%)"},
        {nutrition: "ビタミンA", background: "linear-gradient(180deg, #FFE3C8 0.01%, #FF9400 100%)"},
        {nutrition: "ビタミンD", background: "linear-gradient(180deg, #FFBE9C 0.01%, #FFD293 100%)"},
        {nutrition: "ビタミンE", background: "linear-gradient(180deg, #C5FF91 0.01%, #ECFFB9 100%)"},
        {nutrition: "ビタミンK", background: "linear-gradient(180deg, #FF6868 0.01%, #FFCFCF 100%)"},
        {nutrition: "チアミン", background: "linear-gradient(180deg, #ED64FF 0.01%, #FFCFF9 100%)"},
        {nutrition: "リボフラビン", background: "linear-gradient(180deg, #ED64FF 0.01%, #FFCFF9 100%)"},
        {nutrition: "ナイアシン", background: "linear-gradient(180deg, #ED64FF 0.01%, #FFCFF9 100%)"},
        {nutrition: "パントテン酸", background: "linear-gradient(180deg, #ED64FF 0.01%, #FFCFF9 100%)"},
        {nutrition: "ピリドキシン", background: "linear-gradient(180deg, #ED64FF 0.01%, #FFCFF9 100%)"},
        {nutrition: "ビオチン", background: "linear-gradient(180deg, #ED64FF 0.01%, #FFCFF9 100%)"},
        {nutrition: "葉酸", background: "linear-gradient(180deg, #ED64FF 0.01%, #FFCFF9 100%)"},
        {nutrition: "シアノコバラミン", background: "linear-gradient(180deg, #ED64FF 0.01%, #FFCFF9 100%)"},
        {nutrition: "ビタミンC", background: "linear-gradient(180deg, #FFF300 0.01%, #FFE600 100%)"},
        {nutrition: "水溶性食物繊維", background: "linear-gradient(180deg, #7CF2FF 0%, #B3FF95 100%)"},
        {nutrition: "不溶性食物繊維", background: "linear-gradient(180deg, #B6CEA5 0%, #72D258 100%)"},
        {nutrition: "タンパク質", background: "linear-gradient(180deg, #E1C293 0%, #DEA252 100%)"},
        {nutrition: "コレステロール", background: "linear-gradient(180deg, #FFFBDC 0%, #EEDC00 0.01%, #D9A100 98.96%)"},
        {nutrition: "飽和脂肪酸", background: "linear-gradient(180deg, #E7A062 0%, #C99286 100%)"},
        {nutrition: "多価不飽和脂肪酸", background: "linear-gradient(180deg, #FFFCDC 0%, #FFFEED 0.01%, #FFFCCB 98.96%)"},
        {nutrition: "一価不飽和脂肪酸", background: "linear-gradient(180deg, #FFFCDC 0%, #FFFEED 0.01%, #FFFCCB 98.96%)"}
      ]
    }
  },
  created(){
    for(let i=0;i<this.CharaStyleList.length;i++){
      if(this.nutrition[0] == this.CharaStyleList[i].nutrition){
        this.CharaLeftStyle.background = this.CharaStyleList[i].background
      }
      if(this.nutrition[1] == this.CharaStyleList[i].nutrition){
        this.CharaRightStyle.background = this.CharaStyleList[i].background
      }
    }
  }
}
</script>

<style lang="scss">
$line-weight: clamp(1px, 0.8vw, 1*7.5px);
$row-base-h: 23vw;
$grid-row-h: clamp(1px, $row-base-h, $row-base-h/1vw*7.5px);
$card-font1: clamp(1px, $row-base-h*1.3/10, $row-base-h*1.3/10/1vw*6px);

$judgment-none-h: clamp(1px, $row-base-h*0.7/10, $row-base-h*0.7/10/1vw*7.5px);
$judgment-none-top-m: clamp(1px, $row-base-h*4.3/10, $row-base-h*4.3/10/1vw*7.5px);
$judgment-none-bottom-m: clamp(1px, $row-base-h*3.1/10, $row-base-h*3.1/10/1vw*7.5px);

$judgment-good-h: clamp(1px, $row-base-h*4.8/10, $row-base-h*4.8/10/1vw*7.5px);
$judgment-good-top-m: clamp(1px, $row-base-h*1/10, $row-base-h*1/10/1vw*7.5px);
$judgment-good-bottom-m: clamp(1px, $row-base-h*0.7/10, $row-base-h*0.7/10/1vw*7.5px);

$judgment-bad-h: clamp(1px, $row-base-h*6.6/10, $row-base-h*6.6/10/1vw*7.5px);
$judgment-bad-top-m: clamp(1px, $row-base-h*1/10, $row-base-h*1/10/1vw*7.5px);
$judgment-bad-bottom-m: clamp(1px, $row-base-h*0.5/10, $row-base-h*0.5/10/1vw*7.5px);

$chara-h: clamp(1px, $row-base-h*5.5/10, $row-base-h*5.5/10/1vw*7.5px);
$chara-top-m: clamp(1px, $row-base-h*1.5/10, $row-base-h*1.5/10/1vw*7.5px);
$chara-bottom-m: clamp(1px, $row-base-h*0.7/10, $row-base-h*0.7/10/1vw*7.5px);
$chara-border-wgt: clamp(1px, $row-base-h*0.2/10, $row-base-h*0.2/10/1vw*7.5px);
$chara-multiply-h: clamp(1px, $row-base-h/4, $row-base-h/4/1vw*7.5px);
$judgment-wgt: clamp(1px, $row-base-h*0.8/10, $row-base-h*0.8/10/1vw*7.5px);
$card-outside-radius: 20px;
$card-inside-radius: 13px;

@mixin chara-eye() {
  position: absolute;
  top: 20%;
  width: 10%;
  height: 25%;
  background: black;
  border-radius: 50%;
}
@mixin chara-mouth() {
  position: absolute;
  top: 53%;
  width: 16%;
  height: 8%;
  border: 1px solid black;
}

.result-card{
  display: grid;
  width: 85%;
  height: auto;
  grid-template-rows: $grid-row-h $line-weight 1fr;
  grid-template-columns: 1fr $line-weight 2fr;
  margin: 0 auto 4% auto;
  border: solid black;
  border-width: $line-weight;
  border-radius: $card-outside-radius;
  .judgment-wrap{
    grid-row: 1;
    grid-column: 1;
    .judgment-none{
      width: 30%;
      height: $judgment-none-h;
      margin: $judgment-none-top-m auto $judgment-none-bottom-m auto;
      background: black;
    }
    .judgment-good{
      width: $judgment-good-h;
      height: $judgment-good-h;
      margin: $judgment-good-top-m auto $judgment-good-bottom-m auto;
      border-radius: 50%;
      border: solid red;
      border-width: $judgment-wgt;
    }
    .judgment-bad{
      width: $judgment-bad-h;
      height: $judgment-bad-h;
      margin: $judgment-bad-top-m auto $judgment-bad-bottom-m auto;
      .bad-mark{
        height:100%;
        width:100%;
        display:block;
        position:relative;
        &:before, &:after{
          content:'';
          height:15%;
          width:100%;
          display:block;
          background:#0486FF;
          border-radius:10px;
          position:absolute;
          top:43%;
          left:0;
          transform:rotate(-45deg);
        }
        &:after{
          transform:rotate(45deg);
        }
      }
    }
    .number{
      font-size: $card-font1;
      font-weight: bold;
      white-space: nowrap;
    }
  }
  .section-column-line{
    grid-row: 1;
    grid-column: 2;
    height: 90%;
    margin: 110% 0;
    vertical-align: middle;
    background-color: black;
  }
  .chara-container{
    grid-row: 1;
    grid-column: 3;
    .chara-wrap{
      display: inline-block;
      margin: $chara-top-m auto 0 auto;
      width: 44%;
      .charaL{
        position: relative;
        width: $chara-h;
        height: $chara-h;
        border: solid black;
        border-width: $chara-border-wgt;
        border-radius: 50%;
        margin: 0 auto $chara-bottom-m auto;
        .charaL-eye-left{
          @include chara-eye();
          right: 40%;
        }
        .charaL-eye-right{
          @include chara-eye();
          right: 20%;
        }
        .charaL-good-mouth{
          @include chara-mouth();
          border-radius: 0 0 100px 100px;
          border-top: 0;
          right: 26%;
        }
        .charaL-bad-mouth{
          @include chara-mouth();
          border-radius: 100px 100px 0 0;
          border-bottom: 0;
          right: 26%;
        }
      }
      .charaR{
        position: relative;
        width: $chara-h;
        height: $chara-h;
        border: solid black;
        border-width: $chara-border-wgt;
        border-radius: 50%;
        margin: 0 auto $chara-bottom-m auto;
        .charaR-eye-left{
          @include chara-eye();
          left: 20%;
        }
        .charaR-eye-right{
          @include chara-eye();
          left: 40%;
        }
        .charaR-good-mouth{
          @include chara-mouth();
          border-radius: 0 0 100px 100px;
          border-top: 0;
          left: 26%;
        }
        .charaR-bad-mouth{
          @include chara-mouth();
          border-radius: 100px 100px 0 0;
          border-bottom: 0;
          left: 26%;
        }
      }
      .chara-name{
        font-size: $card-font1;
        font-weight: bold;
        white-space: nowrap;
      }
    }
    .chara-multiply-wrap{
      width: $chara-multiply-h;
      height: $chara-multiply-h;
      display: inline-block;
      padding: 0 0 14% 0 ;
      .chara-multiply{
        height:100%;
        width:100%;
        display:block;
        position:relative;
        &:before, &:after{
          content:'';
          height:15%;
          width:100%;
          display:block;
          background:black;
          border-radius:10px;
          position:absolute;
          top:43%;
          left:0;
          transform:rotate(-45deg);
        }
        &:after{
          transform:rotate(45deg);
        }
      }
    }
  }
  .section-row-line{
    grid-row: 2;
    grid-column: 1 / 4;
    width:96%;
    margin: 0 2%;
    background-color: black;
  }
  .explanation-wrap{
    grid-row: 3;
    grid-column: 1 / 4;
    background-color: #FFCF4A;
    border-radius: 0 0 $card-inside-radius $card-inside-radius;
    z-index: -1;
    .explanation{
      font-size: clamp(1px, 3.3vw, 3.3px*6);
      line-height: clamp(1px, 5.5vw, 5.5px*6);
      font-weight: bold;
      text-align: left;
      background-color: #FFF;
      border-radius: 7px;
      width: 85%;
      padding: 3%;
      margin: 3% auto;
    }
  }
}
</style>