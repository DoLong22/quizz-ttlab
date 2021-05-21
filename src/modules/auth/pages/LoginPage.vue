<template>
  <div class="wizard-content-1 pos-flex clearfix">
    <LayoutsSidebar />
    <div class="step-inner-content clearfix position-relative">
      <span class="bg-shape" />
      <div class="wizard-inner-box">
        <div class="inner-title text-center">
          <h2>Login</h2>
          <p>Tation argumentum et usu, dicit viderer evertitur te has</p>
        </div>
        <div class="text-center" />
        <div class="need-job-slide row justify-content-center">
          <form class="col-md-6" action="https://jthemes.net/themes/html/BeWizard/JobApplication/JobV.1/login.php" method="post">
            <table width="600" border="0" class="table table-bodered p-5" cellspacing="0" cellpadding="5">
              <tbody>
                <tr>
                  <th width="90" scope="row" style="text-align:right">
                    User Name
                  </th>
                  <td width="347">
                    <input type="text" class="form-control input-large" name="username">
                  </td>
                </tr>
                <tr>
                  <th width="90" scope="row" style="text-align:right">
                    Password
                  </th>
                  <td width="347">
                    <input type="password" class="form-control input-large" name="password">
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="text-align:center">
                    <input type="submit" name="submit" value="Login" class="custom-btn btn btn-success ">
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'LoginPage',
  layout ({ $layout }) {
    return $layout.GUEST
  }
})
</script>
