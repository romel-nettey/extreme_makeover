
function update_project_status(){

    project_id = localStorage.getItem("proj_id_value");
    new_status = $('#status').val();

    if(new_status == ""){
        alert("Select project status");
        return false;
    }

    $.ajax({
        type: "post",
        url: "../server/db_controller/render/dashboard.php",
        data: {update_project_status: {project_id, new_status}},
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

function update_project_cost(){

    project_id = localStorage.getItem("proj_id_value");
    new_cost = $('#update-cost').val();

    if(new_cost == ""){
        alert("type in new cost");
        return false;
    }

    $.ajax({
        type: "post",
        url: "../server/db_controller/render/dashboard.php",
        data: {update_project_cost: {project_id, new_cost}},
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

