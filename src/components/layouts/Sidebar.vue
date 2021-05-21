<template>
  <div class="steps d-inline-block clearfix">
    <span class="bg-shape" />
    <ul class="tablist multisteps-form__progress">
      <li class="multisteps-form__progress-btn js-active current">
        <div class="step-btn-icon-text">
          <div class="step-btn-icon float-left position-relative">
            <img src="~/assets/images/bt1.png" alt="">
          </div>
          <div class="step-btn-text">
            <h2 class="text-uppercase">
              Job Board
            </h2>
            <span class="text-capitalize">Job Available</span>
          </div>
        </div>
      </li>
      <li class="multisteps-form__progress-btn">
        <div class="step-btn-icon-text">
          <span>2</span>
          <div class="step-btn-icon float-left position-relative">
            <img class="fix-image" src="~/assets/images/bt2.png" alt="">
          </div>
          <div class="step-btn-text">
            <h2 class="text-uppercase">
              Send Details
            </h2>
            <span class="text-capitalize">Job Available</span>
          </div>
        </div>
      </li>
      <li class="multisteps-form__progress-btn">
        <div class="step-btn-icon-text">
          <span>3</span>
          <div class="step-btn-icon float-left position-relative">
            <img class="fix-image-2" src="~/assets/images/bt3.png" alt="">
          </div>
          <div class="step-btn-text">
            <h2 class="text-uppercase">
              ThankYou
            </h2>
            <span class="text-capitalize">Job Available</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
    return {}
  }
})
</script>
<style lang="scss" scoped>
.scroll-area {
  position: relative;
  margin: auto;
  height: calc(100vh - 60px);
  background-color: transparent !important;
}

.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter, .slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
