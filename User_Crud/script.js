class validation{
  formValues = {
    name : "",
    mail : "",
    dob : "",
    address : "",
    img : "",
    male : "",
    female : "",
    transgender : "",
    dance : "",
    singing : "",
    outdoor_game : "",
    Indoor_game : ""
  }

  error = {
    name_error : "",
    mail_error : "",
    dob_error : "",
    address_error : "",
    img_error : "",
    gender_error : "",
    hobbies_error : ""
  }
  errorMsg(index, message){
    const span = form.getElementsByClassName('span')[index]
    span.classList.add('error')
    span.getElementsByTagName('span')[0].textContent = message
  }

  getvalues(){
    this.formValues.name = document.getElementById('name').value.trim()
    this.formValues.mail = document.getElementById('mail').value.trim()
    this.formValues.dob = document.getElementById('dob').value
    this.formValues.address = document.getElementById('address').value.trim()
    this.formValues.img = document.getElementById('img').value
    this.formValues.male = document.getElementsByClassName('gender').value
    this.formValues.female = document.getElementsByClassName('gender').value
    this.formValues.transgender = document.getElementsByClassName('gender').value
    this.formValues.dance = document.getElementsByClassName('hobbies').value
    this.formValues.singing = document.getElementsByClassName('hobbies').value
    this.formValues.outdoor_game = document.getElementsByClassName('hobbies').value
    this.formValues.Indoor_game = document.getElementsByClassName('hobbies').value
  }

  validateName(){
    if(this.formValues.name === "" || this.formValues.name === null)
    {
      this.error.name_error = "Please Enter Name";
      this.errorMsg(0,this.errorMsg.name_error)
    }
    else if(this.formValues.name.length < 3)
    {
      this.error.name_error = "Please Enter Above 3 Letters";
      this.errorMsg(0,this.errorMsg.name_error);
    }
    else if(this.formValues.name >=15)
    {
      this.error.name_error = "Please Enter Less than 15 letters";
      this.errorMsg(0,this.errorMsg.name_error);
    }
    else
    {
      this.error.name_error = "";
    }
  }

  validateMail(){
    const regExp = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
    if(this.formValues.mail === "" || this.formValues.mail === null){
        this.error.mail_error = "Please Enter Valid Email"
        this.errorMsg(1,this.error.mail_error)
    } else if(!(regExp.test(this.formValues.mail))){
        this.error.mail_error = "Invalid Email"
        this.errorMsg(1,this.error.mail_error)
    } else {
        this.errorValues.mail_error = "";
    }
  }

  validateDob() {
    var today = new Date();

      if (this.formValues.dob === "" || this.formValues.dob === null) {
          this.error.dob_error = "Please enter the Date..!!";
          this.errorMsg(2,this.errorMsg.dob_error);
      }
      // else if (!this.dob.match(/^(0[1-9]|[12][0-9]|3[01])[\- \/.](?:(0[1-9]|1[012])[\- \/.](19|20)[0-9]{2})$/)) {
      //     this.error.dob_error = 'date format is wrong';
      //     this.errorMsg(2,this.errorMsg.dob_error);
      // }
      
      // else if(today <= date){
      //     this.error.dob_error = "Current or future date is not allowed.";
      //     this.errorMsg(2,this.errorMsg.dob_error);
      // }
  }

  validateAddress(){
    if(this.formValues.address === "" || this.formValues.address === null)
    {
      this.error.address_error = "Please Enter Address";
      this.errorMsg(3,this.errorMsg,address_error);
    }
  }

  validateGender(){
    if(!this.formValues.male.checked && !this.formValues.female.checked && !this.formValues.transgender.checked)
    {
      this.error.gender_error = "Please select any one... Male or Female of Transgender";
      this.errorMsg(4,this.errorMsg.gender_error);
    }
    else{
      this.error.gender_error = "Gender Submitted";
      this.errorMsg(4,this.errorMsg.gender_error)
    }
  }

  validateHobbies(){
    if(!this.formValues.hobbies.dance.checked && !this.formValues.hobbies.singing.checked && !this.formValues.Indoor_game.checked && !this.formValues.hobbies.outdoor_game,checked)
    {
      this.error.hobbies_error = "Please select your Hobbies";
      this.errorMsg(5,this.errorMsg.hobbies_error);
    }
    else
    {
      this.error.hobbies_error = "Submitted Successfully";
      this.errorMsg(5,this.errorMsg.hobbies_error);
    }
  }
}

  const validateInputs = new validation;

  document.getElementsByClassName('form')[0].addEventListener('submit', event =>{
    event.preventDefault();
    validateInputs.getvalues();
    validateInputs.validateName();
    validateInputs.validateMail();
    validateInputs.validateDob();
    validateInputs.validateAddress();
    validateInputs.validateGender();
    validateInputs.validateHobbies();
  });


  // function validate(){
  //   event.preventDefault();
  //   validateInputs.getvalues();
  //   validateInputs.validateName();
  //   validateInputs.validateMail();
  //   validateInputs.validateDob();
  //   validateInputs.validateAddress();
  //   validateInputs.validateGender();
  //   validateInputs.validateHobbies();
  // }

