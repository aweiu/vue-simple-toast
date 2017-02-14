<template>
  <simple-toast-el-wrap v-show="indices.length > 0" :style="{zIndex: option.zIndex || 100}">
    <simple-toast-el>
      <simple-toast-el-icons>
        <simple-toast-el-icon v-show="type === 'loading'">
          <simple-toast-el-loading-leaf class="toast-loading-leaf-0"></simple-toast-el-loading-leaf>
          <simple-toast-el-loading-leaf class="toast-loading-leaf-1"></simple-toast-el-loading-leaf>
          <simple-toast-el-loading-leaf class="toast-loading-leaf-2"></simple-toast-el-loading-leaf>
          <simple-toast-el-loading-leaf class="toast-loading-leaf-3"></simple-toast-el-loading-leaf>
          <simple-toast-el-loading-leaf class="toast-loading-leaf-4"></simple-toast-el-loading-leaf>
          <simple-toast-el-loading-leaf class="toast-loading-leaf-5"></simple-toast-el-loading-leaf>
          <simple-toast-el-loading-leaf class="toast-loading-leaf-6"></simple-toast-el-loading-leaf>
          <simple-toast-el-loading-leaf class="toast-loading-leaf-7"></simple-toast-el-loading-leaf>
          <simple-toast-el-loading-leaf class="toast-loading-leaf-8"></simple-toast-el-loading-leaf>
          <simple-toast-el-loading-leaf class="toast-loading-leaf-9"></simple-toast-el-loading-leaf>
          <simple-toast-el-loading-leaf class="toast-loading-leaf-10"></simple-toast-el-loading-leaf>
          <simple-toast-el-loading-leaf class="toast-loading-leaf-11"></simple-toast-el-loading-leaf>
        </simple-toast-el-icon>
        <simple-toast-el-icon class="vue-simple-toast-icon-{{type}}"
                              v-show="type !== 'loading' && types.indexOf(type) !== -1"></simple-toast-el-icon>
      </simple-toast-el-icons>
      <simple-toast-el-content>{{option.content}}</simple-toast-el-content>
    </simple-toast-el>
  </simple-toast-el-wrap>
