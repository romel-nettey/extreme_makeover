$( document ).ready(function() {
    $.ajax({
        type: "post",
        url: "../server/db_controller/render/dashboard.php",
        data: {is_all_clients: true},
        success: function(response) {

            response.data.forEach(client_data => {
                $('#client_render').append(render_client_table(client_data));
            });

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            console.log(XMLHttpRequest);

           
          },
    });

    const currentUserData =  currentUser();
    $('#avatar_c').attr('src',`https://avatars.dicebear.com/api/initials/${currentUserData.email}.svg`);

    $("#search_field_C").keyup(function(event) {
        $("#client_render").html("");
        text = $(this).val();
        searched_clients(text);
      });
});

function render_client_table(client_data){
    const client_table = `<tr class="text-gray-700 dark:text-gray-400">
                            <td class="px-4 py-3">
                            <div>
                                <p class="font-semibold">${client_data.fname} ${client_data.lname}</p>
                            </div>
                            </td>
                            <td class="px-4 py-3 text-sm">
                                ${client_data.email} 
                            </td>
                            <td class="px-4 py-3 text-sm">
                                ${client_data.phone_no}
                            </td>
                            <td class="px-4 py-3 text-sm">
                                ${client_data.address} 
                            </td>
                        </tr>`
                        
        return client_table;
}

function searched_clients(search =""){
    $.ajax({
        type: "post",
        url: "../server/db_controller/render/dashboard.php",
        data: {is_search_clients: {search}},
        success: function(response) {

            response.data.forEach(client_data => {
                $('#client_render').append(render_client_table(client_data));
            });

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            console.log(XMLHttpRequest);

           
          },
    });
    

}