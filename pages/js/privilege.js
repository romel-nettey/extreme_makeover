function isPrivileged(){
    a = currentUser();
    admin_id = a.email;
    
    $.ajax({
        type: "post",
        url: "./server/db_controller/render/dashboard.php",
        data: {get_user_priviledge: {admin_id}},
        success: function(response) {
            
           if(response.data == 0) {
                
                $('.privilege').addClass('hide');
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


function create_account_index(){
    if(isPrivileged() == 0) location.href = `./index`;
    else location.href = `./pages/create-account.html`;
  }