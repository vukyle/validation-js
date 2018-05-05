function Validation(id) {
  this.formId = id;
  this.form = document.getElementById(id);
  //phone validation
  this.invalidPhone = function(elNumber) {
    var digits = elNumber.value.replace(/\D/g, ''),
    char = {3:'-',6:'-'};
    elNumber.value = '';
    for (var i = 0; i < digits.length; i++) {
      elNumber.value += (char[i]||'') + digits[i];
    }
    if(digits.length != 10 || digits[0] == 1 || digits[0] == 0) {
      return true;
    } else {
      return false;
    }
  };
  //string validation
  this.ifEmptyString = function(elString) {
    if (elString == '' || elString == null || !elString) {
      return true;
    } else {
      return false;
    }
  };
  //email validation
  this.regulerExpresionCheck = function(elCheck, regExpression) {
    if(regExpression.test(elCheck)) {
      return true;
    } else {
      return false;
    }
  };
  //locate form, find inputs and create objects based on inputs available
  this.createInputObj = function() {
    var c = {
      input: {},
      expression: {
        domains: /\.(con|cpm|cin|cok)/, //regular expression for invalid domains
        email: /^([A-Za-z0-9_\.-]+)@([\A-Zda-z\.-]+)\.([A-Za-z\.]{2,6})$/, //regex for valid email characters
      },
      msg: {
        firstName:'First Name',
        lastName:'Last Name',
        email:'Email Address',
        phone:'Phone',
        zip: 'Zip Code'
      },
      errorMessage: [],
      digits: ''
    };
    var inputs = this.form.getElementsByTagName('INPUT');

    //loops through the inputs nodelist and creates the input object
    for(let i = 0; i < inputs.length; i++) {
      c.input[inputs[i].name] = inputs[i].value;
    }

    console.log(Object.keys(c.input).length);
    return c;
  };
  this.inputObject = this.createInputObj();
  this.invalidInputs = function(element) {
    //grabs the validation text span
    var validationText = element.parentNode.querySelector('.validation-text');

    element.nextElementSibling.classList.add('form-field-invalid');
    element.nextElementSibling.classList.remove('form-field-valid');
    element.style.border = '1px solid red';
    element.style.background = 'background: #f5e7e7';
    validationText.style.display = 'inline';
  };
  //Adds valid styling to the element that is passed
  this.validInputs = function(element) {
    var validationText = element.parentNode.querySelector('.validation-text');

    element.nextElementSibling.classList.remove('form-field-invalid');
    element.nextElementSibling.classList.add('form-field-valid');
    element.style.border = '1px solid green';
    element.style.background = 'background: #fff';
    validationText.style.display = 'none';
  };
  this.validateField = function(event) {
    //call the returnFormObject to return an object
    var c = this.createInputObj();
    var inputName = event.target.name;
    var inputValue = event.target.value;
    var inputElement = event.target;

    //switch statement that checks the name of the input in order to call the correct validation function
    switch (inputName) {
      case 'first_name':
      if (this.ifEmptyString(inputValue)) {
        this.invalidInputs(inputElement);
      } else {
        this.validInputs(inputElement);
      }
      break;
      case 'last_name':
      if (this.ifEmptyString(inputValue)) {
        this.invalidInputs(inputElement);
      } else {
        this.validInputs(inputElement);
      }
      break;
      case 'contact_phone':
      if (this.invalidPhone(inputElement)) {
        this.invalidInputs(inputElement);
      } else {
        this.validInputs(inputElement);
      }
      break;
      case 'email_address':
      if (this.regulerExpresionCheck(inputValue, c.expression.domains) || !this.regulerExpresionCheck(inputValue, c.expression.email)) {
        this.invalidInputs(inputElement);
      } else {
        this.validInputs(inputElement);
      }
      break;
      default:

    }
  };
  //checks if input fields are valid
  this.validateSubmission = function() {
    //call the returnFormObject to return an object
    //this.createInputObj();
    var c = this.createInputObj();

    var inputObj = c.input;
    var inputObjLength = Object.keys(this.inputObject.input).length;

    console.log(inputObj.first_name);
    console.log(this.inputObject.msg.firstName);

    // for(let i = 0; i < inputObjLength; i++) {
    //   switch (inputObj[Object.keys(inputObj)[i]]) {
    //     case 'first_name':
    //     if (this.ifEmptyString(inputObj.first_name)) {
    //       this.inputObject.errorMessage.push(c.msg.firstName);
    //     }
    //     break;
    //     case 'last_name':
    //     if (this.ifEmptyString(c.input.lastName.value)) {
    //       this.invalidInputs(input);
    //     } else {
    //       this.validInputs(input);
    //     }
    //     break;
    //     case 'contact_phone':
    //     if (this.invalidPhone(c.input.phone)) {
    //       this.invalidInputs(input);
    //     } else {
    //       this.validInputs(input);
    //     }
    //     break;
    //     case 'email_address':
    //     if (this.regulerExpresionCheck(c.input.email.value, c.expression.domains) || !this.regulerExpresionCheck(c.input.email.value, c.expression.email)) {
    //       this.invalidInputs(input);
    //     } else {
    //       this.validInputs(input);
    //     }
    //     break;
    //     default:
    //
    //   }
    // }

  };
  //submits the form
  this.submitForm = function(event) {
    if(!this.validateSubmission(event)) {
      return false;
    } else {
      console.log('form submitted');
    }
  };
  //create event listener for mulitple events
  this.massAddEventListener = function(element, eventNames, listener) {
    var events = eventNames.split(' ');
    for (var i = 0; i < events.length; i++) {
      element.addEventListener(events[i], listener, false);
    }
  };
  this.eventListener = function() {
    //input validation listener
    this.massAddEventListener(this.form, 'keydown keyup focusout change paste cut', (event) => {
      this.validateField(event);
      var inputObj = this.inputObject.input;
      // console.log(inputObj);
      // console.log(inputObj[Object.keys(inputObj)[0]]);
      // console.log(inputObj.contact_phone);
    });

    this.form.addEventListener('click', (event) => {
      event.preventDefault();
      var target = event.target;
      if(target.type == 'submit') {
        //this.submitForm();
        this.validateSubmission();
      }
    });

  };
  this.eventListener();
}

var form1 = new Validation('form1');
//form1.createInputObj();

// var form2 = new Validation('form2');
// form2.createInputObj();

var inputs = document.getElementsByTagName('INPUT');
console.log(inputs[0].value);
