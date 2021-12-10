$( document ).ready(function() {
    $.ajax({
        type: "post",
        url: "./server/db_controller/render/dashboard.php",
        data: {is_clients_num: true},
        success: function(response) {

            $('#clients').html(response.data);
            // displays number of projects, employees, etc on the dashboard
            display_num_employees();
            display_num_projects();
            display_num_designs();
            display_projects();
            isPrivileged_D();

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            console.log(XMLHttpRequest);

           
          },
    });

    
    $("#search_field").keyup(function(event) {
        $("#t_render").html("");
        $("#t_render").html("");
        text = $(this).val();
        display_projects(text);
      });
});

function display_num_employees(){
        $.ajax({
            type: "post",
            url: "./server/db_controller/render/dashboard.php",
            data: {is_employees_num: true},
            success: function(response) {

                $('#employee').html(response.data);
                

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(textStatus);
                console.log(errorThrown);
                console.log(XMLHttpRequest);

            
            },
        });
}

function display_num_projects(){
    $.ajax({
        type: "post",
        url: "./server/db_controller/render/dashboard.php",
        data: {is_projects_num: true},
        success: function(response) {

            $('#projects').html(response.data);
            

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            console.log(XMLHttpRequest);

        
        },
    });
}

function display_num_designs(){
    $.ajax({
        type: "post",
        url: "./server/db_controller/render/dashboard.php",
        data: {is_all_designs: true},
        success: function(response) {

            $('#designs_num').html(response.data);
            

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            console.log(XMLHttpRequest);

        
        },
    });
}

function display_projects(search = 'P'){
    // displays project info on the dashboard based on search results
    $.ajax({
        type: "post",
        url: "./server/db_controller/render/dashboard.php",
        data: {is_search_projects: {search}},
        success: function(response) {

            response.data.forEach(proj_data => {
                $('#t_render').append(render_proj_table(proj_data));
                //a different style is applied on status based on the info
                if(proj_data.proj_status == "on hold"){
                    $(`#${proj_data.project_id}`).addClass('text-orange-700 bg-orange-100 dark:text-white dark:bg-orange-600');
                }
                else if(proj_data.proj_status == "completed"){
                    $(`#${proj_data.project_id}`).addClass('text-green-700 bg-green-100 dark:text-white dark:bg-green-600');
                }
                else if(proj_data.proj_status == "ongoing"){
                    $(`#${proj_data.project_id}`).addClass('text-blue-700 bg-blue-100 dark:text-white dark:bg-blue-600');
                }
            });
            

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            console.log(XMLHttpRequest);

        
        },
    });
}
   
function render_proj_table(proj_data){
    // contains data to be displayed on the page based on project data
    const proj_table = `<tr class="text-gray-700 dark:text-gray-400 ${proj_data.project_id}">
                            <td class="px-4 py-3">
                            <div>
                                <p class="font-semibold">${proj_data.project_id}</p>
                            </div>
                            </td>
                            <td class="px-4 py-3 text-sm">
                                ${proj_data.proj_description} 
                            </td>
                            <td class="px-4 py-3 text-xs">
                            <span
                                id = "${proj_data.project_id}"
                                class="px-2 py-1 font-semibold leading-tight rounded-full"
                            >
                                ${proj_data.proj_status}
                            </span>
                            </td>
                            <td class="px-4 py-3 text-sm">
                            ${proj_data.Designs_id} 
                            </td>
                            <td class="px-4 py-3 text-sm">
                                ${proj_data.start_date}
                            </td>
                            <td class="px-4 py-3 text-sm">
                                ${proj_data.end_date}
                            </td>
                            <td class="px-4 py-3 text-sm">
                               $ ${proj_data.proj_cost}
                            </td>
                            <td class="px-4 py-3 privilege_T">
                                <div class="flex items-center space-x-4 text-sm">
                                    <button
                                        class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                        aria-label="Edit"
                                        onclick="proj_id_value_sender('${proj_data.project_id}'), get_proj_data('${proj_data.project_id}')"
                                    >
                                        <svg
                                        class="w-5 h-5"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        >
                                        <path
                                            d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                                        ></path>
                                        </svg>
                                    </button>
                                    <button
                                        class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                        aria-label="Delete"
                                        onclick="delete_project_confirm('${proj_data.project_id}')"
                                    >
                                        <svg
                                        class="w-5 h-5"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        >
                                        <path
                                            fill-rule="evenodd"
                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                            clip-rule="evenodd"
                                        ></path>
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>`

                        
        return proj_table;
}


function delete_project_confirm(project_id){

    var result = confirm("Are you sure to delete?");
    if(result){

        delete_project(project_id);
    }
}

function delete_project(project_id){

    $.ajax({
        type: "post",
        url: "./server/db_controller/render/dashboard.php",
        data: {delete_project: {project_id}},
        success: function(response) {
    
           if(response.success) {
            
            $('.' + project_id).addClass('hide');
            display_num_projects();
               
           }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            console.log(XMLHttpRequest);

           
          },
    });
}

function proj_id_value_sender(proj_id){
    // stores project id to be updated and relocates to the update page
    const project_id= proj_id; 
    localStorage.setItem("proj_id_value", project_id );
    setTimeout(() => {
        window.location.href="./pages/update_proj.html";
    }, 500);
    
}


function isPrivileged_D(){
    // checks privilege of logged in user
    a = currentUser();
    admin_id = a.email;
    
    $.ajax({
        type: "post",
        url: "./server/db_controller/render/dashboard.php",
        data: {get_user_priviledge: {admin_id}},
        success: function(response) {
            
           if(response.data == 0) {
                
            $('.privilege_T').addClass('hide');
              
           }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            console.log(XMLHttpRequest);

           
          },
    });
}

function get_proj_data(project_id){
    // stores project data based on project id
    $.ajax({
        type: "post",
        url: "./server/db_controller/render/dashboard.php",
        data: {get_project: {project_id}},
        success: function(response) {
            proj_data = response.data;
            var proj_value = {descrp:proj_data.proj_description,status:proj_data.proj_status,designID:proj_data.Designs_id,start:proj_data.start_date,end:proj_data.end_date,cost:proj_data.proj_cost};
            localStorage.setItem(project_id, JSON.stringify(proj_value));
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            console.log(XMLHttpRequest);

        
        },
    });
}