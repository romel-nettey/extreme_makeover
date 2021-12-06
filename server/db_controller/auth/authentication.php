<?php

include "db_auth_controller.php";

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');



if(isset($_POST["userData"])) {
    $user_data =  $_POST["userData"];
    $regex_email = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
    $regex_password = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/";

    if (empty($user_data['email']) || empty($user_data['password']) || empty($user_data['password2']) ){
        echo json_encode(array('success' => false, 'error' => array('message' => 'Fill in all fields', 'errorFields' => array('email','password','password2') )));
    }
    elseif (!filter_var($user_data['email'], FILTER_VALIDATE_EMAIL) || !preg_match($regex_email, $user_data['email']) ){
        echo json_encode(array('success' => false, 'error' => array('message' => 'Enter valid email', 'errorFields' => array('email'))));
      
    }
    elseif(!preg_match($regex_password, $user_data['password'])){
        validate_password($user_data['password']);
    }
    elseif ($user_data['password'] != $user_data['password2']){
        echo json_encode(array('success' => false, 'error' => array('message' => 'Password does not match', 'errorFields' => array('password','password2') )));
        
    }
    else {
        
        $create_user_reponse = db_create_user($user_data);
        if($create_user_reponse['success']){
            // user has been successfully created
            echo json_encode(array('success' => true));
        }
        // failed to create user
        else  echo json_encode(array('success' => false, 'error' => array('message' => $create_user_reponse['error']['message'])));
        
    }

    


}

elseif(isset($_POST["email"])){
    $regex_email = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
    $email = $_POST["email"];

    if (empty($email)){
        echo json_encode(array('success' => false, 'error' => array('message' => 'Enter an email', 'errorFields' => array('email') )));
    }
    elseif (!filter_var($email, FILTER_VALIDATE_EMAIL) || !preg_match($regex_email, $email) ){
        echo json_encode(array('success' => false, 'error' => array('message' => 'Enter valid email', 'errorFields' => array('email'))));
    }
    else echo json_encode(array('success' => true));

}

elseif(isset($_POST["password1"])){
    $regex_password = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/";
    $pwd1 = $_POST["password1"];

    if (empty($pwd1)){
        echo json_encode(array('success' => false, 'error' => array('message' => 'Enter a password', 'errorFields' => array('password') )));
    }
    elseif (!preg_match($regex_password, $pwd1)){
        validate_password($pwd1);
    }
    else echo json_encode(array('success' => true));

}

elseif(isset($_POST["passwords"])){
   
    $passwords = $_POST["passwords"];

    if (empty($passwords["password2"])){
        echo json_encode(array('success' => false, 'error' => array('message' => 'Enter the same password', 'errorFields' => array('password') )));
    }
    elseif ($passwords["password2"] != $passwords["password1"]){
        echo json_encode(array('success' => false, 'error' => array('message' => 'Password does not match', 'errorFields' => array('password1','password2') )));
    }
    else echo json_encode(array('success' => true));

}


// log in user to their page
elseif(isset($_POST["userData_signIn"])) {
    // echo json_encode(array('success' => true));
    $regex_email = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
    $signIn_data =  $_POST["userData_signIn"];

    if (empty($signIn_data['email']) || empty($signIn_data['password']) ){
        echo json_encode(array('success' => false, 'error' => array('message' => 'Enter your email and password', 'errorFields' => array('email','password'))));
    }
    elseif (!filter_var($signIn_data['email'], FILTER_VALIDATE_EMAIL) || !preg_match($regex_email, $signIn_data['email'])){
        echo json_encode(array('success' => false, 'error' => array('message' => 'Enter valid email', 'errorFields' => array('email'))));
    }
    else echo json_encode(login($signIn_data['email'],$signIn_data['password']));
}




else echo json_encode(array('success' => false, 'error' => array('message' => 'Server Error: Invalid endpoint.')));
