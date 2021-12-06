// Handles user registration
function registerUser() {
  // Clear the fields off their error styles if there are any
  clearFieldErrors(['#signup-email','#signup-pwd','#signup-pwd2']);
  clearFieldErrors(['#email-message','#pwd-message','#pwd2-message'], true)

  // Get the user's data from the form
  let userData = {
    // name: $("#signup-name").val(),
    email: $("#signup-email").val(),
    password: $("#signup-pwd").val(),
    password2: $("#signup-pwd2").val(),
  };

  // Make a request to the php server, sending the user data to be processed
  const request = $.ajax({
    url: "../server/db_controller/auth/authentication.php",
    type: "post",
    data: { userData },

    success: function (response) {
      // Check if the response is successful
      if (response.success) {
        // Display success message
        showSuccessMessage();

        // redirect to login page
        location.href = "./login.html"
        
        return;
      }
      console.log(response);

      // else, execute error condition
      // Display an error message
      showErrorMessage('#signup-message',response.error.message);

      // Show the fields that have errors on them
      showFormError(response.error.errorFields);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(textStatus);
      console.log(errorThrown);

      // Display an error message
      showErrorMessage({ message: "Oops, something went wrong!" });
    },
  });
}

// Handles signing in user
function loginUser() {
  clearFieldErrors(["#signin-email","#signin-pwd"]);

  const userData_signIn = {
    email: $("#signin-email").val(),
    password: $("#signin-pwd").val(),
  };

  // Make a request to the php server, sending the user data to be processed
  const request = $.ajax({
    url: "../server/db_controller/auth/authentication.php",
    type: "post",
    data: { userData_signIn},

    success: function (response) {
      console.log(response);
      if (response.success){
        //store data in local storage
        localStorage.setItem('userData',JSON.stringify(response.data));

        location.href = "../"
        
        
      }
      else{
        
         // else, execute error condition
      // Display an error message
      showErrorMessage('#signin-message',response.error.message);
      
      // Show the fields that have errors on them
      showFormError(response.error.errorFields,{
        password: "#signin-pwd",
        email: "#signin-email",

      });
      }
      
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(textStatus);
      console.log(errorThrown);
    },
  });
}

function checkpassword(password1,password2,error_message_elem,form_fields_elems, isPassword2=false){
  const request = $.ajax({
    url: "../server/db_controller/auth/authentication.php",
    type: "post",
    data: !isPassword2 ? { password1} : {
      passwords : {
        password1,
        password2
      }
    },

    success: function (response) {
      console.log(response);
      if (!response.success){
        
        // Display an error message
        showErrorMessage(error_message_elem,response.error.message);
        
        // Show the fields that have errors on them
        showFormError(response.error.errorFields,form_fields_elems);
        
      }
      else{
        clearFieldErrors(['#signup-pwd','#signup-pwd2']);
        clearFieldErrors(['#pwd-message','#pwd2-message'],true);
      
      }
      
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(textStatus);
      console.log(errorThrown);
    },
  });
}


function checkemail(email){
  const request = $.ajax({
    url: "../server/db_controller/auth/authentication.php",
    type: "post",
    data:{email},

    success: function (response) {
      console.log(response);
      if (!response.success){
        
        // Display an error message
        showErrorMessage("#email-message",response.error.message);
        
        // Show the fields that have errors on them
        showFormError(response.error.errorFields, {email: "#signup-email"});
        
      }
      else{
        clearFieldErrors(['#signup-email']);
        clearFieldErrors(['#email-message'],true);
      }
      
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(textStatus);
      console.log(errorThrown);
    },
  });

}


// Display an error message once the process fails
function showErrorMessage(
  tag = "#signup-message",
  message = "Kindly enter the correct values!"
) {
  // Add a failure style
  $(tag).removeClass("hidden");

  // Insert message in html dom
  $(tag).html(message);
}

// Display a success message once process is successfully completed
function showSuccessMessage(
  tag = "#signup-message",
  message = "Successfully created an account!"
) {
  // Add a success style
  $(tag).addClass("show");

  // Insert message in html dom
  $(tag).html(message);
}

/**
 * 
 * @param [*] formFields An array of field basic names. Eg. ['name', 'email']
 * @param {*} fieldIds Holds Ids of the fields. This is added so that they can easily be changed if necessary without disrupting the flow of data
 */
function showFormError(formFields,fieldIds = {
  email: "#signup-email",
  password: "#signup-pwd",
  password2: "#signup-pwd2",
  
}) { 

  // Show the error state of each field present and reference the dom id
  formFields.forEach((field) => {
    $(fieldIds[field]).addClass("border-red-600");
  });
}

// Clears error styles from fields
function clearFieldErrors(fields, isErrorMessageElem=false) {
  //fields is an array of classes or ids of the field elements
  //Remove error class from each field

  fields.forEach(
    (field) => {
      isErrorMessageElem ? $(field).addClass("hidden") : $(field).removeClass("border-red-600");
      
    }
  );
}

// Get current user either from local storage or server session
function currentUser(){
  //Server side
  
  //Client side
  // Check if there is a stored user data
  if(localStorage.getItem('userData')) return JSON.parse(localStorage.getItem('userData'))
  
  return null;
  
  
}

function logout(){
  //Clear the local storage of user data
  localStorage.removeItem('userData');
  location.href = `login.html`;
}

function signIn(){
  //redirect to sign in page
  location.href = `login.html`;
}

function logout_from_index(){
  //Clear the local storage of user data
  localStorage.removeItem('userData');
  location.href = `./pages/login.html`;
}

function signIn_from_index(){
  //redirect to sign in page
  location.href = `auth/login_signup.html`;
}


function isSignedIn(){
  if(currentUser())  return true;
  return false;
}

// function create_account_index(){
//   location.href = `./pages/create-account.html`;
// }

function create_account(){
  location.href = `create-account.html`;
}

function insert_project_dir(){
  location.href = `./pages/insert_proj.html`;
}

