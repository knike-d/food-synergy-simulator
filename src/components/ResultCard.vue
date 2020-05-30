<template>
  <div class="card">
    <div class="judgment-wrap">
      <div v-if="judgment == 1" class="judgment-good"></div>
      <div v-else-if="judgment == -1" class="judgment-bad">
          <div class="bad-mark"></div>
      </div>
      <div class="number">相性図鑑No.{{ id }}</div>
    </div>
    <div class="section-column-line"></div>
    
    <div class="chara-container">
      <div class="chara-wrap">
        <div class="charaL" :style="CharaLeftStyle">
          <div class="charaL-eye-left"></div>
          <div class="charaL-eye-right"></div>
          <div :class="[judgment == 1 ? 'charaL-good-mouth' : 'charaL-bad-mouth']"></div>
        </div>
        <div class="chara-name">{{ nutrition[0] }}</div>
      </div>

      <div class="chara-multiply-wrap">
        <div class="chara-multiply"></div>
      </div>

      <div class="chara-wrap">
        <div class="charaR" :style="CharaRightStyle">
          <div class="charaR-eye-left"></div>
          <div class="charaR-eye-right"></div>
          <div :class="[judgment == 1 ? 'charaR-good-mouth' : 'charaR-bad-mouth']"></div>
        </div>
        <div class="chara-name">{{ nutrition[1] }}</div>
      </div>
    </div>

    <div class="section-row-line"></div>
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
        {nutrition: "一価不飽和脂肪酸", background: "linear-gradient(180deg, #FFFCDC 0%, #FFFEED 0.01%, #FFFCCB 98.96%)"},
        {nutrition: "ビタミンD", background: ""},
        {nutrition: "ビタミンD", background: ""},
        
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
$line-weight: 1vw;
$row-height: 25vw;
$judgment-weight: 1.8vw;
$card-outside-radius: 20px;
$card-inside-radius: 13px;

@mixin chara-bad-mouth() {
  position: absolute;
  top: 53%;
  width: 16%;
  height: 8%;
  border-radius: 100px 100px 0 0;
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-left: 1px solid black;
}
@mixin chara-good-mouth() {
  position: absolute;
  top: 53%;
  width: 16%;
  height: 8%;
  border-radius: 0 0 100px 100px;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  border-left: 1px solid black;
}
@mixin chara-eye-left() {
  position: absolute;
  top: 20%;
  width: 10%;
  height: 25%;
  background: black;
  border-radius: 50%;
}
@mixin chara-eye-right() {
  position: absolute;
  top: 20%;
  width: 10%;
  height: 25%;
  background: black;
  border-radius: 50%;
}

.card{
  display: grid;
  width: 85%;
  height: auto;
  grid-template-rows: clamp(0px, $row-height, $row-height/1vw*7.5px) clamp(0px, $line-weight, $line-weight/1vw*7.5px) 1fr;
  grid-template-columns: 1fr clamp(0px, $line-weight, $line-weight/1vw*7.5px) 2fr;
  margin: 0 auto 4% auto;
  border: clamp(0px, $line-weight, $line-weight/1vw*7.5px) solid black;
  border-radius: $card-outside-radius;

  .judgment-wrap{
    grid-row: 1;
    grid-column: 1;

    .judgment-good{
      width: clamp(0px, $row-height/2, $row-height/2/1vw*7.5px);
      height: clamp(0px, $row-height/2, $row-height/2/1vw*7.5px);
      margin: 7% auto 5% auto;
      border-radius: 50%;
      border: clamp(0px, $judgment-weight, $judgment-weight/1vw*7.5px) solid red;
    }
    .judgment-bad{
      width: clamp(0px, $row-height*2/3, $row-height*2/3/1vw*7.5px);
      height: clamp(0px, $row-height*2/3, $row-height*2/3/1vw*7.5px);
      margin: 7% auto 3% auto;
      
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
      font-size: clamp(0px, 3.3vw, 3.3px*6);
      font-weight: bold;
      height: 30%;
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
      margin: 5% auto 0% auto;
      width: 44%;

      .charaL{
        position: relative;
        width: clamp(0px, $row-height*3/5, $row-height*3/5/1vw*7.5px);
        height: clamp(0px, $row-height*3/5, $row-height*3/5/1vw*7.5px);
        border: 2px solid black;
        border-radius: 50%;
        margin: 0 auto 6% auto;
        background: linear-gradient(180deg, #FED3FF 35.94%, #E785FF 100%);
        .charaL-eye-left{
          @include chara-eye-left();
          right: 40%;
        }
        .charaL-eye-right{
          @include chara-eye-right();
          right: 20%;
        }
        .charaL-good-mouth{
          @include chara-good-mouth();
          right: 26%;
        }
        .charaL-bad-mouth{
          @include chara-bad-mouth();
          right: 26%;
        }
      }
      .charaR{
        position: relative;
        width: clamp(0px, $row-height*3/5, $row-height*3/5/1vw*7.5px);
        height: clamp(0px, $row-height*3/5, $row-height*3/5/1vw*7.5px);
        border: 2px solid black;
        border-radius: 50%;
        margin: 0 auto 6% auto;
        background: linear-gradient(180deg, #FED3FF 35.94%, #E785FF 100%);
        .charaR-eye-left{
          @include chara-eye-left();
          left: 20%;
        }
        .charaR-eye-right{
          @include chara-eye-right();
          left: 40%;
        }
        .charaR-good-mouth{
          @include chara-good-mouth();
          left: 26%;
        }
        .charaR-bad-mouth{
          @include chara-bad-mouth();
          left: 26%;
        }
      }
      .chara-name{
        font-size: clamp(0px, 2.5vw, 2.5px*6);
        font-weight: bold;
        white-space: nowrap;
      }
    }
    .chara-multiply-wrap{
      width: clamp(0px, $row-height/4, $row-height/4/1vw*7.5px);
      height: clamp(0px, $row-height/4, $row-height/4/1vw*7.5px);
      display: inline-block;
      padding: 0 0 15% 0 ;
      
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
      font-size: clamp(0px, 3.3vw, 3.3px*6);
      line-height: clamp(0px, 5.5vw, 5.5px*6);
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