</template>
<style scoped>
  simple-toast-el-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  simple-toast-el {
    position: absolute;
    width: 7.6em;
    min-height: 7.6em;
    top: 180px;
    left: 50%;
    margin-left: -3.8em;
    background: rgba(40, 40, 40, 0.75);
    text-align: center;
    border-radius: 5px;
    color: #FFFFFF;
  }

  simple-toast-el-content {
    margin-top: 64%;
    font-size: 14px;
    display: block;
  }

  simple-toast-el-icons {
    position: absolute;
    width: 0;
    left: 50%;
    top: 38%;
  }

  simple-toast-el-icons [class^="vue-simple-toast-icon-"] {
    position: absolute;
    font-size: 50px;
    left: -25px;
    top: -20px;
  }

  simple-toast-el-loading-leaf {
    position: absolute;
    top: -1px;
    opacity: 0.25;
  }

  simple-toast-el-loading-leaf:before {
    content: " ";
    position: absolute;
    width: 8.14px;
    height: 3.08px;
    background: #d1d1d5;
    box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px;
    border-radius: 1px;
    -webkit-transform-origin: left 50% 0px;
    transform-origin: left 50% 0px;
  }

  simple-toast-el-loading-leaf.toast-loading-leaf-0 {
    -webkit-animation: opacity-60-25-0-12 1.25s linear infinite;
    animation: opacity-60-25-0-12 1.25s linear infinite;
  }

  simple-toast-el-loading-leaf.toast-loading-leaf-0:before {
    -webkit-transform: rotate(30deg) translate(7.92px, 0px);
    transform: rotate(30deg) translate(7.92px, 0px);
  }

  simple-toast-el-loading-leaf.toast-loading-leaf-1 {
    -webkit-animation: opacity-60-25-1-12 1.25s linear infinite;
    animation: opacity-60-25-1-12 1.25s linear infinite;
  }

  simple-toast-el-loading-leaf.toast-loading-leaf-1:before {
    -webkit-transform: rotate(60deg) translate(7.92px, 0px);
    transform: rotate(60deg) translate(7.92px, 0px);
  }

  simple-toast-el-loading-leaf.toast-loading-leaf-2 {
    -webkit-animation: opacity-60-25-2-12 1.25s linear infinite;
    animation: opacity-60-25-2-12 1.25s linear infinite;
  }

  simple-toast-el-loading-leaf.toast-loading-leaf-2:before {
    -webkit-transform: rotate(90deg) translate(7.92px, 0px);
    transform: rotate(90deg) translate(7.92px, 0px);
  }

  simple-toast-el-loading-leaf.toast-loading-leaf-3 {
    -webkit-animation: opacity-60-25-3-12 1.25s linear infinite;
    animation: opacity-60-25-3-12 1.25s linear infinite;
  }

  simple-toast-el-loading-leaf.toast-loading-leaf-3:before {
    -webkit-transform: rotate(120deg) translate(7.92px, 0px);
    transform: rotate(120deg) translate(7.92px, 0px);
  }

  simple-toast-el-loading-leaf.toast-loading-leaf-4 {
    -webkit-animation: opacity-60-25-4-12 1.25s linear infinite;
    animation: opacity-60-25-4-12 1.25s linear infinite;
  }

  simple-toast-el-loading-leaf.toast-loading-leaf-4:before {
    -webkit-transform: rotate(150deg) translate(7.92px, 0px);
    transform: rotate(150deg) translate(7.92px, 0px);
  }

  simple-toast-el-loading-leaf.toast-loading-leaf-5 {
    -webkit-animation: opacity-60-25-5-12 1.25s linear infinite;
    animation: opacity-60-25-5-12 1.25s linear infinite;
  }

  simple-toast-el-loading-leaf.toast-loading-leaf-5:before {
    -webkit-transform: rotate(180deg) translate(7.92px, 0px);
    transform: rotate(180deg) translate(7.92px, 0px);
  }

  simple-toast-el-loading-leaf.toast-loading-leaf-6 {
    -webkit-animation: opacity-60-25-6-12 1.25s linear infinite;
    animation: opacity-60-25-6-12 1.25s linear infinite;
  }

  simple-toast-el-loading-leaf.toast-loading-leaf-6:before {
    -webkit-transform: rotate(210deg) translate(7.92px, 0px);
    transform: rotate(210deg) translate(7.92px, 0px);
  }

  simple-toast-el-loading-leaf.toast-loading-leaf-7 {
    -webkit-animation: opacity-60-25-7-12 1.25s linear infinite;
    animation: opacity-60-25-7-12 1.25s linear infinite;
  }

  simple-toast-el-loading-leaf.toast-loading-leaf-7:before {
    -webkit-transform: rotate(240deg) translate(7.92px, 0px);
    transform: rotate(240deg) translate(7.92px, 0px);
  }

  simple-toast-el-loading-leaf.toast-loading-leaf-8 {
    -webkit-animation: opacity-60-25-8-12 1.25s linear infinite;
    animation: opacity-60-25-8-12 1.25s linear infinite;
  }

  simple-toast-el-loading-leaf.toast-loading-leaf-8:before {
    -webkit-transform: rotate(270deg) translate(7.92px, 0px);
    transform: rotate(270deg) translate(7.92px, 0px);
  }

  simple-toast-el-loading-leaf.toast-loading-leaf-9 {
    -webkit-animation: opacity-60-25-9-12 1.25s linear infinite;
    animation: opacity-60-25-9-12 1.25s linear infinite;
  }

  simple-toast-el-loading-leaf.toast-loading-leaf-9:before {
    -webkit-transform: rotate(300deg) translate(7.92px, 0px);
    transform: rotate(300deg) translate(7.92px, 0px);
  }

  simple-toast-el-loading-leaf.toast-loading-leaf-10 {
    -webkit-animation: opacity-60-25-10-12 1.25s linear infinite;
    animation: opacity-60-25-10-12 1.25s linear infinite;
  }

  simple-toast-el-loading-leaf.toast-loading-leaf-10:before {
    -webkit-transform: rotate(330deg) translate(7.92px, 0px);
    transform: rotate(330deg) translate(7.92px, 0px);
  }

  simple-toast-el-loading-leaf.toast-loading-leaf-11 {
    -webkit-animation: opacity-60-25-11-12 1.25s linear infinite;
    animation: opacity-60-25-11-12 1.25s linear infinite;
  }

  simple-toast-el-loading-leaf.toast-loading-leaf-11:before {
    -webkit-transform: rotate(360deg) translate(7.92px, 0px);
    transform: rotate(360deg) translate(7.92px, 0px);
  }

  @-webkit-keyframes opacity-60-25-0-12 {
    0% {
      opacity: 0.25;
    }
    0.01% {
      opacity: 0.25;
    }
    0.02% {
      opacity: 1;
    }
    60.01% {
      opacity: 0.25;
    }
    100% {
      opacity: 0.25;
    }
  }

  @-webkit-keyframes opacity-60-25-1-12 {
    0% {
      opacity: 0.25;
    }
    8.34333% {
      opacity: 0.25;
    }
    8.35333% {
      opacity: 1;
    }
    68.3433% {
      opacity: 0.25;
    }
    100% {
      opacity: 0.25;
    }
  }

  @-webkit-keyframes opacity-60-25-2-12 {
    0% {
      opacity: 0.25;
    }
    16.6767% {
      opacity: 0.25;
    }
    16.6867% {
      opacity: 1;
    }
    76.6767% {
      opacity: 0.25;
    }
    100% {
      opacity: 0.25;
    }
  }

  @-webkit-keyframes opacity-60-25-3-12 {
    0% {
      opacity: 0.25;
    }
    25.01% {
      opacity: 0.25;
    }
    25.02% {
      opacity: 1;
    }
    85.01% {
      opacity: 0.25;
    }
    100% {
      opacity: 0.25;
    }
  }

  @-webkit-keyframes opacity-60-25-4-12 {
    0% {
      opacity: 0.25;
    }
    33.3433% {
      opacity: 0.25;
    }
    33.3533% {
      opacity: 1;
    }
    93.3433% {
      opacity: 0.25;
    }
    100% {
      opacity: 0.25;
    }
  }

  @-webkit-keyframes opacity-60-25-5-12 {
    0% {
      opacity: 0.270958333333333;
    }
    41.6767% {
      opacity: 0.25;
    }
    41.6867% {
      opacity: 1;
    }
    1.67667% {
      opacity: 0.25;
    }
    100% {
      opacity: 0.270958333333333;
    }
  }

  @-webkit-keyframes opacity-60-25-6-12 {
    0% {
      opacity: 0.375125;
    }
    50.01% {
      opacity: 0.25;
    }
    50.02% {
      opacity: 1;
    }
    10.01% {
      opacity: 0.25;
    }
    100% {
      opacity: 0.375125;
    }
  }

  @-webkit-keyframes opacity-60-25-7-12 {
    0% {
      opacity: 0.479291666666667;
    }
    58.3433% {
      opacity: 0.25;
    }
    58.3533% {
      opacity: 1;
    }
    18.3433% {
      opacity: 0.25;
    }
    100% {
      opacity: 0.479291666666667;
    }
  }

  @-webkit-keyframes opacity-60-25-8-12 {
    0% {
      opacity: 0.583458333333333;
    }
    66.6767% {
      opacity: 0.25;
    }
    66.6867% {
      opacity: 1;
    }
    26.6767% {
      opacity: 0.25;
    }
    100% {
      opacity: 0.583458333333333;
    }
  }

  @-webkit-keyframes opacity-60-25-9-12 {
    0% {
      opacity: 0.687625;
    }
    75.01% {
      opacity: 0.25;
    }
    75.02% {
      opacity: 1;
    }
    35.01% {
      opacity: 0.25;
    }
    100% {
      opacity: 0.687625;
    }
  }

  @-webkit-keyframes opacity-60-25-10-12 {
    0% {
      opacity: 0.791791666666667;
    }
    83.3433% {
      opacity: 0.25;
    }
    83.3533% {
      opacity: 1;
    }
    43.3433% {
      opacity: 0.25;
    }
    100% {
      opacity: 0.791791666666667;
    }
  }

  @-webkit-keyframes opacity-60-25-11-12 {
    0% {
      opacity: 0.895958333333333;
    }
    91.6767% {
      opacity: 0.25;
    }
    91.6867% {
      opacity: 1;
    }
    51.6767% {
      opacity: 0.25;
    }
    100% {
      opacity: 0.895958333333333;
    }
  }




