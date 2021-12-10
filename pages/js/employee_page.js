$( document ).ready(function() {
    $.ajax({
        type: "post",
        url: "../server/db_controller/render/dashboard.php",
        data: {is_all_employees: true},
        success: function(response) {
            // displays employee data on the page
            response.data.forEach(emp_data => {
                $('#empT_render').append(render_emp_table(emp_data));
            });

            // hides admin data from employee table
            $('.E26').addClass("hide");

            // checks privilege of user
            isPrivileged_E();
            

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            console.log(XMLHttpRequest);

           
          },
    });

     //conatains logged in users sign in info (email)
    const currentUserData =  currentUser();

    // displays avatar icon with users initials
    $('#avatar_e').attr('src',`https://avatars.dicebear.com/api/initials/${currentUserData.email}.svg`);

     //implements the search functionality on the page
    $("#search_field_E").keyup(function(event) {
        $("#empT_render").html("");
        text = $(this).val();
        searched_employees(text);
      });
});

function render_emp_table(emp_data){
    // conatains html data to be displayed on the page based on employee data
    const emp_table = `<tr class="text-gray-700 dark:text-gray-400 E${emp_data.employee_id}">
                            <td class="px-4 py-3">
                            <div>
                                <p class="font-semibold">${emp_data.fname} ${emp_data.lname}</p>
                            </div>
                            </td>
                            <td class="px-4 py-3 text-sm">
                                ${emp_data.email} 
                            </td>
                            <td class="px-4 py-3 text-sm">
                                ${emp_data.phone_no}
                            </td>
                            <td class="px-4 py-3 text-sm">
                                ${emp_data.address} 
                            </td>
                            </td>
                            <td class="px-4 py-3 text-sm">
                                ${emp_data.department_id}
                            </td>
                            <td class="px-4 py-3 text-sm">
                               $ ${emp_data.salary}
                            </td>
                            
                                <td class="px-4 py-3">
                                    <div class="privilege_T">
                                        <div class="flex items-center space-x-4 text-sm">
                                            <button
                                                class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                aria-label="Edit"
                                                onclick="employee_id_value_sender('${emp_data.employee_id}'), get_employee_data('${emp_data.employee_id}')"
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
                                                onclick="delete_employee_confirm('${emp_data.employee_id}')"
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
                                    </div>
                                </td>
                            
                        </tr>`
                        
        return emp_table;
}

function delete_employee_confirm(employee_id){

    var result = confirm("Are you sure to delete?");
    if(result){

        delete_employee(employee_id);
    }
}

function delete_employee(employee_id){

    $.ajax({
        type: "post",
        url: "../server/db_controller/render/dashboard.php",
        data: {delete_employee: {employee_id}},
        success: function(response) {
    
           if(response.success) {
            
            $('.E' + employee_id).addClass('hide');
               
           }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            console.log(XMLHttpRequest);

           
          },
    });
}

function employee_id_value_sender(employee_id){
     // stores employee id to be updated and relocates to the update page
    localStorage.setItem("employee_id_value", employee_id);
    window.location.href="./update_employee.html";
    
}

function isPrivileged_E(){
    // checks privilege of logged in user
    a = currentUser();
    admin_id = a.email;
    
    $.ajax({
        type: "post",
        url: "../server/db_controller/render/dashboard.php",
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

function searched_employees(search = 0){
    // displays employee data on the dashboard based on search results
    $.ajax({
        type: "post",
        url: "../server/db_controller/render/dashboard.php",
        data: {is_search_employees: {search}},
        success: function(response) {

            response.data.forEach(emp_data => {
                $('#empT_render').append(render_emp_table(emp_data));
            });

            isPrivileged_E();
            $('.E26').addClass("hide");
            

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            console.log(XMLHttpRequest);

           
          },
    });
}

function get_employee_data(employee_id){
    // stores employee data 
    $.ajax({
        type: "post",
        url: "../server/db_controller/render/dashboard.php",
        data: {get_employee_data: {employee_id}},
        success: function(response) {
            
            emp_data = response.data;
            var emp_value = {phone_no:emp_data.phone_no,address:emp_data.address,salary:emp_data.salary};
            localStorage.setItem(emp_data.email, JSON.stringify(emp_value));
            localStorage.setItem("emp_email", emp_data.email);

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            console.log(XMLHttpRequest);

        
        },
    });
}

