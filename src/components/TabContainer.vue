<template>
  <div class="tab-container">
    <input id="TAB-01" type="radio" name="TAB" class="tab-switch" checked="checked" /><label class="tab-label" for="TAB-01">食材1</label>
    <div class="tab-content">
      <NutritionCard  v-if="!Object.keys(selectFood[0].nutrition).length" v-bind="defFood"/>
      <NutritionCard  v-else v-for="(food1, index) in selectFoodList[0].nutrition" :key="food1.id" :nutrition="selectFoodList[0].nutrition[index]"/>
    </div>
    <input id="TAB-02" type="radio" name="TAB" class="tab-switch"/><label class="tab-label" for="TAB-02">食材2</label>
    <div class="tab-content">
      <NutritionCard  v-if="!Object.keys(selectFood[1].nutrition).length" v-bind="defFood"/>
      <NutritionCard  v-else v-for="(food2, index) in selectFoodList[1].nutrition" :key="food2.id" :nutrition="selectFoodList[1].nutrition[index]"/>
    </div>
    <input id="TAB-03" type="radio" name="TAB" class="tab-switch" v-bind="radioCheck"/><label class="tab-label" for="TAB-03">食べ合わせ相性</label>
    <div class="tab-content">
      <ResultCard  v-if="results.length == 0" v-bind="defResult"/>
      <ResultCard  v-else v-for="(result, index) in results" :key="result.id" v-bind="results[index]"/>
    </div>
  </div>
</template>

<script>
import ResultCard from './ResultCard.vue'
import NutritionCard from './NutritionCard.vue'
import foodSynergyList from '../assets/result.json'

export default {
  components: {
    ResultCard,
    NutritionCard
  },
  data(){
    return{
      foodSynergyList: foodSynergyList,
      selectFood:[
        {
          "category": "なし",
          "id": 0,
          "name": "なし",
          "nutrition": []
        },
        {
          "category": "なし",
          "id": 0,
          "name": "なし",
          "nutrition": []
        }
      ],
      results:[],
      defResult:{
        id: 0,
        judgment: -999,
        nutrition: ["None", "None"],
        explanation: "表示できる組み合わせはありません。"
      },
      defFood:{
        nutrition: "主な栄養なし"
      },
      radioCheck:{}
    }
  },
  props: {
    selectFoodList: {
      type: Array
    }
  },
  methods: {
    calcResult(){
      this.selectFood.splice(0,2,this.selectFoodList[0],this.selectFoodList[1])
      const selectFood = this.selectFood
      const results = this.foodSynergyList.filter(item => {
        for(let i=0; i<selectFood[0].nutrition.length; i++){
          for(let j=0; j<selectFood[1].nutrition.length; j++){
            const comparisonList = [].concat(selectFood[0].nutrition[i], selectFood[1].nutrition[j])
            if(item.nutrition.sort().toString() == comparisonList.sort().toString()) return true
          }
        }
      })
      this.results = results
      this.changeTab()
    },
    changeTab(){
      this.radioCheck.checked = "checked"
    }
  }
}
</script>

<style lang="scss">
.tab-container {
  margin: 5% 0 5% 0;
	background: White;
	display: flex;
	flex-wrap: wrap;
	overflow: hidden;
	padding: 0 0 5% 0;
  &:after {
    content: '';
    padding: 0 0 5% 0;
    order: -1;
    width: 100%;
  }
  .tab-content {
    height:0;
    opacity:0;
    pointer-events:none;
    transform: translateX(-30%);
    transition: transform .3s 80ms, opacity .3s 80ms;
    width: 100%;
  }
  .tab-label {
    color: rgb(0, 0, 0);
    font-size: clamp(1px, 3.8vw, 3.8px*5);
    cursor: pointer;
    flex: 1;
    font-weight: bold;
    order: -1;
    padding: 2.5% 5%;
    position: relative;
    text-align: center;
    transition: cubic-bezier(0.4, 0, 0.2, 1) .2s;
    user-select: none;
    white-space: nowrap;
    transition: background-color .3s;
    &:active{
      background-color:#efefef;
    }
    @media (hover: hover) {
      &:hover {
        background-color:#efefef;
      }
    }
    &:after {
      content: '';
      background-color: #FFCF4A;
      bottom: 0;
      display: block;
      height: 2px;
      left: 0;
      opacity: 0;
      pointer-events: none;
      position: absolute;
      transform: translateX(100%);
      transition: cubic-bezier(0.4, 0, 0.2, 1) .2s 80ms;
      width: 100%;
      z-index: 1;
    }
  }
  .tab-switch {
    display: none;
    &:checked{
      & ~ .tab-label::after {
        transform: translateX(-100%);
      }
      & + .tab-label::after {
        opacity: 1;
        transform: translateX(0);
      }
      & + .tab-label + .tab-content {
        height: auto;
        opacity: 1;
        order: 1;
        pointer-events:auto;
        transform: translateX(0);
      }
      & ~ .tab-content {
        transform: translateX(30%);
      }
    }
  }
}
</style>