</style>
<script>
  import vue from 'vue'
  import './icomoon/style.css'
  // 手动注册自定义标签来消灭Unknown custom element错误警告
  for (let tagName of ['simple-toast-el-wrap', 'simple-toast-el', 'simple-toast-el-icons', 'simple-toast-el-icon', 'simple-toast-el-loading-leaf', 'simple-toast-el-content']) {
    try {
      document.registerElement(tagName)
    } catch (registerErr) {
    }
  }
  export default{
    data () {
      return {
        types: ['loading', 'success', 'warning'],
        indices: [],
        options: []
      }
    },
    computed: {
      option () {
        return this.options[this.options.length - 1] || {}
      },
      type () {
        return this.option.type || ''
      }
    },
    methods: {
      addRecord (index, closeDelay, option) {
        if (this.types.indexOf(option.type) === -1) return console.warn(`can't support this type:${option.type}`)
        this.indices.push(index)
        this.options.push(option)
        if (closeDelay !== 0) {
          setTimeout(() => {
            this.removeRecord(index)
          }, closeDelay || 1500)
        }
      },
      removeRecord (index) {
        var aIndex = this.indices.indexOf(index)
        if (aIndex !== -1) {
          this.indices.splice(aIndex, 1)
          this.options.splice(aIndex, 1)
        }
      }
    }
  }
</script>
