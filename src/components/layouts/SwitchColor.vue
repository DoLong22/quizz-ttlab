<template>
  <div id="switch-color" class="color-switcher open-switcher">
    <div class="open">
      <i class="fas fa-cog" />
    </div>
    <h4>COLOR OPTION</h4>
    <ul>
      <li><a class="color-2" onclick="setActiveStyleSheet('color-2'); return false;" href="https://jthemes.net/themes/html/BeWizard/JobApplication/JobV.1/index.html#"><i class="fas fa-cog" /></a> </li>
      <li><a class="color-3" onclick="setActiveStyleSheet('color-3'); return false;" href="https://jthemes.net/themes/html/BeWizard/JobApplication/JobV.1/index.html#"><i class="fas fa-cog" /></a> </li>
      <li><a class="color-4" onclick="setActiveStyleSheet('color-4'); return false;" href="https://jthemes.net/themes/html/BeWizard/JobApplication/JobV.1/index.html#"><i class="fas fa-cog" /></a> </li>
      <li><a class="color-5" onclick="setActiveStyleSheet('color-5'); return false;" href="https://jthemes.net/themes/html/BeWizard/JobApplication/JobV.1/index.html#"><i class="fas fa-cog" /></a> </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {

  }
})
</script>

<style>

</style>
