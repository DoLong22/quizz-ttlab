<template>
  <div class="wizard-content-1 pos-flex clearfix">
    <LayoutsSidebar />
    <div class="step-inner-content clearfix position-relative">
      <span class="bg-shape" />
      <form
        id="wizard"
        class="multisteps-form__form"
        action="https://jthemes.net/themes/html/BeWizard/JobApplication/JobV.1/action.php"
        method="POST"
        enctype="multipart/form-data"
        style="height: 585px;"
      >
        <div class="form-area position-relative">
          <div class="multisteps-form__panel js-active" data-animation="scaleIn">
            <div class="wizard-forms position-relative">
              <span class="step-no position-absolute">Step 1</span>
              <div class="wizard-progress">
                <span>1 of 3 Completed</span>
                <div class="progress">
                  <div class="progress-bar" style="width: 33%;" />
                </div>
              </div>
              <div class="wizard-inner-box">
                <div class="inner-title text-center">
                  <h2>What kind of Job You Need ?</h2>
                  <p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas </p>
                </div>
                <div>
                  <div class="owl-item" style="width: 313.333px; margin-right: 30px;">
                    <label class="need-job-icon-text text-center">
                      <input type="radio" name="job_title" value="Front Developer" class="j-checkbox">
                      <span class="need-job-text-inner">
                        <span class="checkbox-circle-mark position-absolute" />
                        <span class="need-job-icon">
                          <img src="~/assets/images/bt2.png" alt="">
                        </span>
                        <span class="need-job-text">
                          <span class="text-uppercase need-job-title">Front Developer</span>
                          <span class="text-capitalize need-job-text">Drop Designer</span>
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="actions">
                <ul>
                  <li><span class="js-btn-prev" title="BACK"> Back</span></li>
                  <li>
                    <button type="submit" name="submit">
                      <span class="js-btn-next" title="NEXT">Submit </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div class="bottom-vector position-absolute">
              <img src="~/assets/images/sd1.png" alt="">
            </div>
          </div>
          <!-- step 1 -->
          <div class="multisteps-form__panel" data-animation="scaleIn">
            <div class="wizard-forms form-step-2">
              <span class="step-no position-absolute">Step 2</span>
              <div class="wizard-progress">
                <span>2 of 3 Completed</span>
                <div class="progress">
                  <div class="progress-bar" style="width: 66%;" />
                </div>
              </div>
              <div class="wizard-inner-box">
                <div class="inner-title text-center">
                  <h2>Please Send Detail ?</h2>
                  <p>Tation argumentum et usu, dicit viderer  </p>
                </div>
              </div>
              <div class="details-form-area">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="form-input-inner position-relative has-float-label">
                      <input type="text" name="first_name" placeholder="First Name" class="form-control" required="">
                      <label>First  Name</label>
                      <div class="icon-bg text-center">
                        <i class="fas fa-user" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-input-inner position-relative has-float-label">
                      <input type="text" name="last_name" placeholder="Last Name" class="form-control">
                      <label>Last  Name</label>
                      <div class="icon-bg text-center">
                        <i class="fas fa-user" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-input-inner position-relative has-float-label">
                      <input type="email" name="email" placeholder="Email" class="form-control required" required="">
                      <label>Email</label>
                      <div class="icon-bg text-center">
                        <i class="fas fa-envelope" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-input-inner position-relative has-float-label">
                      <input type="text" name="phone" placeholder="Phone" class="form-control" required="">
                      <label>Phone</label>
                      <div class="icon-bg text-center">
                        <i class="fas fa-phone" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div class="form-input-inner select-option-area position-relative">
                      <select name="country_list">
                        <option>Select Country</option>
                        <option>England</option>
                        <option>Australia</option>
                        <option>Brazil</option>
                        <option>USA</option>
                        <option>Canada</option>
                        <option>UAE</option>
                        <option>Spain</option>
                      </select>
                      <div class="icon-bg text-center">
                        <i class="fas fa-flag-checkered" />
                      </div>
                    </div>
                  </div>
                  <div class="input-filed-innerbox">
                    <div class="row">
                      <div class="col-lg-8">
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="form-input-inner select-option-area position-relative">
                              <select name="city_list">
                                <option>Select City</option>
                                <option>Barlin</option>
                                <option>Sydney</option>
                                <option>Madrid</option>
                                <option>NY</option>
                                <option>Toronto</option>
                                <option>Dubai</option>
                                <option>Chennai</option>
                              </select>
                              <div class="icon-bg text-center">
                                <i class="fas fa-handshake" />
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="form-input-inner position-relative date-of-birth">
                              <input data-date-format="dd/mm/yyyy" placeholder="Birth Day" class="datepicker">
                              <div class="icon-bg text-center">
                                <i class="fas fa-bullhorn" />
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="form-input-inner position-relative has-float-label">
                              <input type="text" name="address" placeholder="Address 2" class="form-control">
                              <label>Address</label>
                              <div class="icon-bg text-center">
                                <i class="fas fa-bullhorn" />
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="form-input-inner select-option-area position-relative">
                              <select name="position_list">
                                <option>Choose Position</option>
                                <option>Intern</option>
                                <option>Junior Developer</option>
                                <option>Senior Developer</option>
                                <option>UI/UX Designer</option>
                                <option>Designer</option>
                                <option>HR</option>
                                <option>Others</option>
                              </select>
                              <div class="icon-bg text-center">
                                <i class="fas fa-user" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-input-inner gender-select position-relative">
                          <h3>Gender</h3>
                          <label>
                            <input type="radio" name="gender" value="Male" checked="" required="">
                            <span class="checkmark">Male</span>
                          </label>
                          <label>
                            <input type="radio" name="gender" value="Female">
                            <span class="checkmark">Female</span>
                          </label>
                          <div class="icon-bg text-center">
                            <i class="fas fa-transgender" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-input-inner add-textarea  position-relative">
                    <div class="col-lg-12">
                      <textarea name="add_info" placeholder="Additional-info" />
                      <div class="icon-bg text-center">
                        <i class="fas fa-edit" />
                      </div>
                    </div>
                  </div>
                  <div class="wizard-document-upload">
                    <div class="custom-file form-input-inner position-relative">
                      <input id="customFile" type="file" class="custom-file-input" name="file_upload">
                      <label class="custom-file-label" for="customFile">Add Your CV</label>
                      <div class="file-size-text position-relative">
                        Only : pdf / doc Size: lessthan 1 Mb
                      </div>
                      <div class="icon-bg text-center">
                        <i class="fas fa-edit" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="actions">
                <ul>
                  <li><span class="js-btn-prev" title="BACK"> Back</span></li>
                  <li>
                    <button type="submit" name="submit">
                      <span class="js-btn-next" title="NEXT">Submit </span>
                    </button>
                  </li>
                </ul>
              </div>
              <div class="bottom-vector position-absolute">
                <img src="~/assets/images/sd1.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  layout ({ $layout }) {
    return $layout.MAIN
  },
  auth: 'guest',
  setup () {
    return {}
  }
})
</script>

<style>

</style>
