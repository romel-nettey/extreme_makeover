
function update_employee_phone_no(){

    employee_id = localStorage.getItem("employee_id_value");
    new_phone_no = $('#update-phone').val();;

    if(new_phone_no == ""){
        alert("Type in new number");
        return false;
    }

    $.ajax({
        type: "post",
        url: "../server/db_controller/render/dashboard.php",
        data: {update_employee_phone_no: {employee_id, new_phone_no}},
        success: function(response) {
            
           if(response.success) {
           
            
            window.location.href="./employees.html";
               
           }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            console.log(XMLHttpRequest);

           
          },
    });
}

function update_employee_address(){

    employee_id = localStorage.getItem("employee_id_value");
    new_address = $('#update-addr').val();;

    if(new_address == ""){
        alert("Type in new address");
        return false;
    }

    $.ajax({
        type: "post",
        url: "../server/db_controller/render/dashboard.php",
        data: {update_employee_address: {employee_id, new_address}},
        success: function(response) {
            
           if(response.success) {
           
            
            window.location.href="./employees.html";
               
           }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            console.log(XMLHttpRequest);

           
          },
    });
}

function update_employee_department(){

    employee_id = localStorage.getItem("employee_id_value");
    new_department = $('#dept').val();;

    if(new_department == ""){
        alert("Type in new department");
        return false;
    }

    $.ajax({
        type: "post",
        url: "../server/db_controller/render/dashboard.php",
        data: {update_employee_department: {employee_id, new_department}},
        success: function(response) {
            
           if(response.success) {
           
            
            window.location.href="./employees.html";
               
           }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            console.log(XMLHttpRequest);

           
          },
    });
}

function update_employee_salary(){

    employee_id = localStorage.getItem("employee_id_value");
    new_salary = $('#update-salary').val();;

    if(new_salary == ""){
        alert("Type in new department");
        return false;
    }

    $.ajax({
        type: "post",
        url: "../server/db_controller/render/dashboard.php",
        data: {update_employee_salary: {employee_id, new_salary}},
        success: function(response) {
            
           if(response.success) {
           
            
            window.location.href="./employees.html";
               
           }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            console.log(XMLHttpRequest);

           
          },
    });
}


function update_project_end_date(){
    let regex_date = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    project_id = localStorage.getItem("proj_id_value");
    new_end_date = $('#update-endD').val();

    test = regex_date.test(new_end_date);

    if(new_end_date == ""){
        alert("type in new end date");
        return false;
    }
    else if(!test){
        alert("date format must be: yy-mm-dd");
        return false;
    }

    $.ajax({
        type: "post",
        url: "../server/db_controller/render/dashboard.php",
        data: {update_project_end_date: {project_id, new_end_date}},
        success: function(response) {
            
           if(response.success) {
           
            
            window.location.href="../index.html";
               
           }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            console.log(XMLHttpRequest);

           
          },
    });
}

function update_project_start_date(){
    let regex_date = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    project_id = localStorage.getItem("proj_id_value");
    new_start_date = $('#update-startD').val();

    test = regex_date.test(new_start_date);

    if(new_start_date == ""){
        alert("type in new end date");
        return false;
    }
    else if(!test){
        alert("date format must be: yy-mm-dd");
        return false;
    }

    $.ajax({
        type: "post",
        url: "../server/db_controller/render/dashboard.php",
        data: {update_project_start_date: {project_id, new_start_date}},
        success: function(response) {
            
           if(response.success) {
           
            
            window.location.href="../index.html";
               
           }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            console.log(XMLHttpRequest);

           
          },
    });
}

function update_project_description(){
   
    project_id = localStorage.getItem("proj_id_value");
    new_description = $('#update-descrp').val();

    if(new_description == ""){
        alert("type in new description");
        return false;
    }

    $.ajax({
        type: "post",
        url: "../server/db_controller/render/dashboard.php",
        data: {update_project_description: {project_id, new_description}},
        success: function(response) {
            
           if(response.success) {
           
            
            window.location.href="../index.html";
               
           }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            console.log(XMLHttpRequest);

           
          },
    });
}