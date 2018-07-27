<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <title></title>
</head>
<body>
  <form method="post" id="form1" class="btf-form">

    <div class="">
      <div class="btf-form__input-wrapper--name">

        <input data-name="first_name" data-type="text" placeholder="First Name" type="text" value="" class="js-input btf-form__fname" id="first_name2" name="first_name">
        <span class="validation-icon"></span>
        <span class="validation-text">This field is required.</span>

        <!-- /.name -->
      </div><!--end fieldrow -->
      <div class="right btf-form__input-wrapper--name">
        <span class="">
          <input data-name="last_name" data-type="text" placeholder="Last Name" type="text" value="" class="js-input btf-form__lname" id="last_name2" name="last_name">
          <span class="validation-icon"></span>
          <span class="validation-text">This field is required.</span>
        </span>
        <!-- /.name -->
      </div><!--end fieldrow -->
    </div> <!--end cf -->
    <div class="btf-form__input-wrapper">
      <input data-name="contact_phone" data-type="text" maxlength="12" placeholder="Phone Number" type="text" value="" class="js-input btf-form__phone" id="contact_phone2" name="contact_phone">
      <span class="validation-icon"></span>
      <span class="validation-text">Please enter a valid #.</span>
    </div><!--end fieldrow -->

    <div class="btf-form__input-wrapper">
      <input data-name="email_address" data-type="text" placeholder="Email Address" type="text" value="" class="js-input btf-form__email" id="email_address2" name="email_address">
      <span class="validation-icon"></span>
      <span class="validation-text">Please enter a valid email.</span>
    </div><!--end fieldrow -->

    <div class="btf-form__input-wrapper">
      <div>
        <input id="male" data-name="gender" data-type="radio" class="js-input" type="radio" name="gender" value="male">
        <label for="male">Male</label>
      </div>
      <div>
        <input id="female" data-name="gender" data-type="radio" class="js-input" type="radio" name="gender" value="female">
        <label for="female">Female</label>
      </div>
      <div>
        <input id="other" data-name="gender" data-type="radio" class="js-input" type="radio" name="gender" value="other">
        <label for="other">Other</label>
      </div>
    </div><!--end fieldrow -->


    <div>
      <select data-name="car" data-type="select" class="select js-input">
        <option disabled selected value> -- select an option -- </option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>

    <button type="submit" class="btf-form__submit">submit</button>
  </form>
  <form method="post" id="form2" class="btf-form">

    <div class="">
      <div class="btf-form__input-wrapper--name">

        <input placeholder="First Name" type="text" value="" class="js-input btf-form__fname" id="first_name2" name="first_name">
        <span class="validation-icon"></span>
        <span class="validation-text">This field is required.</span>

        <!-- /.name -->
      </div><!--end fieldrow -->
      <div class="right btf-form__input-wrapper--name">
        <span class="">
          <input placeholder="Last Name" type="text" value="" class="js-input btf-form__lname" id="last_name2" name="last_name">
          <span class="validation-icon"></span>
          <span class="validation-text">This field is required.</span>
        </span>
        <!-- /.name -->
      </div><!--end fieldrow -->
    </div> <!--end cf -->
    <div class="btf-form__input-wrapper">
      <input maxlength="12" placeholder="Phone Number" type="text" value="" class="js-input btf-form__phone" id="contact_phone2" name="contact_phone">
      <span class="validation-icon"></span>
      <span class="validation-text">Please enter a valid #.</span>
    </div><!--end fieldrow -->

    <div class="btf-form__input-wrapper">
      <input placeholder="Email Address" type="text" value="" class="js-input btf-form__email" id="email_address2" name="email_address">
      <span class="validation-icon"></span>
      <span class="validation-text">Please enter a valid email.</span>
    </div><!--end fieldrow -->


    <button type="submit" class="btf-form__submit">submit</button>
  </form>
  <script src="<?php $_SERVER['DOCUMENT_ROOT'] ?>dist/js/index.js" async></script>
</body>
</html>
