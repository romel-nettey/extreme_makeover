<?php
require __DIR__ . "/../../connection.php";

function num_clients(){
    global $con;
    $result = mysqli_query($con,"SELECT * FROM `clients`;");
    $count = mysqli_num_rows($result);
    return array('success' => true , 'data' => $count);
}

function num_employee(){
    global $con;
    $result = mysqli_query($con,"SELECT * FROM `employee`;");
    $count = mysqli_num_rows($result);
    return array('success' => true , 'data' => $count);
}

function num_projects(){
    global $con;
    $result = mysqli_query($con,"SELECT * FROM `project`;");
    $count = mysqli_num_rows($result);
    return array('success' => true , 'data' => $count);
}

function num_designs(){
    global $con;
    $result = mysqli_query($con,"SELECT * FROM `designs`;");
    $count = mysqli_num_rows($result);
    return array('success' => true , 'data' => $count);
}

function all_projects(){
    global $con;
    $result = mysqli_query($con,"SELECT * FROM `project`");
    $projects = [];
    while($project = mysqli_fetch_assoc($result)){
        array_push($projects,$project);
    }
    return array('success' => true , 'data' => $projects);
}

function get_project($proj_id){
    global $con;
    $result = mysqli_query($con,"SELECT * FROM `project` WHERE project_id = '$proj_id'");
    $project = mysqli_fetch_assoc($result);
    return array('success' => true , 'data' => $project);
}


function search_projects($search = ""){
    global $con;
    if($search == "") $result = mysqli_query($con,"SELECT * FROM `project`");
    else $result = mysqli_query($con,"SELECT * FROM `project` WHERE project_id LIKE '%$search%' OR proj_description LIKE '%$search%' OR proj_cost LIKE '%$search%' OR proj_status LIKE '%$search%' OR start_date LIKE '%$search%' OR end_date LIKE '%$search%'");
     $projects = [];
    while($project = mysqli_fetch_assoc($result)){
        array_push($projects,$project);
    }
    return array('success' => true , 'data' => $projects);
}


function all_employees(){
    global $con;
    $result = mysqli_query($con,"SELECT * FROM `employee`");
    $employees = [];
    while($employee = mysqli_fetch_assoc($result)){
        array_push($employees,$employee);
    }
    return array('success' => true , 'data' => $employees);
}

function get_employees($emp_id){
    global $con;
    $result = mysqli_query($con,"SELECT * FROM `employee` WHERE employee_id= '$emp_id'");
    $employee = mysqli_fetch_assoc($result);
    return array('success' => true , 'data' => $employee);
}

function search_employees($search = ""){
    global $con;
    if($search == "") $result = mysqli_query($con,"SELECT * FROM `employee`");
    else $result = mysqli_query($con,"SELECT * FROM `employee` WHERE employee_id LIKE '%$search%' OR fname LIKE '%$search%' OR lname LIKE '%$search%' OR email LIKE '%$search%' OR phone_no LIKE '%$search%' OR address LIKE '%$search%' OR department_id LIKE '%$search%' OR salary LIKE '%$search%'");
     $projects = [];
     $employees = [];
     while($employee = mysqli_fetch_assoc($result)){
         array_push($employees,$employee);
     }
     return array('success' => true , 'data' => $employees);
}

function all_clients(){
    global $con;
    $result = mysqli_query($con,"SELECT * FROM `clients`");
    $clients = [];
    while($client = mysqli_fetch_assoc($result)){
        array_push($clients,$client);
    }
    return array('success' => true , 'data' => $clients);
}

function search_clients($search = ""){
    global $con;
    if($search == "") $result = mysqli_query($con,"SELECT * FROM `clients`");
    else $result = mysqli_query($con,"SELECT * FROM `clients` WHERE client_id LIKE '%$search%' OR fname LIKE '%$search%' OR lname LIKE '%$search%' OR email LIKE '%$search%' OR phone_no LIKE '%$search%' OR address LIKE '%$search%' ");
    $clients = [];
    while($client = mysqli_fetch_assoc($result)){
        array_push($clients,$client);
    }
    return array('success' => true , 'data' => $clients);
}


