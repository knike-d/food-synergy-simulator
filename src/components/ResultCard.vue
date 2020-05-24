<template>
  <div class="card">
    <div class="judgment-wrap">
      <div v-if="false" class="judgment-good"></div>
      <div v-if="true" class="judgment-bad">
          <div class="bad-mark"></div>
      </div>
      <div class="number">相性図鑑No.10</div>
    </div>
    <div class="section-column-line"></div>
    <div class="chara-container">
      <div class="chara-wrap">
        <div class="chara-icon"></div>
        <div class="chara-name">マグネシウムうう</div>
      </div>
      <div class="chara-multiply-wrap">
        <div class="chara-multiply"></div>
      </div>
      <div class="chara-wrap">
        <div class="chara-icon"></div>
        <div class="chara-name">マグネシウムううう</div>
      </div>
    </div>
    <div class="section-row-line"></div>
    <div class="explanation-wrap">
      <div class="explanation">
        マグネシウムは骨芽細胞に働きかけ、骨の中に入るカルシウム量を調節するため、不足するとカルシウムの骨形成に役立ちません。<br>
        カルシウムとのバランスは1:2がいいと言われています。
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$line-weight: 1vw;
$row-height: 25vw;
$judgment-weight: 1.8vw;
$card-outside-radius: 20px;
$card-inside-radius: 13px;

.card{
  display: grid;
  width: 85%;
  height: auto;
  grid-template-rows: clamp(0px, $row-height, $row-height/1vw*7.5px) clamp(0px, $line-weight, $line-weight/1vw*7.5px) 1fr;
  grid-template-columns: 1fr clamp(0px, $line-weight, $line-weight/1vw*7.5px) 2fr;
  margin: auto;
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

      .chara-icon{
        width: clamp(0px, $row-height*3/5, $row-height*3/5/1vw*7.5px);
        height: clamp(0px, $row-height*3/5, $row-height*3/5/1vw*7.5px);
        border: 2px solid black;
        border-radius: 50%;
        background-color: blue;
        margin: 0 auto 6% auto;
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