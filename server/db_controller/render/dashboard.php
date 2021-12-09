<?php

include "db_dashboard_controller.php";

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');


if (isset($_POST['is_clients_num'])){
    if($_POST['is_clients_num']) echo json_encode(num_clients());
}

if (isset($_POST['is_employees_num'])){
    if($_POST['is_employees_num']) echo json_encode(num_employee());
}

if (isset($_POST['is_projects_num'])){
    if($_POST['is_projects_num']) echo json_encode(num_projects());
}

if (isset($_POST['is_all_designs'])){
    if($_POST['is_all_designs']) echo json_encode(num_designs());
}

if (isset($_POST['is_all_projects'])){
    if($_POST['is_all_projects']) echo json_encode(all_projects());
}

if (isset($_POST['get_project'])){
    if($_POST['get_project']) echo json_encode(get_project($_POST['get_project']['project_id']));
}

if (isset($_POST['is_all_employees'])){
    if($_POST['is_all_employees']) echo json_encode(all_employees());
}

if (isset($_POST['get_employee_data'])){
    if($_POST['get_employee_data']) echo json_encode(get_employees($_POST['get_employee_data']['employee_id']));
}

if (isset($_POST['is_all_clients'])){
    if($_POST['is_all_clients']) echo json_encode(all_clients());
}

if (isset($_POST['is_all_payments'])){
    if($_POST['is_all_payments']) echo json_encode(all_payment());
}

if (isset($_POST['is_all_admin'])){
    if($_POST['is_all_admin']) echo json_encode(all_admin());
}

if (isset($_POST['delete_project'])){
    if($_POST['delete_project']) echo json_encode(delete_proj($_POST['delete_project']['project_id']));
}

if (isset($_POST['update_project_status'])){
    $proj_data = $_POST['update_project_status'];
    if($_POST['update_project_status']) echo json_encode(update_proj_status($proj_data['project_id'], $proj_data['new_status']));
}

if (isset($_POST['update_project_cost'])){
    $proj_data = $_POST['update_project_cost'];
    if($_POST['update_project_cost']) echo json_encode(update_proj_cost($proj_data['project_id'], $proj_data['new_cost']));
}

if (isset($_POST['update_project_end_date'])){
    $proj_data = $_POST['update_project_end_date'];
    if($_POST['update_project_end_date']) echo json_encode(update_proj_end_date($proj_data['project_id'], $proj_data['new_end_date']));
}

if (isset($_POST['update_project_start_date'])){
    $proj_data = $_POST['update_project_start_date'];
    if($_POST['update_project_start_date']) echo json_encode(update_proj_start_date($proj_data['project_id'], $proj_data['new_start_date']));
}

if (isset($_POST['update_project_description'])){
    $proj_data = $_POST['update_project_description'];
    if($_POST['update_project_description']) echo json_encode(update_proj_description($proj_data['project_id'], $proj_data['new_description']));
}

if (isset($_POST['delete_employee'])){
    if($_POST['delete_employee']) echo json_encode(delete_employee($_POST['delete_employee']['employee_id']));
}

if (isset($_POST['update_employee_phone_no'])){
    $employee_data = $_POST['update_employee_phone_no'];
    if($_POST['update_employee_phone_no']) echo json_encode(update_employee_phone_no($employee_data['employee_id'], $employee_data['new_phone_no']));
}

if (isset($_POST['update_employee_address'])){
    $employee_data = $_POST['update_employee_address'];
    if($_POST['update_employee_address']) echo json_encode(update_employee_address($employee_data['employee_id'], $employee_data['new_address']));
}

if (isset($_POST['update_employee_department'])){
    $employee_data = $_POST['update_employee_department'];
    if($_POST['update_employee_department']) echo json_encode(update_employee_department($employee_data['employee_id'], $employee_data['new_department']));
}

if (isset($_POST['update_employee_salary'])){
    $employee_data = $_POST['update_employee_salary'];
    if($_POST['update_employee_salary']) echo json_encode(update_employee_salary($employee_data['employee_id'], $employee_data['new_salary']));
}

if (isset($_POST['insert_new_project'])){
    $proj_data = $_POST['insert_new_project'];
    if($_POST['insert_new_project']) echo json_encode(insert_project($proj_data['project_id'], $proj_data['proj_description'],$proj_data['Designs_id'],$proj_data['start_date'],$proj_data['end_date'],$proj_data['proj_location'],$proj_data['proj_cost'],$proj_data['proj_status']));
}

if (isset($_POST['update_user_privilege'])){
    $admin_data = $_POST['update_user_privilege'];
    if($_POST['update_user_privilege']) echo json_encode(update_user_privilege($admin_data['admin_id'], $admin_data['new_privilege']));
}

if (isset($_POST['delete_user'])){
    if($_POST['delete_user']) echo json_encode(delete_user($_POST['delete_user']['admin_id']));
}

if (isset($_POST['get_user_priviledge'])){
    if($_POST['get_user_priviledge']) echo json_encode(get_user_privilege($_POST['get_user_priviledge']['admin_id']));
}

if (isset($_POST['is_search_projects'])){
    if($_POST['is_search_projects']) echo json_encode(search_projects($_POST['is_search_projects']['search']));
}

if (isset($_POST['is_search_employees'])){
    if($_POST['is_search_employees']) echo json_encode(search_employees($_POST['is_search_employees']['search']));
}

if (isset($_POST['is_search_clients'])){
    if($_POST['is_search_clients']) echo json_encode(search_clients($_POST['is_search_clients']['search']));
}

if (isset($_POST['is_search_payments'])){
    if($_POST['is_search_payments']) echo json_encode(search_payment($_POST['is_search_payments']['search']));
}

if (isset($_POST['is_search_account'])){
    if($_POST['is_search_account']) echo json_encode(search_account($_POST['is_search_account']['search']));
}

if (isset($_POST['get_design_id'])){
    if($_POST['get_design_id']) echo json_encode(get_design_id());
}

