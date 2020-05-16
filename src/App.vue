<template>
  <div id="app">
    <header id="luxbar" class="luxbar-static" style="margin-bottom: 40px;">
      <input type="checkbox" class="luxbar-checkbox" id="luxbar-checkbox"/>
      <div class="luxbar-menu luxbar-menu-right luxbar-menu-light">
          <ul class="luxbar-navigation">
              <li class="luxbar-header">
                  <a href="#" class="luxbar-brand">KNKDEV.com</a>
                  <label class="luxbar-hamburger luxbar-hamburger-doublespin" 
                  id="luxbar-hamburger" for="luxbar-checkbox"> <span></span> </label>
              </li>
              <li class="luxbar-item"><a href="#">アイテム 1</a></li>
              <li class="luxbar-item"><a href="#">アイテム 2</a></li>
              <li class="luxbar-item"><a href="#">アイテム 3</a></li>
          </ul>
      </div>
    </header>

    <Content/>
    
  </div>
</template>

<script>
import Content from './components/Content.vue'

export default {
  name: 'app',
  components: {
    Content
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
