<template>
  <div id="app">
    <header id="luxbar" class="luxbar-static">
      <input type="checkbox" class="luxbar-checkbox" id="luxbar-checkbox"/>
      <div class="luxbar-menu luxbar-menu-right">
          <ul class="luxbar-navigation">
              <li class="luxbar-header">
                  <a href="#" class="luxbar-brand">KNKDEV.com</a>
                  <!--
                    <label class="luxbar-hamburger luxbar-hamburger-doublespin" 
                  id="luxbar-hamburger" for="luxbar-checkbox"> <span></span> </label>
                  -->
              </li>
              <!--
              <li class="luxbar-item"><a href="#">アイテム 1</a></li>
              <li class="luxbar-item"><a href="#">アイテム 2</a></li>
              <li class="luxbar-item"><a href="#">アイテム 3</a></li>
              -->
          </ul>
      </div>
    </header>

    <Content/>

    <div class="footer">
      <ul>
          <li>
              <a>プライバシーポリシー</a>
          </li>
          <li>
              <a>お問い合わせ</a>
          </li>
      </ul>
          
      <div align="center">
          &copy; 2019 KNKDEB.com
      </div>
    </div>
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
  text-align: center;
  color: black;
  .luxbar-brand{
    @include click-effect();
    @include hover_active($hover-color);
  }
}

.footer{
  border-top: 7px solid darkgray;
  padding: 3rem 0 5rem 0;
  margin-top: 2rem;
  color: black;
  background-color: white;
  ul {
    list-style: none;
    padding-inline-start: 0;
    a {
      color: black;
      font-weight: bold;
      text-decoration: none;
      &:hover{
        text-decoration: underline;
      }
    }
  }
}
</style>