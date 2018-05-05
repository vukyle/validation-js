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

          <input placeholder="First Name" type="text" value="" class="btf-form__fname" id="first_name2" name="first_name">
          <span class="validation-icon"></span>
          <span class="validation-text">This field is required.</span>

          <!-- /.name -->
        </div><!--end fieldrow -->
        <div class="right btf-form__input-wrapper--name">
          <span class="">
            <input placeholder="Last Name" type="text" value="" class="btf-form__lname" id="last_name2" name="last_name">
            <span class="validation-icon"></span>
            <span class="validation-text">This field is required.</span>
          </span>
          <!-- /.name -->
        </div><!--end fieldrow -->
      </div> <!--end cf -->
      <div class="btf-form__input-wrapper">
        <input maxlength="12" placeholder="Phone Number" type="text" value="" class="btf-form__phone" id="contact_phone2" name="contact_phone">
        <span class="validation-icon"></span>
        <span class="validation-text">Please enter a valid #.</span>
      </div><!--end fieldrow -->

      <div class="btf-form__input-wrapper">
        <input placeholder="Email Address" type="text" value="" class="btf-form__email" id="email_address2" name="email_address">
        <span class="validation-icon"></span>
        <span class="validation-text">Please enter a valid email.</span>
      </div><!--end fieldrow -->


    <button type="submit" class="btf-form__submit">submit</button>
  </form>
  <form method="post" id="form2" class="btf-form">

      <div class="">
        <div class="btf-form__input-wrapper--name">

          <input placeholder="First Name" type="text" value="" class="btf-form__fname" id="first_name2" name="first_name">
          <span class="validation-icon"></span>
          <span class="validation-text">This field is required.</span>

          <!-- /.name -->
        </div><!--end fieldrow -->
        <div class="right btf-form__input-wrapper--name">
          <span class="">
            <input placeholder="Last Name" type="text" value="" class="btf-form__lname" id="last_name2" name="last_name">
            <span class="validation-icon"></span>
            <span class="validation-text">This field is required.</span>
          </span>
          <!-- /.name -->
        </div><!--end fieldrow -->
      </div> <!--end cf -->
      <div class="btf-form__input-wrapper">
        <input maxlength="12" placeholder="Phone Number" type="text" value="" class="btf-form__phone" id="contact_phone2" name="contact_phone">
        <span class="validation-icon"></span>
        <span class="validation-text">Please enter a valid #.</span>
      </div><!--end fieldrow -->

      <div class="btf-form__input-wrapper">
        <input placeholder="Email Address" type="text" value="" class="btf-form__email" id="email_address2" name="email_address">
        <span class="validation-icon"></span>
        <span class="validation-text">Please enter a valid email.</span>
      </div><!--end fieldrow -->


    <button type="submit" class="btf-form__submit">submit</button>
  </form>
  <script src="<?php $_SERVER['DOCUMENT_ROOT'] ?>dist/js/index.js" async></script>
</body>
</html>