function all_payment(){
    global $con;
    $result = mysqli_query($con,"SELECT clients.fname, clients.lname, clients.phone_no, orders.order_id, orders.order_date, orders.price, payment.payment_descrip, payment.amount, payment.amount_paid, payment.MoP
    FROM clients, orders, payment
    where clients.client_id = orders.order_id AND orders.order_id = payment.order_id");
    $payments = [];
    while($payment = mysqli_fetch_assoc($result)){
        array_push($payments,$payment);
    }
    return array('success' => true , 'data' => $payments);
}

function search_payment($search = ""){
    global $con;
    if($search == "") {
        $result = mysqli_query($con,"SELECT clients.fname, clients.lname, clients.phone_no, orders.order_id, orders.order_date, orders.price, payment.payment_descrip, payment.amount, payment.amount_paid, payment.MoP
        FROM clients, orders, payment
        WHERE clients.client_id = orders.order_id AND orders.order_id = payment.order_id");
    }
    else {
        $result = mysqli_query($con,"SELECT clients.fname, clients.lname, clients.phone_no, orders.order_id, orders.order_date, orders.price, payment.payment_descrip, payment.amount, payment.amount_paid, payment.MoP
        FROM clients, orders, payment
        WHERE clients.client_id = orders.order_id AND orders.order_id = payment.order_id AND (orders.price LIKE '%$search%' OR payment.MoP LIKE '%$search%' OR clients.fname LIKE '%$search%' OR clients.lname LIKE '%$search%' OR clients.phone_no LIKE '%$search%' OR orders.order_id LIKE '%$search%' OR orders.order_date LIKE '%$search%' OR payment.payment_descrip LIKE '%$search%' OR payment.amount LIKE '%$search%' OR payment.amount_paid LIKE '%$search%')");
    }
    $payments = [];
    while($payment = mysqli_fetch_assoc($result)){
        array_push($payments,$payment);
    }
    return array('success' => true , 'data' => $payments);
}

function all_admin(){
    global $con;
    $result = mysqli_query($con,"SELECT employee.fname, employee.lname, login_db.id, login_db.user_email, login_db.privilege, login_db.created_at
    FROM employee, login_db
    where employee.email = login_db.user_email;");
    $admins = [];
    while($admin = mysqli_fetch_assoc($result)){
        array_push($admins,$admin);
    }
    return array('success' => true , 'data' => $admins);
}

function search_account($search = ""){
    global $con;
    if($search == "") {
        $result = mysqli_query($con,"SELECT employee.fname, employee.lname, login_db.id, login_db.user_email, login_db.privilege, login_db.created_at
        FROM employee, login_db
        where employee.email = login_db.user_email;");
    }
    else{
        $result = mysqli_query($con,"SELECT employee.fname, employee.lname, login_db.id, login_db.user_email, login_db.privilege, login_db.created_at
        FROM employee, login_db
        WHERE employee.email = login_db.user_email AND (employee.fname LIKE '%$search%' OR employee.lname LIKE '%$search%' OR login_db.id LIKE '%$search%' OR login_db.user_email LIKE '%$search%' OR login_db.privilege LIKE '%$search%' OR login_db.created_at LIKE '%$search%')");
    }

    $admins = [];
    while($admin = mysqli_fetch_assoc($result)){
        array_push($admins,$admin);
    }
    return array('success' => true , 'data' => $admins);
}

function delete_proj($proj_id){
    global $con;
    $result =  mysqli_query($con, "DELETE FROM project WHERE  project_id = '$proj_id'");
    if($result) return array('success' => true);
    return array('success' => false, 'message' => 'failed to delete');
}

function update_proj_status($proj_id,$new_status){
    global $con;
    $result =  mysqli_query($con, "UPDATE project SET proj_status = '$new_status' WHERE project_id = '$proj_id'");
    if($result) return array('success' => true);
    return array('success' => false, 'message' => 'failed to update');
}

function update_proj_cost($proj_id,$new_cost){
    global $con;
    $result =  mysqli_query($con, "UPDATE project SET proj_cost = '$new_cost' WHERE project_id = '$proj_id'");
    if($result) return array('success' => true);
    return array('success' => false, 'message' => 'failed to update');
}

function update_proj_end_date($proj_id,$new_end_date){
    global $con;
    $result =  mysqli_query($con, "UPDATE project SET end_date = '$new_end_date' WHERE project_id = '$proj_id'");
    if($result) return array('success' => true);
    return array('success' => false, 'message' => 'failed to update');
}

function update_proj_start_date($proj_id,$new_start_date){
    global $con;
    $result =  mysqli_query($con, "UPDATE project SET start_date = '$new_start_date' WHERE project_id = '$proj_id'");
    if($result) return array('success' => true);
    return array('success' => false, 'message' => 'failed to update');
}

function update_proj_description($proj_id,$new_description){
    global $con;
    $result =  mysqli_query($con, "UPDATE project SET proj_description = '$new_description' WHERE project_id = '$proj_id'");
    if($result) return array('success' => true);
    return array('success' => false, 'message' => 'failed to update');
}

function delete_employee($employee_id){
    global $con;
    $result =  mysqli_query($con, "DELETE FROM employee WHERE  employee_id = '$employee_id'");
    if($result) return array('success' => true);
    return array('success' => false, 'message' => 'failed to delete');
}

function update_employee_phone_no($employee_id,$new_phone_no){
    global $con;
    $result =  mysqli_query($con, "UPDATE employee SET phone_no = '$new_phone_no' WHERE employee_id = '$employee_id'");
    if($result) return array('success' => true);
    return array('success' => false, 'message' => 'failed to update');
}

function update_employee_address($employee_id,$new_address){
    global $con;
    $result =  mysqli_query($con, "UPDATE employee SET address = '$new_address' WHERE employee_id = '$employee_id'");
    if($result) return array('success' => true);
    return array('success' => false, 'message' => 'failed to update');
}

function update_employee_department($employee_id,$new_department){
    global $con;
    $result =  mysqli_query($con, "UPDATE employee SET department_id = '$new_department' WHERE employee_id = '$employee_id'");
    if($result) return array('success' => true);
    return array('success' => false, 'message' => 'failed to update');
}

function update_employee_salary($employee_id,$new_salary){
    global $con;
    $result =  mysqli_query($con, "UPDATE employee SET salary = '$new_salary' WHERE employee_id = '$employee_id'");
    if($result) return array('success' => true);
    return array('success' => false, 'message' => 'failed to update');
}

function insert_project($proj_id,$proj_descr,$proj_designs_id,$proj_start_date,$proj_end_date,$proj_location,$proj_cost,$proj_status){
    global $con;
    $result =  mysqli_query($con, "INSERT INTO project(`project_id`,`proj_description`,`Designs_id`,`start_date`,`end_date`,`proj_location`,`proj_cost`,`proj_status`) VALUES ('$proj_id','$proj_descr','$proj_designs_id','$proj_start_date','$proj_end_date','$proj_location',$proj_cost,'$proj_status')");
    if($result) return array('success' => true);
    return array('success' => false, 'message' => 'failed to insert');
}

function update_user_privilege($admin_id,$new_privilege){
    global $con;
    $result =  mysqli_query($con, "UPDATE login_db SET privilege = $new_privilege WHERE user_email = '$admin_id'");
    if($result) return array('success' => true);
    return array('success' => false, 'message' => 'failed to update');
}

function delete_user($admin_id){
    global $con;
    $result =  mysqli_query($con, "DELETE FROM login_db WHERE  user_email = '$admin_id'");
    if($result) return array('success' => true);
    return array('success' => false, 'message' => 'failed to delete');
}

function get_user_privilege($admin_id){
    global $con;
    $result =  mysqli_query($con, "SELECT privilege FROM login_db WHERE  user_email = '$admin_id'");
    if($result) return array('success' => true, 'data' => mysqli_fetch_assoc($result)['privilege']);
    return array('success' => false, 'message' => 'failed to delete');
}


function get_design_id(){
    global $con;
    $result = mysqli_query($con,"SELECT designs_id FROM designs");
    $designs = [];
    while($design = mysqli_fetch_assoc($result)){
        array_push($designs,$design);
    }
    if($result) return array('success' => true , 'data' => $designs);
    return array('success' => false, 'message' => 'failed to get IDs');
}
