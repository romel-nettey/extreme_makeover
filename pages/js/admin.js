$( document ).ready(function() {    
    $.ajax({
        type: "post",
        url: "../server/db_controller/render/dashboard.php",
        data: {is_all_admin: true},
        success: function(response) {
            // displays all accounts on the admin control page
            response.data.forEach(admin_data => {
                $('#admin_render').append(render_admin_table(admin_data));
            });
            // hides the edit and delete button of the admin
            $('.Privilege31').addClass('hide');
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
      $('#avatar_a').attr('src',`https://avatars.dicebear.com/api/initials/${currentUserData.email}.svg`);


    // implements the search functionality of the page
    $("#search_field_A").keyup(function(event) {
        $("#admin_render").html("");
        $("#admin_render").html("");
        text = $(this).val();
        searched_account(text);
      });

});

function render_admin_table(admin_data){
    // contains html elements that would be displayed on the page by ajax
    const admin_table = `<tr class="text-gray-700 dark:text-gray-400 A${admin_data.id}">
                            <td class="px-4 py-3">
                            <div>
                                <p class="font-semibold">${admin_data.fname} ${admin_data.lname}</p>
                            </div>
                            </td>
                            <td class="px-4 py-3 text-sm">
                                ${admin_data.user_email} 
                            </td>
                            <td class="px-4 py-3 text-sm">
                                ${admin_data.privilege}
                            </td>
                            <td class="px-4 py-3 text-sm">
                                ${admin_data.created_at} 
                            </td>
                            <td class="px-4 py-3 Privilege${admin_data.id}">
                                <div class="flex items-center space-x-4 text-sm">
                                    <button
                                        class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                        aria-label="Edit"
                                        onclick="admin_id_value_sender('${admin_data.user_email}')"
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
                                        onclick="delete_user_confirm('${admin_data.id}')"
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
                        
        return admin_table;
}

function admin_id_value_sender(admin_id){
    // stores value of the account to be edited id and sends it to the update page
    localStorage.setItem("admin_id_value", admin_id);
    window.location.href="./update_privilege.html";
}

function update_user_privilege(){
    //updates the user privilege 
    admin_id = localStorage.getItem("admin_id_value");
    new_privilege = $('#privilege :selected').text();

    if(new_privilege == ""){
        alert("Select user privilege");
        return false;
    }

    $.ajax({
        type: "post",
        url: "../server/db_controller/render/dashboard.php",
        data: {update_user_privilege: {admin_id,new_privilege}},
        success: function(response) {
            
           if(response.success) {
           
            
            window.location.href="./Admin.html";
               
           }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            console.log(XMLHttpRequest);

           
          },
    });
}

function delete_user_confirm(admin_id){

    var result = confirm("Are you sure to delete?");
    if(result){

        delete_user(admin_id);
    }
}

function delete_user(admin_id){

    $.ajax({
        type: "post",
        url: "../server/db_controller/render/dashboard.php",
        data: {delete_user: {admin_id}},
        success: function(response) {
    
           if(response.success) {
           

            $('.A' + admin_id).addClass('hide');
            
               
           }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            console.log(XMLHttpRequest);

           
          },
    });
}

function isPrivileged(){
    // checks if the logged in account has the privilege to acces controls on the page, if not, hides all controls
    a = currentUser();
    admin_id = a.email;


    $('#avatar_a').attr('src',`https://avatars.dicebear.com/api/initials/${admin_id}.svg`);
    
    $.ajax({
        type: "post",
        url: "../server/db_controller/render/dashboard.php",
        data: {get_user_priviledge: {admin_id}},
        success: function(response) {
            
           if(response.data == 0) {
                
                $('.privilege').addClass('hide');
                $('.table_try').addClass('hide');
                return response.data;
           }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            console.log(XMLHttpRequest);

           
          },
    });
}


function searched_account(search =""){
    //receives search input and displays the search results on the page
    $.ajax({
        type: "post",
        url: "../server/db_controller/render/dashboard.php",
        data: {is_search_account: {search}},
        success: function(response) {

            response.data.forEach(admin_data => {
                $('#admin_render').append(render_admin_table(admin_data));
            });
            $('.Privilege19').addClass('hide');
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            console.log(XMLHttpRequest);

           
          },
    });
}

