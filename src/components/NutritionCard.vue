<template>
  <div class="nut-card">
    <div class="chara-wrap">
      <div class="chara" :style="cardStyle.charaBg">
        <div class="chara-eye-left"/>
        <div class="chara-eye-right"/>
        <div class="chara-good-mouth"/>
      </div>
      <div class="chara-name">{{ cardStyle.nutrition }}</div>
    </div>
    <div class="section-line"/>
    <div class="nut-detail">
      <div class="nut-number">栄養図鑑：No.{{ cardStyle.id }}</div>
      <div class="nut-category">分類：{{ cardStyle.category }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    nutrition: {
      type: String,
      default: "主な栄養なし"
    }
  },
  data(){
    return{
      cardStyle: {},
      styleList:[
        {nutrition: "主な栄養なし", id: 0, category: "なし", charaBg: {background: "white"}},
        {nutrition: "カルシウム", id: 1, category: "ミネラル", charaBg: {background: "linear-gradient(180deg, #C9FFFA 0%, #35C6FF 100%)"}},
        {nutrition: "マグネシウム", id: 2, category: "ミネラル", charaBg: {background: "linear-gradient(180deg, #A9FFCA 37.5%, #00C564 100%)"}},
        {nutrition: "鉄", id: 3, category: "ミネラル", charaBg: {background: "linear-gradient(180deg, #FED3FF 35.94%, #E785FF 100%)"}},
        {nutrition: "亜鉛", id: 4, category: "ミネラル", charaBg: {background: "linear-gradient(180deg, #B2BAD9 37.5%, #6D6F95 100%)"}},
        {nutrition: "マンガン", id: 5, category: "ミネラル", charaBg: {background: "linear-gradient(180deg, #E8CEB1 37.5%, #968766 100%)"}},
        {nutrition: "銅", id: 6, category: "ミネラル", charaBg: {background: "linear-gradient(180deg, #B6E1E3 37.5%, #3D7F9B 100%)"}},
        {nutrition: "ナトリウム", id: 7, category: "ミネラル", charaBg: {background: "linear-gradient(180deg, #FFFFFF 37.5%, #BBF3FF 100%)"}},
        {nutrition: "クロム", id: 8, category: "ミネラル", charaBg: {background: "linear-gradient(180deg, #B9B9B9 0.01%, #613E3E 100%)"}},
        {nutrition: "モリブデン", id: 9, category: "ミネラル", charaBg: {background: "linear-gradient(180deg, #FFEE96 0.01%, #BBC100 100%)"}},
        {nutrition: "カリウム", id: 10, category: "ミネラル", charaBg: {background: "linear-gradient(180deg, #FFFFFF 0.01%, #B1FF9B 100%)"}},
        {nutrition: "ヨウ素", id: 11, category: "ミネラル", charaBg: {background: "linear-gradient(180deg, #FDCDFF 0.01%, #D03CAA 100%)"}},
        {nutrition: "リン", id: 12, category: "ミネラル", charaBg: {background: "linear-gradient(180deg, #FBAFAE 0.01%, #DE000B 100%)"}},
        {nutrition: "セレン", id: 13, category: "ミネラル", charaBg: {background: "linear-gradient(180deg, #C1C1C1 0.01%, #838383 100%)"}},
        {nutrition: "ビタミンA", id: 14, category: "脂溶性ビタミン", charaBg: {background: "linear-gradient(180deg, #FFE3C8 0.01%, #FF9400 100%)"}},
        {nutrition: "ビタミンD", id: 15, category: "脂溶性ビタミン", charaBg: {background: "linear-gradient(180deg, #FFBE9C 0.01%, #FFD293 100%)"}},
        {nutrition: "ビタミンE", id: 16, category: "脂溶性ビタミン", charaBg: {background: "linear-gradient(180deg, #C5FF91 0.01%, #ECFFB9 100%)"}},
        {nutrition: "ビタミンK", id: 17, category: "脂溶性ビタミン", charaBg: {background: "linear-gradient(180deg, #FF6868 0.01%, #FFCFCF 100%)"}},
        {nutrition: "チアミン", id: 18, category: "水溶性ビタミン", charaBg: {background: "linear-gradient(180deg, #ED64FF 0.01%, #FFCFF9 100%)"}},
        {nutrition: "リボフラビン", id: 19, category: "水溶性ビタミン", charaBg: {background: "linear-gradient(180deg, #ED64FF 0.01%, #FFCFF9 100%)"}},
        {nutrition: "ナイアシン", id: 20, category: "水溶性ビタミン", charaBg: {background: "linear-gradient(180deg, #ED64FF 0.01%, #FFCFF9 100%)"}},
        {nutrition: "パントテン酸", id: 21, category: "水溶性ビタミン", charaBg: {background: "linear-gradient(180deg, #ED64FF 0.01%, #FFCFF9 100%)"}},
        {nutrition: "ピリドキシン", id: 22, category: "水溶性ビタミン", charaBg: {background: "linear-gradient(180deg, #ED64FF 0.01%, #FFCFF9 100%)"}},
        {nutrition: "ビオチン", id: 23, category: "水溶性ビタミン", charaBg: {background: "linear-gradient(180deg, #ED64FF 0.01%, #FFCFF9 100%)"}},
        {nutrition: "葉酸", id: 24, category: "水溶性ビタミン", charaBg: {background: "linear-gradient(180deg, #ED64FF 0.01%, #FFCFF9 100%)"}},
        {nutrition: "シアノコバラミン", id: 25, category: "水溶性ビタミン", charaBg: {background: "linear-gradient(180deg, #ED64FF 0.01%, #FFCFF9 100%)"}},
        {nutrition: "ビタミンC", id: 26, category: "水溶性ビタミン", charaBg: {background: "linear-gradient(180deg, #FFF300 0.01%, #FFE600 100%)"}},
        {nutrition: "水溶性食物繊維", id: 27, category: "食物繊維", charaBg: {background: "linear-gradient(180deg, #7CF2FF 0%, #B3FF95 100%)"}},
        {nutrition: "不溶性食物繊維", id: 28, category: "食物繊維", charaBg: {background: "linear-gradient(180deg, #B6CEA5 0%, #72D258 100%)"}},
        {nutrition: "タンパク質", id: 29, category: "タンパク質", charaBg: {background: "linear-gradient(180deg, #E1C293 0%, #DEA252 100%)"}},
        {nutrition: "コレステロール", id: 30, category: "脂質", charaBg: {background: "linear-gradient(180deg, #FFFBDC 0%, #EEDC00 0.01%, #D9A100 98.96%)"}},
        {nutrition: "飽和脂肪酸", id: 31, category: "脂質", charaBg: {background: "linear-gradient(180deg, #E7A062 0%, #C99286 100%)"}},
        {nutrition: "多価不飽和脂肪酸", id: 32, category: "脂質", charaBg: {background: "linear-gradient(180deg, #FFFCDC 0%, #FFFEED 0.01%, #FFFCCB 98.96%)"}},
        {nutrition: "一価不飽和脂肪酸", id: 33, category: "脂質", charaBg: {background: "linear-gradient(180deg, #FFFCDC 0%, #FFFEED 0.01%, #FFFCCB 98.96%)"}}
      ]
    }
  },
  created(){
    this.cardStyle = this.styleList.find((item) => item.nutrition === this.nutrition)
  }
}
</script>

