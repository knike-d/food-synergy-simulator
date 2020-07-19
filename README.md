# 食べ合わせシミュレーター

食材同士の食べ合わせをシミュレートできるWebサービスです。  
シミュレート結果には、選択した２つの食材の主な栄養素と栄養素同士の相性が表示されます。  

![food-synergy-simulator](https://user-images.githubusercontent.com/52563253/87870890-0c58dc80-c9e7-11ea-85ac-e9347458f14c.png)

## DEMO

栄養素のない食材も選択肢に含まれています。  
栄養素が多く含まれるアーモンドなどを選択すると相性が表示されやすいです。  
<https://food-synergy-simulator.netlify.app/>

## 開発環境

- VSCode
- Vue.js
- Vue-CLI


## 開発での注意点

- borderの太さを指定する時にclamp関数を使うときは、border-widthプロパティで指定すること。他プロパティで指定するとコンパイルが失敗する。  
- clamp関数では0pxを使用しない。0pxを指定するとコンパイル後のCSSでは単位（px）が消えてclamp関数が動作しなくなる。
