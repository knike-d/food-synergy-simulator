<template>
  <div class="tab-container">
    <input id="tab1" type="radio" value="1" name="tab" class="tab-switch" v-model="isActive"/>
    <label class="tab-label" for="tab1">左の食材</label>
    <transition name="tab1">
      <div class="tab-content" v-if="isActive === '1'">
        <NutritionCard  v-if="!Object.keys(selectFood[0].nutrition).length" v-bind="defFood"/>
        <NutritionCard  v-else v-for="(food1, index) in selectFoodList[0].nutrition" :key="food1.id" :nutrition="selectFoodList[0].nutrition[index]"/>
      </div>
    </transition>
    <input id="tab2" type="radio" value="2" name="tab" class="tab-switch" v-model="isActive"/>
    <label class="tab-label" for="tab2">右の食材</label>
    <transition name="tab2" :enter-class="tab2Enter" :leave-to-class="tab2LeaveTo">
      <div class="tab-content" v-if="isActive === '2'">
        <NutritionCard  v-if="!Object.keys(selectFood[1].nutrition).length" v-bind="defFood"/>
        <NutritionCard  v-else v-for="(food2, index) in selectFoodList[1].nutrition" :key="food2.id" :nutrition="selectFoodList[1].nutrition[index]"/>
      </div>
    </transition>
    <input id="tab3" type="radio" value="3" name="tab" class="tab-switch" v-model="isActive"/>
    <label class="tab-label" for="tab3">食べ合わせ相性</label>
    <transition name="tab3">
      <div class="tab-content" v-if="isActive === '3'">
        <ResultCard  v-if="results.length == 0" v-bind="defResult"/>
        <ResultCard  v-else v-for="(result, index) in results" :key="result.id" v-bind="results[index]"/>
      </div>
    </transition>
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
      isActive: "1",
      beforeActive: 1,
      tab2Enter: "",
      tab2LeaveTo: "tab2-fade-out-L",
      foodSynergyList: foodSynergyList,
      results:[],
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
      defResult:{
        id: 0,
        judgment: -999,
        nutrition: ["なし", "なし"],
        explanation: "表示できる組み合わせはありません。"
      },
      defFood:{
        nutrition: "主な栄養なし"
      }
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
      this.isActive = "3"
    }
  },
  watch: {
    isActive(){
      if(this.isActive == "2"){
        if(this.beforeActive < 2){
          this.tab2Enter = "tab2-fade-out-R"
        }else if(this.beforeActive > 2){
          this.tab2Enter = "tab2-fade-out-L"
        }
      }
      if(this.beforeActive == 2){
        if(2 < Number(this.isActive)){
          this.tab2LeaveTo = "tab2-fade-out-L"
        }else if(2 > Number(this.isActive)){
          this.tab2LeaveTo = "tab2-fade-out-R"
        }
      }
      this.beforeActive = Number(this.isActive)
    }
  }
}
</script>

<style lang="scss">
.tab-container {
	display: flex;
	flex-wrap: wrap;
  margin: 5% 0 5% 0;
	padding: 0 0 5% 0;
	background: White;
	overflow: hidden;
  &:after {
    content: '';
    width: 100%;
    padding: 0 0 5% 0;
    order: -1;
  }
  .tab-content {
    height: 0;
    width: 100%;
    transition: transform .3s 80ms, opacity .3s 80ms;
    pointer-events:none;
  }
  .tab-label {
    position: relative;
    font-size: clamp(1px, 3.8vw, 3.8px*5);
    font-weight: bold;
    text-align: center;
    padding: 2.5% 5%;
    flex: 1;
    order: -1;
    color: black;
    transition: cubic-bezier(0.4, 0, 0.2, 1) .2s, background-color .3s;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
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
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #FFCF4A;
      opacity: 0;
      transform: translateX(100%);
      transition: cubic-bezier(0.4, 0, 0.2, 1) .2s 80ms;
      z-index: 1;
      pointer-events: none;
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
        order: 1;
      }
    }
  }
}

.tab1-enter, .tab1-leave-to, .tab2-fade-out-L{
  transform: translateX(-30%);
  opacity: 0;
}
.tab3-enter, .tab3-leave-to, .tab2-fade-out-R {
  transform: translateX(30%);
  opacity: 0;
}
</style>