<style lang="scss">
.nut-card{
  display: flex;
  width: 75%;
  height: clampVal($chara-row-h);
  margin: 0 auto 3% auto;
  border: solid black;
  border-width: clampVal($card-line-wgt);
  border-radius: clampVal($card-outside-radius);
  .chara-wrap{
    width: 32%;
    margin: clampVal($nut-chara-top-m) 3% 0 3%;
    .chara{
      position: relative;
      width: clampVal($chara-h);
      height: clampVal($chara-h);
      border: solid black;
      border-width: clampVal($chara-border-wgt);
      border-radius: 50%;
      margin: 0 auto clampVal($nut-chara-bottom-m) auto;
      .chara-eye-left{
        @include chara-eye();
        right: 40%;
      }
      .chara-eye-right{
        @include chara-eye();
        right: 20%;
      }
      .chara-good-mouth{
        @include chara-mouth();
        border-radius: 0 0 100px 100px;
        border-top: 0;
        right: 26%;
      }
    }
    .chara-name{
      font-size: clampVal($card-fs, 6);
      font-weight: bold;
      white-space: nowrap;
    }
  }
  .section-line{
    height: 90%;
    width: clampVal($card-line-wgt);
    margin-top: 1.5%;
    background-color: black;
  }
  .nut-detail{
    display:flex;
    flex-flow: column;
    justify-content:space-around;
    font-weight: bold;
    font-size: clampVal($nut-detail-font, 6);
    text-align: left;
    margin: 3.5% 0 3% 4%;
  }
}
</style>