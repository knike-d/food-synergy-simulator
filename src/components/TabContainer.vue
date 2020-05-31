<template>
  <div class="tab-container">
    <input id="TAB-01" type="radio" name="TAB" class="tab-switch" checked="checked" /><label class="tab-label" for="TAB-01">食材1</label>
    <div class="tab-content">
    </div>
    <input id="TAB-02" type="radio" name="TAB" class="tab-switch" /><label class="tab-label" for="TAB-02">食材2</label>
    <div class="tab-content">
    </div>
    <input id="TAB-03" type="radio" name="TAB" class="tab-switch" /><label class="tab-label" for="TAB-03">食べ合わせ相性</label>
    <div class="tab-content">
      <ResultCard v-for="(result, index) in results" :key="result.id" v-bind="results[index]"></ResultCard>
    </div>
  </div>
</template>

<script>
import ResultCard from './ResultCard.vue'
import foodSynergyList from '../assets/result.json'
import foodList from '../assets/food-list.json'

export default {
  components: {
    ResultCard
  },
  
  data(){
    return{
      foodSynergyList: foodSynergyList,
      foodList: foodList,
      results:[]
    }
  },
  props: [
    "selectFoodList"
  ],
  methods: {
    
    calcResult(){
      
      const selectFood = this.selectFoodList

      const results = this.foodSynergyList.filter(item => { 
        
        for(let i=0; i<selectFood[0].nutrition.length; i++){
          for(let j=0; j<selectFood[1].nutrition.length; j++){
            let comparisonList
            comparisonList = [].concat(selectFood[0].nutrition[i], selectFood[1].nutrition[j])
            if(item.nutrition.sort().toString() == comparisonList.sort().toString()){
              return true
            }
          }
        }
      })
      this.results = results
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

  &:after {
    content: '';
    background: #FFCF4A;
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
</style>